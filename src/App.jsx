import { useEffect, useRef } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import "./App.css";

const FACTS = [
  { label: "Studying", value: "B.Sc IT (AI), 2nd year — Inspiria Knowledge Campus" },
  { label: "Focus", value: "Game development" },
  { label: "Languages", value: "HTML, JavaScript, Python" },
  { label: "Also learning", value: "App development" },
  { label: "Certified", value: "Azure Cloud Computing, Microsoft" },
];

const TOOLS = [
  "Python", "JavaScript", "HTML5", "Azure", "Firebase", "Docker",
  "Flutter", "Vercel", "Netlify", "Windows Terminal",
];

const PROJECTS = [
  {
    number: "01",
    title: "Homies",
    description: "A web app project — live build deployed on Vercel.",
    href: "https://homies-n450vug74-homiies.vercel.app/",
    tag: "Web app",
  },
  {
    number: "02",
    title: "Not Notification",
    description: "An Android app that rethinks how notifications are handled.",
    href: "https://github.com/AnshChhetri/Notnotification-app",
    tag: "Android app",
  },
];

const CONTACTS = [
  {
    label: "Email",
    value: "ansh.chhetri2007@gmail.com",
    href: "mailto:ansh.chhetri2007@gmail.com",
    Icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/AnshChhetri",
    href: "https://github.com/AnshChhetri",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/anshchhetri",
    href: "https://www.linkedin.com/in/anshchhetri/",
    Icon: Linkedin,
  },
  {
    label: "Instagram",
    value: "@ansh.chhetrii",
    href: "https://instagram.com/ansh.chhetrii",
    Icon: Instagram,
  },
];

function Box3D({ w, h, d, x = 0, y = 0, z = 0, rz = 0, radius = 0, tone = "" }) {
  const faces = [
    { w, h, left: 0, top: 0, transform: `translateZ(${d / 2}px)` },
    { w, h, left: 0, top: 0, transform: `rotateY(180deg) translateZ(${d / 2}px)` },
    { w: d, h, left: (w - d) / 2, top: 0, transform: `rotateY(90deg) translateZ(${w / 2}px)` },
    { w: d, h, left: (w - d) / 2, top: 0, transform: `rotateY(-90deg) translateZ(${w / 2}px)` },
    { w, h: d, left: 0, top: (h - d) / 2, transform: `rotateX(90deg) translateZ(${h / 2}px)` },
    { w, h: d, left: 0, top: (h - d) / 2, transform: `rotateX(-90deg) translateZ(${h / 2}px)` },
  ];
  return (
    <div
      className={`controller-part ${tone}`}
      style={{
        left: "50%",
        top: "50%",
        width: w,
        height: h,
        transform: `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), ${z}px) rotateZ(${rz}deg)`,
      }}
    >
      {faces.map((face, index) => (
        <span
          className="controller-face"
          key={index}
          style={{
            left: face.left,
            top: face.top,
            width: face.w,
            height: face.h,
            transform: face.transform,
            borderRadius: radius,
          }}
        />
      ))}
    </div>
  );
}

function Controller3D() {
  return (
    <div className="controller-stage" aria-label="A slowly rotating three-dimensional game controller">
      <div className="controller-shadow" />
      <div className="controller-spin">
        <div className="controller-model">
          <Box3D w={170} h={60} d={26} y={-8} radius={19} tone="controller-shell" />
          <Box3D w={50} h={84} d={22} x={-91} y={35} rz={18} radius={22} tone="controller-grip" />
          <Box3D w={50} h={84} d={22} x={91} y={35} rz={-18} radius={22} tone="controller-grip" />
          <Box3D w={29} h={29} d={14} x={-50} y={-17} z={21} radius="50%" tone="controller-stick" />
          <Box3D w={29} h={29} d={14} x={50} y={18} z={21} radius="50%" tone="controller-stick" />
          <Box3D w={26} h={9} d={10} x={-51} y={18} z={19} radius={3} tone="controller-detail" />
          <Box3D w={9} h={26} d={10} x={-51} y={18} z={19} radius={3} tone="controller-detail" />
          <Box3D w={11} h={11} d={8} x={51} y={-29} z={19} radius="50%" tone="controller-button button-coral" />
          <Box3D w={11} h={11} d={8} x={51} y={-6} z={19} radius="50%" tone="controller-button" />
          <Box3D w={11} h={11} d={8} x={39} y={-18} z={19} radius="50%" tone="controller-button button-coral" />
          <Box3D w={11} h={11} d={8} x={63} y={-18} z={19} radius="50%" tone="controller-button" />
        </div>
      </div>
      <span className="float-label label-top">PLAYER 01 <i /></span>
      <span className="float-label label-bottom">BUILD · PLAY · REPEAT</span>
    </div>
  );
}

export default function Portfolio() {
  const heroRef = useRef(null);

  useEffect(() => {
    const root = heroRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (event) => {
      const bounds = root.getBoundingClientRect();
      root.style.setProperty("--pointer-x", `${(event.clientX - bounds.left) / bounds.width}`);
      root.style.setProperty("--pointer-y", `${(event.clientY - bounds.top) / bounds.height}`);
    };
    root.addEventListener("pointermove", onMove);
    return () => root.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <main className="site-shell" ref={heroRef}>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="site-header wrap">
        <a className="wordmark" href="#top" aria-label="Ansh Chhetri, home">
          <span className="wordmark-mark">A<span>.</span></span>
          <span>Ansh Chhetri</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#tools">Tools</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="availability" href="mailto:ansh.chhetri2007@gmail.com"><span /> Open to ideas</a>
      </header>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={14} /> IT (AI) STUDENT · GAME DEVELOPER</div>
          <h1>Curious mind.<br /><span>Playable</span> ideas.</h1>
          <p className="hero-intro">
            I’m Ansh — a second-year IT (AI) student in Siliguri who spends most nights building small games and breaking them again in Python and JavaScript.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:ansh.chhetri2007@gmail.com">Let’s talk <ArrowUpRight size={17} /></a>
            <a className="button button-ghost" href="https://github.com/AnshChhetri" target="_blank" rel="noreferrer"><Github size={17} /> See my code</a>
          </div>
          <div className="hero-meta"><MapPin size={15} /> Siliguri, India <span className="meta-divider" /> Currently learning app development</div>
        </div>
        <div className="hero-art"><Controller3D /></div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        <span className="hero-index">01 / 04</span>
      </section>

      <section className="content-section wrap" id="about">
        <div className="section-kicker">A LITTLE ABOUT ME <span>01</span></div>
        <div className="about-layout">
          <h2>Learning by<br />making <em>things.</em></h2>
          <div className="about-details">
            <p className="section-lead">I’m studying IT with a focus on AI, but most of my time goes into game development — figuring out how ideas turn into playable things. I’ve picked up a foundation in cloud computing along the way, and I’m now teaching myself app development.</p>
            <dl className="facts-grid">
              {FACTS.map((fact) => <div className="fact" key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
            </dl>
          </div>
        </div>
      </section>

      <section className="content-section tools-section wrap" id="tools">
        <div className="section-kicker">MY TOOLKIT <span>02</span></div>
        <div className="tools-layout">
          <h2>Tools for<br /><em>the build.</em></h2>
          <div className="tools-content"><p className="section-lead">A growing set of tools I use to turn experiments into real things.</p><div className="tool-list">{TOOLS.map((tool, index) => <span className="tool-chip" key={tool}><i>{String(index + 1).padStart(2, "0")}</i>{tool}</span>)}</div></div>
        </div>
      </section>

      <section className="content-section projects-section wrap" id="projects">
        <div className="section-kicker">SELECTED BUILDS <span>03</span></div>
        <div className="projects-heading"><h2>Made with<br /><em>curiosity.</em></h2><p className="section-lead">A few things I’ve built. More experiments are always in progress.</p></div>
        <div className="project-list">
          {PROJECTS.map((project) => <a className="project-card" href={project.href} key={project.number} target="_blank" rel="noreferrer">
            <span className="project-number">{project.number}</span><span className="project-copy"><span className="project-tag">{project.tag}</span><strong>{project.title}</strong><span className="project-description">{project.description}</span></span><span className="project-arrow"><ArrowUpRight size={21} /></span>
          </a>)}
        </div>
        <a className="all-projects" href="https://github.com/AnshChhetri" target="_blank" rel="noreferrer"><Braces size={16} /> More experiments on GitHub <ArrowUpRight size={15} /></a>
      </section>

      <section className="content-section contact-section wrap" id="contact">
        <div className="section-kicker">SAY HELLO <span>04</span></div>
        <div className="contact-heading"><h2>Have an idea?<br /><em>Let’s make it.</em></h2><p className="section-lead">Whether it’s about a game, a project, or Python and JS in general — my inbox is open.</p></div>
        <div className="contact-list">
          {CONTACTS.map(({ label, value, href, Icon }) => <a className="contact-row" key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
            <span className="contact-label"><Icon size={19} strokeWidth={1.7} />{label}</span><span className="contact-value">{value}</span><ArrowUpRight className="contact-arrow" size={18} />
          </a>)}
        </div>
      </section>

      <footer className="site-footer wrap"><a className="wordmark footer-wordmark" href="#top"><span className="wordmark-mark">A<span>.</span></span><span>Ansh Chhetri</span></a><span>Built with curiosity in Siliguri, India.</span><span>© {new Date().getFullYear()} Ansh Chhetri</span></footer>
    </main>
  );
}
