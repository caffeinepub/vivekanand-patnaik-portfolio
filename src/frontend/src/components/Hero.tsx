import { motion } from "motion/react";
import { Suspense, lazy, useEffect, useState } from "react";

const TorusKnot3D = lazy(() => import("./TorusKnot3D"));

const staggerDelay = 0.12;

export default function Hero() {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(interval);
  }, []);

  const handleExplore = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-12"
      style={{ zIndex: 1 }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column — text */}
          <div className="flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: staggerDelay * 0,
                ease: [0.25, 0.46, 0.45, 1.0],
              }}
              className="text-xs font-semibold tracking-[0.3em] uppercase"
              style={{ color: "#3EA6FF" }}
            >
              Software Engineer & Full-Stack Developer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: staggerDelay * 1,
                ease: [0.25, 0.46, 0.45, 1.0],
              }}
            >
              <h1
                className="text-gradient-blue leading-[1.05] font-black tracking-tight"
                style={{
                  fontSize: "clamp(3rem, 7vw, 4.5rem)",
                  filter: "drop-shadow(0 0 40px rgba(62,166,255,0.25))",
                }}
              >
                B Vivekanand
                <br />
                <span
                  style={{ color: "#EAF0FF", WebkitTextFillColor: "#EAF0FF" }}
                >
                  Patnaik
                  <span
                    className="inline-block ml-1 w-1 rounded-sm"
                    style={{
                      height: "0.85em",
                      background: "linear-gradient(135deg,#3EA6FF,#8B5CF6)",
                      opacity: showCursor ? 1 : 0,
                      transition: "opacity 0.05s",
                      verticalAlign: "text-bottom",
                    }}
                    aria-hidden="true"
                  />
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: staggerDelay * 2,
                ease: [0.25, 0.46, 0.45, 1.0],
              }}
              className="text-base leading-relaxed max-w-md"
              style={{ color: "#A7B0C6" }}
            >
              Building high-performance web applications and scalable backend
              systems. Passionate about clean architecture, emerging
              technologies, and creating seamless user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: staggerDelay * 3,
                ease: [0.25, 0.46, 0.45, 1.0],
              }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                type="button"
                data-ocid="hero.explore.primary_button"
                onClick={handleExplore}
                className="btn-gradient text-white font-semibold px-8 py-3 rounded-full text-sm tracking-wide"
              >
                Explore My Work
              </button>
              <button
                type="button"
                data-ocid="hero.contact.secondary_button"
                onClick={handleContact}
                className="text-sm font-semibold px-8 py-3 rounded-full tracking-wide border transition-all duration-300"
                style={{
                  borderColor: "rgba(255,255,255,0.15)",
                  color: "#EAF0FF",
                  background: "rgba(255,255,255,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(62,166,255,0.5)";
                  e.currentTarget.style.background = "rgba(62,166,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                }}
              >
                Get In Touch
              </button>
            </motion.div>

            {/* Quick stat pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: staggerDelay * 4,
                ease: [0.25, 0.46, 0.45, 1.0],
              }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {[
                { value: "3.5+", label: "Years Exp" },
                { value: "30+", label: "Projects" },
                { value: "10+", label: "Tech Stacks" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card px-5 py-3 flex flex-col items-center min-w-[90px]"
                >
                  <span className="text-xl font-black text-gradient-blue">
                    {stat.value}
                  </span>
                  <span className="text-xs" style={{ color: "#7F8AA6" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column — 3D torus */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.0,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 1.0],
            }}
            className="relative h-[420px] lg:h-[520px] flex items-center justify-center"
          >
            {/* Glow backdrop */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(62,166,255,0.12) 0%, rgba(139,92,246,0.08) 50%, transparent 75%)",
                filter: "blur(30px)",
              }}
              aria-hidden="true"
            />
            <Suspense
              fallback={
                <div
                  className="w-64 h-64 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(62,166,255,0.2) 0%, transparent 70%)",
                  }}
                />
              }
            >
              <TorusKnot3D />
            </Suspense>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: "#7F8AA6" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-8 rounded-full"
          style={{
            background: "linear-gradient(180deg, #3EA6FF 0%, transparent 100%)",
          }}
        />
      </motion.div>
    </section>
  );
}
