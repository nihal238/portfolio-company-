import { C } from "../theme";
import { STATS, TEAM } from "../data";
import { Reveal, Tag, SectionHead, BtnPrimary, StatCard, CTABanner } from "../components/UI";

const MILESTONES = [
  { year:"2012", title:"Founded in Rajkot", desc:"Started as a 4-person team building custom web solutions for local businesses." },
  { year:"2015", title:"First Enterprise Client", desc:"Landed a 12-month ERP project with a 300-person manufacturer — our first large-scale engagement." },
  { year:"2018", title:"AI Practice Launched", desc:"Hired our first data scientists and shipped our first production ML model for a fintech client." },
  { year:"2020", title:"Went Remote-First", desc:"Expanded hiring across India. Grew to 30+ engineers while maintaining quality and culture." },
  { year:"2022", title:"International Expansion", desc:"First clients in the UAE and UK. Revenue crossed ₹10Cr for the first time." },
  { year:"2024", title:"50+ Engineers Strong", desc:"300+ projects delivered. 98% client retention. Recognised as a top IT company in Gujarat." },
];

const VALUES = [
  { icon:"🎯", title:"Outcome-Driven",   desc:"We measure success by business results, not lines of code or hours billed." },
  { icon:"🔍", title:"Radical Clarity",  desc:"No jargon, no surprises. We communicate honestly at every step of a project." },
  { icon:"🛠️", title:"Craft First",      desc:"We sweat every detail — from architecture to UI — because quality compounds." },
  { icon:"🤝", title:"Long-Term View",   desc:"98% of our clients return. We build relationships, not just software." },
];

export default function About({ navigate }) {
  return (
    <main style={{ minHeight:"100vh", paddingTop:72 }}>

      {/* Hero */}
      <section style={{ padding:"80px 48px 64px", maxWidth:1280, margin:"0 auto", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, right:0, width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(0,217,165,0.07) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div style={{ maxWidth:700, animation:"fadeUp 0.8s ease both" }}>
          <Tag>Our story</Tag>
          <h1 style={{ fontSize:"clamp(40px,7vw,76px)", fontWeight:900, letterSpacing:"-3px", lineHeight:1.05, marginBottom:24 }}>
            Built in Rajkot.<br />
            <span style={{ background:"linear-gradient(90deg,#6C63FF,#00D9A5)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Trusted worldwide.</span>
          </h1>
          <p style={{ fontSize:17, color:C.muted, lineHeight:1.85, maxWidth:560, fontWeight:300 }}>
            Founded in 2012, Softonex Solutions began as a small team of passionate engineers. Today we're a 50+ member powerhouse delivering world-class software to clients across India, the Middle East, and Europe.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding:"0 48px 80px", maxWidth:1280, margin:"0 auto" }}>
        <Reveal>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:20 }}>
            {STATS.map(s => (
              <div key={s.label} style={{ background:"rgba(255,255,255,0.03)", border:`1px solid ${C.border}`, borderRadius:20, padding:"36px 28px", textAlign:"center" }}>
                <StatCard val={s.val} label={s.label} />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Mission */}
      <section style={{ padding:"80px 48px", background:C.bg2, borderTop:`1px solid ${C.border}`, borderBottom:`1px solid ${C.border}` }}>
        <div style={{ maxWidth:1280, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>
          <Reveal>
            <Tag>Our mission</Tag>
            <h2 style={{ fontSize:"clamp(28px,4vw,46px)", fontWeight:900, letterSpacing:"-2px", lineHeight:1.1, marginBottom:20 }}>We believe great software is a craft</h2>
            <p style={{ fontSize:15, color:C.muted, lineHeight:1.9, marginBottom:16 }}>
              Combining rigorous engineering with thoughtful product design to create tools people actually love to use. Every pixel, every API response, every database query is an opportunity to do something excellent.
            </p>
            <p style={{ fontSize:15, color:C.muted, lineHeight:1.9, marginBottom:32 }}>
              We partner with businesses who share that conviction — from fast-moving startups to established enterprises looking to raise their digital game.
            </p>
            <BtnPrimary onClick={()=>navigate("/contact")}>Work With Us →</BtnPrimary>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
              {VALUES.map(v => (
                <div key={v.title} style={{ background:"rgba(255,255,255,0.04)", border:`1px solid ${C.border}`, borderRadius:16, padding:"26px 22px" }}>
                  <div style={{ fontSize:28, marginBottom:12 }}>{v.icon}</div>
                  <h4 style={{ fontWeight:700, fontSize:15, marginBottom:8 }}>{v.title}</h4>
                  <p style={{ fontSize:13, color:C.muted, lineHeight:1.7 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding:"80px 48px", maxWidth:1280, margin:"0 auto" }}>
        <SectionHead tag="History" title="Our journey" sub="A decade of building, shipping, and growing." />
        <div style={{ position:"relative" }}>
          <div style={{ position:"absolute", left:119, top:0, bottom:0, width:1, background:`linear-gradient(to bottom,${C.violet},${C.teal})`, opacity:0.3 }} />
          <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
            {MILESTONES.map((m, i) => (
              <Reveal key={m.year} delay={i * 80}>
                <div style={{ display:"flex", gap:0, alignItems:"flex-start", paddingBottom:40 }}>
                  <div style={{ width:120, textAlign:"right", paddingRight:24, paddingTop:4, flexShrink:0 }}>
                    <span style={{ fontSize:13, fontWeight:700, color:C.violet, fontFamily:"'JetBrains Mono',monospace" }}>{m.year}</span>
                  </div>
                  <div style={{ width:18, height:18, borderRadius:"50%", background:`linear-gradient(135deg,${C.violet},${C.teal})`, flexShrink:0, marginTop:2, marginLeft:-9, zIndex:1, position:"relative" }} />
                  <div style={{ paddingLeft:24, paddingBottom:8 }}>
                    <h4 style={{ fontWeight:700, fontSize:16, marginBottom:6 }}>{m.title}</h4>
                    <p style={{ fontSize:14, color:C.muted, lineHeight:1.7, maxWidth:480 }}>{m.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team preview */}
      <section style={{ padding:"0 48px 80px", maxWidth:1280, margin:"0 auto" }}>
        <Reveal style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:40, flexWrap:"wrap", gap:20 }}>
          <div>
            <Tag>Leadership</Tag>
            <h2 style={{ fontSize:"clamp(26px,4vw,44px)", fontWeight:900, letterSpacing:"-2px" }}>Meet the team</h2>
          </div>
          <button onClick={()=>navigate("/team")} style={{ background:"transparent", border:`1.5px solid rgba(245,243,238,0.2)`, color:C.text, padding:"12px 28px", borderRadius:100, cursor:"pointer", fontWeight:600, fontSize:14 }}>Full Team →</button>
        </Reveal>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:16 }}>
          {TEAM.slice(0,4).map((m, i) => (
            <Reveal key={m.name} delay={i * 70}>
              <div style={{ background:"rgba(255,255,255,0.03)", border:`1px solid ${C.border}`, borderRadius:20, padding:"28px 22px", textAlign:"center" }}>
                <div style={{ width:60, height:60, borderRadius:"50%", background:`${m.color}20`, border:`2px solid ${m.color}40`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, fontWeight:700, color:m.color, margin:"0 auto 16px" }}>{m.init}</div>
                <div style={{ fontWeight:700, fontSize:16, marginBottom:4 }}>{m.name}</div>
                <div style={{ fontSize:12, color:C.faint }}>{m.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner title="Let's build something together." sub="Share your challenge and we'll respond within 24 hours with ideas, not just a quote." btnLabel="Contact Us" onBtn={()=>navigate("/contact")} />
    </main>
  );
}
