import { useState, useEffect, useRef } from "react";

const data = {
  name: "Sabbir Ahmed",
  title: "Frontend Developer",
  subtitle: "BSc in Computer Science & Engineering",
  bio: "A passionate frontend developer from Dhaka, Bangladesh — crafting responsive, functional, and scalable web interfaces with modern technologies. CGPA 3.81 graduate from American International University-Bangladesh.",
  email: "sabbirahmed46486@gmail.com",
  phone: "+8801879775995",
  github: "https://github.com/Sabbir486",
  linkedin: "https://linkedin.com/in/sabbir-ahmed",
  skills: {
    "Languages": ["JavaScript", "TypeScript", "HTML", "CSS", "C", "C++", "Python"],
    "Frameworks & Tools": ["React", "Next.js", "Tailwind CSS", "Figma", "Git", "GitHub"],
    "Databases": ["MySQL", "Oracle Database"],
    "Soft Skills": ["Teamwork", "Communication", "Critical Thinking", "Time Management"],
  },
  projects: [
    {
      title: "JS & React Projects Collection",
      date: "July 2025",
      description: "A collection of frontend projects using React, JavaScript, HTML, CSS and Tailwind CSS. Features component-based architecture, dynamic state management, and reusable UI elements.",
      tech: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
      link: "https://github.com/Sabbir486/Project_JS_React",
    },
    {
      title: "Airport Management System",
      date: "May 2024",
      description: "A full airport management website with both Admin and Customer portals. Handled Figma design and complete customer-side development using MVC architecture.",
      tech: ["HTML", "CSS", "PHP", "JavaScript", "Figma", "MySQL"],
      link: "https://github.com/Sabbir486/Airport-Management-Project",
    },
    {
      title: "UI/UX Design Collection",
      date: "Oct 2024",
      description: "A portfolio of UI/UX designs created in Figma, showcasing frontend design thinking and user-centered visual prototypes.",
      tech: ["Figma"],
      link: "https://github.com/Sabbir486/Figma-Design",
    },
    {
      title: "E-Commerce Database System",
      date: "July 2022",
      description: "A robust database management system for e-commerce, featuring ER diagrams, SQL writing, and normalization up to 3NF.",
      tech: ["Oracle Database", "SQL", "DBMS", "ER-Diagram"],
      link: "https://github.com/Sabbir486/Database-Management-System",
    },
  ],
  achievements: [
    "Published in IEEE IATMSI — ML Models for Predicting Olympic Medal Outcomes (2025)",
    "SQA Workshop for Absolute Beginners — Ostad (2025)",
    "Python Basic Certificate — HackerRank (2025)",
    "Data Science Fundamentals — Ostad (2025)",
    "IT Essentials — Cisco Networking Academy (2022)",
  ],
};

const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const handler = () => setY(window.scrollY);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return y;
}

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ── Icons ──────────────────────────────────────────────────────────────────────
const IconGithub = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.006.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 8l10 6 10-6"/>
  </svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.07 2.18 2 2 0 012.06 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
  </svg>
);
const IconLink = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);
const IconLinkedin = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// ── Navbar ─────────────────────────────────────────────────────────────────────
function Navbar() {
  const scrollY = useScrollY();
  const scrolled = scrollY > 40;

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid #e8e4df" : "none",
      transition: "all 0.3s ease",
      padding: "0 clamp(1.5rem, 5vw, 4rem)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a1714", letterSpacing: "-0.02em" }}>
          SA<span style={{ color: "#c0692a" }}>.</span>
        </span>
        {/* Desktop links */}
        <div style={{ display: "flex", gap: "2.5rem" }} className="desktop-nav">
          {NAV_LINKS.map(l => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 500, color: "#4a4540", letterSpacing: "0.05em", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#c0692a"}
              onMouseLeave={e => e.target.style.color = "#4a4540"}
            >{l}</button>
          ))}
        </div>
        <button onClick={() => scrollTo("Contact")}
          style={{ background: "#1a1714", color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 500, cursor: "pointer", letterSpacing: "0.03em", transition: "background 0.2s" }}
          onMouseEnter={e => e.target.style.background = "#c0692a"}
          onMouseLeave={e => e.target.style.background = "#1a1714"}
        >Hire Me</button>
      </div>
    </nav>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="about" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "8rem clamp(1.5rem, 5vw, 4rem) 5rem",
      background: "#faf8f5",
      position: "relative", overflow: "hidden",
    }}>
      {/* Decorative bg circle */}
      <div style={{
        position: "absolute", right: "-5rem", top: "10%",
        width: "38vw", height: "38vw", maxWidth: 520, maxHeight: 520,
        borderRadius: "50%",
        background: "radial-gradient(circle, #f5e6d8 0%, #faf8f5 70%)",
        zIndex: 0,
      }} />
      <div style={{
        position: "absolute", left: "2rem", bottom: "8%",
        width: 120, height: 120, borderRadius: "50%",
        background: "radial-gradient(circle, #e8e4df 0%, transparent 70%)",
        zIndex: 0,
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "3rem", alignItems: "center" }}>
          <div>
            <div style={{
              display: "inline-block", background: "#f0e8e0", borderRadius: 20,
              padding: "0.3rem 0.9rem", marginBottom: "1.5rem",
              fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", fontWeight: 600,
              color: "#c0692a", letterSpacing: "0.1em", textTransform: "uppercase",
            }}>
              Frontend Developer · Dhaka, BD
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 700, lineHeight: 1.05,
              color: "#1a1714", margin: "0 0 1.25rem",
              letterSpacing: "-0.03em",
            }}>
              Sabbir<br />Ahmed
            </h1>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1rem, 2vw, 1.15rem)",
              color: "#6b6259", lineHeight: 1.75, maxWidth: 520, marginBottom: "2.5rem",
            }}>
              {data.bio}
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href={data.github} target="_blank" rel="noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: "#1a1714", color: "#fff", textDecoration: "none",
                  borderRadius: 8, padding: "0.75rem 1.5rem",
                  fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 600,
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "#c0692a"}
                onMouseLeave={e => e.currentTarget.style.background = "#1a1714"}
              >
                <IconGithub /> View GitHub
              </a>
              <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: "transparent", color: "#1a1714",
                  border: "2px solid #1a1714", borderRadius: 8, padding: "0.75rem 1.5rem",
                  fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 600,
                  cursor: "pointer", transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#1a1714"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1a1714"; }}
              >
                <IconMail /> Contact Me
              </button>
            </div>
          </div>

          {/* Stats card */}
          <div style={{
            background: "#fff", borderRadius: 20, padding: "2rem",
            boxShadow: "0 4px 40px rgba(26,23,20,0.08)",
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem",
            minWidth: 220,
          }}>
            {[["3.81", "CGPA"], ["4+", "Projects"], ["2025", "Grad Year"], ["1+", "Year Exp"]].map(([val, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#c0692a", lineHeight: 1 }}>{val}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#9b8f85", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ marginTop: "4rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ width: 40, height: 1, background: "#c0692a" }} />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#9b8f85", letterSpacing: "0.12em", textTransform: "uppercase" }}>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}

// ── Skills ─────────────────────────────────────────────────────────────────────
function Skills() {
  return (
    <section id="skills" style={{ padding: "6rem clamp(1.5rem, 5vw, 4rem)", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: "0.75rem" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "#c0692a", letterSpacing: "0.12em", textTransform: "uppercase" }}>What I work with</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#1a1714", margin: "0 0 3rem", letterSpacing: "-0.02em" }}>
            Skills & Expertise
          </h2>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
          {Object.entries(data.skills).map(([cat, items], i) => (
            <FadeIn key={cat} delay={i * 0.1}>
              <div style={{
                background: i === 0 ? "#1a1714" : "#faf8f5",
                borderRadius: 16, padding: "1.75rem",
                border: "1px solid #e8e4df",
                height: "100%",
              }}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: i === 0 ? "#c0692a" : "#9b8f85", marginBottom: "1rem" }}>{cat}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {items.map(skill => (
                    <span key={skill} style={{
                      background: i === 0 ? "rgba(255,255,255,0.1)" : "#fff",
                      color: i === 0 ? "#fff" : "#3a3530",
                      border: `1px solid ${i === 0 ? "rgba(255,255,255,0.15)" : "#e0dbd6"}`,
                      borderRadius: 6, padding: "0.3rem 0.7rem",
                      fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 500,
                    }}>{skill}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Projects ───────────────────────────────────────────────────────────────────
function Projects() {
  return (
    <section id="projects" style={{ padding: "6rem clamp(1.5rem, 5vw, 4rem)", background: "#faf8f5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: "0.75rem" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "#c0692a", letterSpacing: "0.12em", textTransform: "uppercase" }}>What I've built</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#1a1714", margin: "0 0 3rem", letterSpacing: "-0.02em" }}>
            Featured Projects
          </h2>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {data.projects.map((proj, i) => (
            <FadeIn key={proj.title} delay={i * 0.1}>
              <div style={{
                background: "#fff", borderRadius: 16, padding: "1.75rem",
                border: "1px solid #e8e4df", height: "100%",
                display: "flex", flexDirection: "column",
                transition: "box-shadow 0.3s, transform 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 40px rgba(192,105,42,0.15)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <div style={{ width: 40, height: 40, background: "#f0e8e0", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "1.1rem" }}>{"🖥️📊✈️🛍️"[i]}</span>
                  </div>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#9b8f85" }}>{proj.date}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a1714", margin: "0 0 0.75rem", lineHeight: 1.3 }}>{proj.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#6b6259", lineHeight: 1.7, flexGrow: 1, margin: "0 0 1.25rem" }}>{proj.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
                  {proj.tech.map(t => (
                    <span key={t} style={{ background: "#f5f0eb", color: "#7a6d63", borderRadius: 5, padding: "0.2rem 0.6rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
                <a href={proj.link} target="_blank" rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 6, color: "#c0692a", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 600 }}
                  onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"}
                  onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}
                >
                  <IconLink /> View on GitHub
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Achievements ───────────────────────────────────────────────────────────────
function Achievements() {
  return (
    <section style={{ padding: "5rem clamp(1.5rem, 5vw, 4rem)", background: "#1a1714" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#fff", margin: "0 0 2.5rem", letterSpacing: "-0.02em" }}>
            Certifications & Achievements
          </h2>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
          {data.achievements.map((a, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div style={{
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12, padding: "1.25rem 1.5rem",
                display: "flex", alignItems: "flex-start", gap: "0.75rem",
              }}>
                <span style={{ color: "#c0692a", fontSize: "1rem", marginTop: 2, flexShrink: 0 }}>◆</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#c8c0b8", lineHeight: 1.6 }}>{a}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Contact ────────────────────────────────────────────────────────────────────
function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = () => {
    if (form.name && form.email && form.message) setSent(true);
  };

  return (
    <section id="contact" style={{ padding: "6rem clamp(1.5rem, 5vw, 4rem)", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: "0.75rem" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "#c0692a", letterSpacing: "0.12em", textTransform: "uppercase" }}>Let's connect</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#1a1714", margin: "0 0 0.75rem", letterSpacing: "-0.02em" }}>
            Get In Touch
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#6b6259", fontSize: "1rem", marginBottom: "3rem", maxWidth: 480 }}>
            I'm open to frontend roles, freelance projects, and collaborations. Let's build something great together.
          </p>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
          {/* Contact Info */}
          <FadeIn>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { icon: <IconMail />, label: "Email", value: data.email, href: `mailto:${data.email}` },
                { icon: <IconPhone />, label: "Phone", value: data.phone, href: `tel:${data.phone}` },
                { icon: <IconGithub />, label: "GitHub", value: "Sabbir486", href: data.github },
                { icon: <IconLinkedin />, label: "LinkedIn", value: "Sabbir Ahmed", href: data.linkedin },
              ].map(item => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: "1rem",
                    padding: "1rem 1.25rem", borderRadius: 12,
                    background: "#faf8f5", border: "1px solid #e8e4df",
                    textDecoration: "none", color: "#1a1714",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#f0e8e0"; e.currentTarget.style.borderColor = "#c0692a"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#faf8f5"; e.currentTarget.style.borderColor = "#e8e4df"; }}
                >
                  <div style={{ color: "#c0692a" }}>{item.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#9b8f85", textTransform: "uppercase", letterSpacing: "0.08em" }}>{item.label}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 600, marginTop: 2 }}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.15}>
            {sent ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "1rem", background: "#faf8f5", borderRadius: 16, padding: "2.5rem", border: "1px solid #e8e4df" }}>
                <div style={{ fontSize: "2.5rem" }}>✅</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a1714" }}>Message Sent!</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#6b6259", textAlign: "center", fontSize: "0.9rem" }}>Thanks for reaching out. Sabbir will get back to you soon.</div>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { key: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                  { key: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "#4a4540", letterSpacing: "0.05em", display: "block", marginBottom: "0.4rem" }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} value={form[f.key]}
                      onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                      style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: 8, border: "1px solid #e0dbd6", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", outline: "none", background: "#faf8f5", color: "#1a1714", boxSizing: "border-box", transition: "border-color 0.2s" }}
                      onFocus={e => e.target.style.borderColor = "#c0692a"}
                      onBlur={e => e.target.style.borderColor = "#e0dbd6"}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "#4a4540", letterSpacing: "0.05em", display: "block", marginBottom: "0.4rem" }}>Message</label>
                  <textarea rows={4} placeholder="Your message..." value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: 8, border: "1px solid #e0dbd6", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", outline: "none", background: "#faf8f5", color: "#1a1714", resize: "vertical", boxSizing: "border-box", transition: "border-color 0.2s" }}
                    onFocus={e => e.target.style.borderColor = "#c0692a"}
                    onBlur={e => e.target.style.borderColor = "#e0dbd6"}
                  />
                </div>
                <button onClick={handleSubmit}
                  style={{ background: "#1a1714", color: "#fff", border: "none", borderRadius: 8, padding: "0.875rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 600, cursor: "pointer", transition: "background 0.2s", letterSpacing: "0.03em" }}
                  onMouseEnter={e => e.target.style.background = "#c0692a"}
                  onMouseLeave={e => e.target.style.background = "#1a1714"}
                >Send Message →</button>
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ padding: "2rem clamp(1.5rem, 5vw, 4rem)", borderTop: "1px solid #e8e4df", background: "#faf8f5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a1714" }}>SA<span style={{ color: "#c0692a" }}>.</span></span>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#9b8f85" }}>© 2025 Sabbir Ahmed · Built with React</span>
        <div style={{ display: "flex", gap: "1rem" }}>
          <a href={data.github} target="_blank" rel="noreferrer" style={{ color: "#6b6259", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "#c0692a"} onMouseLeave={e => e.currentTarget.style.color = "#6b6259"}><IconGithub /></a>
          <a href={data.linkedin} target="_blank" rel="noreferrer" style={{ color: "#6b6259", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "#c0692a"} onMouseLeave={e => e.currentTarget.style.color = "#6b6259"}><IconLinkedin /></a>
        </div>
      </div>
    </footer>
  );
}

// ── App ────────────────────────────────────────────────────────────────────────
export default function App() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <div style={{ margin: 0, padding: 0, boxSizing: "border-box" }}>
      <style>{`* { box-sizing: border-box; } body { margin: 0; }`}</style>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
