import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 1.0] }}
        className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
        aria-label="Main navigation"
      >
        <div
          className={`glass-nav rounded-full px-6 py-3 flex items-center gap-2 w-full max-w-4xl transition-all duration-500 ${
            scrolled ? "shadow-neon-blue" : ""
          }`}
        >
          {/* Brand */}
          <span
            className="text-sm font-bold tracking-widest uppercase mr-auto"
            style={{ color: "#EAF0FF" }}
          >
            B<span className="text-gradient-blue">VK</span>
          </span>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
                onClick={() => handleNavClick(link.href)}
                className="text-xs font-medium tracking-widest uppercase transition-colors duration-200"
                style={{ color: "#A7B0C6" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#3EA6FF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#A7B0C6";
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            type="button"
            data-ocid="nav.contact.button"
            onClick={() => handleNavClick("#contact")}
            className="hidden md:flex btn-gradient text-white text-xs font-semibold tracking-wider uppercase px-5 py-2 rounded-full ml-4"
          >
            CONTACT
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            data-ocid="nav.menu.toggle"
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden ml-auto p-1 text-white"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-24 left-4 right-4 z-40 glass-card rounded-2xl p-6 flex flex-col gap-4"
            data-ocid="nav.mobile.panel"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-semibold tracking-widest uppercase text-left"
                style={{ color: "#A7B0C6" }}
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              data-ocid="nav.mobile.contact.button"
              onClick={() => handleNavClick("#contact")}
              className="btn-gradient text-white text-sm font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full w-full mt-2"
            >
              GET IN TOUCH
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
