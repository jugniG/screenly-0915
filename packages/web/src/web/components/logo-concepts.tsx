import { useState } from "react";

const concepts = [
  {
    name: "Open S",
    description: "A little opening. A little more room.",
    idea: "An open, flowing S. A mark about possibility—not restriction.",
  },
  {
    name: "Time window",
    description: "Life beyond the screen.",
    idea: "An open frame with an outward step. Your screen is a window, not your whole day.",
  },
  {
    name: "Pause",
    description: "A pause, on your terms.",
    idea: "Two soft bars with an S-shaped space between them. A deliberate moment of quiet.",
  },
  {
    name: "Unwinding",
    description: "Time, set free.",
    idea: "A loop that opens into a line. A simple gesture of stepping out of the scroll.",
  },
  {
    name: "Wordmark",
    description: "Just Screenly. Nothing extra.",
    idea: "A lowercase wordmark with a cut in the e and a lime full stop. Quiet and direct.",
  },
];
function Wordmark() {
  return (
    <span className="concept-wordmark">
      scr<span className="wordmark-e">e</span>enly<span className="wordmark-dot">.</span>
    </span>
  );
}
export function ConceptMark({ index }: { index: number }) {
  if (index === 4) return <Wordmark />;
  return (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" className="concept-symbol">
      {index === 0 && (
        <>
          <path
            d="M59 18H33C20 18 16 34 29 39L50 47C63 52 59 65 46 65H22"
            stroke="currentColor"
            strokeWidth="11"
            strokeLinecap="round"
          />
          <path d="M60 18h1" stroke="#b5d26d" strokeWidth="11" strokeLinecap="round" />
        </>
      )}
      {index === 1 && (
        <>
          <path
            d="M44 15H19v50h42V43"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M40 40 65 15M48 15h17v17"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </>
      )}
      {index === 2 && (
        <>
          <path
            d="M18 15h20v17H30v16h-8v17h-4a6 6 0 0 1-6-6V21a6 6 0 0 1 6-6Z"
            fill="currentColor"
          />
          <path d="M62 65H42V48h8V32h8V15h4a6 6 0 0 1 6 6v38a6 6 0 0 1-6 6Z" fill="currentColor" />
        </>
      )}
      {index === 3 && (
        <>
          <path
            d="M64 22C49 8 20 18 18 37c-2 17 13 28 27 22 14-5 14-23 3-27-9-4-17 4-13 11 4 8 20 3 31 18"
            stroke="currentColor"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <circle cx="66" cy="61" r="4.5" fill="#b5d26d" />
        </>
      )}
    </svg>
  );
}
export default function LogoConcepts() {
  const [selected, setSelected] = useState(0);
  const concept = concepts[selected];
  return (
    <section className="logo-lab" aria-label="Screenly logo concepts">
      <div className="logo-lab-header">
        <span>SCREENLY / IDENTITY EXPLORATIONS</span>
        <small>01—05</small>
      </div>
      <div className="logo-feature" aria-live="polite">
        <div className={`concept-lockup ${selected === 4 ? "only-wordmark" : ""}`}>
          <ConceptMark index={selected} />
          {selected !== 4 && <Wordmark />}
        </div>
        <p>{concept.description}</p>
      </div>
      <div className="logo-choices" aria-label="Choose a logo concept">
        {concepts.map((c, i) => (
          <button
            key={c.name}
            aria-pressed={selected === i}
            onClick={() => setSelected(i)}
            className={i === 4 ? "wordmark-choice" : ""}
          >
            <div className="logo-choice-art">
              <ConceptMark index={i} />
            </div>
            <span>
              <small>0{i + 1}</small>
              {c.name}
            </span>
          </button>
        ))}
      </div>
      <div className="logo-context">
        <div className={`concept-app-icon ${selected === 4 ? "wordmark-app-icon" : ""}`}>
          <ConceptMark index={selected} />
        </div>
        <div>
          <h3>
            0{selected + 1} / {concept.name}
          </h3>
          <p>{concept.idea}</p>
        </div>
      </div>
      <div className="logo-lab-footer">
        Tap a direction to inspect it. <span>Concepts only—not applied yet.</span>
      </div>
    </section>
  );
}
