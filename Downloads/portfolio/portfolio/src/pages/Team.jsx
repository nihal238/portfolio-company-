import { useState } from "react";
import { C } from "../theme";
import { TEAM } from "../data";
import { Reveal, SectionHead, CTABanner } from "../components/UI";

export default function Team({ navigate }) {
  const [active, setActive] = useState(null);

  return (
    <main style={{ minHeight:"100vh", paddingTop:72 }}>

      {/* Hero */}
      <section style={{ padding:"80px 48px 48px", maxWidth:1280, margin:"0 auto" }}>
        <div style={{ maxWidth:680, animation:"fadeUp 0.8s ease both" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(108,99,255,0.12)", border:"1px solid rgba(108,99,255,0.25)", borderRadius:100, padding:"6px 18px", fontSize:11, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", color:"#A89CFF", marginBottom:22 }}>The people</div>
          <h1 style={{ fontSize:"clamp(38px,6vw,72px)", fontWeight:900, letterSpacing:"-3px", lineHeight:1.05, marginBottom:20 }}>
            The minds behind<br />
            <span style={{ background:"linear-gradient(90deg,#6C63FF,#00D9A5)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>the magic.</span>
          </h1>
          <p style={{ fontSize:17, color:C.muted, lineHeight:1.85, fontWeight:300 }}>50+ engineers, designers, and strategists working together to build software that matters. Here's the leadership driving it all.</p>
        </div>
      </section>

      {/* Team grid */}
      <section style={{ padding:"0 48px 80px", maxWidth:1280, margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:20 }}>
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 70}>
              <div
                onClick={()=>setActive(active===m.name?null:m.name)}
                style={{ background:active===m.name?`${m.color}10`:"rgba(255,255,255,0.025)", border:`1px solid ${active===m.name?`${m.color}35`:C.border}`, borderRadius:20, padding:"32px 26px", cursor:"pointer", transition:"all 0.3s", transform:active===m.name?"translateY(-4px)":"none", borderTop:`3px solid ${m.color}` }}
              >
                <div style={{ width:64, height:64, borderRadius:"50%", background:`${m.color}20`, border:`2px solid ${m.color}45`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, fontWeight:700, color:m.color, margin:"0 0 20px" }}>{m.init}</div>
                <h3 style={{ fontSize:18, fontWeight:800, marginBottom:5 }}>{m.name}</h3>
                <p style={{ fontSize:13, color:m.color, fontWeight:600, marginBottom:active===m.name?16:0 }}>{m.role}</p>
                {active===m.name && <p style={{ fontSize:13.5, color:C.muted, lineHeight:1.75, animation:"fadeUp 0.3s ease" }}>{m.bio}</p>}
                {active!==m.name && <p style={{ fontSize:12, color:C.faint, marginTop:12 }}>Click to read more</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Culture section */}
      <section style={{ padding:"80px 48px", background:C.bg2, borderTop:`1px solid ${C.border}`, borderBottom:`1px solid ${C.border}` }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <SectionHead tag="Culture" title="Life at Softonex" sub="We've built an environment where great engineers do their best work." />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))", gap:18 }}>
            {[
              { icon:"🚀", title:"Ownership mindset",    desc:"Everyone is empowered to make decisions, raise ideas, and take credit for results." },
              { icon:"🎓", title:"Learning budget",      desc:"₹50,000/year per person for courses, conferences, and books — no approval needed." },
              { icon:"🌍", title:"Remote-friendly",      desc:"Most roles are hybrid or fully remote. We care about output, not office time." },
              { icon:"🏖️", title:"Flexible PTO",         desc:"Unlimited leave policy. We trust you to get your work done and take rest when needed." },
              { icon:"💪", title:"Health & wellness",    desc:"Full medical cover for you and your family, plus a wellness allowance." },
              { icon:"🤝", title:"Flat hierarchy",       desc:"Direct access to founders. No politics. No bureaucracy. Just building great things." },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div style={{ background:"rgba(255,255,255,0.03)", border:`1px solid ${C.border}`, borderRadius:16, padding:"24px 22px" }}>
                  <div style={{ fontSize:28, marginBottom:12 }}>{v.icon}</div>
                  <h4 style={{ fontWeight:700, fontSize:15, marginBottom:8 }}>{v.title}</h4>
                  <p style={{ fontSize:13, color:C.muted, lineHeight:1.7 }}>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Want to join the team?" sub="We're always looking for exceptional people who want to build software that matters." btnLabel="See Open Roles" onBtn={()=>navigate("/careers")} />
    </main>
  );
}
