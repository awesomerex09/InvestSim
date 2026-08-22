import React, { useRef, useState, useEffect, useCallback, useMemo } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────
const NODE_W = 170;
const NODE_H = 96;

// Phase color mapping (age-based)
function phaseColor(ev) {
  const age = ev.triggerType === "fixed_age" ? ev.triggerAge : ev.minAge ?? 0;
  if (age <= 6)  return { border: "#7c3aed", bg: "#1e0938" }; // violet - infant
  if (age <= 12) return { border: "#0891b2", bg: "#021d2b" }; // cyan - child
  if (age <= 17) return { border: "#0d9488", bg: "#021d1a" }; // teal - teen
  if (age <= 25) return { border: "#16a34a", bg: "#021d0a" }; // green - young adult
  if (age <= 40) return { border: "#ca8a04", bg: "#1c1300" }; // gold - adult
  if (age <= 60) return { border: "#ea580c", bg: "#1c0900" }; // orange - middle
  return { border: "#dc2626", bg: "#1c0000" };                // red - senior
}

// ─────────────────────────────────────────────────────────────────────────────
// Layout Engine — hierarchical left-to-right based on prerequisites depth
// ─────────────────────────────────────────────────────────────────────────────
const H_STEP = NODE_W + 90;
const V_STEP = NODE_H + 40;

function computeLayout(events) {
  if (!events || events.length === 0) return { nodes: [], edges: [] };

  const idMap = new Map(events.map(e => [e.id, e]));
  const childrenOf = new Map();
  events.forEach(e => childrenOf.set(e.id, []));
  events.forEach(e => {
    (e.prerequisites || []).forEach(pid => {
      if (idMap.has(pid)) childrenOf.get(pid).push(e.id);
    });
  });

  // BFS depth
  const depthMap = new Map();
  const queue = [];
  events.forEach(e => {
    const hasValidParent = (e.prerequisites || []).some(pid => idMap.has(pid));
    if (!hasValidParent) { depthMap.set(e.id, 0); queue.push(e.id); }
  });
  let head = 0;
  while (head < queue.length) {
    const id = queue[head++];
    const d  = depthMap.get(id);
    childrenOf.get(id).forEach(cid => {
      if (!depthMap.has(cid)) { depthMap.set(cid, d + 1); queue.push(cid); }
    });
  }
  events.forEach(e => { if (!depthMap.has(e.id)) depthMap.set(e.id, 0); });

  // Group by depth
  const cols = new Map();
  events.forEach(e => {
    const d = depthMap.get(e.id);
    if (!cols.has(d)) cols.set(d, []);
    cols.get(d).push(e.id);
  });

  const posMap = new Map();
  [...cols.keys()].sort((a,b) => a-b).forEach((depth, colIdx) => {
    cols.get(depth).forEach((id, rowIdx) => {
      posMap.set(id, { x: colIdx * H_STEP, y: rowIdx * V_STEP });
    });
  });

  const nodes = events.map(e => ({ ...e, x: posMap.get(e.id)?.x ?? 0, y: posMap.get(e.id)?.y ?? 0 }));
  const edges = [];
  events.forEach(e => {
    (e.prerequisites || []).forEach(pid => {
      if (posMap.has(pid)) edges.push({ from: pid, to: e.id });
    });
  });
  return { nodes, edges };
}

// ─────────────────────────────────────────────────────────────────────────────
// SVG Cubic Bezier Edge with arrowhead
// ─────────────────────────────────────────────────────────────────────────────
function CausalEdge({ from, to, posMap, selected }) {
  const fp = posMap.get(from);
  const tp = posMap.get(to);
  if (!fp || !tp) return null;

  const x1 = fp.x + NODE_W, y1 = fp.y + NODE_H / 2;
  const x2 = tp.x,          y2 = tp.y + NODE_H / 2;
  const mx  = (x1 + x2) / 2;
  const color = selected ? "#fbbf24" : "#334155";

  return (
    <g>
      <path
        d={`M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`}
        fill="none"
        stroke={color}
        strokeWidth={selected ? 2 : 1.5}
        strokeDasharray={selected ? "none" : "5 3"}
        markerEnd={`url(#${selected ? "arrow-sel" : "arrow-std"})`}
        style={{ transition: "stroke 0.15s" }}
      />
    </g>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Node Card (foreignObject)
// ─────────────────────────────────────────────────────────────────────────────
function NodeCard({ node, selected, onClick, onToggle, childCount }) {
  const isEnabled = node.enabled !== false;
  const { border, bg } = phaseColor(node);
  const borderColor = selected ? "#fbbf24" : isEnabled ? border : "#374151";

  return (
    <foreignObject x={node.x} y={node.y} width={NODE_W} height={NODE_H} style={{ overflow: "visible" }}>
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        onClick={() => onClick(node)}
        style={{
          width: NODE_W, height: NODE_H, boxSizing: "border-box",
          border: `2px solid ${borderColor}`,
          borderRadius: 10, background: bg,
          cursor: "pointer", padding: "7px 9px",
          display: "flex", flexDirection: "column", gap: 3,
          opacity: isEnabled ? 1 : 0.4,
          boxShadow: selected ? `0 0 16px ${borderColor}66` : `0 2px 10px #00000088`,
          transition: "box-shadow 0.15s, border-color 0.15s",
          userSelect: "none", position: "relative",
        }}
      >
        {/* Row 1: icon + toggle */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 17 }}>{node.icon || "📰"}</span>
          <label onClick={e => { e.stopPropagation(); onToggle(node); }} style={{ cursor: "pointer" }} title={isEnabled ? "停用" : "啟用"}>
            <div style={{ width: 24, height: 13, borderRadius: 7, background: isEnabled ? "#16a34a" : "#374151", position: "relative", transition: "background 0.2s" }}>
              <div style={{ position: "absolute", top: 2, left: isEnabled ? 12 : 2, width: 9, height: 9, borderRadius: "50%", background: "#fff", transition: "left 0.2s" }} />
            </div>
          </label>
        </div>

        {/* Title */}
        <div style={{ fontWeight: 700, fontSize: 11.5, color: "#e2e8f0", lineHeight: 1.25, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
          {node.title}
        </div>

        {/* Row 3: age badge + type */}
        <div style={{ display: "flex", gap: 4, marginTop: "auto", flexWrap: "wrap" }}>
          {node.triggerType === "fixed_age"
            ? <span style={{ background: "#1e3a8a", color: "#93c5fd", borderRadius: 4, padding: "1px 5px", fontSize: 9, fontFamily: "monospace" }}>📌 {node.triggerAge}歲</span>
            : <span style={{ background: "#2d1b69", color: "#c4b5fd", borderRadius: 4, padding: "1px 5px", fontSize: 9, fontFamily: "monospace" }}>⏱ {node.minAge ?? 0}~{node.maxAge ?? 100}歲</span>
          }
          {(node.prerequisites?.length > 0) && (
            <span style={{ background: "#451a03", color: "#fed7aa", borderRadius: 4, padding: "1px 4px", fontSize: 9 }}>⇐前置{node.prerequisites.length}</span>
          )}
          {childCount > 0 && (
            <span style={{ background: "#064e3b", color: "#6ee7b7", borderRadius: 4, padding: "1px 4px", fontSize: 9 }}>↳{childCount}</span>
          )}
        </div>
      </div>
    </foreignObject>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Side Panel (node detail + edit)
// ─────────────────────────────────────────────────────────────────────────────
function NodeDetailPanel({ node, onClose, onToggle, onEdit, onDelete }) {
  const isEnabled = node.enabled !== false;
  const { border } = phaseColor(node);
  return (
    <div style={{ width: 280, minWidth: 280, background: "#0a0f1a", borderLeft: `3px solid ${border}`, display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ padding: "14px 16px", borderBottom: "1px solid #1e293b", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 26 }}>{node.icon}</span>
          <div>
            <div style={{ fontWeight: 700, color: "#f1f5f9", fontSize: 13, lineHeight: 1.3 }}>{node.title}</div>
            <div style={{ color: "#475569", fontSize: 9, fontFamily: "monospace", marginTop: 2 }}>{node.id}</div>
          </div>
        </div>
        <button onClick={onClose} style={{ background: "none", border: "none", color: "#475569", cursor: "pointer", fontSize: 16, lineHeight: 1, padding: 2 }}>✕</button>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "12px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
        {/* Enable Toggle */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#0d1524", borderRadius: 8, padding: "10px 12px" }}>
          <div>
            <div style={{ color: "#e2e8f0", fontSize: 12, fontWeight: 600 }}>啟用此事件</div>
            <div style={{ color: "#475569", fontSize: 10, marginTop: 1 }}>關閉後遊戲不觸發</div>
          </div>
          <label onClick={() => onToggle(node)} style={{ cursor: "pointer" }}>
            <div style={{ width: 40, height: 22, borderRadius: 11, background: isEnabled ? "#16a34a" : "#374151", position: "relative", transition: "background 0.2s" }}>
              <div style={{ position: "absolute", top: 3, left: isEnabled ? 20 : 3, width: 16, height: 16, borderRadius: "50%", background: "#fff", transition: "left 0.2s" }} />
            </div>
          </label>
        </div>

        {/* Info */}
        {[
          ["觸發", node.triggerType === "fixed_age" ? `📌 固定 ${node.triggerAge} 歲` : node.triggerType === "age_range" ? `⏱ ${node.minAge}~${node.maxAge} 歲` : "🎲 全局隨機"],
          ["機率", `${((node.probability || 0) * 100).toFixed(1)}%`],
          ["類型", node.type || "-"],
          ["情緒", node.sentiment || "-"],
        ].map(([l, v]) => (
          <div key={l} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #1e293b", paddingBottom: 6 }}>
            <span style={{ color: "#64748b", fontSize: 11 }}>{l}</span>
            <span style={{ color: "#cbd5e1", fontSize: 11, fontWeight: 600 }}>{v}</span>
          </div>
        ))}

        {node.prerequisites?.length > 0 && (
          <div style={{ background: "#0d1524", borderRadius: 8, padding: "8px 10px" }}>
            <div style={{ color: "#64748b", fontSize: 10, marginBottom: 5, fontWeight: 600 }}>前置條件（Causal Chain）</div>
            {node.prerequisites.map(pid => (
              <span key={pid} style={{ display: "inline-block", background: "#2d1b69", color: "#c4b5fd", borderRadius: 4, padding: "2px 6px", fontSize: 10, margin: "2px", fontFamily: "monospace" }}>{pid}</span>
            ))}
          </div>
        )}

        {node.description && (
          <div style={{ background: "#0d1524", borderRadius: 8, padding: "8px 10px" }}>
            <div style={{ color: "#64748b", fontSize: 10, marginBottom: 4, fontWeight: 600 }}>描述</div>
            <div style={{ color: "#94a3b8", fontSize: 11, lineHeight: 1.6 }}>{node.description}</div>
          </div>
        )}

        {node.choices?.some(c => c.text) && (
          <div style={{ background: "#0d1524", borderRadius: 8, padding: "8px 10px" }}>
            <div style={{ color: "#64748b", fontSize: 10, marginBottom: 6, fontWeight: 600 }}>玩家選項</div>
            {node.choices.filter(c => c.text).map((c, i) => (
              <div key={i} style={{ display: "flex", gap: 6, marginBottom: 5 }}>
                <span style={{ color: "#3b82f6", fontSize: 10, minWidth: 14 }}>{i + 1}.</span>
                <span style={{ color: "#cbd5e1", fontSize: 11 }}>{c.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ padding: "12px 14px", borderTop: "1px solid #1e293b", display: "flex", gap: 8 }}>
        <button onClick={() => onEdit(node)} style={{ flex: 1, background: "#1d4ed8", border: "none", color: "#fff", borderRadius: 8, padding: 9, cursor: "pointer", fontSize: 12, fontWeight: 700 }}>✏️ 編輯</button>
        <button onClick={() => onDelete(node)} style={{ background: "#b91c1c", border: "none", color: "#fff", borderRadius: 8, padding: "9px 14px", cursor: "pointer", fontSize: 12 }}>🗑️</button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Phase Legend data
// ─────────────────────────────────────────────────────────────────────────────
const PHASE_LEGEND = [
  { color: "#7c3aed", label: "幼兒(0-6)" },
  { color: "#0891b2", label: "兒童(7-12)" },
  { color: "#0d9488", label: "青少年(13-17)" },
  { color: "#16a34a", label: "青年(18-25)" },
  { color: "#ca8a04", label: "成年(26-40)" },
  { color: "#ea580c", label: "壯年(41-60)" },
  { color: "#dc2626", label: "老年(61+)" },
];

// ─────────────────────────────────────────────────────────────────────────────
// Main Export — Causal Loop Diagram
// ─────────────────────────────────────────────────────────────────────────────
export default function EventSkillTree({ events, onToggle, onEdit, onDelete }) {
  const svgRef = useRef(null);
  const [transform, setTransform] = useState({ x: 40, y: 40, scale: 0.7 });
  const [selected, setSelected]   = useState(null);
  const [panStart, setPanStart]   = useState(null);
  const [searchQ, setSearchQ]     = useState("");
  const [filterPhase, setFilterPhase] = useState("all");

  const { nodes, edges } = useMemo(() => computeLayout(events), [events]);

  const childCount = useMemo(() => {
    const map = new Map();
    events.forEach(e => (e.prerequisites || []).forEach(pid => map.set(pid, (map.get(pid) || 0) + 1)));
    return map;
  }, [events]);

  const posMap = useMemo(() => { const m = new Map(); nodes.forEach(n => m.set(n.id, { x: n.x, y: n.y })); return m; }, [nodes]);

  // Filtering
  const visibleNodes = useMemo(() => {
    let r = nodes;
    if (searchQ) {
      const q = searchQ.toLowerCase();
      r = r.filter(n => n.title?.toLowerCase().includes(q) || n.id?.toLowerCase().includes(q) || n.description?.toLowerCase().includes(q));
    }
    if (filterPhase !== "all") {
      const ranges = { infant: [0,6], child: [7,12], teen: [13,17], young: [18,25], adult: [26,40], middle: [41,60], senior: [61,200] };
      const [lo, hi] = ranges[filterPhase] || [0, 200];
      r = r.filter(n => {
        const age = n.triggerType === "fixed_age" ? n.triggerAge : n.minAge ?? 0;
        return age >= lo && age <= hi;
      });
    }
    return r;
  }, [nodes, searchQ, filterPhase]);

  const visibleIds = useMemo(() => new Set(visibleNodes.map(n => n.id)), [visibleNodes]);

  // Pan
  const handleMouseDown = useCallback(e => {
    if (e.target.closest("foreignObject")) return;
    setPanStart({ mx: e.clientX, my: e.clientY, tx: transform.x, ty: transform.y });
  }, [transform]);
  const handleMouseMove = useCallback(e => {
    if (!panStart) return;
    setTransform(t => ({ ...t, x: panStart.tx + (e.clientX - panStart.mx), y: panStart.ty + (e.clientY - panStart.my) }));
  }, [panStart]);
  const handleMouseUp = useCallback(() => setPanStart(null), []);

  // Wheel zoom
  const handleWheel = useCallback(e => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setTransform(t => ({ ...t, scale: Math.max(0.1, Math.min(3, t.scale * delta)) }));
  }, []);
  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  const selectedNode = useMemo(() => nodes.find(n => n.id === selected), [nodes, selected]);

  // Stats
  const enabledCount   = events.filter(e => e.enabled !== false).length;
  const withPrereqCount = events.filter(e => e.prerequisites?.length > 0).length;

  return (
    <div style={{ display: "flex", height: "80vh", borderRadius: 12, overflow: "hidden", border: "1px solid #1e293b" }}>
      {/* Canvas */}
      <div style={{ flex: 1, position: "relative", background: "#020617", overflow: "hidden" }}>

        {/* Toolbar */}
        <div style={{ position: "absolute", top: 10, left: 10, zIndex: 10, display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap", maxWidth: "70%" }}>
          <input
            value={searchQ} onChange={e => setSearchQ(e.target.value)}
            placeholder="🔍 搜尋事件 ID / 名稱 / 描述..."
            style={{ background: "#0f172a", border: "1px solid #334155", borderRadius: 7, color: "#cbd5e1", padding: "5px 11px", fontSize: 11, width: 200 }}
          />
          <select
            value={filterPhase} onChange={e => setFilterPhase(e.target.value)}
            style={{ background: "#0f172a", border: "1px solid #334155", borderRadius: 7, color: "#cbd5e1", padding: "5px 8px", fontSize: 11 }}
          >
            <option value="all">全部年齡段</option>
            <option value="infant">幼兒 (0-6)</option>
            <option value="child">兒童 (7-12)</option>
            <option value="teen">青少年 (13-17)</option>
            <option value="young">青年 (18-25)</option>
            <option value="adult">成年 (26-40)</option>
            <option value="middle">壯年 (41-60)</option>
            <option value="senior">老年 (61+)</option>
          </select>
          <span style={{ color: "#475569", fontSize: 10, whiteSpace: "nowrap" }}>
            {visibleNodes.length}/{nodes.length} 顯示 · {enabledCount} 啟用 · {withPrereqCount} 有前置
          </span>
        </div>

        {/* Zoom controls */}
        <div style={{ position: "absolute", top: 10, right: 10, zIndex: 10, display: "flex", flexDirection: "column", gap: 4 }}>
          {[["＋", 1.25], ["－", 0.8]].map(([label, f]) => (
            <button key={label}
              onClick={() => setTransform(t => ({ ...t, scale: Math.max(0.1, Math.min(3, t.scale * f)) }))}
              style={{ background: "#0f172a", border: "1px solid #334155", color: "#cbd5e1", borderRadius: 7, width: 30, height: 30, cursor: "pointer", fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {label}
            </button>
          ))}
          <button
            onClick={() => setTransform({ x: 40, y: 40, scale: 0.7 })}
            style={{ background: "#0f172a", border: "1px solid #334155", color: "#94a3b8", borderRadius: 7, width: 30, height: 30, cursor: "pointer", fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center" }}
            title="Reset view">⌂</button>
        </div>

        {/* Phase Legend */}
        <div style={{ position: "absolute", bottom: 10, left: 10, zIndex: 10, display: "flex", flexWrap: "wrap", gap: 8 }}>
          {PHASE_LEGEND.map(({ color, label }) => (
            <span key={label} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10, color: "#64748b" }}>
              <span style={{ width: 10, height: 10, borderRadius: 2, background: color, display: "inline-block" }} />
              {label}
            </span>
          ))}
        </div>

        {/* Help text */}
        <div style={{ position: "absolute", bottom: 10, right: 12, zIndex: 10, fontSize: 10, color: "#334155" }}>
          拖曳平移 · 滾輪縮放 · 點擊節點查看詳情
        </div>

        <svg
          ref={svgRef} width="100%" height="100%"
          style={{ cursor: panStart ? "grabbing" : "grab" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <defs>
            {/* Standard arrow */}
            <marker id="arrow-std" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L0,8 L8,4 z" fill="#334155" />
            </marker>
            {/* Selected arrow */}
            <marker id="arrow-sel" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L0,8 L8,4 z" fill="#fbbf24" />
            </marker>
            {/* Dot grid background */}
            <pattern id="dot-grid" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.9" fill="#0d1b2a" />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#dot-grid)" />

          <g transform={`translate(${transform.x},${transform.y}) scale(${transform.scale})`}>
            {/* Edges (drawn first so nodes appear on top) */}
            {edges.map((edge, i) => {
              if (!visibleIds.has(edge.from) || !visibleIds.has(edge.to)) return null;
              const isRelatedToSelected = selected === edge.from || selected === edge.to;
              return (
                <CausalEdge key={i} from={edge.from} to={edge.to} posMap={posMap} selected={isRelatedToSelected} />
              );
            })}
            {/* Nodes */}
            {visibleNodes.map(node => (
              <NodeCard
                key={node.id}
                node={node}
                selected={selected === node.id}
                childCount={childCount.get(node.id) || 0}
                onClick={n => setSelected(n.id === selected ? null : n.id)}
                onToggle={onToggle}
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Detail panel */}
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
