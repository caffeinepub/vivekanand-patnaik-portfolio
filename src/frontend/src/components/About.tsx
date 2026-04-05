import { motion, useInView } from "motion/react";
import { useRef } from "react";
import GlassCard from "./GlassCard";

const stats = [
  { value: "3.5+", label: "Years Experience", color: "#3EA6FF" },
  { value: "30+", label: "Projects Delivered", color: "#8B5CF6" },
  { value: "10+", label: "Tech Stacks Mastered", color: "#6FE7FF" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24"
      style={{ zIndex: 1 }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 1.0] }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            About <span className="text-gradient-blue">Me</span>
          </h2>
          <div
            className="mx-auto mb-8 h-0.5 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, #3EA6FF, #8B5CF6)" }}
          />
          <p className="text-base leading-relaxed" style={{ color: "#A7B0C6" }}>
            I&apos;m B Vivekanand Patnaik, a Computer Scientist at Microsoft
            with a passion for building high-performance, scalable systems. With
            3.5 years of experience spanning cloud architecture,
            blockchain/Web3, and machine learning, I thrive at the intersection
            of emerging technologies and real-world impact. I also channel my
            curiosity into writing &mdash; I&apos;m the author of{" "}
            <a
              href="https://www.kobo.com/in/en/ebook/chronos-the-emergent-illusion"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
              style={{ color: "#6FE7FF" }}
            >
              Chronos: The Emergent Illusion
            </a>
            , a deep dive into time, consciousness, and emergent complexity.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 * i,
                ease: [0.25, 0.46, 0.45, 1.0],
              }}
            >
              <GlassCard className="p-8 text-center hover:scale-[1.03] transition-transform duration-300">
                <div
                  className="text-5xl font-black mb-2"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}, ${stat.color}99)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: `drop-shadow(0 0 20px ${stat.color}40)`,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm font-medium tracking-wide"
                  style={{ color: "#A7B0C6" }}
                >
                  {stat.label}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Book highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.65,
            delay: 0.45,
            ease: [0.25, 0.46, 0.45, 1.0],
          }}
          className="mt-10 max-w-2xl mx-auto"
        >
          <GlassCard className="p-6 flex items-start gap-5">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl font-black"
              style={{
                background:
                  "linear-gradient(135deg, rgba(111,231,255,0.2), rgba(139,92,246,0.2))",
                border: "1px solid rgba(111,231,255,0.25)",
                color: "#6FE7FF",
              }}
            >
              📚
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <p
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#7F8AA6" }}
              >
                Author &bull; Published Book
              </p>
              <p className="text-base font-bold" style={{ color: "#EAF0FF" }}>
                Chronos: The Emergent Illusion
              </p>
              <p className="text-sm" style={{ color: "#A7B0C6" }}>
                An exploration of time, consciousness, and emergent complexity
              </p>
              <div className="flex gap-3 mt-2 flex-wrap">
                <a
                  href="https://www.amazon.in/dp/B0D9M1X6MS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200"
                  style={{
                    background: "rgba(255,153,0,0.15)",
                    color: "#FF9900",
                    border: "1px solid rgba(255,153,0,0.35)",
                  }}
                >
                  🛒 Amazon Kindle
                </a>
                <a
                  href="https://www.kobo.com/in/en/ebook/chronos-the-emergent-illusion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200"
                  style={{
                    background: "rgba(111,231,255,0.12)",
                    color: "#6FE7FF",
                    border: "1px solid rgba(111,231,255,0.3)",
                  }}
                >
                  📖 Kobo
                </a>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
