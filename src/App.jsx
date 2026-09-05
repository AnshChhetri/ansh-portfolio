import React from "react";
import { Github, Linkedin, Instagram, Mail, ArrowUpRight } from "lucide-react";

const FACTS = [
  { label: "Studying", value: "B.Sc IT (AI), 2nd year — Inspiria Knowledge Campus" },
  { label: "Focus", value: "Game development" },
  { label: "Languages", value: "HTML, JavaScript, Python" },
  { label: "Also learning", value: "App development" },
  { label: "Certified", value: "Azure Cloud Computing, Microsoft" },
];

const TOOLS = [
  "Python",
  "JavaScript",
  "HTML5",
  "Azure",
  "Firebase",
  "Docker",
  "Flutter",
  "Vercel",
  "Netlify",
  "Windows Terminal",
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

function Box3D({ w, h, d, x = 0, y = 0, z = 0, rz = 0, radius = 0 }) {
  const faces = [
    { w, h, left: 0, top: 0, t: `translateZ(${d / 2}px)` },
    { w, h, left: 0, top: 0, t: `rotateY(180deg) translateZ(${d / 2}px)` },
    { w: d, h, left: (w - d) / 2, top: 0, t: `rotateY(90deg) translateZ(${w / 2}px)` },
    { w: d, h, left: (w - d) / 2, top: 0, t: `rotateY(-90deg) translateZ(${w / 2}px)` },
    { w, h: d, left: 0, top: (h - d) / 2, t: `rotateX(90deg) translateZ(${h / 2}px)` },
    { w, h: d, left: 0, top: (h - d) / 2, t: `rotateX(-90deg) translateZ(${h / 2}px)` },
  ];
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: w,
        height: h,
        transformStyle: "preserve-3d",
        transform: `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), ${z}px) rotateZ(${rz}deg)`,
      }}
    >
      {faces.map((f, i) => (
        <div
          key={i}
          className="pf-face2"
          style={{
            left: f.left,
            top: f.top,
            width: f.w,
            height: f.h,
            transform: f.t,
            borderRadius: radius,
          }}
        />
      ))}
    </div>
  );
}

function Controller3D() {
  return (
    <div className="pf-controller">
      {/* body */}
      <Box3D w={170} h={60} d={26} y={-8} radius={16} />
      {/* grips */}
      <Box3D w={50} h={85} d={22} x={-92} y={38} rz={18} radius={20} />
      <Box3D w={50} h={85} d={22} x={92} y={38} rz={-18} radius={20} />
      {/* left analog stick */}
      <Box3D w={30} h={30} d={14} x={-52} y={-18} z={20} radius="50%" />
      {/* right analog stick */}
      <Box3D w={30} h={30} d={14} x={52} y={18} z={20} radius="50%" />
      {/* d-pad */}
      <Box3D w={26} h={9} d={10} x={-52} y={18} z={18} radius={2} />
      <Box3D w={9} h={26} d={10} x={-52} y={18} z={18} radius={2} />
      {/* face buttons */}
      <Box3D w={11} h={11} d={8} x={52} y={-30} z={18} radius="50%" />
      <Box3D w={11} h={11} d={8} x={52} y={-6} z={18} radius="50%" />
      <Box3D w={11} h={11} d={8} x={40} y={-18} z={18} radius="50%" />
      <Box3D w={11} h={11} d={8} x={64} y={-18} z={18} radius="50%" />
    </div>
  );
}

export default function Portfolio() {
  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500&display=swap');

        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; }

        .pf-root {
          font-family: 'Inter', sans-serif;
          color: #0A0A0A;
          background: #FFFFFF;
        }
        .pf-heading { font-family: 'Space Grotesk', sans-serif; }

        .pf-link {
          color: #0A0A0A;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s ease;
        }
        .pf-link:hover { border-color: #0A0A0A; }

        .pf-scene {
          perspective: 900px;
          width: 280px;
          height: 280px;
        }
        .pf-controller {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: pf-spin 16s linear infinite;
        }
        .pf-face2 {
          position: absolute;
          border: 1.5px solid #0A0A0A;
          background: rgba(10,10,10,0.03);
        }

        @keyframes pf-spin {
          from { transform: rotateX(-14deg) rotateY(0deg); }
          to   { transform: rotateX(-14deg) rotateY(360deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .pf-controller { animation: none; transform: rotateX(-14deg) rotateY(28deg); }
        }

        .pf-pill {
          border: 1px solid #0A0A0A;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .pf-pill:hover { background: #0A0A0A; color: #FFFFFF; }

        .pf-contact-row {
          border-top: 1px solid #E4E4E4;
          transition: padding-left 0.15s ease;
        }
        .pf-contact-row:hover { padding-left: 12px; }
        .pf-contact-row:last-child { border-bottom: 1px solid #E4E4E4; }

        a:focus-visible, button:focus-visible {
          outline: 2px solid #0A0A0A;
          outline-offset: 3px;
        }

        @media (max-width: 760px) {
          .pf-hero { grid-template-columns: 1fr !important; }
          .pf-scene { margin-top: 40px; width: 220px !important; height: 220px !important; transform: scale(0.85); }
          .pf-hero-name { font-size: 60px !important; }
          .pf-facts { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="pf-root">
        {/* Nav */}
        <header style={styles.nav}>
          <span className="pf-heading" style={styles.navLogo}>Ansh Chhetri</span>
          <nav style={styles.navLinks}>
            <a className="pf-link" href="#about" style={styles.navLink}>About</a>
            <a className="pf-link" href="#tools" style={styles.navLink}>Tools</a>
            <a className="pf-link" href="#contact" style={styles.navLink}>Contact</a>
          </nav>
        </header>

        {/* Hero */}
        <section className="pf-hero" style={styles.hero}>
          <div>
            <h1 className="pf-heading pf-hero-name" style={styles.heroName}>
              Ansh
              <br />
              Chhetri
            </h1>
            <p style={styles.heroSub}>
              A second-year IT (AI) student in Siliguri who spends most nights
              building small games and breaking them again in Python and
              JavaScript.
            </p>
            <div style={styles.heroActions}>
              <a href="mailto:ansh.chhetri2007@gmail.com" style={styles.btnPrimary}>
                Get in touch
              </a>
              <a
                href="https://github.com/AnshChhetri"
                target="_blank"
                rel="noreferrer"
                style={styles.btnSecondary}
              >
                See my code
              </a>
            </div>
          </div>

          <div style={styles.sceneWrap}>
            <div className="pf-scene">
              <Controller3D />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" style={styles.section}>
          <h2 className="pf-heading" style={styles.sectionHeading}>About</h2>
          <div style={styles.aboutGrid}>
            <p style={styles.aboutText}>
              I'm currently studying IT with a focus on AI, but most of my
              time goes into game development — figuring out how ideas turn
              into playable things. I've picked up a foundation in cloud
              computing along the way, and I'm now teaching myself app
              development.
            </p>
            <dl className="pf-facts" style={styles.facts}>
              {FACTS.map((f) => (
                <div key={f.label} style={styles.factRow}>
                  <dt style={styles.factLabel}>{f.label}</dt>
                  <dd style={styles.factValue}>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Tools */}
        <section id="tools" style={styles.section}>
          <h2 className="pf-heading" style={styles.sectionHeading}>Tools I use</h2>
          <div style={styles.pillGrid}>
            {TOOLS.map((tool) => (
              <span key={tool} className="pf-pill" style={styles.pill}>
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={styles.section}>
          <h2 className="pf-heading" style={styles.sectionHeading}>Let's talk</h2>
          <p style={styles.contactIntro}>
            Whether it's about a game, a project, or Python and JS in
            general — my inbox is open.
          </p>
          <div style={styles.contactList}>
            {CONTACTS.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="pf-contact-row"
                style={styles.contactRow}
              >
                <span style={styles.contactLeft}>
                  <Icon size={20} strokeWidth={1.5} />
                  <span style={styles.contactLabel}>{label}</span>
                </span>
                <span style={styles.contactRight}>
                  {value}
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </span>
              </a>
            ))}
          </div>
        </section>

        <footer style={styles.footer}>
          <span>Ansh Chhetri</span>
          <span>Siliguri, India</span>
        </footer>
      </div>
    </div>
  );
}

const styles = {
  page: { background: "#FFFFFF", minHeight: "100vh" },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "28px 48px",
    maxWidth: 1100,
    margin: "0 auto",
  },
  navLogo: { fontWeight: 700, fontSize: 18, letterSpacing: "-0.01em" },
  navLinks: { display: "flex", gap: 28 },
  navLink: { fontSize: 15, color: "#0A0A0A" },

  hero: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    alignItems: "center",
    gap: 40,
    maxWidth: 1100,
    margin: "0 auto",
    padding: "60px 48px 100px",
  },
  heroName: {
    fontSize: 88,
    lineHeight: 0.98,
    fontWeight: 700,
    margin: "0 0 24px",
    letterSpacing: "-0.02em",
  },
  heroSub: {
    fontSize: 18,
    lineHeight: 1.6,
    color: "#3A3A3A",
    maxWidth: 440,
    margin: "0 0 32px",
  },
  heroActions: { display: "flex", gap: 14, flexWrap: "wrap" },
  btnPrimary: {
    background: "#0A0A0A",
    color: "#FFFFFF",
    padding: "13px 24px",
    borderRadius: 999,
    fontSize: 15,
    fontWeight: 500,
    textDecoration: "none",
  },
  btnSecondary: {
    border: "1px solid #0A0A0A",
    color: "#0A0A0A",
    padding: "12px 24px",
    borderRadius: 999,
    fontSize: 15,
    fontWeight: 500,
    textDecoration: "none",
  },
  sceneWrap: { display: "flex", justifyContent: "center" },

  section: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "70px 48px",
    borderTop: "1px solid #EDEDED",
  },
  sectionHeading: {
    fontSize: 40,
    fontWeight: 700,
    margin: "0 0 40px",
    letterSpacing: "-0.01em",
  },

  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 56,
  },
  aboutText: {
    fontSize: 19,
    lineHeight: 1.7,
    color: "#1A1A1A",
    margin: 0,
    maxWidth: 460,
  },
  facts: { margin: 0, display: "flex", flexDirection: "column", gap: 18 },
  factRow: { display: "flex", flexDirection: "column", gap: 4 },
  factLabel: { fontSize: 13, color: "#8A8A8A", margin: 0 },
  factValue: { fontSize: 16, margin: 0, fontWeight: 500 },

  pillGrid: { display: "flex", flexWrap: "wrap", gap: 12 },
  pill: {
    padding: "10px 18px",
    borderRadius: 999,
    fontSize: 14.5,
    fontWeight: 500,
    cursor: "default",
  },

  contactIntro: {
    fontSize: 18,
    color: "#3A3A3A",
    maxWidth: 480,
    margin: "-16px 0 36px",
  },
  contactList: { display: "flex", flexDirection: "column" },
  contactRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 4px",
    textDecoration: "none",
    color: "#0A0A0A",
  },
  contactLeft: { display: "flex", alignItems: "center", gap: 14 },
  contactLabel: { fontSize: 20, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" },
  contactRight: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 15,
    color: "#5A5A5A",
  },

  footer: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "32px 48px 60px",
    display: "flex",
    justifyContent: "space-between",
    fontSize: 13,
    color: "#8A8A8A",
  },
};
