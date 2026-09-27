import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Award,
  Check,
  Code2,
  ExternalLink,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const RESUME_URL =
  "https://drive.google.com/file/d/1DVDdCPc2qdx033VL02ZE-tza-Z_3xQJR/view?usp=drivesdk";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const experienceBullets = [
  {
    title: "Development & admin",
    details:
      "Built custom SuiteScripts (User Event, Map/Reduce, Suitelet, RESTlet, Client Scripts) and managed core NetSuite admin (saved searches, custom fields/forms, workflows, dashboards) for finance stakeholders.",
  },
  {
    title: "O2C & P2P support",
    details:
      "Monitored system reliability and resolved issues across Order-to-Cash and Procure-to-Pay during reporting and month-end close.",
  },
  {
    title: "Integrations",
    details:
      "Built REST/SOAP/RESTlet integrations with external systems using TBA/OAuth 1.0, troubleshooting sync errors and validating via Postman.",
  },
  {
    title: "Design & data",
    details:
      "Contributed to LLD/HLD for new features and led data migrations/CSV imports with validation.",
  },
  {
    title: "Access, support & releases",
    details:
      "Managed roles/permissions, provided end-user support and training, and supported bi-annual release cycles.",
  },
];

const skillGroups = [
  { title: "NetSuite", skills: ["Oracle NetSuite", "SuiteScript 1.0", "SuiteScript 2.x"] },
  { title: "Development", skills: ["JavaScript", "SQL", "HTML5", "CSS3", "Bootstrap"] },
  {
    title: "SuiteScript",
    skills: ["User Event", "Client Script", "Suitelet", "RESTlet", "Map/Reduce"],
  },
  { title: "Integrations", skills: ["REST", "SOAP", "TBA", "OAuth 1.0", "Postman"] },
  { title: "Business processes", skills: ["O2C", "P2P", "Month-End Close", "LLD/HLD"] },
  {
    title: "Data & tools",
    skills: [
      "Data Migration",
      "CSV Imports",
      "Excel",
      "Power BI",
      "Git",
      "GitHub",
      "GitHub Copilot",
    ],
  },
];

const certifications = [
  { name: "Oracle NetSuite SuiteFoundation Certified", date: "August 2026" },
  { name: "Oracle NetSuite Certified Financial Associate", date: "November 2025" },
  { name: "Oracle NetSuite Certified BI and Reporting Associate", date: "October 2025" },
  { name: "Oracle NetSuite Certified AI Foundations Associate", date: "October 2025" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sufyan Portfolio" },
      {
        name: "description",
        content:
          "Meet Sufyan Qazi, a NetSuite Techno-Functional Analyst working across ERP administration, SuiteScript, integrations and automation.",
      },
      { property: "og:title", content: "Sufyan Portfolio" },
      {
        property: "og:description",
        content:
          "NetSuite-certified techno-functional professional in Mumbai, working across ERP administration, development and integrations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    document.documentElement.classList.add("reveal-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#home" onClick={closeMenu}>
            Sufyan Qazi<span className="wordmark-dot">.</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <Button asChild size="sm" className="nav-cta">
              <a href="#contact">
                Let&apos;s Talk <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="mobile-menu-trigger"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
                <ArrowRight aria-hidden="true" />
              </a>
            ))}
            <Button asChild className="mobile-nav-cta">
              <a href="#contact" onClick={closeMenu}>
                Let&apos;s Talk <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </nav>
        )}
      </header>

      <main>
        <section className="hero-section section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> AVAILABLE FOR GOOD WORK
            </p>
            <h1>
              Hey, I&apos;m <span>Sufyan.</span>
            </h1>
            <p className="hero-role">NetSuite Techno-Functional Analyst</p>
            <p className="hero-lede">
              I work at the intersection of business processes, NetSuite, development, integrations
              and automation.
            </p>
            <p className="hero-summary">
              NetSuite-certified techno-functional professional with 1.5+ years of hands-on ERP
              experience across administration, SuiteScript development, integrations, reporting,
              data migration and business process support.
            </p>
            <div className="hero-actions">
              <Button asChild size="lg">
                <a href="#experience">
                  View My Experience <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={RESUME_URL} target="_blank" rel="noreferrer">
                  View Resume <ExternalLink aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Let&apos;s Connect</a>
              </Button>
            </div>
            <div className="hero-meta">
              <span>
                <MapPin aria-hidden="true" /> Mumbai, Maharashtra, India
              </span>
              <span>
                <Check aria-hidden="true" /> SuiteFoundation Certified
              </span>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="visual-index">ERP / SYSTEMS</div>
            <div className="flow-canvas">
              <div className="flow-lines" />
              <span className="flow-node node-origin" />
              <span className="flow-node node-mid" />
              <span className="flow-node node-upper" />
              <span className="flow-node node-lower" />
              <div className="flow-core">
                <Code2 />
              </div>
              <span className="flow-node node-destination" />
              <span className="flow-caption caption-left">BUSINESS</span>
              <span className="flow-caption caption-right">NETSUITE</span>
              <span className="flow-caption caption-bottom">DATA · PROCESS · AUTOMATION</span>
            </div>
            <div className="visual-foot">
              <span>01 — 06</span>
              <span>BUILDING BETTER FLOWS</span>
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown aria-hidden="true" />
          </a>
        </section>

        <section className="content-section section-wrap about-section" id="about" data-reveal>
          <SectionIndex number="01" title="About me" />
          <div className="about-copy">
            <h2>
              A little about <span>me.</span>
            </h2>
            <p>
              I&apos;m a NetSuite techno-functional professional with hands-on experience across
              both functional and technical areas of Oracle NetSuite. My work involves understanding
              business requirements, configuring NetSuite, developing SuiteScript solutions, working
              with integrations, supporting business processes and helping teams improve ERP
              operations.
            </p>
            <p>
              I enjoy working between business and technology — understanding what the business
              needs and then finding the right NetSuite solution, whether that means configuration,
              automation, development or integration.
            </p>
            <div className="focus-words" aria-label="Areas of focus">
              <span>NetSuite</span>
              <span>Automation</span>
              <span>Integrations</span>
              <span>ERP</span>
              <span>SuiteScript</span>
            </div>
          </div>
        </section>

        <section
          className="content-section section-wrap experience-section"
          id="experience"
          data-reveal
        >
          <SectionIndex number="02" title="Experience" />
          <div className="section-content">
            <div className="experience-heading">
              <div>
                <p className="eyebrow">CURRENT ROLE</p>
                <h2>
                  NetSuite Techno-
                  <br className="desktop-break" />
                  Functional Analyst
                </h2>
                <p className="company-name">ConsiderPie</p>
              </div>
              <span className="date-range">May 2025 — Present</span>
            </div>
            <p className="experience-intro">
              Working across NetSuite administration, SuiteScript development, integrations,
              business processes and ERP automation.
            </p>
            <ul className="experience-bullets" aria-label="Key responsibilities and achievements">
              {experienceBullets.map((item) => (
                <li className="experience-bullet-item" key={item.title}>
                  <span className="bullet-marker" aria-hidden="true">•</span>
                  <p className="bullet-body">
                    <strong className="bullet-title">{item.title}</strong> — {item.details}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="content-section section-wrap skills-section" id="skills" data-reveal>
          <SectionIndex number="03" title="Skills" />
          <div className="section-content">
            <h2>
              Skills &amp; <span>technologies.</span>
            </h2>
            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <div className="skill-group" key={group.title}>
                  <span className="skill-group-index">0{index + 1}</span>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="content-section section-wrap education-section"
          id="education"
          data-reveal
        >
          <SectionIndex number="04" title="Education" />
          <div className="section-content education-row">
            <div>
              <p className="eyebrow">2023 — 2026</p>
              <h2>B.S. Computer Science</h2>
              <p className="education-institution">Tata Institute of Social Sciences, Mumbai</p>
            </div>
            <p className="education-score">
              <span>CGPA</span>8.0
            </p>
          </div>
        </section>

        <section
          className="content-section section-wrap certification-section"
          id="certifications"
          data-reveal
        >
          <SectionIndex number="05" title="Certifications" />
          <div className="section-content">
            <h2>
              Learning, <span>certified.</span>
            </h2>
            <div className="certification-grid">
              {certifications.map((certification) => (
                <article className="certification-card" key={certification.name}>
                  <Award aria-hidden="true" />
                  <h3>{certification.name}</h3>
                  <p>{certification.date}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact" data-reveal>
          <div className="contact-main">
            <p className="eyebrow">06 / GET IN TOUCH</p>
            <h2>
              Let&apos;s build
              <br />
              something <span>useful.</span>
            </h2>
            <p className="contact-lede">
              Have a NetSuite, ERP or automation challenge? Let&apos;s connect.
            </p>
            <div className="contact-actions">
              <Button asChild size="lg">
                <a href="mailto:qazisufyan2005@gmail.com">
                  Email Me <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={RESUME_URL} target="_blank" rel="noreferrer">
                  View Resume <ExternalLink aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://www.linkedin.com/in/sufyan23/" target="_blank" rel="noreferrer">
                  LinkedIn <ExternalLink aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
          <div className="contact-details">
            <div>
              <span>NAME</span>
              <strong>Sufyan Qazi</strong>
            </div>
            <div>
              <span>LOCATION</span>
              <strong>Mumbai, Maharashtra, India</strong>
            </div>
            <div>
              <span>EMAIL</span>
              <a href="mailto:qazisufyan2005@gmail.com">qazisufyan2005@gmail.com</a>
            </div>
            <div>
              <span>RESUME</span>
              <a href={RESUME_URL} target="_blank" rel="noreferrer">
                Sufyan Qazi CV <ExternalLink aria-hidden="true" />
              </a>
            </div>
            <div>
              <span>LINKEDIN</span>
              <a href="https://www.linkedin.com/in/sufyan23/" target="_blank" rel="noreferrer">
                sufyan23 <ExternalLink aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="footer-name" href="#home">
          Sufyan Qazi<span className="wordmark-dot">.</span>
        </a>
        <p>NetSuite Techno-Functional Analyst</p>
        <span>© 2026 Sufyan Qazi</span>
        <div>
          <a href={RESUME_URL} target="_blank" rel="noreferrer">
            Resume
          </a>
          <span>·</span>
          <a href="https://www.linkedin.com/in/sufyan23/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span>·</span>
          <a href="mailto:qazisufyan2005@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  );
}

function SectionIndex({ number, title }: { number: string; title: string }) {
  return (
    <div className="section-index">
      <span>{number}</span>
      <p>{title}</p>
    </div>
  );
}
