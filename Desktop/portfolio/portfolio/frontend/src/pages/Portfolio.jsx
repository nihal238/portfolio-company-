import { useState } from "react";
import { C } from "../theme";
import { PROJECTS } from "../data";
import { Reveal, Tag, BtnPrimary, ImpactPill, TechTag, CTABanner, Card } from "../components/UI";

const CATS = ["All", "Web Apps", "AI / ML", "Mobile", "E-Commerce"];

function Modal({ project: p, onClose }) {
  if (!p) return null;
  return (
    <div onClick={onClose} style={{ position:"fixed", inset:0, zIndex:300, background:"rgba(5,5,8,0.88)", backdropFilter:"blur(12px)", display:"flex", alignItems:"center", justifyContent:"center", padding:24, animation:"fadeIn 0.2s ease" }}>
      <div onClick={e=>e.stopPropagation()} style={{ background:"#0F1016", border:`1px solid ${p.color}30`, borderTop:`3px solid ${p.color}`, borderRadius:24, padding:"44px", maxWidth:680, width:"100%", maxHeight:"88vh", overflowY:"auto", animation:"slideUp 0.3s ease", position:"relative" }}>
        <button onClick={onClose} style={{ position:"absolute", top:18, right:18, background:"rgba(255,255,255,0.06)", border:`1px solid ${C.border}`, color:C.muted, borderRadius:10, width:36, height:36, cursor:"pointer", fontSize:18, display:"flex", alignItems:"center", justifyContent:"center" }}>×</button>
        <div style={{ fontSize:44, marginBottom:18 }}>{p.emoji}</div>
        <div style={{ fontSize:11, fontWeight:700, letterSpacing:"1.2px", textTransform:"uppercase", color:p.color, background:`${p.color}18`, border:`1px solid ${p.color}33`, borderRadius:100, padding:"4px 14px", display:"inline-block", marginBottom:14 }}>{p.category}</div>
        <h2 style={{ fontSize:34, fontWeight:900, letterSpacing:"-1px", marginBottom:6 }}>{p.title}</h2>
        <p style={{ fontSize:13, color:C.faint, marginBottom:24 }}>{p.client} · {p.year}</p>
        <p style={{ fontSize:15, lineHeight:1.85, color:"rgba(245,243,238,0.75)", marginBottom:28 }}>{p.summary}</p>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12, marginBottom:28 }}>
          {[["Duration",p.duration],["Team",p.team],["Year",p.year]].map(([k,v])=>(
            <div key={k} style={{ background:"rgba(255,255,255,0.04)", border:`1px solid ${C.border}`, borderRadius:14, padding:"16px 18px" }}>
              <div style={{ fontSize:11, color:C.faint, textTransform:"uppercase", letterSpacing:"0.5px", marginBottom:6 }}>{k}</div>
              <div style={{ fontSize:14, fontWeight:700 }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ marginBottom:28 }}>
          <div style={{ fontSize:12, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", color:C.faint, marginBottom:12 }}>Key Impact</div>
          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            {p.impact.map(imp=>(
              <div key={imp} style={{ display:"flex", alignItems:"center", gap:12 }}>
                <div style={{ width:6, height:6, borderRadius:"50%", background:p.color, flexShrink:0 }} />
                <span style={{ fontSize:15, fontWeight:600, color:p.accent }}>{imp}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize:12, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", color:C.faint, marginBottom:12 }}>Tech Stack</div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            {p.tags.map(t=><TechTag key={t}>{t}</TechTag>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio({ navigate }) {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  const counts = CATS.reduce((a, c) => ({ ...a, [c]: c==="All"?PROJECTS.length:PROJECTS.filter(p=>p.category===c).length }), {});

  return (
    <main style={{ minHeight:"100vh", paddingTop:72 }}>

      {/* Hero */}
      <section style={{ padding:"80px 48px 48px", maxWidth:1280, margin:"0 auto", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, right:"5%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(108,99,255,0.08) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div style={{ maxWidth:700, animation:"fadeUp 0.8s ease both" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(108,99,255,0.12)", border:"1px solid rgba(108,99,255,0.25)", borderRadius:100, padding:"7px 18px", fontSize:11, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", color:"#A89CFF", marginBottom:24 }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:"#00D9A5", display:"inline-block", animation:"pulse 2s infinite" }} />
            Client Work · 2020–2024
          </div>
          <h1 style={{ fontSize:"clamp(38px,6vw,74px)", fontWeight:900, letterSpacing:"-3px", lineHeight:1.05, marginBottom:20 }}>
            Work that speaks<br />
            <span style={{ background:"linear-gradient(90deg,#6C63FF,#00D9A5,#FF6B6B)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>for itself.</span>
          </h1>
          <p style={{ fontSize:17, color:C.muted, lineHeight:1.8, fontWeight:300 }}>A selection of products we've designed, engineered, and launched for clients across India and beyond.</p>
        </div>
      </section>

      {/* Filter bar */}
      <div style={{ position:"sticky", top:72, zIndex:100, background:"rgba(8,9,12,0.93)", backdropFilter:"blur(16px)", borderBottom:`1px solid ${C.border}` }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"14px 48px", display:"flex", gap:8, overflowX:"auto" }}>
          {CATS.map(cat => {
            const active = filter === cat;
            return (
              <button key={cat} onClick={()=>setFilter(cat)} style={{ display:"flex", alignItems:"center", gap:6, padding:"8px 18px", borderRadius:100, border:active?"1px solid rgba(108,99,255,0.45)":"1px solid rgba(255,255,255,0.07)", background:active?"rgba(108,99,255,0.16)":"rgba(255,255,255,0.025)", color:active?C.violetL:"rgba(245,243,238,0.5)", fontWeight:active?700:500, fontSize:13, cursor:"pointer", whiteSpace:"nowrap", transition:"all 0.2s", fontFamily:"'Sora',sans-serif" }}>
                {cat} <span style={{ fontSize:10, fontWeight:700, background:active?"rgba(108,99,255,0.3)":"rgba(255,255,255,0.08)", color:active?"#C0B8FF":"rgba(245,243,238,0.3)", borderRadius:100, padding:"2px 7px" }}>{counts[cat]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <section style={{ padding:"48px 48px 80px", maxWidth:1280, margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))", gap:20 }}>
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={i * 55}>
              <Card accentColor={p.color} style={{ padding:"28px 26px 24px", cursor:"pointer", borderTop:`3px solid ${p.color}`, position:"relative", overflow:"hidden" }} onClick={()=>setSelected(p)}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14 }}>
                  <span style={{ fontSize:32 }}>{p.emoji}</span>
                  <span style={{ fontSize:11, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", color:p.color, background:`${p.color}18`, border:`1px solid ${p.color}33`, borderRadius:100, padding:"4px 12px" }}>{p.category}</span>
                </div>
                <h3 style={{ fontSize:20, fontWeight:800, letterSpacing:"-0.5px", marginBottom:4 }}>{p.title}</h3>
                <p style={{ fontSize:12, color:C.faint, marginBottom:12 }}>{p.client} · {p.year}</p>
                <p style={{ fontSize:13.5, color:C.muted, lineHeight:1.75, marginBottom:16 }}>{p.summary}</p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:12 }}>
                  {p.impact.map(imp=><ImpactPill key={imp} color={p.accent}>{imp}</ImpactPill>)}
                </div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                  {p.tags.map(t=><TechTag key={t}>{t}</TechTag>)}
                </div>
                <div style={{ marginTop:16, fontSize:13, fontWeight:700, color:p.color }}>View Case Study →</div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner title="Ready to build your next big thing?" sub="Tell us about your project and we'll put together a proposal within 48 hours." btnLabel="Start a Project" onBtn={()=>navigate("/contact")} />

      <Modal project={selected} onClose={()=>setSelected(null)} />
    </main>
  );
}
