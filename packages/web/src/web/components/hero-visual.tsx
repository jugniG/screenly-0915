import { useState } from "react";
import { ArrowUpRight, BatteryFull, Check, LockKeyhole, Signal, Wifi } from "lucide-react";

export default function HeroVisual() {
  const [returned, setReturned] = useState(false);
  return (
    <div className="block-visual">
      <div className="block-device" aria-label="Concept preview of Screenly’s limit-reached screen">
        <div className="block-status">
          <span>7:24</span>
          <span>
            <Signal size={12} />
            <Wifi size={12} />
            <BatteryFull size={16} />
          </span>
        </div>
        <div className="block-brand">
          <img src="/images/screenly-logo.svg" className="block-logo-icon" width="20" height="20" alt="" />
          screenly.
        </div>
        <div className="block-screen-content" aria-live="polite">
          <div className="blocked-app">
            <span className="blocked-youtube">
              <i />
            </span>
            <span>YouTube</span>
            <span className="blocked-lock">
              <LockKeyhole size={12} />
            </span>
          </div>
          <div className="block-symbol">
            {returned ? (
              <Check size={36} strokeWidth={1.4} />
            ) : (
              <LockKeyhole size={34} strokeWidth={1.3} />
            )}
          </div>
          <span className="block-kicker">
            {returned ? "A LITTLE MORE REAL LIFE" : "DAILY LIMIT REACHED"}
          </span>
          <h2>
            {returned ? (
              <>
                Go enjoy
                <br />
                <span className="serif">your evening.</span>
              </>
            ) : (
              <>
                Your time is
                <br />
                <span className="serif">yours again.</span>
              </>
            )}
          </h2>
          <p>
            {returned
              ? "A chapter. A walk. A proper catch-up.\nThe next moment is up to you."
              : "You’ve reached the limit you chose.\nThere’s a whole evening beyond this screen."}
          </p>
          <div className="block-limit">
            <span>Today’s limit</span>
            <strong>
              60 / 60 min <Check size={11} />
            </strong>
          </div>
          <button className="block-action" onClick={() => setReturned(!returned)}>
            {returned ? "View block screen" : "Back to my evening"}
            <ArrowUpRight size={16} />
          </button>
          <span className="block-reassurance">A little boundary. More room for you.</span>
        </div>
        <div className="block-home-indicator" />
      </div>
      <div className="block-caption">
        <span />
        Your limits, looking out for your plans.
      </div>
      <small className="block-concept">Limit-reached screen · Concept preview</small>
    </div>
  );
}
