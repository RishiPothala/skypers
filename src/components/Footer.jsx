import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const services = [
  "Web Development",
  "App Development",
  "Digital Marketing",
  "UI/UX Design",
  "SEO Optimization",
];

const socials = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="5"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="3"/>
        <path d="M7 10v7M7 7v.01M12 10v7M12 13a3 3 0 016 0v4"/>
      </svg>
    ),
  },
  {
    name: "X / Twitter",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l16 16M4 20L20 4"/>
        <path d="M20 4h-5l-4 5M4 4h5l9 16h-5"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#080810] text-white/40 relative overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-48 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(26,79,255,0.09) 0%, transparent 70%)" }}
      />
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.018) 1px, transparent 1px)`,
        backgroundSize: "44px 44px"
      }} />
      {/* Ambient orb */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #1A4FFF 0%, transparent 70%)", transform: "translate(30%, 30%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8 relative z-10">

        {/* Big brand statement */}
        <div className="border-b border-white/[0.045] pb-16 mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <Link to="/" className="flex items-center gap-3 group mb-7 w-fit">
                <motion.div whileHover={{ rotate: [0, -8, 8, 0] }} transition={{ duration: 0.5 }}
                  className="relative w-12 h-12">
                  <img
                    src="/logo.png"
                    alt="Skypers"
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="w-12 h-12 bg-[#1A4FFF] rounded-xl items-center justify-center shadow-lg" style={{ display: "none" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M3 10L10 3L17 10M6 17V10H14V17" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </motion.div>
                <span className="text-[1.65rem] tracking-wide" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300, color: '#1A4FFF', letterSpacing: '0.04em' }}>Skypers</span>
              </Link>
              <p className="font-display text-4xl md:text-5xl font-light italic text-white/75 leading-tight max-w-lg">
                Building the digital future,<br />
                <span className="text-gradient-warm not-italic font-semibold">one project at a time.</span>
              </p>
            </div>

            <div className="flex flex-col gap-4 items-start md:items-end">
              <a href="mailto:skypersagency@gmail.com" className="group flex items-center gap-2.5 text-white/35 hover:text-white transition-colors duration-200 text-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 7 10-7"/>
                </svg>
                skypersagency@gmail.com
              </a>
              <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2.5 bg-[#25D366]/10 text-[#4ADE80] border border-[#25D366]/20 px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#25D366]/18 transition-all"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </motion.button>
              </a>
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-16">
          {/* Description + Socials */}
          <div>
            <p className="text-sm leading-relaxed text-white/30 mb-7">
              We build high-performing digital products that help businesses grow, scale, and stand out in a crowded world.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  whileHover={{ y: -3 }}
                  className="w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] flex items-center justify-center transition-all text-white/35 hover:text-white border border-white/[0.06] hover:border-white/[0.12]"
                  aria-label={s.name}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white/70 text-[0.65rem] font-bold mb-6 tracking-[0.2em] uppercase" style={{ fontFamily: 'Syne, sans-serif' }}>Navigation</h3>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-white/30 hover:text-white transition-colors duration-200 link-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white/70 text-[0.65rem] font-bold mb-6 tracking-[0.2em] uppercase" style={{ fontFamily: 'Syne, sans-serif' }}>Services</h3>
            <ul className="space-y-3.5">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-white/30 hover:text-white transition-colors duration-200 link-underline">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white/70 text-[0.65rem] font-bold mb-6 tracking-[0.2em] uppercase" style={{ fontFamily: 'Syne, sans-serif' }}>Get In Touch</h3>
            <div className="space-y-3.5 text-sm">
              <a href="mailto:skypersagency@gmail.com" className="block text-white/30 hover:text-white transition-colors duration-200">
                skypersagency@gmail.com
              </a>
              <a href="tel:+910000000000" className="block text-white/30 hover:text-white transition-colors duration-200">
                +91 00000 00000
              </a>
              <p className="text-white/30">Hyderabad, India</p>
              <Link to="/contact">
                <motion.span
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-1.5 text-[#4D7AFF] text-sm font-semibold mt-2 cursor-pointer"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  Contact us
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M1 6h10M6.5 1.5L11 6l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </motion.span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.045] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/18">
          <p style={{ fontFamily: 'Syne, sans-serif' }}>© {new Date().getFullYear()} Skypers. All rights reserved.</p>
          <p>Built with precision in Hyderabad, India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
