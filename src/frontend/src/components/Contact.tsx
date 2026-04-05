import { useActor } from "@/hooks/useActor";
import { AlertCircle, CheckCircle, Loader2, Mail } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import GlassCard from "./GlassCard";

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { actor } = useActor();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;
    setFormState("submitting");
    setErrorMsg("");
    try {
      await actor.sendContactMessage(name.trim(), email.trim(), message.trim());
      setFormState("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong. Please try again.");
      setFormState("error");
    }
  };

  const inputBase: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    color: "#EAF0FF",
    fontSize: "14px",
    padding: "12px 16px",
    outline: "none",
    transition: "border-color 0.2s",
    width: "100%",
  };

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.currentTarget.style.borderColor = "rgba(62,166,255,0.5)";
  };
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
  };

  const social = [
    {
      icon: SiGithub,
      href: "https://github.com/Vivekpatnaik",
      label: "GitHub",
    },
    {
      icon: SiLinkedin,
      href: "https://www.linkedin.com/in/vivekpatnaik",
      label: "LinkedIn",
    },
  ];

  return (
    <section
      id="contact"
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
            Get In <span className="text-gradient-blue">Touch</span>
          </h2>
          <div
            className="mx-auto h-0.5 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, #3EA6FF, #8B5CF6)" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-4xl mx-auto">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 1.0],
            }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <GlassCard className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(62,166,255,0.15)" }}
                >
                  <Mail size={18} color="#3EA6FF" />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "#7F8AA6" }}>
                    Email
                  </p>
                  <a
                    href="mailto:call2vivekb@gmail.com"
                    className="text-sm font-medium hover:underline"
                    style={{ color: "#EAF0FF" }}
                  >
                    call2vivekb@gmail.com
                  </a>
                </div>
              </div>

              <div
                className="h-px w-full"
                style={{ background: "rgba(255,255,255,0.06)" }}
              />

              <div>
                <p className="text-xs mb-3" style={{ color: "#7F8AA6" }}>
                  Find me on
                </p>
                <div className="flex gap-3">
                  {social.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid={`contact.${s.label.toLowerCase()}.link`}
                      aria-label={s.label}
                      className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#A7B0C6",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          "rgba(62,166,255,0.15)";
                        e.currentTarget.style.color = "#3EA6FF";
                        e.currentTarget.style.borderColor =
                          "rgba(62,166,255,0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          "rgba(255,255,255,0.06)";
                        e.currentTarget.style.color = "#A7B0C6";
                        e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.1)";
                      }}
                    >
                      <s.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              <div
                className="h-px w-full"
                style={{ background: "rgba(255,255,255,0.06)" }}
              />

              <p
                className="text-sm leading-relaxed"
                style={{ color: "#A7B0C6" }}
              >
                Open to new opportunities and interesting projects. Feel free to
                reach out &mdash; I&apos;d love to connect!
              </p>
            </GlassCard>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.65,
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 1.0],
            }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-6">
              {formState === "success" ? (
                <div
                  data-ocid="contact.success_state"
                  className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                >
                  <CheckCircle size={48} color="#3EA6FF" />
                  <h3
                    className="text-lg font-bold"
                    style={{ color: "#EAF0FF" }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-sm" style={{ color: "#A7B0C6" }}>
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormState("idle")}
                    className="btn-gradient text-white text-sm font-semibold px-6 py-2.5 rounded-full mt-2"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                  data-ocid="contact.dialog"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-name"
                        className="text-xs font-medium tracking-wide"
                        style={{ color: "#7F8AA6" }}
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        data-ocid="contact.name.input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        required
                        style={inputBase}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-email"
                        className="text-xs font-medium tracking-wide"
                        style={{ color: "#7F8AA6" }}
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        data-ocid="contact.email.input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@email.com"
                        required
                        style={inputBase}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-message"
                      className="text-xs font-medium tracking-wide"
                      style={{ color: "#7F8AA6" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      data-ocid="contact.message.textarea"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      style={{ ...inputBase, resize: "vertical" }}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>

                  {formState === "error" && (
                    <div
                      data-ocid="contact.error_state"
                      className="flex items-center gap-2 text-sm px-4 py-3 rounded-lg"
                      style={{
                        background: "rgba(239,68,68,0.1)",
                        border: "1px solid rgba(239,68,68,0.2)",
                        color: "#FCA5A5",
                      }}
                    >
                      <AlertCircle size={16} />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    data-ocid="contact.submit.submit_button"
                    type="submit"
                    disabled={formState === "submitting"}
                    className="btn-gradient text-white font-semibold py-3.5 rounded-xl text-sm tracking-wide flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === "submitting" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
