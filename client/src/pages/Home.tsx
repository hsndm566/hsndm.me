// Design: Field Manual Modernism — personal proof is arranged as a technical evidence book with warm editorial space and measured motion.
import { animate, stagger } from "animejs";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const heroImage = "/manus-storage/hasan-hero-workbench_511311f7.jpg";
const processImage = "/manus-storage/hasan-process-study_7ded074f.jpg";
const systemImage = "/manus-storage/hasan-system-detail_3c3f9e3d.jpg";
const brandMark = "/manus-storage/hasan-calibration-mark_c23523da.png";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.52, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return <a href={href} onClick={onClick}>{children}</a>;
}

function InspectionMark({ label, inverse = false }: { label: string; inverse?: boolean }) {
  return (
    <span className={`inspection-mark ${inverse ? "inspection-mark--inverse" : ""}`}>
      <img src={brandMark} alt="" aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const closeMenu = () => setMenuOpen(false);
  const playInspectionTrace = (event: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;
    animate(event.currentTarget.querySelectorAll("[data-inspection-trace]"), {
      opacity: [0.22, 1],
      scaleX: [0, 1],
      delay: stagger(78),
      duration: 680,
      ease: "outExpo",
    });
  };

  return (
    <div className="site-shell">
      <header className="nav-shell">
        <nav className="nav page-frame" aria-label="Primary navigation">
          <a href="#top" className="brand" onClick={closeMenu} aria-label="Hasan Adam home">
            <img src={brandMark} className="brand__mark" alt="" />
            <span className="brand__name">
              <strong>HASAN ADAM</strong>
              <span>Systems &amp; Automation</span>
            </span>
          </a>

          <div className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
            <NavLink href="#work" onClick={closeMenu}>Work</NavLink>
            <NavLink href="#automation-cases" onClick={closeMenu}>Cases</NavLink>
            <NavLink href="#method" onClick={closeMenu}>Method</NavLink>
            <NavLink href="#background" onClick={closeMenu}>Background</NavLink>
            <NavLink href="#contact" onClick={closeMenu}>Contact</NavLink>
            <a href="#contact" className="button button--oxide" onClick={closeMenu}>
              <span className="button-label">Bring a bottleneck</span><ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>

          <a href="#contact" className="button button--ink">
            <span className="button-label">Start a conversation</span><ArrowUpRight size={15} aria-hidden="true" />
          </a>

          <button className="menu-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero__image" src={heroImage} alt="Engineering workbench with process sheets and calibrated tools" />
          <div className="hero__grid page-frame">
            <Reveal className="hero__content">
              <div className="eyebrow">Field note / 001</div>
              <h1 id="hero-title" className="hero__title">I build <span className="accent">systems</span><br />that move work<br />forward.</h1>
              <p className="hero__intro">Industrial engineer in Jeddah, trained to find operational friction—and build practical automation around it. Clear process. Useful tools. Measurable movement.</p>
              <div className="hero__actions">
                <a className="button button--ink" href="#work"><span className="button-label">See selected work</span><ArrowDownRight size={15} aria-hidden="true" /></a>
                <a className="button button--plain" href="#method"><span className="button-label">How I work</span><ArrowRight size={15} aria-hidden="true" /></a>
              </div>
            </Reveal>

            <motion.aside
              className="hero__file-card"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
              aria-label="Portfolio operating note"
            >
              <div className="file-card__top">
                <InspectionMark label="HA / ACTIVE" inverse /><span className="status-dot" aria-hidden="true" />
              </div>
              <p className="file-card__quote">“Bring me the bottleneck. I’ll map the work around it.”</p>
              <div className="file-card__footer mono"><span>JEDDAH, SA</span><span>HA / 2026</span></div>
            </motion.aside>
          </div>
        </section>

        <section className="section" id="method" aria-labelledby="method-title">
          <div className="page-frame rail-layout">
            <aside className="rail" aria-label="Section marker">
              <div className="rail__number">01</div>
              <div className="rail__label meta-label">Approach<br />before output</div>
              <InspectionMark label="METHOD / HA" />
            </aside>
            <div>
              <Reveal>
                <div className="statement">
                  <div>
                    <div className="eyebrow eyebrow--blue">The operating principle</div>
                    <h2 className="section-heading" id="method-title">The work gets <em>clearer</em> before it gets automated.</h2>
                    <p className="statement__copy">I use the same practical lens from industrial engineering—map the current state, identify the real point of friction, and build a system that fits the people doing the work. The goal is not technology for its own sake. It is fewer hand-offs, clearer decisions, and time returned to the team.</p>
                  </div>
                  <div className="method-note">
                    <div className="meta-label"><strong>Method / 03 steps</strong></div>
                    <p>Grounded in Value Stream Mapping, DMAIC thinking, and operational experience across logistics, procurement, and production.</p>
                  </div>
                </div>
              </Reveal>

              <motion.div
                className="process-strip"
                initial={shouldReduceMotion ? false : { opacity: 0 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
              >
                <motion.div className="process-strip__line" initial={shouldReduceMotion ? false : { scaleX: 0 }} whileInView={shouldReduceMotion ? undefined : { scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1] }} />
                <div className="process-steps">
                  <article className="process-step"><div className="process-step__marker">01</div><h3>Map</h3><p>Walk through the real workflow, not the imagined one. Identify the delay, dependency, and avoidable rework.</p></article>
                  <article className="process-step"><div className="process-step__marker">02</div><h3>Design</h3><p>Turn the critical path into a practical system with clear inputs, hand-offs, and responsibility.</p></article>
                  <article className="process-step"><div className="process-step__marker">03</div><h3>Ship</h3><p>Build the useful version, test it with the work, and keep improving what proves its value.</p></article>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section section--line" id="work" aria-labelledby="work-title">
          <div className="page-frame">
            <Reveal>
              <div className="work-heading">
                <div>
                  <InspectionMark label="FILE / SELECTED WORK" />
                  <div className="eyebrow">Selected work / evidence</div>
                  <h2 className="section-heading" id="work-title">Systems worth <em>showing.</em></h2>
                </div>
                <p className="body-copy">A small, considered collection of work that connects operational insight with useful digital systems.</p>
              </div>
            </Reveal>

            <div className="projects">
              <Reveal delay={0.08}>
                <a className="project-card" href="#case-study" aria-label="Read the KAIA check-in flow case study">
                  <div className="project-card__bar"><InspectionMark label="FILE / 01" /><span className="meta-label">Senior project / KAIA</span></div>
                  <div className="project-card__image"><img src={processImage} alt="Process study materials on an engineering clipboard" /><span className="project-card__caption meta-label">Process evidence / VSM study</span></div>
                  <div className="project-card__content">
                    <h3 className="project-card__title">Check-in flow study</h3>
                    <p>Using DMAIC and Value Stream Mapping to examine delay, hand-offs, and manual verification in passenger check-in flow.</p>
                    <div className="project-card__evidence"><span><b>Method</b> DMAIC + VSM</span><span><b>Outcome</b> 15.5 min → 9.2 min</span></div>
                    <div className="project-card__action"><span className="meta-label">Open field report</span><ArrowDownRight size={18} aria-hidden="true" /></div>
                  </div>
                </a>
              </Reveal>
              <Reveal delay={0.16}>
                <a className="project-card" href="https://github.com/hsndm566" target="_blank" rel="noreferrer" aria-label="View Hasan Adam on GitHub">
                  <div className="project-card__bar"><InspectionMark label="FILE / 02" /><span className="meta-label">Systems / in progress</span></div>
                  <div className="project-card__image"><img src={systemImage} alt="Neatly arranged industrial control system detail" /><span className="project-card__caption meta-label">Build material / automation systems</span></div>
                  <div className="project-card__content">
                    <h3 className="project-card__title">Automation builds</h3>
                    <p>Workflow experiments and practical digital tools developed from real operational observations and a systems-first mindset.</p>
                    <div className="project-card__evidence"><span><b>Lens</b> Operational friction</span><span><b>Source</b> Build log / GitHub</span></div>
                    <div className="project-card__action"><span className="meta-label">Review build archive</span><ArrowUpRight size={18} aria-hidden="true" /></div>
                  </div>
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section case-study" id="case-study" aria-labelledby="case-title">
          <div className="page-frame case-grid">
            <Reveal>
              <div className="case-image">
                <img src={processImage} alt="Engineering process sheet used as a case-study illustration" />
                <div className="case-image__stamp"><span className="meta-label">Result</span><strong>−40%</strong></div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="case-content">
                <InspectionMark label="RESULT PANEL / HA" inverse />
                <div className="eyebrow eyebrow--light">Case study / 01</div>
                <h2 className="section-heading" id="case-title">Reduced the <em>process</em>, not just the number.</h2>
                <p className="body-copy">For my senior project, I applied DMAIC and Value Stream Mapping to the passenger check-in process at King AbdulAziz International Airport. The project focused on surfacing delay points, reducing unnecessary waiting, and simplifying manual verification steps.</p>
                <div className="case-metrics" aria-label="Senior project outcomes">
                  <div className="metric"><div className="metric__value">9.2 min</div><div className="metric__label">Average check-in time<br />from 15.5 min</div></div>
                  <div className="metric"><div className="metric__value">−50%</div><div className="metric__label">Passenger waiting<br />time</div></div>
                  <div className="metric"><div className="metric__value">−57%</div><div className="metric__label">Manual verification<br />time</div></div>
                </div>
                <div className="case-footnote">Senior academic project. Results describe the scoped study and proposed process-improvement outcomes, rather than an airport-wide production deployment.</div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section case-files section--line" id="automation-cases" aria-labelledby="automation-cases-title">
          <div className="page-frame">
            <Reveal>
              <div className="case-files__heading">
                <div>
                  <InspectionMark label="BUILD ARCHIVE / 02" />
                  <div className="eyebrow eyebrow--blue">Automation case files</div>
                  <h2 className="section-heading" id="automation-cases-title">Two systems, <em>made legible.</em></h2>
                </div>
                <p className="body-copy">These are personal build cases. They document the operating logic, not unverified customer outcomes.</p>
              </div>
            </Reveal>

            <div className="case-files__grid">
              <Reveal delay={0.05}>
                <article className="build-case" onMouseEnter={playInspectionTrace}>
                  <header className="build-case__header">
                    <div><InspectionMark label="CASE / 02" /><span className="meta-label">Candidate workflow system</span></div>
                    <span className="build-case__status">Personal build</span>
                  </header>
                  <div className="build-case__main">
                    <div>
                      <h3>AutoApply SA</h3>
                      <p className="build-case__lede">A structured application-support concept designed to make a scattered candidate workflow easier to see, follow, and improve.</p>
                    </div>
                    <div className="build-case__facts">
                      <div><span className="meta-label">The friction</span><p>Application steps, role fit, documents, and progress updates are often spread across disconnected tools and manual follow-ups.</p></div>
                      <div><span className="meta-label">The system response</span><p>One intake path organizes candidate context, captures the next action, and returns a traceable status view instead of an opaque queue.</p></div>
                    </div>
                  </div>
                  <div className="system-trace" aria-label="AutoApply SA operating sequence">
                    <div data-inspection-trace><b>01</b><span>Candidate context</span></div>
                    <div data-inspection-trace><b>02</b><span>Fit and document checks</span></div>
                    <div data-inspection-trace><b>03</b><span>Clear status output</span></div>
                  </div>
                  <footer className="build-case__footer"><span><b>Demonstrates</b> Intake design, state visibility, and human-readable workflow hand-offs.</span><a href="https://github.com/hsndm566/autoapply-sa" target="_blank" rel="noreferrer">View repository <ArrowUpRight size={15} aria-hidden="true" /></a></footer>
                </article>
              </Reveal>

              <Reveal delay={0.11}>
                <article className="build-case build-case--dark" onMouseEnter={playInspectionTrace}>
                  <header className="build-case__header">
                    <div><InspectionMark label="CASE / 03" inverse /><span className="meta-label">Conversational service sandbox</span></div>
                    <span className="build-case__status">Prototype logic</span>
                  </header>
                  <div className="build-case__main">
                    <div>
                      <h3>WhatsApp assistant</h3>
                      <p className="build-case__lede">A configurable conversation-sandbox concept for testing how an AI assistant can qualify routine enquiries while preserving a clear human hand-off.</p>
                    </div>
                    <div className="build-case__facts">
                      <div><span className="meta-label">The friction</span><p>Early enquiries can be repetitive, underspecified, and difficult to route consistently across service contexts.</p></div>
                      <div><span className="meta-label">The system response</span><p>Industry-specific prompts, bounded answer paths, and escalation cues give visitors a useful first response without pretending to replace judgement.</p></div>
                    </div>
                  </div>
                  <div className="system-trace" aria-label="WhatsApp assistant operating sequence">
                    <div data-inspection-trace><b>01</b><span>Classify intent</span></div>
                    <div data-inspection-trace><b>02</b><span>Apply safe prompt path</span></div>
                    <div data-inspection-trace><b>03</b><span>Escalate with context</span></div>
                  </div>
                  <footer className="build-case__footer"><span><b>Demonstrates</b> Conversation design, industry configuration, and deliberate human escalation.</span><a href="#contact">Discuss a similar system <ArrowRight size={15} aria-hidden="true" /></a></footer>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section section--line" id="background" aria-labelledby="background-title">
          <div className="page-frame rail-layout">
            <aside className="rail" aria-label="Section marker">
              <div className="rail__number">02</div>
              <div className="rail__label meta-label">Background<br />in context</div>
              <InspectionMark label="CONTEXT / HA" />
            </aside>
            <div>
              <Reveal>
                <div className="eyebrow">Where the lens comes from</div>
                <h2 className="section-heading" id="background-title">Operations taught me where work <em>sticks.</em></h2>
              </Reveal>
              <div className="timeline">
                <Reveal delay={0.04}><article className="timeline__row"><div className="timeline__date meta-label">2022 — 2025</div><div><div className="timeline__role">Logistics &amp; Operations Coordinator</div><div className="timeline__organisation">University of Business and Technology · Jeddah</div></div><p className="timeline__description">Coordinated travel, accommodation, and logistics for international athletic contingents, while directing volunteer operations for events including the Jeddah Marathon.</p></article></Reveal>
                <Reveal delay={0.08}><article className="timeline__row"><div className="timeline__date meta-label">2024</div><div><div className="timeline__role">Purchasing Assistant</div><div className="timeline__organisation">Aljabr · Dammam</div></div><p className="timeline__description">Supported procurement continuity, vendor relationships, and purchasing decisions through market research and operational follow-through.</p></article></Reveal>
                <Reveal delay={0.12}><article className="timeline__row"><div className="timeline__date meta-label">2021 — 2022</div><div><div className="timeline__role">Production Management Secretary</div><div className="timeline__organisation">Piece of Fabric Est. · Jeddah</div></div><p className="timeline__description">Built production schedules, maintained inventory discipline, and supported the day-to-day coordination that keeps a local operation moving.</p></article></Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact" aria-labelledby="contact-title">
          <div className="page-frame contact-grid">
            <Reveal>
              <InspectionMark label="OPEN FILE / HA" />
              <div className="eyebrow eyebrow--blue">Open file / start here</div>
              <h2 className="contact-title" id="contact-title">Have a manual process?<br /><em>Let’s inspect it.</em></h2>
              <p className="contact-intro">The enquiry form below goes directly to Hasan’s project intake. Describe the work as it happens today—not as you wish it worked.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="contact-form-wrap">
                <div className="contact-form-wrap__top"><InspectionMark label="SECURE INTAKE / 01" /><span className="meta-label">Tally form · Direct enquiry</span></div>
                <iframe className="contact-form" src="https://tally.so/r/D4RWJE?transparentBackground=1" title="Project enquiry form for Hasan Adam" loading="lazy" allow="clipboard-write" />
                <div className="contact-form-wrap__fallback"><span>Prefer email?</span><a href="mailto:hasanadam506@gmail.com?subject=Automation%20project%20enquiry">hasanadam506@gmail.com <Mail size={14} aria-hidden="true" /></a></div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="page-frame footer__grid">
          <div className="footer__copy mono">© 2026 Hasan Adam · Systems &amp; Automation</div>
          <div className="footer__links" aria-label="External links">
            <a href="https://github.com/hsndm566" target="_blank" rel="noreferrer" aria-label="Hasan Adam on GitHub"><Github size={18} /></a>
            <a href="https://linkedin.com/in/hsndm" target="_blank" rel="noreferrer" aria-label="Hasan Adam on LinkedIn"><Linkedin size={18} /></a>
            <a href="mailto:hasanadam506@gmail.com" aria-label="Email Hasan Adam"><Mail size={18} /></a>
            <a href="#top" aria-label="Back to top"><MapPin size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
