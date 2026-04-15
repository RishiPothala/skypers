import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

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

const services = ["Web Development", "App Development", "Digital Marketing", "UI/UX Design", "SEO", "Other"];

const contactDetails = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <rect x="2" y="3" width="14" height="12" rx="2"/>
        <path d="M2 5l7 5 7-5"/>
      </svg>
    ),
    label: "Email",
    value: "skypersagency@gmail.com",
    href: "mailto:skypersagency@gmail.com",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M3 3.5A1.5 1.5 0 014.5 2h1.286c.463 0 .863.316.979.765l.87 3.26a1 1 0 01-.242.99L6.5 8a11 11 0 004.5 4.5l.984-.893a1 1 0 01.99-.242l3.26.87c.449.116.766.516.766.979V15.5A1.5 1.5 0 0114.5 17C7.044 17 1 10.956 1 3.5A1.5 1.5 0 012.5 2"/>
      </svg>
    ),
    label: "Phone",
    value: "+91 00000 00000",
    href: "tel:+910000000000",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M9 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/>
        <path d="M9 1a7 7 0 017 7c0 4.5-7 9-7 9S2 12.5 2 8a7 7 0 017-7z"/>
      </svg>
    ),
    label: "Location",
    value: "Hyderabad, India",
    href: null,
  },
];

export default function Contact() {
  const [selectedService, setSelectedService] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", budget: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3.5 border rounded-xl text-sm text-[#080810] placeholder-[#9CA3AF] outline-none transition-all duration-200 ${
      focused === field
        ? "border-[#1A4FFF] ring-4 ring-blue-50/80 bg-white"
        : "border-[#E9E7E2] hover:border-[#D1CFC9] bg-[#F9F8F5]"
    }`;

  return (
    <div className="w-full">

      {/* HEADER — dark cinematic */}
      <section data-theme="dark" className="pt-28 pb-20 px-6 relative overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="absolute inset-0 mesh-bg-dark" />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.022) 1px, transparent 1px)`,
          backgroundSize: "44px 44px"
        }} />

        {/* Animated orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.28, 0.15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-[360px] h-[360px] rounded-full blur-[90px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(26,79,255,1) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-16 w-[280px] h-[280px] rounded-full blur-[70px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(77,122,255,1) 0%, transparent 70%)" }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeUp>
            <div className="section-label justify-center mb-7" style={{ color: "#8AABFF" }}>
              Get In Touch
            </div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[0.95] tracking-[-0.025em]">
              Let's Build<br />
              Something{" "}
              <em className="text-gradient not-italic">Extraordinary.</em>
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Have a project in mind? Tell us about it. We respond within 24 hours.
            </p>
          </FadeUp>

          {/* Trust pills */}
          <FadeUp delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-12">
              {[
                { icon: "⚡", text: "< 24h response" },
                { icon: "🌍", text: "Remote & Hyderabad" },
                { icon: "✦", text: "Free consultation" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2, borderColor: "rgba(255,255,255,0.2)" }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.12] text-white/70 text-sm transition-all"
                  style={{ fontFamily: 'Syne, sans-serif', fontWeight: 500 }}
                >
                  <span>{item.icon}</span>
                  {item.text}
                </motion.div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 px-6" style={{ background: "var(--paper)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-14 items-start">

          {/* LEFT: Info */}
          <FadeUp className="md:col-span-2">
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-[#080810] mb-4">
                  Talk to us
                </h2>
                <p className="text-[#6B7280] leading-relaxed text-[0.95rem]">
                  Whether you have a clear vision or just a spark of an idea — we're here to help shape it into something real and powerful.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-2">
                {contactDetails.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 280 }}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white transition-all duration-200 group cursor-default border border-transparent hover:border-black/[0.05] hover:shadow-sm"
                  >
                    <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-[#1A4FFF] flex-shrink-0 group-hover:bg-[#1A4FFF] group-hover:text-white transition-all duration-250">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[0.62rem] font-bold text-[#9CA3AF] uppercase tracking-[0.16em] mb-0.5" style={{ fontFamily: 'Syne, sans-serif' }}>{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-[#080810] font-medium hover:text-[#1A4FFF] transition-colors text-sm">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[#080810] font-medium text-sm">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 bg-[#25D366] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-lg hover:shadow-green-200/60 transition-shadow"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </motion.button>
              </a>

              <div className="flex items-center gap-2 text-xs text-[#9CA3AF]" style={{ fontFamily: 'Syne, sans-serif' }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                </span>
                We typically respond within a few hours
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { label: "50+", sub: "Happy clients" },
                  { label: "98%", sub: "Satisfaction rate" },
                  { label: "3x", sub: "Average ROI" },
                  { label: "24h", sub: "Response time" },
                ].map((b, i) => (
                  <div key={i} className="bg-white rounded-2xl p-4 border border-black/[0.05] shadow-sm text-center">
                    <div className="font-display text-2xl font-bold text-[#080810]">{b.label}</div>
                    <div className="text-[0.65rem] text-[#9CA3AF] mt-0.5" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}>{b.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* RIGHT: Form */}
          <FadeUp delay={0.15} className="md:col-span-3">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-[32px] p-14 text-center shadow-sm border border-black/[0.05]"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-7 border border-green-100"
                >
                  <svg width="32" height="32" viewBox="0 0 28 28" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round">
                    <path d="M4 14l7 7L24 7"/>
                  </svg>
                </motion.div>
                <h3 className="font-display text-3xl font-bold text-[#080810] mb-3">Message Sent!</h3>
                <p className="text-[#6B7280] max-w-xs mx-auto leading-relaxed">We'll review your project details and get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-black/[0.05] space-y-6">

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { name: "name", label: "Your Name", type: "text", placeholder: "John Smith" },
                    { name: "email", label: "Email Address", type: "email", placeholder: "john@company.com" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-[0.62rem] font-bold text-[#9CA3AF] uppercase tracking-[0.16em] mb-2.5"
                        style={{ fontFamily: 'Syne, sans-serif' }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleChange}
                        onFocus={() => setFocused(field.name)}
                        onBlur={() => setFocused("")}
                        className={inputClass(field.name)}
                        required
                      />
                    </div>
                  ))}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[0.62rem] font-bold text-[#9CA3AF] uppercase tracking-[0.16em] mb-2.5"
                    style={{ fontFamily: 'Syne, sans-serif' }}>
                    Phone Number <span className="text-[#C4C4C4] normal-case font-normal tracking-normal">— optional</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 border-r border-[#E9E7E2] pr-3 pointer-events-none">
                      <span className="text-sm">🇮🇳</span>
                      <span className="text-sm text-[#6B7280] font-medium">+91</span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused("")}
                      className={`w-full pl-[4.5rem] pr-4 py-3.5 border rounded-xl text-sm text-[#080810] placeholder-[#9CA3AF] outline-none transition-all duration-200 ${
                        focused === "phone"
                          ? "border-[#1A4FFF] ring-4 ring-blue-50/80 bg-white"
                          : "border-[#E9E7E2] hover:border-[#D1CFC9] bg-[#F9F8F5]"
                      }`}
                    />
                  </div>
                </div>

                {/* Service selection */}
                <div>
                  <label className="block text-[0.62rem] font-bold text-[#9CA3AF] uppercase tracking-[0.16em] mb-3"
                    style={{ fontFamily: 'Syne, sans-serif' }}>
                    Service Needed
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <motion.button
                        key={s}
                        type="button"
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedService(selectedService === s ? "" : s)}
                        className={`px-4 py-2 rounded-full text-[0.7rem] font-semibold border transition-all duration-200 ${
                          selectedService === s
                            ? "bg-[#080810] text-white border-[#080810] shadow-md"
                            : "bg-[#F9F8F5] text-[#6B7280] border-[#E9E7E2] hover:border-[#9CA3AF] hover:text-[#080810]"
                        }`}
                        style={{ fontFamily: 'Syne, sans-serif' }}
                      >
                        {s}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-[0.62rem] font-bold text-[#9CA3AF] uppercase tracking-[0.16em] mb-2.5"
                    style={{ fontFamily: 'Syne, sans-serif' }}>
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    onFocus={() => setFocused("budget")}
                    onBlur={() => setFocused("")}
                    className={inputClass("budget")}
                  >
                    <option value="">Select a range</option>
                    <option>₹10k – ₹30k</option>
                    <option>₹30k – ₹75k</option>
                    <option>₹75k – ₹1.5L</option>
                    <option>₹1.5L+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[0.62rem] font-bold text-[#9CA3AF] uppercase tracking-[0.16em] mb-2.5"
                    style={{ fontFamily: 'Syne, sans-serif' }}>
                    Tell Us About Your Project
                  </label>
                  <textarea
                    name="message"
                    placeholder="Describe your project, goals, timeline..."
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused("")}
                    className={`${inputClass("message")} resize-none`}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full justify-center text-base py-4"
                >
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1 8H15M9 2L15 8L9 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>

                <p className="text-center text-xs text-[#9CA3AF]">
                  By submitting, you agree to our privacy policy. We never share your data.
                </p>

              </form>
            )}
          </FadeUp>
        </div>
      </section>

    </div>
  );
}
