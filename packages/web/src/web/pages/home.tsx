import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Plus,
  Check,
  X,
  BarChart3,
  SlidersHorizontal,
  Trophy,
  Signal,
  Wifi,
  BatteryFull,
  Leaf,
  ShieldCheck,
  Github,
  ChevronDown,
  Smartphone,
  Sparkles,
  BookOpen,
  Coffee,
  Footprints,
} from "lucide-react";

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`logo ${light ? "light" : ""}`} aria-label="Screenly home">
      <span className="logo-mark">
        <i />
        <i />
        <i />
      </span>
      screenly<span className="logo-dot">.</span>
    </a>
  );
}
function AppIcon({ name }: { name: string }) {
  return (
    <span className={`app-icon ${name.toLowerCase()}`}>
      {name === "YouTube" ? <span className="play" /> : name === "Chess" ? "♞" : <X size={17} />}
    </span>
  );
}
function PhoneNav({ active }: { active: number }) {
  return (
    <div className="phone-nav">
      {[BarChart3, SlidersHorizontal, Trophy].map((Icon, i) => (
        <span key={i} className={active === i ? "selected" : ""}>
          <Icon size={15} />
          {["Screen time", "Limits", "Leaderboard"][i]}
        </span>
      ))}
    </div>
  );
}
function Phone({ type, onInvite }: { type: number; onInvite: () => void }) {
  const [day, setDay] = useState(3);
  const [limits, setLimits] = useState([60, 45, 5]);
  const [editing, setEditing] = useState(false);
  const heights = [41, 67, 56, 86, 48, 32, 23];
  return (
    <div className={`phone phone-${type}`}>
      <div className="phone-status">
        <b>7:24</b>
        <span>
          <Signal size={12} />
          <Wifi size={12} />
          <BatteryFull size={16} />
        </span>
      </div>
      <div className="phone-content">
        {type === 0 ? (
          <>
            <div className="phone-eyebrow">
              Today <span className="live-dot" />
            </div>
            <h3>{["2h 12m", "3h 04m", "2h 48m", "3h 39m", "2h 24m", "1h 36m", "1h 12m"][day]}</h3>
            <p className="phone-sub">A little less scrolling. A little more living.</p>
            <div className="chart-label">
              <span>Sep {day + 5}</span>
              <span>
                This week <ChevronDown size={10} />
              </span>
            </div>
            <div className="chart">
              {heights.map((height, i) => (
                <button
                  key={i}
                  title={`View ${["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][i]}`}
                  onClick={() => setDay(i)}
                  className={day === i ? "chosen" : ""}
                >
                  <span style={{ height: height + "%" }} />
                  <small>{["M", "T", "W", "T", "F", "S", "S"][i]}</small>
                </button>
              ))}
            </div>
            <h4>
              Most used <span>View all</span>
            </h4>
            {[
              ["YouTube", "1h 04m", "70"],
              ["X", "38m", "43"],
              ["Chess", "15m", "22"],
            ].map(([name, time, width]) => (
              <div className="usage-row" key={name}>
                <AppIcon name={name} />
                <div>
                  <div className="usage-name">
                    {name}
                    <span>{time}</span>
                  </div>
                  <div className="usage-track">
                    <i style={{ width: width + "%" }} />
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : type === 1 ? (
          <>
            <div className="phone-eyebrow">Good evening,</div>
            <h3 className="name-heading">
              Sahil<span className="tiny-sun">✺</span>
            </h3>
            <div className="limit-heading">
              <h4>Your limits</h4>
              <button onClick={() => setEditing(!editing)} aria-label="Edit demo limits">
                <Plus size={12} />
                {editing ? "Done" : "Edit limits"}
              </button>
            </div>
            {["YouTube", "Chess", "X"].map((name, i) => (
              <div className="limit-row" key={name}>
                <div className="limit-top">
                  <AppIcon name={name} />
                  <div>
                    <b>{name}</b>
                    {editing ? (
                      <label className="edit-limit">
                        <input
                          aria-label={`${name} limit in minutes`}
                          type="number"
                          min="1"
                          max="240"
                          value={limits[i]}
                          onChange={(e) =>
                            setLimits(
                              limits.map((v, j) =>
                                j === i ? Math.max(1, Math.min(240, Number(e.target.value))) : v,
                              ),
                            )
                          }
                        />
                        <span>min / {i === 2 ? "hr" : "day"}</span>
                      </label>
                    ) : (
                      <small>
                        {limits[i]}m / {i === 2 ? "hr" : "day"}
                      </small>
                    )}
                  </div>
                  <span className={`limit-pill ${i === 0 ? "reached" : ""}`}>
                    {i === 0 ? <ShieldCheck size={13} /> : <span />}
                  </span>
                </div>
                <div className={`limit-track ${i === 0 ? "full" : ""}`}>
                  <i style={{ width: i === 0 ? "100%" : i === 1 ? "33%" : "80%" }} />
                </div>
                <small className={i === 0 ? "reached-text" : ""}>
                  {i === 0 ? "Limit reached. You’ve got this." : i === 1 ? "15m used" : "4m used"}
                </small>
              </div>
            ))}
            <div className="commit-note">
              <Leaf size={14} />
              <span>Your evening is looking a little greener.</span>
            </div>
          </>
        ) : (
          <>
            <div className="phone-eyebrow">This week</div>
            <h3 className="name-heading">Family circle</h3>
            <div className="family-top">
              <span>
                <i>A</i>
                <i>M</i>
                <i>D</i>
                <i>+1</i>
              </span>
              <button onClick={onInvite}>
                <Plus size={11} /> Invite
              </button>
            </div>
            <div className="winner">
              <div className="winner-icon">
                <Trophy size={24} />
              </div>
              <b>Aarav is winning</b>
              <strong>1h 12m</strong>
              <p>
                Less screen time.
                <br />
                More bragging rights.
              </p>
            </div>
            <div className="leader-list">
              {[
                ["Aarav", "1h 12m"],
                ["You", "2h 04m"],
                ["Meera", "2h 38m"],
                ["Dad", "3h 21m"],
              ].map(([name, time], i) => (
                <div className={i === 1 ? "you" : ""} key={name}>
                  <span>{i === 0 ? <Trophy size={12} /> : i + 1}</span>
                  <i>{name[0]}</i>
                  <b>{name}</b>
                  <small>{time}</small>
                </div>
              ))}
            </div>
            <p className="pot-note">Lowest screen time takes the pot on Sunday.</p>
          </>
        )}
      </div>
      <PhoneNav active={type} />
      <div className="home-indicator" />
    </div>
  );
}
const faqs = [
  [
    "How does Screenly work?",
    "Pick the apps you want to spend less time on, set a daily or hourly limit, and choose a financial commitment. Stay within your limits and keep your money. The app previews above use sample data; try the chart and edit the limits.",
  ],
  [
    "Do I have to put money on it?",
    "You can start free. Financial commitments are the extra layer of accountability described here—not a requirement to explore the app. Choose an amount you are comfortable committing.",
  ],
  [
    "What happens if I go over my limit?",
    "The commitment model is simple: going over a chosen limit puts your committed amount at risk. Review the exact payment, grace-period, and payout rules in the app before committing any money.",
  ],
  [
    "Is Screenly open source?",
    "Screenly is described as open source. The repository link will be added here once it is provided, so you can inspect the code yourself.",
  ],
  [
    "Can I use it with my family?",
    "Family circles are designed to turn less scrolling into a shared challenge. Invite your people, compare screen time, and help each other stick to the plan.",
  ],
];
export default function Home() {
  const [modal, setModal] = useState<"download" | "source" | "invite" | null>(null);
  const [platform, setPlatform] = useState("Android");
  const [saved, setSaved] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (modal) dialog.current?.showModal();
    else dialog.current?.close();
  }, [modal]);
  const start = () => {
    setSaved(false);
    setModal("download");
  };
  return (
    <>
      <header className="site-header" id="top">
        <div className="nav-wrap">
          <Logo />
          <nav aria-label="Main navigation">
            <a href="#how-it-works">How it works</a>
            <a href="#science">The science</a>
            <button onClick={() => setModal("source")}>
              Open source <ArrowUpRight size={13} />
            </button>
          </nav>
          <button className="button nav-cta" onClick={start}>
            Get started <ArrowUpRight size={15} />
          </button>
        </div>
      </header>
      <main>
        <section className="hero section-width">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="live-dot" /> LESS SCREEN. MORE LIFE.
            </div>
            <h1>
              Your day,
              <br />
              but <span className="serif">longer.</span>
              <span className="headline-star">✳</span>
            </h1>
            <p>
              There’s a whole life outside your screen.
              <br className="desktop-break" /> Screenly helps you get back to it.
            </p>
            <div className="hero-actions">
              <button className="button" onClick={start}>
                Take back your time <ArrowUpRight size={18} />
              </button>
              <a href="#how-it-works" className="text-link">
                See how it works <ArrowRight size={16} />
              </a>
            </div>
            <div className="hero-checks">
              <span>
                <Check size={12} />
                Start free
              </span>
              <span>
                <Check size={12} />
                2-minute setup
              </span>
              <span>
                <Check size={12} />
                Open source
              </span>
            </div>
          </div>
          <div className="hero-art" aria-label="Less scrolling makes room for your life">
            <div className="orbit orbit-outer" />
            <div className="orbit orbit-inner" />
            <div className="orbit-path" />
            <span className="orbit-speck speck-1" />
            <span className="orbit-speck speck-2" />
            <div className="life-token reading">
              <BookOpen size={21} />
              <span>One more chapter.</span>
            </div>
            <div className="life-token walking">
              <Footprints size={21} />
              <span>The long way home.</span>
            </div>
            <div className="life-token coffee">
              <Coffee size={20} />
              <span>A proper catch-up.</span>
            </div>
            <div className="time-sun">
              <span className="sun-rays">✺</span>
              <div>
                <small>MAKE ROOM FOR</small>
                <strong>
                  real life<span>.</span>
                </strong>
                <p>Not another hour of scrolling.</p>
              </div>
            </div>
            <div className="art-caption">
              <span className="caption-line" />
              Your time looks better out here.
            </div>
            <Sparkles className="art-sparkle" size={26} />
          </div>
        </section>
        <section className="product-section section-width" id="product">
          <div className="section-kicker">
            <span>SMALL LIMITS. BIG DIFFERENCE.</span>
            <span className="demo-label">
              <span className="live-dot" /> INTERACTIVE APP PREVIEW
            </span>
          </div>
          <div className="product-grid">
            {[
              ["See where it goes.", "A little awareness goes a long way."],
              ["Draw your own line.", "Limits that actually mean something."],
              ["Make it a team sport.", "A little friendly competition helps."],
            ].map(([title, description], i) => (
              <article className={`product-panel panel-${i}`} key={title}>
                <div className="product-title">
                  <span className="step-tag">0{i + 1}</span>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
                <Phone type={i} onInvite={() => setModal("invite")} />
              </article>
            ))}
          </div>
          <div className="below-demos">
            <ShieldCheck size={15} />
            <span>Built for your attention. Not to take more of it.</span>
            <span className="demo-data">Sample data shown</span>
          </div>
        </section>
        <section className="problem section-width" id="why">
          <div className="eyebrow">THE PROBLEM ISN’T YOU.</div>
          <div className="problem-grid">
            <h2>
              Your phone is brilliant.
              <br />
              <span className="serif">At keeping you on it.</span>
            </h2>
            <div className="problem-copy">
              <p>
                A library, a newsroom, and everyone you know—in your pocket. Somewhere along the
                way, it became the one thing competing with your evening.
              </p>
              <p>
                Apps are built to keep you scrolling. Screenly helps you put a little intention back
                into the equation.
              </p>
              <a href="#how-it-works" className="text-link">
                Let’s change the deal <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
          <div className="story-strip">
            <span>Less “just five more minutes.”</span>
            <span className="mini-star">✳</span>
            <span>More “that was a good day.”</span>
          </div>
        </section>
        <section className="commit-section" id="how-it-works">
          <div className="section-width commit-inner">
            <div className="commit-heading">
              <div>
                <div className="eyebrow">A BETTER PLAN THAN WILLPOWER.</div>
                <h2>
                  Put your money
                  <br />
                  where your <span className="serif">time is.</span>
                </h2>
              </div>
              <p>
                Not another reminder you’ll swipe away.
                <br />A commitment to the version of you
                <br />
                that wanted to stop.
              </p>
            </div>
            <div className="steps">
              {[
                [
                  "01",
                  "Pick your leaks.",
                  "Choose the apps stealing your evenings. Set a limit that works for your life.",
                  Smartphone,
                ],
                [
                  "02",
                  "Put money on it.",
                  "Choose an amount you’d rather keep. Give your good intentions a little weight.",
                  ShieldCheck,
                ],
                [
                  "03",
                  "Keep your word.",
                  "Stay under and keep every cent. Break your limit and your commitment kicks in.",
                  Check,
                ],
              ].map(([num, title, text, Icon]) => (
                <div className="commit-step" key={String(num)}>
                  <div className="step-top">
                    <span>{String(num)}</span>
                    {typeof Icon !== "string" && <Icon size={24} />}
                  </div>
                  <h3>{String(title)}</h3>
                  <p>{String(text)}</p>
                </div>
              ))}
            </div>
            <div className="commit-bottom">
              <button className="button lime-button" onClick={start}>
                Set your first limit <ArrowUpRight size={17} />
              </button>
              <span>A small commitment. A little more control.</span>
            </div>
          </div>
        </section>
        <section className="science section-width" id="science">
          <div className="science-illustration">
            <div className="science-ring" />
            <span className="science-seed">
              <Leaf size={53} strokeWidth={1} />
            </span>
            <span className="science-note">
              Good intentions.
              <br />
              <i>Stronger roots.</i>
            </span>
          </div>
          <div className="science-copy">
            <div className="eyebrow">BEHAVIORAL SCIENCE, NOT GUILT.</div>
            <h2>
              Make your future self
              <br />
              <span className="serif">a promise that sticks.</span>
            </h2>
            <p>
              Behavioral scientists call it a <strong>commitment device</strong>: a choice you make
              today to help you follow through tomorrow. Adding a real consequence can make “I’ll
              stop soon” a little less negotiable.
            </p>
            <a
              href="https://www.annualreviews.org/doi/10.1146/annurev.economics.102308.124324"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Read the research <ArrowUpRight size={16} />
            </a>
            <small>
              Bryan, Karlan & Nelson · Commitment Devices, 2010.
              <br />
              General research, not a study of Screenly. Results vary.
            </small>
          </div>
        </section>
        <section className="faq section-width" id="faq">
          <div>
            <div className="eyebrow">GOOD QUESTIONS.</div>
            <h2>
              A little more
              <br />
              <span className="serif">clarity.</span>
            </h2>
            <p>Less guesswork. More getting on with life.</p>
          </div>
          <div className="faq-list">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <Plus size={18} />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="final-cta section-width">
          <span className="final-star">✳</span>
          <div className="eyebrow">YOUR TIME IS YOURS.</div>
          <h2>
            Go make a little
            <br />
            <span className="serif">more of your day.</span>
          </h2>
          <button className="button" onClick={start}>
            Get started with Screenly <ArrowUpRight size={17} />
          </button>
          <p>Start free. Set up in two minutes. Then put your phone down.</p>
        </section>
      </main>
      <footer className="section-width">
        <div className="footer-top">
          <Logo />
          <span>A little less screen. A little more you.</span>
          <div>
            <a href="#science">The science</a>
            <button onClick={() => setModal("source")}>
              Open source <ArrowUpRight size={13} />
            </button>
            <a href="#faq">FAQ</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Screenly</span>
          <span>Made for life outside the screen.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
      <dialog
        ref={dialog}
        onCancel={() => setModal(null)}
        className="app-dialog"
      >
        <button className="close-dialog" onClick={() => setModal(null)} aria-label="Close dialog">
          <X size={20} />
        </button>
        {modal === "download" ? (
          <>
            <span className="dialog-icon">
              <Smartphone size={28} />
            </span>
            <div className="eyebrow">A LITTLE MORE REAL LIFE.</div>
            <h2>
              Your time.
              <br />
              <span className="serif">Your next move.</span>
            </h2>
            <p>
              Screenly’s store links haven’t been connected to this page yet. Choose your device to
              save your preference on this browser.
            </p>
            <div className="device-select">
              {["Android", "iPhone"].map((p) => (
                <button
                  key={p}
                  className={platform === p ? "active" : ""}
                  onClick={() => {
                    setPlatform(p);
                    setSaved(false);
                  }}
                >
                  {p}
                  {platform === p && <Check size={16} />}
                </button>
              ))}
            </div>
            <button
              className="button"
              onClick={() => {
                localStorage.setItem("screenly-device", platform);
                setSaved(true);
              }}
            >
              {saved ? "Preference saved" : "Save my preference"}
              <Check size={17} />
            </button>
            <small>
              {saved
                ? `${platform} selected. This is not a waitlist signup.`
                : "No email collected. No payment required."}
            </small>
          </>
        ) : modal === "source" ? (
          <>
            <span className="dialog-icon">
              <Github size={28} />
            </span>
            <h2>Open by design.</h2>
            <p>
              Screenly is open source. Its repository link hasn’t been added to this landing page
              yet.
            </p>
            <p className="dialog-muted">
              Once connected, this is where you’ll be able to explore the code and contribute.
            </p>
            <button className="button" onClick={() => setModal(null)}>
              Got it <Check size={17} />
            </button>
          </>
        ) : (
          <>
            <span className="dialog-icon">
              <Trophy size={28} />
            </span>
            <h2>Better together.</h2>
            <p>
              Family circles turn less scrolling into a shared challenge. This is a sample preview;
              real invitations will be sent from the Screenly app.
            </p>
            <button className="button" onClick={start}>
              Explore Screenly <ArrowUpRight size={17} />
            </button>
          </>
        )}
      </dialog>
    </>
  );
}
