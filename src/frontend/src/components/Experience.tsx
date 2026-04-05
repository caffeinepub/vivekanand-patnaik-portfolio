import { motion, useInView } from "motion/react";
import { useRef } from "react";
import GlassCard from "./GlassCard";

const experiences = [
  {
    role: "Computer Scientist",
    company: "Microsoft",
    period: "2024 – Present",
    bullets: [
      "Driving cutting-edge research and engineering on large-scale distributed systems",
      "Architecting high-performance solutions serving millions of users worldwide",
    ],
    accent: "#3EA6FF",
  },
  {
    role: "Software Engineer",
    company: "Cognizant",
    period: "2022 – 2023",
    bullets: [
      "Built scalable enterprise applications and REST APIs for global clients",
      "Led full-stack development with React, Node.js, and cloud-native technologies",
    ],
    accent: "#8B5CF6",
  },
  {
    role: "Author",
    company: "Published Author",
    period: "2026",
    bullets: [
      'Authored "Chronos: The Emergent Illusion" — an exploration of time, consciousness, and emergent complexity',
    ],
    accent: "#6FE7FF",
    links: [
      {
        label: "Amazon Kindle",
        url: "https://www.amazon.in/dp/B0D9M1X6MS",
        color: "#FF9900",
      },
      {
        label: "Kobo",
        url: "https://www.kobo.com/in/en/ebook/chronos-the-emergent-illusion",
        color: "#6FE7FF",
      },
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24"
      style={{ zIndex: 1 }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 1.0] }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            Work <span className="text-gradient-blue">Experience</span>
          </h2>
          <div
            className="mx-auto h-0.5 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, #3EA6FF, #8B5CF6)" }}
          />
        </motion.div>

        <div className="relative max-w-3xl mx-auto" data-ocid="experience.list">
          {/* Vertical spine line */}
          <div
            className="absolute left-6 top-4 bottom-4 w-px"
            style={{
              background:
                "linear-gradient(180deg, #3EA6FF 0%, #8B5CF6 50%, #6FE7FF 100%)",
              boxShadow: "0 0 12px rgba(62,166,255,0.4)",
            }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.65,
                  delay: 0.15 * i,
                  ease: [0.25, 0.46, 0.45, 1.0],
                }}
                className="flex gap-6"
                data-ocid={`experience.item.${i + 1}`}
              >
                {/* Node */}
                <div className="flex-shrink-0 flex flex-col items-center pt-5">
                  <div
                    className="w-3 h-3 rounded-full border-2 flex-shrink-0"
                    style={{
                      background: exp.accent,
                      borderColor: exp.accent,
                      boxShadow: `0 0 12px ${exp.accent}, 0 0 24px ${exp.accent}60`,
                    }}
                  />
                </div>

                {/* Card */}
                <GlassCard className="flex-1 p-6 hover:scale-[1.01] transition-transform duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3
                        className="text-base font-bold"
                        style={{ color: "#EAF0FF" }}
                      >
                        {exp.role}
                      </h3>
                      <span
                        className="text-sm font-medium"
                        style={{ color: exp.accent }}
                      >
                        @ {exp.company}
                      </span>
                    </div>
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full flex-shrink-0"
                      style={{
                        background: `${exp.accent}15`,
                        color: exp.accent,
                        border: `1px solid ${exp.accent}30`,
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {exp.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm leading-relaxed"
                        style={{ color: "#A7B0C6" }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: exp.accent }}
                          aria-hidden="true"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                  {"links" in exp && exp.links && (
                    <div className="flex gap-3 mt-3 flex-wrap">
                      {exp.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200"
                          style={{
                            background: `${link.color}18`,
                            color: link.color,
                            border: `1px solid ${link.color}35`,
                          }}
                        >
                          {link.label === "Amazon Kindle" ? "🛒" : "📖"}{" "}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
