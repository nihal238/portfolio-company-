import { useState } from "react";
import { C } from "../theme";
import { JOBS } from "../data";
import { Reveal, Tag, SectionHead, BtnPrimary, CTABanner } from "../components/UI";

export default function Careers({ navigate }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <main style={{ minHeight: "100vh", paddingTop: 72 }}>

      {/* Hero */}
      <section style={{ padding: "80px 48px 64px", maxWidth: 1280, margin: "0 auto", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,217,165,0.07) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, animation: "fadeUp 0.8s ease both" }}>
          <Tag>We're hiring</Tag>
          <h1 style={{ fontSize: "clamp(38px,6vw,72px)", fontWeight: 900, letterSpacing: "-3px", lineHeight: 1.05, marginBottom: 22 }}>
            Build the future<br />
            <span style={{ background: "linear-gradient(90deg,#6C63FF,#00D9A5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>with us.</span>
          </h1>
          <p style={{ fontSize: 17, color: C.muted, lineHeight: 1.85, maxWidth: 540, fontWeight: 300 }}>We're a team of builders who care deeply about our craft. If that sounds like you, there's a good chance we have a role that fits.</p>
        </div>

        {/* Perks row */}
        <div style={{ display: "flex", gap: 20, marginTop: 52, flexWrap: "wrap" }}>
          {[["🌍", "Remote-friendly"], ["🎓", "₹50K learning budget"], ["💪", "Full health cover"], ["🚀", "Flat hierarchy"], ["🏖️", "Flexible PTO"], ["💰", "Competitive salary"]].map(([icon, label]) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.04)", border: `1px solid ${C.border}`, borderRadius: 100, padding: "8px 18px", fontSize: 13, color: C.muted }}>
              <span>{icon}</span>{label}
            </div>
          ))}
        </div>
      </section>

      {/* Job listings */}
      <section style={{ padding: "0 48px 80px", maxWidth: 1280, margin: "0 auto" }}>
        <Reveal style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.8px" }}>Open positions <span style={{ fontSize: 16, fontWeight: 600, color: C.faint, marginLeft: 8 }}>({JOBS.length} roles)</span></h2>
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {JOBS.map((job, i) => (
            <Reveal key={job.id} delay={i * 50}>
              <div
                style={{ background: expanded === job.id ? `${job.color}08` : "rgba(255,255,255,0.025)", border: `1px solid ${expanded === job.id ? `${job.color}30` : C.border}`, borderRadius: 18, overflow: "hidden", transition: "all 0.3s" }}
              >
                {/* Header row */}
                <div
                  onClick={() => setExpanded(expanded === job.id ? null : job.id)}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 28px", cursor: "pointer", flexWrap: "wrap", gap: 16 }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: `${job.color}20`, border: `1.5px solid ${job.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
                      {job.dept === "Engineering" ? "💻" : job.dept === "AI & Data" ? "🤖" : job.dept === "Mobile" ? "📱" : job.dept === "Design" ? "🎨" : job.dept === "Infrastructure" ? "☁️" : "📊"}
                    </div>
                    <div>
                      <h3 style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.3px" }}>{job.title}</h3>
                      <p style={{ fontSize: 13, color: C.faint, marginTop: 2 }}>{job.dept} · {job.location}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: job.color, background: `${job.color}15`, border: `1px solid ${job.color}30`, borderRadius: 100, padding: "4px 14px" }}>{job.type}</span>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, transition: "transform 0.2s", transform: expanded === job.id ? "rotate(180deg)" : "none" }}>▾</div>
                  </div>
                </div>

                {/* Expanded */}
                {expanded === job.id && (
                  <div style={{ padding: "0 28px 28px", animation: "fadeUp 0.3s ease", borderTop: `1px solid ${C.border}`, paddingTop: 24 }}>
                    <p style={{ fontSize: 14.5, color: C.muted, lineHeight: 1.8, marginBottom: 20 }}>{job.desc}</p>
                    <div style={{ marginBottom: 24 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: C.faint, marginBottom: 12 }}>Requirements</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {job.req.map(r => (
                          <div key={r} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <div style={{ width: 5, height: 5, borderRadius: "50%", background: job.color, flexShrink: 0 }} />
                            <span style={{ fontSize: 14, color: C.muted }}>{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <BtnPrimary onClick={() => navigate("/contact")}>Apply for this role →</BtnPrimary>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* No role section */}
      <section style={{ padding: "0 48px 80px", maxWidth: 1280, margin: "0 auto" }}>
        <Reveal>
          <div style={{ background: "rgba(255,255,255,0.025)", border: `1px solid ${C.border}`, borderRadius: 20, padding: "40px 44px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
            <div>
              <h3 style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.8px", marginBottom: 8 }}>Don't see a role that fits?</h3>
              <p style={{ fontSize: 14, color: C.muted, maxWidth: 420 }}>We're always interested in exceptional people. Send us your CV and tell us what you're great at.</p>
            </div>
            <BtnPrimary onClick={() => navigate("/contact")}>Send an Open Application →</BtnPrimary>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
