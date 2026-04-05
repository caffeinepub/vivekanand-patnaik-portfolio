import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import StarField from "./components/StarField";

export default function App() {
  const year = new Date().getFullYear();

  return (
    <div
      className="relative min-h-screen"
      style={{
        background:
          "linear-gradient(135deg, #060A14 0%, #0B1022 50%, #0D0818 100%)",
      }}
    >
      {/* Fixed starfield background */}
      <StarField />

      {/* Corner glows */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      >
        {/* Top-left purple haze */}
        <div
          className="absolute top-0 left-0 w-[600px] h-[500px]"
          style={{
            background:
              "radial-gradient(ellipse at 0% 0%, rgba(58,27,106,0.45) 0%, transparent 65%)",
          }}
        />
        {/* Bottom-right blue haze */}
        <div
          className="absolute bottom-0 right-0 w-[700px] h-[500px]"
          style={{
            background:
              "radial-gradient(ellipse at 100% 100%, rgba(20,45,110,0.4) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer
        className="relative py-10 text-center"
        style={{
          zIndex: 1,
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container mx-auto px-4 max-w-6xl flex flex-col items-center gap-4">
          {/* Social icons */}
          <div className="flex gap-4">
            {(
              [
                { icon: SiGithub, href: "#", label: "GitHub" },
                { icon: SiLinkedin, href: "#", label: "LinkedIn" },
                { icon: SiX, href: "#", label: "Twitter" },
              ] as const
            ).map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                data-ocid={`footer.${s.label.toLowerCase()}.link`}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#A7B0C6",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#3EA6FF";
                  e.currentTarget.style.borderColor = "rgba(62,166,255,0.4)";
                  e.currentTarget.style.background = "rgba(62,166,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#A7B0C6";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs" style={{ color: "#7F8AA6" }}>
            © {year} B Vivekanand Patnaik. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
