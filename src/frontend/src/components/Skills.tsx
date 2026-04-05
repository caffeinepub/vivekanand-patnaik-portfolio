import { motion, useInView } from "motion/react";
import { useRef } from "react";
import type { IconType } from "react-icons";
import {
  SiAmazon,
  SiDocker,
  SiJavascript,
  SiKubernetes,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiRust,
  SiScikitlearn,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import GlassCard from "./GlassCard";

interface TechItem {
  name: string;
  icon: IconType | null;
  color: string;
  label?: string;
}

const languages: TechItem[] = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Rust", icon: SiRust, color: "#CE412B" },
  { name: "Motoko", icon: null, color: "#8B5CF6", label: "M" },
  { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
];

const mlTools: TechItem[] = [
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
];

const devTools: TechItem[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
];

const specializations = [
  {
    label: "Machine Learning & AI",
    pct: 92,
    color: "#C084FC",
    highlight: true,
  },
  {
    label: "Full-Stack Development",
    pct: 90,
    color: "#3EA6FF",
    highlight: false,
  },
  { label: "Cloud Architecture", pct: 80, color: "#8B5CF6", highlight: false },
  { label: "Blockchain / Web3", pct: 75, color: "#6FE7FF", highlight: false },
  { label: "Deep Learning & NLP", pct: 85, color: "#F472B6", highlight: true },
];

function TechTile({ name, icon: Icon, color, label }: TechItem) {
  return (
    <GlassCard className="p-4 flex flex-col items-center gap-2 hover:scale-[1.06] transition-transform duration-300 cursor-default">
      {Icon ? (
        <Icon size={28} color={color} />
      ) : (
        <span className="text-xl font-black" style={{ color }}>
          {label}
        </span>
      )}
      <span className="text-xs font-medium" style={{ color: "#A7B0C6" }}>
        {name}
      </span>
    </GlassCard>
  );
}

function SkillBar({
  label,
  pct,
  color,
  inView,
  delay,
  highlight,
}: {
  label: string;
  pct: number;
  color: string;
  inView: boolean;
  delay: number;
  highlight: boolean;
}) {
  return (
    <div
      className="flex flex-col gap-2 rounded-xl px-3 py-2"
      style={{
        background: highlight ? `${color}0D` : "transparent",
        border: highlight ? `1px solid ${color}25` : "1px solid transparent",
      }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {highlight && (
            <span
              className="text-xs font-bold px-1.5 py-0.5 rounded"
              style={{ background: `${color}25`, color }}
            >
              TOP
            </span>
          )}
          <span
            className="text-sm font-medium"
            style={{
              color: highlight ? "#EAF0FF" : "#EAF0FF",
              fontWeight: highlight ? 700 : 500,
            }}
          >
            {label}
          </span>
        </div>
        <span className="text-xs font-bold" style={{ color }}>
          {pct}%
        </span>
      </div>
      <div
        className="h-2 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.07)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            boxShadow: `0 0 ${highlight ? 20 : 12}px ${color}${highlight ? "80" : "60"}`,
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay, ease: [0.25, 0.46, 0.45, 1.0] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
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
            Tech <span className="text-gradient-blue">Stack</span>
          </h2>
          <div
            className="mx-auto h-0.5 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, #3EA6FF, #8B5CF6)" }}
          />
        </motion.div>

        {/* ML Feature Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.05,
            ease: [0.25, 0.46, 0.45, 1.0],
          }}
          className="mb-10"
        >
          <GlassCard className="p-5 flex flex-col sm:flex-row items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(192,132,252,0.25), rgba(244,114,182,0.2))",
                border: "1px solid rgba(192,132,252,0.35)",
              }}
            >
              🤖
            </div>
            <div className="flex flex-col gap-0.5 text-center sm:text-left">
              <p className="text-sm font-bold" style={{ color: "#EAF0FF" }}>
                Machine Learning &amp; AI — Primary Expertise
              </p>
              <p className="text-xs" style={{ color: "#A7B0C6" }}>
                Deep Learning, NLP, Computer Vision, MLOps · PyTorch ·
                TensorFlow · Scikit-learn · Model Deployment at Scale
              </p>
            </div>
            <div
              className="ml-auto flex-shrink-0 text-2xl font-black px-4 py-1.5 rounded-full"
              style={{
                background: "linear-gradient(135deg, #C084FC30, #F472B620)",
                border: "1px solid rgba(192,132,252,0.3)",
                color: "#C084FC",
              }}
            >
              92%
            </div>
          </GlassCard>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Languages + ML Tools */}
          <div className="flex flex-col gap-8">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 1.0],
              }}
            >
              <p
                className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
                style={{ color: "#7F8AA6" }}
              >
                Languages
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 gap-3">
                {languages.map((l) => (
                  <TechTile key={l.name} {...l} />
                ))}
              </div>
            </motion.div>

            {/* ML / AI Tools */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 1.0],
              }}
            >
              <p
                className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
                style={{ color: "#C084FC" }}
              >
                ML / AI Frameworks
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 gap-3">
                {mlTools.map((t) => (
                  <TechTile key={t.name} {...t} />
                ))}
              </div>
            </motion.div>

            {/* Other Tools */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.25,
                ease: [0.25, 0.46, 0.45, 1.0],
              }}
            >
              <p
                className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
                style={{ color: "#7F8AA6" }}
              >
                Other Tools
              </p>
              <div className="grid grid-cols-3 gap-3">
                {devTools.map((t) => (
                  <TechTile key={t.name} {...t} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Specializations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 1.0],
            }}
          >
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-6"
              style={{ color: "#7F8AA6" }}
            >
              Specializations
            </p>
            <GlassCard className="p-6 flex flex-col gap-5">
              {specializations.map((s, i) => (
                <SkillBar
                  key={s.label}
                  {...s}
                  inView={inView}
                  delay={0.3 + i * 0.12}
                />
              ))}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
