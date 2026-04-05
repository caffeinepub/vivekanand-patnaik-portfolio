import { ExternalLink, Github } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import GlassCard from "./GlassCard";

const projects = [
  {
    title: "Neural Studio",
    description:
      "AI-powered creative workspace for generating and fine-tuning neural network models with real-time visualization and interactive training dashboards.",
    tech: ["Python", "PyTorch", "React", "TensorFlow"],
    image: "/assets/generated/project-neural-studio.dim_600x400.jpg",
    github: "https://github.com/Vivekpatnaik",
    live: "#",
    accent: "#C084FC",
    badge: "ML / AI",
  },
  {
    title: "Sentiment Analyzer API",
    description:
      "Production-grade NLP service built with transformer models (BERT) for real-time sentiment analysis, deployed on AWS with auto-scaling.",
    tech: ["Python", "BERT", "FastAPI", "AWS"],
    image: "/assets/generated/project-neural-studio.dim_600x400.jpg",
    github: "https://github.com/Vivekpatnaik",
    live: "#",
    accent: "#F472B6",
    badge: "ML / NLP",
  },
  {
    title: "Vision ML Pipeline",
    description:
      "End-to-end computer vision pipeline for object detection and image segmentation with real-time inference using YOLO and custom CNN models.",
    tech: ["Python", "PyTorch", "OpenCV", "Docker"],
    image: "/assets/generated/project-quantum-dashboard.dim_600x400.jpg",
    github: "https://github.com/Vivekpatnaik",
    live: "#",
    accent: "#F472B6",
    badge: "ML / CV",
  },
  {
    title: "BlockChain Vault",
    description:
      "A decentralized secure storage protocol with multi-sig authentication and on-chain data integrity verification built on ICP.",
    tech: ["Rust", "Motoko", "ICP"],
    image: "/assets/generated/project-blockchain-vault.dim_600x400.jpg",
    github: "https://github.com/Vivekpatnaik",
    live: "#",
    accent: "#3EA6FF",
    badge: "Blockchain",
  },
  {
    title: "Quantum Dashboard",
    description:
      "Enterprise analytics platform with real-time data streaming, custom chart builders, and AI-driven insights powered by ML models.",
    tech: ["TypeScript", "Node.js", "D3.js", "Python"],
    image: "/assets/generated/project-quantum-dashboard.dim_600x400.jpg",
    github: "https://github.com/Vivekpatnaik",
    live: "#",
    accent: "#6FE7FF",
    badge: "Analytics",
  },
  {
    title: "Chronos — The Book",
    description:
      'Published author of "Chronos: The Emergent Illusion" — a deep philosophical exploration of time, consciousness, and emergent complexity.',
    tech: ["Writing", "Philosophy", "Science"],
    image: "/assets/generated/project-blockchain-vault.dim_600x400.jpg",
    github: "#",
    live: "#",
    liveLinks: [
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
    accent: "#8B5CF6",
    badge: "Authorship",
  },
];

type Project = (typeof projects)[number];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
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
            Featured <span className="text-gradient-blue">Projects</span>
          </h2>
          <div
            className="mx-auto h-0.5 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, #3EA6FF, #8B5CF6)" }}
          />
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          data-ocid="projects.list"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                delay: 0.08 * i,
                ease: [0.25, 0.46, 0.45, 1.0],
              }}
              data-ocid={`projects.item.${i + 1}`}
            >
              <GlassCard className="flex flex-col h-full overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                {/* Image */}
                <div className="relative h-44 overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 40%, rgba(6,10,20,0.9) 100%)",
                    }}
                  />
                  {/* Badge */}
                  <div
                    className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: `${project.accent}25`,
                      color: project.accent,
                      border: `1px solid ${project.accent}45`,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {project.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 gap-3">
                  <h3
                    className="text-lg font-bold tracking-tight"
                    style={{ color: "#EAF0FF" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "#A7B0C6" }}
                  >
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                        style={{
                          background: `${project.accent}15`,
                          color: project.accent,
                          border: `1px solid ${project.accent}30`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-2 flex-wrap">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-ocid={`projects.github.button.${i + 1}`}
                        className="flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full transition-all duration-200"
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          color: "#A7B0C6",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            "rgba(255,255,255,0.12)";
                          e.currentTarget.style.color = "#EAF0FF";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background =
                            "rgba(255,255,255,0.06)";
                          e.currentTarget.style.color = "#A7B0C6";
                        }}
                      >
                        <Github size={13} />
                        GitHub
                      </a>
                    )}
                    {"liveLinks" in project &&
                    (
                      project as Project & {
                        liveLinks?: {
                          label: string;
                          url: string;
                          color: string;
                        }[];
                      }
                    ).liveLinks ? (
                      (
                        project as Project & {
                          liveLinks: {
                            label: string;
                            url: string;
                            color: string;
                          }[];
                        }
                      ).liveLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full transition-all duration-200"
                          style={{
                            background: `${link.color}18`,
                            color: link.color,
                            border: `1px solid ${link.color}35`,
                          }}
                        >
                          <ExternalLink size={13} />
                          {link.label}
                        </a>
                      ))
                    ) : project.live !== "#" ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-ocid={`projects.live.button.${i + 1}`}
                        className="flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full btn-gradient text-white transition-all duration-200"
                      >
                        <ExternalLink size={13} />
                        Live Demo
                      </a>
                    ) : null}
                    {project.live === "#" &&
                      project.github === "#" &&
                      !("liveLinks" in project) && (
                        <span
                          className="flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            color: "#7F8AA6",
                            border: "1px solid rgba(255,255,255,0.06)",
                          }}
                        >
                          Private / Internal
                        </span>
                      )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
