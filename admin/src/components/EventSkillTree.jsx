import React, { useRef, useState, useEffect, useCallback, useMemo } from "react";

// ─── Layout constants ─────────────────────────────────────────────────────────
const NODE_W     = 160;
const NODE_H     = 88;
const H_GAP      = 14;   // gap between nodes on same row
const V_GAP      = 14;   // gap between rows
const AGE_LABEL_W = 56;  // left column width for age labels
const ROW_STEP   = NODE_H + V_GAP;
const COL_STEP   = NODE_W + H_GAP;

// Helper: resolve the "display age" of an event (used for grouping rows)
function getEventAge(ev) {
  if (ev.triggerType === "fixed_age") return ev.triggerAge ?? 0;
  if (ev.triggerType === "age_range") return ev.minAge ?? 0;
  return -1; // "random" (no age) → group at top as row -1
}

// Build layout: group events by age → each age is one row
function computeLayout(events) {
  if (!events || events.length === 0) return { nodes: [], edges: [], totalH: 0, totalW: 0 };

  // Group by age
  const groups = new Map(); // age → [event, ...]
  events.forEach(ev => {
    const age = getEventAge(ev);
    if (!groups.has(age)) groups.set(age, []);
    groups.get(age).push(ev);
  });

  // Sort ages (put -1 = random first, then ascending)
  const sortedAges = [...groups.keys()].sort((a, b) => {
    if (a === -1) return -1;
    if (b === -1) return 1;
    return a - b;
  });

  // Assign positions
  const posMap = new Map();
  let y = 20;
  sortedAges.forEach(age => {
    const group = groups.get(age);
    group.forEach((ev, colIdx) => {
      posMap.set(ev.id, { x: AGE_LABEL_W + 10 + colIdx * COL_STEP, y });
    });
    y += ROW_STEP;
  });

  const maxCols = Math.max(...[...groups.values()].map(g => g.length));
  const totalW = AGE_LABEL_W + 10 + maxCols * COL_STEP + 20;
  const totalH = y + 20;

  const nodes = events.map(ev => ({
    ...ev,
    x: posMap.get(ev.id)?.x ?? 0,
    y: posMap.get(ev.id)?.y ?? 0,
  }));

  // Edges: prerequisite → child
  const idSet = new Set(events.map(e => e.id));
  const edges = [];
  events.forEach(ev => {
    (ev.prerequisites || []).forEach(pid => {
      if (idSet.has(pid)) edges.push({ from: pid, to: ev.id });
    });
  });

  return { nodes, edges, sortedAges, groups, posMap, totalH, totalW };
}

// ─── Node component ───────────────────────────────────────────────────────────
function SkillTreeNode({ node, selected, onClick, onToggle }) {
  const isEnabled = node.enabled !== false;
  const isFixed   = node.triggerType === "fixed_age";
  const isRandom  = node.triggerType === "random" || (!node.triggerType);

  let borderColor = isFixed ? "#3b82f6" : isRandom ? "#22d3ee" : "#8b5cf6";
  if (!isEnabled) borderColor = "#374151";

  const ageLabel = isFixed
    ? `📌 ${node.triggerAge}歲`
    : isRandom
    ? "🎲 隨機"
    : `⏱ ${node.minAge ?? 0}~${node.maxAge ?? 100}歲`;

  return (
    <foreignObject x={node.x} y={node.y} width={NODE_W} height={NODE_H} style={{ overflow: "visible" }}>
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        onClick={() => onClick(node)}
        style={{
          width: NODE_W, height: NODE_H, boxSizing: "border-box",
          border: `2px solid ${selected ? "#fbbf24" : borderColor}`,
          borderRadius: 10, background: isEnabled ? "#0f172a" : "#0a0f1e",
          cursor: "pointer", padding: "6px 8px",
          display: "flex", flexDirection: "column", gap: 3,
          opacity: isEnabled ? 1 : 0.42,
          boxShadow: selected ? `0 0 16px ${borderColor}88` : "0 2px 8px #00000088",
          transition: "box-shadow 0.15s, border-color 0.15s",
          userSelect: "none", position: "relative",
        }}
      >
        {/* Header row: icon + toggle */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 17 }}>{node.icon || "📰"}</span>
          {/* Mini toggle */}
          <label
            onClick={e => { e.stopPropagation(); onToggle(node); }}
            style={{ cursor: "pointer" }}
            title={isEnabled ? "停用" : "啟用"}
          >
            <div style={{
              width: 26, height: 14, borderRadius: 7,
              background: isEnabled ? "#16a34a" : "#374151",
              position: "relative", transition: "background 0.2s",
            }}>
              <div style={{
                position: "absolute", top: 2,
                left: isEnabled ? 13 : 2,
                width: 10, height: 10, borderRadius: "50%",
                background: "#fff", transition: "left 0.2s",
              }} />
            </div>
          </label>
        </div>

        {/* Title */}
        <div style={{
          fontWeight: 700, fontSize: 11, color: "#e2e8f0",
          lineHeight: 1.3, overflow: "hidden",
          display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
          flex: 1,
        }}>
          {node.title}
        </div>

        {/* Footer: age badge + prereq badge */}
        <div style={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
          <span style={{
            background: isFixed ? "#1e3a8a" : isRandom ? "#164e63" : "#3b0764",
            color: isFixed ? "#93c5fd" : isRandom ? "#67e8f9" : "#c4b5fd",
            borderRadius: 4, padding: "1px 5px", fontSize: 9, fontFamily: "monospace",
          }}>
            {ageLabel}
          </span>
          {(node.prerequisites?.length > 0) && (
            <span style={{
              background: "#451a03", color: "#fed7aa",
              borderRadius: 4, padding: "1px 5px", fontSize: 9,
            }}>⇐前置</span>
          )}
        </div>
      </div>
    </foreignObject>
  );
}

// ─── Edge (prerequisite arrow) ────────────────────────────────────────────────
function Edge({ from, to, posMap }) {
  const fp = posMap.get(from);
  const tp = posMap.get(to);
  if (!fp || !tp) return null;
  const x1 = fp.x + NODE_W / 2, y1 = fp.y + NODE_H;
  const x2 = tp.x + NODE_W / 2, y2 = tp.y;
  const my = (y1 + y2) / 2;
  return (
    <path
      d={`M${x1},${y1} C${x1},${my} ${x2},${my} ${x2},${y2}`}
      fill="none" stroke="#475569" strokeWidth={1.5}
      strokeDasharray="5 3" markerEnd="url(#arrow)"
    />
  );
}

// ─── Age label rows (left ruler) ─────────────────────────────────────────────
function AgeRuler({ sortedAges, groups }) {
  if (!sortedAges) return null;
  let y = 20;
  return (
    <>
      {sortedAges.map(age => {
        const label = age === -1 ? "🎲" : `${age}歲`;
        const count = groups.get(age)?.length ?? 0;
        const rowY = y;
        y += ROW_STEP;
        return (
          <g key={age}>
            <text
              x={AGE_LABEL_W - 6} y={rowY + NODE_H / 2 - 6}
              textAnchor="end" fontSize={10} fontFamily="monospace"
              fill="#64748b" fontWeight={700}
            >
              {label}
            </text>
            <text
              x={AGE_LABEL_W - 6} y={rowY + NODE_H / 2 + 8}
              textAnchor="end" fontSize={8} fontFamily="monospace"
              fill="#334155"
            >
              ×{count}
            </text>
            {/* horizontal guide line */}
            <line
              x1={AGE_LABEL_W} y1={rowY + NODE_H / 2}
              x2={AGE_LABEL_W + 6} y2={rowY + NODE_H / 2}
              stroke="#1e293b" strokeWidth={1}
            />
          </g>
        );
      })}
    </>
  );
}

// ─── Node detail side panel ───────────────────────────────────────────────────
function NodeDetailPanel({ node, onClose, onToggle, onEdit, onDelete }) {
  const isEnabled = node.enabled !== false;
  const triggerLabel =
    node.triggerType === "fixed_age" ? `📌 固定 ${node.triggerAge} 歲`
    : node.triggerType === "age_range" ? `⏱ ${node.minAge}~${node.maxAge} 歲`
    : "🎲 全局隨機";

  return (
    <div style={{
      width: 270, minWidth: 270, background: "#0f172a",
      borderLeft: "1px solid #1e293b", display: "flex", flexDirection: "column",
    }}>
      {/* Header */}
      <div style={{
        padding: "12px 14px", borderBottom: "1px solid #1e293b",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 22 }}>{node.icon}</span>
          <div>
            <div style={{ fontWeight: 700, color: "#f1f5f9", fontSize: 13 }}>{node.title}</div>
            <div style={{ color: "#475569", fontSize: 10, fontFamily: "monospace" }}>{node.id}</div>
          </div>
        </div>
        <button onClick={onClose} style={{ background: "none", border: "none", color: "#64748b", cursor: "pointer", fontSize: 16 }}>✕</button>
      </div>

      {/* Body */}
      <div style={{ padding: "12px 14px", flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 10 }}>
        {/* Toggle */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          background: "#1e293b", borderRadius: 8, padding: "10px 12px",
        }}>
          <div>
            <div style={{ color: "#e2e8f0", fontSize: 12, fontWeight: 600 }}>啟用此事件</div>
            <div style={{ color: "#64748b", fontSize: 10, marginTop: 2 }}>關閉後遊戲不觸發</div>
          </div>
          <label onClick={() => onToggle(node)} style={{ cursor: "pointer" }}>
            <div style={{
              width: 40, height: 22, borderRadius: 11,
              background: isEnabled ? "#16a34a" : "#374151",
              position: "relative", transition: "background 0.2s",
            }}>
              <div style={{
                position: "absolute", top: 3, left: isEnabled ? 20 : 3,
                width: 16, height: 16, borderRadius: "50%",
                background: "#fff", transition: "left 0.2s",
              }} />
            </div>
          </label>
        </div>

        {/* Info rows */}
        {[
          ["觸發方式", triggerLabel],
          ["觸發機率", `${((node.probability || 0) * 100).toFixed(1)}%`],
          ["類型", node.type || "-"],
          ["情緒", node.sentiment || "-"],
        ].map(([l, v]) => (
          <div key={l} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #1e293b", paddingBottom: 6 }}>
            <span style={{ color: "#64748b", fontSize: 11 }}>{l}</span>
            <span style={{ color: "#cbd5e1", fontSize: 11, fontWeight: 600 }}>{v}</span>
          </div>
        ))}

        {/* Prerequisites */}
        {node.prerequisites?.length > 0 && (
          <div style={{ background: "#1e293b", borderRadius: 8, padding: "8px 10px" }}>
            <div style={{ color: "#64748b", fontSize: 10, marginBottom: 5 }}>前置條件</div>
            {node.prerequisites.map(pid => (
              <span key={pid} style={{
                display: "inline-block", background: "#2d1b69", color: "#c4b5fd",
                borderRadius: 4, padding: "2px 6px", fontSize: 10, margin: "2px", fontFamily: "monospace",
              }}>{pid}</span>
            ))}
          </div>
        )}

        {/* Description */}
        {node.description && (
          <div style={{ background: "#1e293b", borderRadius: 8, padding: "8px 10px" }}>
            <div style={{ color: "#64748b", fontSize: 10, marginBottom: 4 }}>描述</div>
            <div style={{ color: "#94a3b8", fontSize: 11, lineHeight: 1.5 }}>{node.description}</div>
          </div>
        )}

        {/* Choices */}
        {node.choices?.some(c => c.text) && (
          <div style={{ background: "#1e293b", borderRadius: 8, padding: "8px 10px" }}>
            <div style={{ color: "#64748b", fontSize: 10, marginBottom: 6 }}>玩家選項</div>
            {node.choices.filter(c => c.text).map((c, i) => (
              <div key={i} style={{ display: "flex", gap: 6, marginBottom: 4 }}>
                <span style={{ color: "#3b82f6", fontSize: 10, minWidth: 14 }}>{i + 1}.</span>
                <span style={{ color: "#cbd5e1", fontSize: 11 }}>{c.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer actions */}
      <div style={{ padding: "10px 14px", borderTop: "1px solid #1e293b", display: "flex", gap: 8 }}>
        <button onClick={() => onEdit(node)} style={{
          flex: 1, background: "#1d4ed8", border: "none", color: "#fff",
          borderRadius: 8, padding: 8, cursor: "pointer", fontSize: 12, fontWeight: 600,
        }}>✏️ 編輯</button>
        <button onClick={() => onDelete(node)} style={{
          background: "#b91c1c", border: "none", color: "#fff",
          borderRadius: 8, padding: "8px 12px", cursor: "pointer", fontSize: 12,
        }}>🗑️</button>
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function EventSkillTree({ events, onToggle, onEdit, onDelete }) {
  const svgRef = useRef(null);
  const [transform, setTransform] = useState({ x: 20, y: 20, scale: 1 });
  const [selected, setSelected]   = useState(null);
  const [panStart, setPanStart]   = useState(null);
  const [searchQ,  setSearchQ]    = useState("");
  const [filterType, setFilterType] = useState("all");

  // ── Layout ──
  const layout = useMemo(() => computeLayout(events), [events]);
  const { nodes, edges, sortedAges, groups, posMap, totalH, totalW } = layout;

  // ── Filtered visible nodes ──
  const visibleNodes = useMemo(() => {
    let r = nodes;
    if (searchQ) {
      const q = searchQ.toLowerCase();
      r = r.filter(n => n.title?.toLowerCase().includes(q) || n.id?.toLowerCase().includes(q));
    }
    if (filterType === "fixed_age")  r = r.filter(n => n.triggerType === "fixed_age");
    if (filterType === "age_range")  r = r.filter(n => n.triggerType === "age_range" || n.triggerType === "random");
    if (filterType === "disabled")   r = r.filter(n => n.enabled === false);
    return r;
  }, [nodes, searchQ, filterType]);

  const visibleIds = useMemo(() => new Set(visibleNodes.map(n => n.id)), [visibleNodes]);

  // ── Pan & zoom handlers ──
  const handleMouseDown = useCallback(e => {
    if (e.target.closest("foreignObject")) return;
    setPanStart({ mx: e.clientX, my: e.clientY, tx: transform.x, ty: transform.y });
  }, [transform]);

  const handleMouseMove = useCallback(e => {
    if (!panStart) return;
    setTransform(t => ({ ...t, x: panStart.tx + (e.clientX - panStart.mx), y: panStart.ty + (e.clientY - panStart.my) }));
  }, [panStart]);

  const handleMouseUp = useCallback(() => setPanStart(null), []);

  const handleWheel = useCallback(e => {
    e.preventDefault();
    const d = e.deltaY > 0 ? 0.9 : 1.1;
    setTransform(t => ({ ...t, scale: Math.max(0.1, Math.min(4, t.scale * d)) }));
  }, []);

  useEffect(() => {
    const el = svgRef.current; if (!el) return;
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  const selectedNode = useMemo(() => nodes.find(n => n.id === selected), [nodes, selected]);

  const svgW = Math.max(totalW, 800);
  const svgH = Math.max(totalH, 600);

  return (
    <div style={{ display: "flex", height: "80vh", borderRadius: 12, overflow: "hidden", border: "1px solid #1e293b" }}>
      {/* Main canvas */}
      <div style={{ flex: 1, position: "relative", background: "#020617", overflow: "hidden" }}>

        {/* Top toolbar */}
        <div style={{
          position: "absolute", top: 10, left: 10, zIndex: 10,
          display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap",
        }}>
          <input
            value={searchQ} onChange={e => setSearchQ(e.target.value)}
            placeholder="🔍 搜尋事件..."
            style={{
              background: "#0f172a", border: "1px solid #334155", borderRadius: 7,
              color: "#cbd5e1", padding: "4px 10px", fontSize: 11, width: 170,
            }}
          />
          {[["all", "全部"], ["fixed_age", "📌固定"], ["age_range", "⏱區間"], ["disabled", "🚫停用"]].map(([v, l]) => (
            <button key={v} onClick={() => setFilterType(v)} style={{
              background: filterType === v ? "#1d4ed8" : "#0f172a",
              border: "1px solid #334155",
              color: filterType === v ? "#fff" : "#64748b",
              borderRadius: 6, padding: "3px 9px", fontSize: 11, cursor: "pointer",
            }}>{l}</button>
          ))}
          <span style={{ color: "#475569", fontSize: 10 }}>
            {visibleNodes.length}/{nodes.length} 個事件
          </span>
        </div>

        {/* Zoom controls */}
        <div style={{
          position: "absolute", bottom: 12, right: 12, zIndex: 10,
          display: "flex", flexDirection: "column", gap: 4,
        }}>
          {[["＋", 1.2], ["－", 0.8]].map(([label, f]) => (
            <button key={label}
              onClick={() => setTransform(t => ({ ...t, scale: Math.max(0.1, Math.min(4, t.scale * f)) }))}
              style={{
                background: "#0f172a", border: "1px solid #334155",
                color: "#cbd5e1", borderRadius: 6, width: 28, height: 28,
                cursor: "pointer", fontSize: 14,
              }}
            >{label}</button>
          ))}
          <button
            onClick={() => setTransform({ x: 20, y: 20, scale: 1 })}
            style={{
              background: "#0f172a", border: "1px solid #334155",
              color: "#cbd5e1", borderRadius: 6, width: 28, height: 28,
              cursor: "pointer", fontSize: 10,
            }}
          >⌂</button>
        </div>

        {/* Legend */}
        <div style={{
          position: "absolute", bottom: 12, left: 10, zIndex: 10,
          display: "flex", gap: 10, fontSize: 10, color: "#475569",
        }}>
          <span><span style={{ color: "#3b82f6" }}>■</span> 固定年齡</span>
          <span><span style={{ color: "#8b5cf6" }}>■</span> 區間隨機</span>
          <span><span style={{ color: "#22d3ee" }}>■</span> 全局隨機</span>
          <span><span style={{ color: "#374151" }}>■</span> 已停用</span>
          <span>拖曳平移 · 滾輪縮放</span>
        </div>

        {/* SVG Canvas */}
        <svg
          ref={svgRef}
          width="100%" height="100%"
          style={{ cursor: panStart ? "grabbing" : "grab" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <defs>
            <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#475569" />
            </marker>
            {/* Dot grid background */}
            <pattern id="dot-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.7" fill="#0d1b2a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />

          <g transform={`translate(${transform.x},${transform.y}) scale(${transform.scale})`}>
            {/* Age ruler — always drawn on top of dot grid, behind nodes */}
            <AgeRuler sortedAges={sortedAges} groups={groups} />

            {/* Prerequisite edges */}
            {edges.map((edge, i) => {
              if (!visibleIds.has(edge.from) || !visibleIds.has(edge.to)) return null;
              return <Edge key={i} from={edge.from} to={edge.to} posMap={posMap} />;
            })}

            {/* Nodes */}
            {visibleNodes.map(node => (
              <SkillTreeNode
                key={node.id} node={node}
                selected={selected === node.id}
                onClick={n => setSelected(n.id === selected ? null : n.id)}
                onToggle={onToggle}
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Side detail panel */}
      {selectedNode && (
        <NodeDetailPanel
          node={selectedNode}
          onClose={() => setSelected(null)}
          onToggle={n => { onToggle(n); }}
          onEdit={n => { onEdit(n); setSelected(null); }}
          onDelete={n => { onDelete(n); setSelected(null); }}
        />
      )}
    </div>
  );
}
