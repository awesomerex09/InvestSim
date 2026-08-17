const fs = require('fs');
const path = require('path');

// Path to original index.html
const htmlPath = 'C:/Users/VillainPrime/.gemini/antigravity-ide/brain/12680320-0be8-4419-a647-22ad7752daa5/scratch/Life-TW/index.html';

let html = '';
try {
  html = fs.readFileSync(htmlPath, 'utf8');
} catch (e) {
  console.error("Could not read Life-TW index.html", e);
  process.exit(1);
}

// Find const EV=[
const startIdx = html.indexOf('const EV=[');
if (startIdx === -1) {
  console.error("Could not find EV array");
  process.exit(1);
}

// Find matching closing bracket
let openBrackets = 0;
let endIdx = -1;
for (let i = startIdx + 9; i < html.length; i++) {
  if (html[i] === '[') openBrackets++;
  else if (html[i] === ']') {
    openBrackets--;
    if (openBrackets === 0) {
      endIdx = i;
      break;
    }
  }
}

if (endIdx === -1) {
  console.error("Could not find end of EV array");
  process.exit(1);
}

const evBlock = html.substring(startIdx + 9, endIdx + 1);

// We have the raw string of the array.
// To safely parse it, we will use regex to quote keys, and turn functions into strings.
// This is very difficult because of nested functions and expressions.
// Instead, let's just do some string manipulation to extract the objects roughly.

let parsedEvents = [];
// This is a naive attempt, as writing a full AST parser is too much.
// A simpler way: just define a mock environment and `eval` the array!
const mockCode = `
  const S = {};
  const inc = () => {};
  const money = () => {};
  const chance = () => {};
  const sk = () => {};
  const skXp = () => {};
  const skCap = () => {};
  const famFunds = () => {};
  const pick = () => {};
  const logLine = () => {};
  const schedule = () => {};
  const setEnding = () => {};
  const jailTerm = () => {};
  const jailForCorruption = () => {};
  const lottoHit = () => {};
  const gambleChance = () => {};
  const netWorth = () => {};
  const mile = () => {};
  const WEALTH_MILE = [];
  const AGE_MILE = [];
  const DICE_MILE = [];
  const R = Math.random;
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  // Override Function.prototype.toString to keep the source
  return ${evBlock};
`;

let rawEvents;
try {
  rawEvents = new Function(mockCode)();
} catch (e) {
  console.error("Eval failed, falling back to manual string generation", e);
}

if (!rawEvents) {
  console.log("Could not parse via eval. Generating dummy for now.");
  rawEvents = [];
}

// Now convert rawEvents to InvestSim format
const mappedEvents = rawEvents.map(re => {
  let type = "life";
  if (re.min <= 18) type = "childhood";
  
  // Try to extract text if it's a function or string
  let desc = typeof re.text === 'function' ? re.text.toString() : (re.text || '');
  if (typeof re.text === 'function') {
      desc = "這是一個動態事件，請進入遊戲體驗。"; // simplified
  }

  let effectStr = "return {};";
  if (re.eff) {
      effectStr = String(re.eff);
  }

  let choices = [];
  if (re.options && Array.isArray(re.options)) {
      choices = re.options.map(o => ({
          text: o.t,
          effectStr: o.eff ? String(o.eff) : "return {};"
      }));
  }

  return {
    id: 'e_lifetw_' + re.id,
    title: (re.id || '').toUpperCase(),
    description: desc || re.q || '',
    type: type,
    icon: "🎲",
    sentiment: "neutral",
    triggerType: (re.min === re.max) ? "fixed_age" : "age_range",
    triggerAge: re.min || 0,
    minAge: re.min || 0,
    maxAge: re.max || 100,
    probability: (re.w && typeof re.w === 'number') ? (re.w / 100) : 0.1,
    prerequisites: [],
    enabled: true,
    effectStr: effectStr,
    choices: choices
  };
});

const outCode = "// Auto-generated from Life-TW\nexport const LIFE_TW_EVENTS = " + JSON.stringify(mappedEvents, null, 2) + ";\n";

fs.writeFileSync(path.join(__dirname, '../admin/src/data/seedLifeTwFull.js'), outCode);
console.log("Extracted " + mappedEvents.length + " events!");
