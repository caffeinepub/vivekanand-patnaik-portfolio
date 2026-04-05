import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "violet" | "none";
}

export default function GlassCard({
  children,
  className,
  glowColor = "none",
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card relative overflow-hidden",
        glowColor === "blue" && "neon-glow-blue",
        glowColor === "violet" && "neon-glow-violet",
        className,
      )}
    >
      {/* Top shimmer edge */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(62,166,255,0.3), rgba(139,92,246,0.3), transparent)",
        }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
