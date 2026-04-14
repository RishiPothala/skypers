import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "High-performance, pixel-perfect websites built to convert visitors into customers.",
    tags: ["React", "Next.js", "Webflow"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <rect x="2" y="3" width="20" height="16" rx="2.5"/>
        <path d="M2 8h20M8 3v5M16 3v5"/>
      </svg>
    ),
    color: "#1A4FFF",
    bg: "from-blue-50/80 to-indigo-50/60",
  },
  {
    num: "02",
    title: "App Development",
    desc: "Scalable mobile applications with intuitive UX and robust architecture.",
    tags: ["Android", "Flutter", "Firebase"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <rect x="6" y="1" width="12" height="22" rx="3"/>
        <path d="M10 18h4"/>
      </svg>
    ),
    color: "#7C3AED",
    bg: "from-violet-50/80 to-purple-50/60",
  },
  {
    num: "03",
    title: "Digital Marketing",
    desc: "Data-driven strategies that grow your brand and drive measurable ROI.",
    tags: ["SEO", "Paid Ads", "Social"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M3 17l5-6 4 4 6-9"/>
        <circle cx="3" cy="17" r="1.5" fill="currentColor" stroke="none"/>
        <circle cx="21" cy="6" r="1.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
    color: "#059669",
    bg: "from-emerald-50/80 to-teal-50/60",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "3x", label: "Average ROI" },
  { value: "24h", label: "Response Time" },
];

const process = [
  { step: "01", title: "Discover", desc: "We understand your business, goals, and audience deeply before touching a pixel." },
  { step: "02", title: "Strategize", desc: "Craft a clear roadmap with milestones, timelines, and measurable deliverables." },
  { step: "03", title: "Build", desc: "Design and develop with precision — clean code and beautiful interfaces." },
  { step: "04", title: "Launch", desc: "Deploy, test, and optimize. Your growth journey begins here." },
];

const marqueeItems = [
  "Web Development", "UI/UX Design", "App Development", "SEO Strategy",
  "Digital Marketing", "Brand Identity", "Performance", "E-Commerce",
];

const whyItems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A4FFF" strokeWidth="1.5" strokeLinecap="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: "Fast Execution",
    desc: "We move quickly without compromising quality. Your product ships on time, every time."
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A4FFF" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
      </svg>
    ),
    title: "Growth-First Thinking",
    desc: "Every decision is tied to your business goals. We build to convert, not just to look good."
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A4FFF" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "Clean Craft",
    desc: "Pixel-perfect interfaces with clean, maintainable code underneath. No shortcuts."
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const shape1Y = useTransform(scrollY, [0, 800], [0, -100]);
  const shape2Y = useTransform(scrollY, [0, 800], [0, 70]);
  const shape3Y = useTransform(scrollY, [0, 800], [0, -50]);

  return (
    <div className="w-full overflow-hidden">

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "var(--paper)" }}
      >
        {/* Mesh gradient bg */}
        <div className="absolute inset-0 mesh-bg" />

        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.026) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.026) 1px, transparent 1px)`,
          backgroundSize: "72px 72px"
        }} />

        {/* Floating orbs — parallax */}
        <motion.div style={{ y: shape1Y }}
          className="absolute top-[12%] left-[6%] w-72 h-72 rounded-full border border-blue-200/50 float-slow opacity-50"
        />
        <motion.div style={{ y: shape1Y }}
          className="absolute top-[12%] left-[6%] w-44 h-44 rounded-full bg-gradient-to-br from-blue-100/40 to-transparent float-slow opacity-40 translate-x-14 translate-y-14"
        />
        <motion.div style={{ y: shape2Y }}
          className="absolute top-[18%] right-[8%] w-32 h-32 border border-blue-300/35 rotate-[30deg] float-fast opacity-35"
          style={{ borderRadius: "30%" }}
        />
        <motion.div style={{ y: shape3Y }}
          className="absolute bottom-[18%] left-[12%] w-18 h-18 bg-gradient-to-br from-blue-200/50 to-indigo-200/30 rounded-2xl rotate-[15deg] opacity-60 float-fast"
        />
        <div className="absolute bottom-[12%] right-[10%] w-56 h-56 rounded-full bg-gradient-to-br from-blue-50/80 to-indigo-100/50 float-slow opacity-70 pulse-glow" />

        {/* Large center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-400/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center"
        >

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.09, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold leading-[0.93] tracking-[-0.025em] text-[#080810] mb-8"
            style={{ fontSize: 'clamp(2.6rem, 9vw, 7.5rem)' }}
          >
            We Build Digital
            <br />
            <em className="text-gradient not-italic">Products</em>{" "}
            <span className="font-display font-light italic text-[#9CA3AF]">That</span>
            <br />
            <span className="font-display font-light italic text-[#6B7280]">Perform.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
            className="text-[#6B7280] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-11 px-4 sm:px-0"
          >
            From concept to launch — we design, build, and grow digital systems
            that help ambitious businesses scale faster.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
          >
            <Link to="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-base px-9 py-4 w-full sm:w-auto"
              >
                Start a Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8H15M9 2L15 8L9 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </Link>
            <Link to="/services" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline text-base px-9 py-4 w-full sm:w-auto"
              >
                Explore Services
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62 }}
            className="flex flex-wrap items-center justify-center gap-10 mt-16 pt-10 border-t border-black/[0.06]"
          >
            {stats.map((s, i) => (
              <div key={i} className="text-center group">
                <div className="font-display text-3xl font-bold text-[#080810] group-hover:text-[#1A4FFF] transition-colors duration-300">{s.value}</div>
                <div className="text-xs text-[#9CA3AF] mt-1 tracking-wider" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#9CA3AF]" style={{ fontFamily: 'Syne, sans-serif' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-gradient-to-b from-[#9CA3AF] to-transparent"
          />
        </motion.div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="py-5 bg-[#080810] overflow-hidden border-y border-white/[0.04]">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-6 px-8 whitespace-nowrap">
              <span className="text-white/25 text-[0.68rem] tracking-[0.22em] uppercase" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}>{item}</span>
              <span className="w-[3px] h-[3px] rounded-full bg-[#1A4FFF]/60 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="py-32 px-6 bg-[var(--paper)]">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <div className="section-label">What We Do</div>
                <h2 className="font-display text-5xl md:text-6xl font-bold text-[#080810] leading-tight">
                  Services Built<br />
                  <em className="text-gradient not-italic">For Growth.</em>
                </h2>
              </div>
              <p className="text-[#6B7280] max-w-xs leading-relaxed text-[0.95rem]">
                Every service we offer is engineered to drive real outcomes — not just deliverables.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className={`group relative bg-gradient-to-br ${s.bg} border border-black/[0.06] rounded-[28px] p-8 overflow-hidden cursor-pointer h-full flex flex-col`}
                >
                  {/* Number watermark */}
                  <span className="absolute top-5 right-7 font-display text-[5rem] font-bold leading-none text-black/[0.04] pointer-events-none select-none">
                    {s.num}
                  </span>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 30% 30%, ${s.color}08, transparent 60%)` }}
                  />

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center mb-7 group-hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                    style={{ color: s.color }}>
                    {s.icon}
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-[#080810] mb-3">{s.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span key={tag} className="text-[0.65rem] font-semibold px-3 py-1.5 rounded-full bg-white/80 border border-black/[0.06] text-[#4B5563]"
                        style={{ fontFamily: 'Syne, sans-serif' }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute bottom-8 right-8 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                    style={{ background: s.color }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </motion.div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <div className="text-center mt-12">
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-outline"
                >
                  Explore All Services
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── WHY SKYPERS ── */}
      <section className="py-32 px-6 relative overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="absolute inset-0 mesh-bg-dark opacity-90" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.022) 1px, transparent 1px)`,
          backgroundSize: "44px 44px"
        }} />

        {/* Ambient orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #1A4FFF 0%, transparent 70%)" }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <FadeUp>
              <div className="section-label" style={{ color: "#8AABFF" }}>Why Choose Us</div>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-8 leading-[1.05]">
                Built Different,<br />
                <em className="text-gradient not-italic">Delivering More.</em>
              </h2>
              <p className="text-white/60 leading-relaxed mb-10 text-[0.95rem]">
                We don't just execute — we invest in your outcome. Every project we take on becomes a partnership built on transparency, craft, and ambition.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-ghost"
                >
                  Work With Us
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </Link>
            </FadeUp>

            <div className="space-y-4">
              {whyItems.map((item, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ x: 6, backgroundColor: "rgba(255,255,255,0.065)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="card-dark rounded-2xl p-6 flex gap-5 items-start group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#1A4FFF]/10 flex items-center justify-center flex-shrink-0 border border-[#1A4FFF]/15 group-hover:border-[#1A4FFF]/30 group-hover:bg-[#1A4FFF]/15 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1.5" style={{ fontFamily: 'Syne, sans-serif' }}>{item.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/40 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto relative">
          <FadeUp>
            <div className="section-label">How We Work</div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-[#080810] mb-20 max-w-lg leading-[1.05]">
              Our 4-Step<br /><em className="text-gradient not-italic">Process.</em>
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-9 left-[12.5%] right-[12.5%] h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(26,79,255,0.12), rgba(26,79,255,0.22), rgba(26,79,255,0.12), transparent)" }}
            />

            {process.map((p, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className="group relative"
                >
                  {/* Step circle */}
                  <div className="w-[72px] h-[72px] rounded-full bg-[var(--paper)] border-2 border-[#E5E7EB] flex items-center justify-center mb-8 relative z-10 group-hover:border-[#1A4FFF] group-hover:bg-[#1A4FFF] transition-all duration-400 shadow-sm">
                    <span className="font-display text-xl font-bold text-[#080810] group-hover:text-white transition-colors duration-300">{p.step}</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#080810] mb-3 group-hover:text-[#1A4FFF] transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-28 px-6" style={{ background: "var(--paper-warm)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="relative bg-[#080810] rounded-[40px] p-12 md:p-20 text-center overflow-hidden">
              {/* Glow blobs */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.28, 0.15] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-1/3 w-72 h-72 bg-[#1A4FFF] rounded-full blur-[70px] -translate-y-1/2 pointer-events-none"
              />
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 right-1/4 w-56 h-56 bg-[#4D7AFF] rounded-full blur-[60px] translate-y-1/2 pointer-events-none"
              />
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.022) 1px, transparent 1px)`,
                backgroundSize: "38px 38px"
              }} />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2.5 bg-white/[0.06] border border-white/[0.08] text-white/50 text-[0.65rem] tracking-[0.18em] uppercase px-5 py-2 rounded-full mb-8"
                  style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400"></span>
                  </span>
                  Currently accepting projects
                </div>

                <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.05]">
                  Ready to Build<br />
                  <em className="text-gradient not-italic">Something Great?</em>
                </h2>
                <p className="text-white/60 mb-12 text-lg max-w-lg mx-auto">
                  Let's discuss your project and craft the perfect solution together.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-white text-[#080810] font-semibold px-10 py-4 rounded-full text-sm hover:bg-blue-50 transition-all inline-flex items-center gap-2.5 shadow-2xl"
                      style={{ fontFamily: 'Syne, sans-serif' }}
                    >
                      Let's Talk
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M1 8H15M9 2L15 8L9 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.button>
                  </Link>
                  <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-[#25D366]/15 text-[#4ADE80] border border-[#25D366]/25 font-semibold px-10 py-4 rounded-full text-sm hover:bg-[#25D366]/25 transition-all inline-flex items-center gap-2.5"
                      style={{ fontFamily: 'Syne, sans-serif' }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp Us
                    </motion.button>
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}
