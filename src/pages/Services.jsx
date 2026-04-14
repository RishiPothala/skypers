import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
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
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
        <rect x="2" y="5" width="24" height="18" rx="2.5"/>
        <path d="M9 23v3M19 23v3M6 26h16M2 11h24"/>
      </svg>
    ),
    title: "Website Development",
    subtitle: "Pixel-perfect. Lightning-fast.",
    desc: "We craft modern, responsive websites that are optimized for performance, SEO, and conversions. Every line of code is written with purpose — to drive results.",
    features: ["Business Websites", "Landing Pages", "E-Commerce Stores", "CMS Integration", "Portfolio Sites"],
    color: "#1A4FFF",
    gradient: "from-blue-500/8 via-indigo-500/5 to-transparent",
    borderColor: "rgba(26,79,255,0.1)",
    bgDot: "rgba(26,79,255,0.05)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
        <rect x="8" y="2" width="12" height="24" rx="3"/>
        <path d="M12 19.5h4M11 6h6"/>
      </svg>
    ),
    title: "App Development",
    subtitle: "Native feel. Scalable architecture.",
    desc: "From Android to cross-platform solutions, we build mobile apps that users love and businesses depend on. Built for performance, designed for delight.",
    features: ["Android Apps", "Flutter Development", "UI/UX Design", "Firebase Backend", "App Optimization"],
    color: "#7C3AED",
    gradient: "from-violet-500/8 via-purple-500/5 to-transparent",
    borderColor: "rgba(124,58,237,0.1)",
    bgDot: "rgba(124,58,237,0.04)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
        <path d="M4 20L10 14L14 18L20 10L24 14"/>
        <circle cx="4" cy="20" r="2.5"/><circle cx="24" cy="14" r="2.5"/>
      </svg>
    ),
    title: "Digital Marketing",
    subtitle: "Data-driven. ROI-focused.",
    desc: "We grow your digital presence through strategic SEO, targeted paid campaigns, and engaging social media — all tied to measurable, transparent outcomes.",
    features: ["SEO Optimization", "Google Ads", "Meta Ads", "Social Media", "Analytics & Reporting"],
    color: "#059669",
    gradient: "from-emerald-500/8 via-teal-500/5 to-transparent",
    borderColor: "rgba(5,150,105,0.1)",
    bgDot: "rgba(5,150,105,0.04)",
  },
];

const addons = [
  { title: "Brand Identity", desc: "Logo, color palette, and typography systems that speak your brand.", icon: "✦" },
  { title: "UI/UX Design", desc: "Wireframes, prototypes, and design systems that delight users.", icon: "◈" },
  { title: "Content Writing", desc: "SEO-optimized copy that resonates and converts.", icon: "⊞" },
  { title: "Maintenance", desc: "Ongoing support, updates, and performance monitoring.", icon: "◎" },
];

export default function Services() {
  return (
    <div className="w-full">

      {/* HEADER */}
      <section className="pt-28 pb-14 px-6 relative overflow-hidden" style={{ background: "var(--paper)" }}>
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.022) 1px, transparent 1px)`,
          backgroundSize: "56px 56px"
        }} />
        {/* Ambient orb */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full -translate-y-1/3 translate-x-1/4 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(26,79,255,0.08) 0%, transparent 70%)" }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <FadeUp>
            <div className="section-label justify-center mb-7">Our Services</div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-[#080810] mb-8 leading-[0.93] tracking-[-0.025em]">
              Complete Digital<br />
              Solutions{" "}
              <em className="text-gradient not-italic">Under<br />One Roof.</em>
            </h1>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed">
              Everything your business needs to establish, grow, and dominate its digital presence — delivered with precision and care.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* SERVICES — stacked cards */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-5">
          {services.map((s, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
                className={`rounded-[32px] p-8 md:p-10 lg:p-14 bg-gradient-to-br ${s.gradient} border cursor-pointer group relative overflow-hidden`}
                style={{ borderColor: s.borderColor }}
              >
                {/* Big number watermark */}
                <span className="absolute bottom-8 right-10 font-display text-[9rem] font-bold leading-none text-black/[0.03] pointer-events-none select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 10% 50%, ${s.color}06, transparent 50%)` }}
                />

                <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                  <div>
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-8 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 border border-black/[0.04]"
                      style={{ color: s.color }}>
                      {s.icon}
                    </div>
                    <p className="text-sm font-bold tracking-[0.14em] uppercase mb-3" style={{ color: s.color, fontFamily: 'Syne, sans-serif' }}>
                      {s.subtitle}
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-[#080810] mb-5 leading-[1.05]">
                      {s.title}
                    </h2>
                    <p className="text-[#6B7280] leading-relaxed">{s.desc}</p>
                  </div>

                  <div className="bg-white/65 backdrop-blur-sm rounded-2xl p-8 border border-white/80 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <p className="text-[0.62rem] font-bold tracking-[0.2em] uppercase text-[#9CA3AF] mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>What's Included</p>
                    <div className="space-y-3.5">
                      {s.features.map((f, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: j * 0.06, duration: 0.4 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3.5"
                        >
                          <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ background: s.color + "18" }}>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M1.5 5l2.5 2.5L8.5 2.5" stroke={s.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span className="text-[#374151] font-medium text-sm">{f}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA within card */}
                    <Link to="/contact">
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="mt-7 flex items-center gap-2 text-sm font-semibold transition-colors"
                        style={{ color: s.color, fontFamily: 'Syne, sans-serif' }}
                      >
                        Get a Quote
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M1 7h12M8 2l5 5-5 5" stroke={s.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="py-24 px-6" style={{ background: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="section-label mb-4">Additional Services</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#080810] mb-14 leading-[1.05]">
              We Also Offer
            </h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {addons.map((a, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className="card p-7 group cursor-default"
                >
                  <div className="text-2xl mb-5 text-[#1A4FFF] font-light group-hover:scale-110 transition-transform duration-300 inline-block">{a.icon}</div>
                  <h3 className="font-semibold text-[#080810] mb-2 text-base" style={{ fontFamily: 'Syne, sans-serif' }}>{a.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{a.desc}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 px-6 relative overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="absolute inset-0 mesh-bg-dark" />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.018) 1px, transparent 1px)`,
          backgroundSize: "48px 48px"
        }} />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none -translate-y-1/3 translate-x-1/3"
          style={{ background: "radial-gradient(circle, #1A4FFF, transparent 70%)" }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <FadeUp>
            <div className="section-label mb-4" style={{ color: "#8AABFF" }}>
              How We Work
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-16 leading-[1.05]">
              Our 3-Step Process
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { num: "1", title: "Plan", desc: "Discovery call → requirements → proposal. We align on goals before touching a pixel." },
              { num: "2", title: "Design & Build", desc: "Iterative design + development with regular check-ins. You see progress every week." },
              { num: "3", title: "Deliver & Grow", desc: "Launch, monitor, optimize. We don't disappear after delivery — we're long-term partners." },
            ].map((p, i) => (
              <FadeUp key={i} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -6, borderColor: "rgba(255,255,255,0.14)" }}
                  className="card-dark rounded-2xl p-9 group transition-all duration-300"
                >
                  <div className="font-display text-7xl font-bold text-[#1A4FFF]/15 mb-5 leading-none group-hover:text-[#1A4FFF]/28 transition-colors duration-300">{p.num}</div>
                  <h3 className="font-semibold text-white text-xl mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>{p.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1A4FFF 0%, #4D7AFF 60%, #8AABFF 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)`,
          backgroundSize: "38px 38px"
        }} />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-36 bg-white/12 rounded-full blur-3xl pointer-events-none"
        />
        <FadeUp>
          <div className="relative z-10">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.05]">
              Ready to Get Started?
            </h2>
            <p className="mb-12 text-white/80 text-lg max-w-xl mx-auto">
              Let's talk about your project and craft the perfect solution together.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white text-[#1A4FFF] font-bold px-10 py-4 rounded-full text-base shadow-2xl hover:shadow-white/30 transition-all inline-flex items-center gap-2.5"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Book a Free Call
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </Link>
          </div>
        </FadeUp>
      </section>

    </div>
  );
}
