/**
 * Hero illustration: a secure AI architecture drawn as an isometric stack.
 * Requests travel Web app -> API gateway -> Guardrails -> MCP servers -> Azure AI,
 * and the whole stack sits inside a compliance boundary.
 *
 * It is plain SVG, so it stays sharp at any size, adds no image weight to the page,
 * and its motion stops for visitors who prefer reduced motion (see .vx-flow in globals.css).
 */

const CX = 262;
const HW = 224; // half width of a plate
const HH = 112; // half height of a plate
const THICK = 12;
const CAGE = 40; // how far the compliance boundary sits outside the plates
const LABEL_X = 560;

type Tile = [u: number, v: number];

const layers: { y: number; name: string; sub: string; ember?: boolean; tiles: Tile[] }[] = [
  { y: 158, name: "Web app", sub: "Portals, chat and copilots", tiles: [[-0.2, -0.2], [0.14, -0.2], [-0.2, 0.14], [0.14, 0.14]] },
  { y: 268, name: "API gateway", sub: "Auth, routing, rate limits", tiles: [[-0.27, 0], [0, 0], [0.27, 0]] },
  { y: 378, name: "Guardrails", sub: "Prompt safety, PII filtering", ember: true, tiles: [[0, -0.27], [0, 0], [0, 0.27]] },
  { y: 488, name: "MCP servers", sub: "Tools and data connectors", tiles: [[-0.27, -0.27], [0.27, -0.27], [0, 0], [-0.27, 0.27], [0.27, 0.27]] },
  {
    y: 598,
    name: "Azure AI",
    sub: "Models, private data, identity",
    tiles: [[-0.27, -0.27], [0, -0.27], [0.27, -0.27], [-0.27, 0], [0, 0], [0.27, 0], [-0.27, 0.27], [0, 0.27], [0.27, 0.27]],
  },
];

const rhombus = (cx: number, y: number, hw: number, hh: number) =>
  `M${cx} ${y - hh}L${cx + hw} ${y}L${cx} ${y + hh}L${cx - hw} ${y}Z`;

/** A small square lying flat on a plate. u and v run from -0.5 to 0.5 across the plate. */
function tilePath(y: number, u: number, v: number, s = 0.1) {
  const pt = (a: number, b: number) => `${CX + (a - b) * HW} ${y + (a + b) * HH}`;
  return `M${pt(u - s, v - s)}L${pt(u + s, v - s)}L${pt(u + s, v + s)}L${pt(u - s, v + s)}Z`;
}

const FLOW_X = [-96, 0, 96];
const CAGE_TOP = 20;
const CAGE_BOTTOM = 620;

export function AiArchitecture({ className }: { className?: string }) {
  const cageHH = HH + CAGE / 2;
  return (
    <svg
      viewBox="0 -118 800 880"
      role="img"
      aria-label="Secure AI architecture in five layers: web app, API gateway, guardrails, MCP servers and Azure AI, all inside a compliance boundary covering HIPAA, GDPR and audit logs."
      className={className}
      overflow="visible"
    >
      <defs>
        <linearGradient id="vx-plate" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ac6fef" stopOpacity="0.34" />
          <stop offset="1" stopColor="#1d1929" stopOpacity="0.82" />
        </linearGradient>
        <linearGradient id="vx-plate-ember" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff8a50" stopOpacity="0.5" />
          <stop offset="1" stopColor="#2b1a1c" stopOpacity="0.85" />
        </linearGradient>
        <radialGradient id="vx-floor">
          <stop offset="0" stopColor="#ff5f1f" stopOpacity="0.45" />
          <stop offset="0.5" stopColor="#8233cf" stopOpacity="0.28" />
          <stop offset="1" stopColor="#8233cf" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx={CX} cy={640} rx="380" ry="170" fill="url(#vx-floor)" />

      {/* Compliance boundary: back edges, drawn behind the plates. */}
      <g fill="none" stroke="#ff8a50" strokeOpacity="0.45" strokeWidth="1.25" strokeDasharray="5 7">
        <path d={rhombus(CX, CAGE_BOTTOM, HW + CAGE, cageHH)} />
        <path d={`M${CX} ${CAGE_TOP - cageHH}V${CAGE_BOTTOM - cageHH}`} />
      </g>

      {/* Plates, drawn bottom to top so each one sits over the traffic rising from the one below. */}
      {[...layers].reverse().map((l, i, all) => {
        const below = all[i - 1];
        const edge = l.ember ? "#ff8a50" : "#c39cf6";
        return (
          <g key={l.name}>
            {below &&
              FLOW_X.map((dx, f) => (
                <line
                  key={dx}
                  className="vx-flow"
                  style={{ animationDelay: `${(i + f) * -0.35}s` }}
                  x1={CX + dx}
                  x2={CX + dx}
                  y1={below.y}
                  y2={l.y}
                  stroke={below.ember || l.ember ? "#ffb08a" : "#dcc6fb"}
                  strokeWidth="2.25"
                  strokeLinecap="round"
                />
              ))}
            <path d={`M${CX - HW} ${l.y}L${CX} ${l.y + HH}V${l.y + HH + THICK}L${CX - HW} ${l.y + THICK}Z`} fill={l.ember ? "#7a3417" : "#3a2356"} />
            <path d={`M${CX + HW} ${l.y}L${CX} ${l.y + HH}V${l.y + HH + THICK}L${CX + HW} ${l.y + THICK}Z`} fill={l.ember ? "#4f2412" : "#251a39"} />
            <path d={rhombus(CX, l.y, HW, HH)} fill={`url(#${l.ember ? "vx-plate-ember" : "vx-plate"})`} stroke={edge} strokeOpacity="0.8" strokeWidth="1.25" />
            {l.tiles.map(([u, v]) => (
              <path key={`${u}${v}`} d={tilePath(l.y, u, v)} fill={edge} fillOpacity="0.2" stroke={edge} strokeOpacity="0.75" strokeWidth="1" />
            ))}
          </g>
        );
      })}

      {/* Compliance boundary: top and front edges. */}
      <g fill="none" stroke="#ff8a50" strokeOpacity="0.8" strokeWidth="1.25" strokeDasharray="5 7">
        <path d={rhombus(CX, CAGE_TOP, HW + CAGE, cageHH)} />
        <path d={`M${CX - HW - CAGE} ${CAGE_TOP}V${CAGE_BOTTOM}`} />
        <path d={`M${CX + HW + CAGE} ${CAGE_TOP}V${CAGE_BOTTOM}`} />
        <path d={`M${CX} ${CAGE_TOP + cageHH}V${CAGE_BOTTOM + cageHH}`} strokeOpacity="0.4" />
      </g>

      {/* Labels */}
      <g fontFamily="var(--font-geist-sans), system-ui, sans-serif">
        <line x1={CX + HW + CAGE} x2={LABEL_X - 14} y1={CAGE_TOP} y2={CAGE_TOP} stroke="#ff8a50" strokeOpacity="0.6" />
        <text x={LABEL_X} y={CAGE_TOP - 4} fill="#ffb08a" fontWeight="600" className="vx-label-name">
          Compliance
        </text>
        <text x={LABEL_X} y={CAGE_TOP + 21} fill="#bdb8c7" className="vx-label-sub">
          HIPAA, GDPR, audit logs
        </text>
        {layers.map((l) => (
          <g key={l.name}>
            <line x1={CX + HW} x2={LABEL_X - 14} y1={l.y} y2={l.y} stroke={l.ember ? "#ff8a50" : "#c39cf6"} strokeOpacity="0.5" />
            <circle cx={CX + HW} cy={l.y} r="3.5" fill={l.ember ? "#ff8a50" : "#c39cf6"} />
            <text x={LABEL_X} y={l.y - 4} fill="#fff" fontWeight="600" className="vx-label-name">
              {l.name}
            </text>
            <text x={LABEL_X} y={l.y + 21} fill="#bdb8c7" className="vx-label-sub">
              {l.sub}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
