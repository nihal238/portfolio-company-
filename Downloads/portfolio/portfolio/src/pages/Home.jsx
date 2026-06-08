import { useState, useEffect } from "react";
import { C } from "../theme";
import { STATS, SERVICES, TESTIMONIALS, PROJECTS } from "../data";
import { Reveal, Tag, BtnPrimary, BtnOutline, StatCard, Card, CTABanner } from "../components/UI";

export default function Home({ navigate }) {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTestimonialIdx(p => (p + 1) % TESTIMONIALS.length), 4000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main style={{ minHeight:"100vh", paddingTop:72 }}>

      {/* ── HERO ── */}
      <section style={{ minHeight:"92vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding:"80px 24px 60px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"12%", left:"8%",  width:560, height:560, borderRadius:"50%", background:"radial-gradient(circle,rgba(108,99,255,0.11) 0%,transparent 68%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"8%",  right:"6%", width:420, height:420, borderRadius:"50%", background:"radial-gradient(circle,rgba(0,217,165,0.09) 0%,transparent 68%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", inset:0, opacity:0.04, backgroundImage:"linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)", backgroundSize:"60px 60px", pointerEvents:"none" }} />

        <div style={{ position:"relative", maxWidth:820, animation:"fadeUp 0.9s ease both" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(108,99,255,0.12)", border:"1px solid rgba(108,99,255,0.25)", borderRadius:100, padding:"7px 18px", fontSize:11, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", color:C.violetL, marginBottom:28 }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:C.teal, display:"inline-block", animation:"pulse 2s infinite" }} />
            Rajkot · Gujarat · India
          </div>
          <h1 style={{ fontSize:"clamp(44px,8vw,90px)", fontWeight:900, lineHeight:1.03, letterSpacing:"-3.5px", marginBottom:28 }}>
            Software that{" "}
            <span style={{ background:"linear-gradient(90deg,#6C63FF,#00D9A5)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>moves</span>
            <br />your business forward
          </h1>
          <p style={{ fontSize:18, color:C.muted, maxWidth:560, margin:"0 auto 44px", lineHeight:1.8, fontWeight:300 }}>
            From MVPs to enterprise platforms — Softonex builds custom digital products that scale, perform, and delight.
          </p>
          <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
            <BtnPrimary onClick={()=>navigate("/services")}>Explore Services</BtnPrimary>
            <BtnOutline  onClick={()=>navigate("/portfolio")}>See Our Work</BtnOutline>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{ position:"absolute", bottom:-3, left:"50%", transform:"translateX(-50%)", display:"flex", gap:56, flexWrap:"wrap", justifyContent:"center" }}>
          {STATS.map(s => <StatCard key={s.label} val={s.val} label={s.label} />)}
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section style={{ padding:"80px 48px", maxWidth:1280, margin:"0 auto" }}>
        <Reveal style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:48, flexWrap:"wrap", gap:20 }}>
          <div>
            <Tag>What we do</Tag>
            <h2 style={{ fontSize:"clamp(28px,4vw,48px)", fontWeight:900, letterSpacing:"-2px" }}>Full-spectrum digital services</h2>
          </div>
          <BtnOutline onClick={()=>navigate("/services")}>View All Services →</BtnOutline>
        </Reveal>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(290px,1fr))", gap:18 }}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <Card accentColor={s.color} style={{ padding:"28px 26px", borderTop:`3px solid ${s.color}`, cursor:"pointer" }} onClick={()=>navigate("/services")}>
                <div style={{ fontSize:34, marginBottom:16 }}>{s.icon}</div>
                <h3 style={{ fontSize:18, fontWeight:800, marginBottom:10 }}>{s.title}</h3>
                <p style={{ fontSize:13.5, color:C.muted, lineHeight:1.75 }}>{s.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section style={{ padding:"80px 48px", background:C.bg2, borderTop:`1px solid ${C.border}`, borderBottom:`1px solid ${C.border}` }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <Reveal style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:48, flexWrap:"wrap", gap:20 }}>
            <div>
              <Tag>Our work</Tag>
              <h2 style={{ fontSize:"clamp(28px,4vw,48px)", fontWeight:900, letterSpacing:"-2px" }}>Recent projects</h2>
            </div>
            <BtnOutline onClick={()=>navigate("/portfolio")}>Full Portfolio →</BtnOutline>
          </Reveal>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:18 }}>
            {PROJECTS.slice(0,4).map((p, i) => (
              <Reveal key={p.id} delay={i * 70}>
                <Card accentColor={p.color} style={{ padding:"26px", cursor:"pointer", position:"relative", overflow:"hidden", borderTop:`3px solid ${p.color}` }} onClick={()=>navigate("/portfolio")}>
                  <div style={{ fontSize:30, marginBottom:14 }}>{p.emoji}</div>
                  <div style={{ fontSize:11, fontWeight:700, color:p.color, letterSpacing:"1px", textTransform:"uppercase", marginBottom:8 }}>{p.category} · {p.year}</div>
                  <h3 style={{ fontSize:18, fontWeight:800, letterSpacing:"-0.5px", marginBottom:6 }}>{p.title}</h3>
                  <p style={{ fontSize:13, color:C.muted }}>{p.client}</p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginTop:14 }}>
                    {p.impact.map(imp => (
                      <span key={imp} style={{ fontSize:11, fontWeight:600, color:p.accent, background:`${p.color}12`, border:`1px solid ${p.color}22`, borderRadius:100, padding:"3px 10px" }}>{imp}</span>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding:"80px 48px", maxWidth:860, margin:"0 auto", textAlign:"center" }}>
        <Reveal>
          <Tag>Client love</Tag>
          <h2 style={{ fontSize:"clamp(26px,4vw,44px)", fontWeight:900, letterSpacing:"-2px", marginBottom:48 }}>What our clients say</h2>
          <Card hover={false} style={{ padding:"48px 52px", minHeight:220 }}>
            <div style={{ fontSize:48, color:C.violet, lineHeight:1, marginBottom:20 }}>"</div>
            <p style={{ fontSize:17, lineHeight:1.85, color:"rgba(245,243,238,0.8)", marginBottom:32, fontStyle:"italic" }}>{TESTIMONIALS[testimonialIdx].quote}</p>
            <div style={{ fontWeight:700, marginBottom:4 }}>{TESTIMONIALS[testimonialIdx].name}</div>
            <div style={{ fontSize:13, color:C.faint }}>{TESTIMONIALS[testimonialIdx].company}</div>
          </Card>
          <div style={{ display:"flex", justifyContent:"center", gap:8, marginTop:20 }}>
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={()=>setTestimonialIdx(i)} style={{ width:i===testimonialIdx?28:8, height:8, borderRadius:4, border:"none", cursor:"pointer", background:i===testimonialIdx?C.violet:"rgba(255,255,255,0.18)", transition:"all 0.3s" }} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title="Ready to build something great?"
        sub="Tell us about your project and we'll put together a team, timeline, and proposal within 48 hours."
        btnLabel="Start a Project"
        onBtn={()=>navigate("/contact")}
      />
    </main>
  );
}
