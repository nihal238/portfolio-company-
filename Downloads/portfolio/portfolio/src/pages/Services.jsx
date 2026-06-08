import { C } from "../theme";
import { SERVICES } from "../data";
import { Reveal, Tag, SectionHead, BtnPrimary, CTABanner, Card } from "../components/UI";

const PROCESS = [
  { num:"01", title:"Discovery & Scoping",    desc:"We deep-dive into your business, users, and technical environment to define the right problem before writing a line of code." },
  { num:"02", title:"Architecture & Design",  desc:"System architecture, tech stack selection, and high-fidelity prototypes — all signed off by you before dev begins." },
  { num:"03", title:"Agile Development",      desc:"Two-week sprints with demos. You see real progress every fortnight and can course-correct at any time." },
  { num:"04", title:"QA & Security Testing",  desc:"Automated tests, manual QA, and security review on every release. Nothing ships that hasn't been thoroughly vetted." },
  { num:"05", title:"Launch & Handover",      desc:"Zero-downtime deployments. Full documentation. Knowledge transfer so your team is never left in the dark." },
  { num:"06", title:"Ongoing Support",        desc:"SLA-backed maintenance, performance monitoring, and feature development after launch — as little or as much as you need." },
];

const TECH_STACK = {
  Frontend:  ["React","Next.js","Vue.js","Flutter","React Native","TypeScript"],
  Backend:   ["Node.js","Python","Django","FastAPI","Go","Java Spring"],
  Database:  ["PostgreSQL","MongoDB","Redis","Elasticsearch","MySQL","DynamoDB"],
  Cloud:     ["AWS","GCP","Azure","Docker","Kubernetes","Terraform"],
  AI:        ["PyTorch","TensorFlow","OpenAI API","LangChain","Scikit-learn","Kafka"],
};

export default function Services({ navigate }) {
  return (
    <main style={{ minHeight:"100vh", paddingTop:72 }}>

      {/* Hero */}
      <section style={{ padding:"80px 48px 64px", maxWidth:1280, margin:"0 auto", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, left:0, width:600, height:600, borderRadius:"50%", background:"radial-gradient(circle,rgba(108,99,255,0.08) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div style={{ maxWidth:680, animation:"fadeUp 0.8s ease both" }}>
          <Tag>What we offer</Tag>
          <h1 style={{ fontSize:"clamp(38px,6vw,72px)", fontWeight:900, letterSpacing:"-3px", lineHeight:1.05, marginBottom:22 }}>
            Everything you need to<br />
            <span style={{ background:"linear-gradient(90deg,#6C63FF,#00D9A5)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>ship great software</span>
          </h1>
          <p style={{ fontSize:17, color:C.muted, lineHeight:1.85, fontWeight:300 }}>From initial discovery to post-launch support — we handle the full lifecycle so you can focus on your business.</p>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ padding:"0 48px 80px", maxWidth:1280, margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))", gap:20 }}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <Card accentColor={s.color} style={{ padding:"36px 30px", borderTop:`3px solid ${s.color}`, height:"100%" }}>
                <div style={{ fontSize:38, marginBottom:20 }}>{s.icon}</div>
                <h3 style={{ fontSize:20, fontWeight:800, letterSpacing:"-0.5px", marginBottom:12 }}>{s.title}</h3>
                <p style={{ fontSize:14, color:C.muted, lineHeight:1.8 }}>{s.desc}</p>
                <div style={{ marginTop:20, width:36, height:3, background:s.color, borderRadius:2 }} />
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section style={{ padding:"80px 48px", background:C.bg2, borderTop:`1px solid ${C.border}`, borderBottom:`1px solid ${C.border}` }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <SectionHead tag="How we work" title="Our delivery process" sub="A proven 6-step process refined over 300+ projects across 12 years." />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:18 }}>
            {PROCESS.map((p, i) => (
              <Reveal key={p.num} delay={i * 60}>
                <div style={{ padding:"28px 26px", background:"rgba(255,255,255,0.025)", border:`1px solid ${C.border}`, borderRadius:18 }}>
                  <div style={{ fontSize:28, fontWeight:900, color:"rgba(108,99,255,0.35)", fontFamily:"'JetBrains Mono',monospace", marginBottom:14 }}>{p.num}</div>
                  <h4 style={{ fontWeight:700, fontSize:16, marginBottom:10 }}>{p.title}</h4>
                  <p style={{ fontSize:13.5, color:C.muted, lineHeight:1.75 }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section style={{ padding:"80px 48px", maxWidth:1280, margin:"0 auto" }}>
        <SectionHead tag="Technologies" title="Our tech stack" sub="We choose tools based on what's best for your project — not what's trending." />
        <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
          {Object.entries(TECH_STACK).map(([cat, items], i) => (
            <Reveal key={cat} delay={i * 50}>
              <div style={{ display:"flex", alignItems:"center", gap:20, padding:"22px 28px", background:"rgba(255,255,255,0.025)", border:`1px solid ${C.border}`, borderRadius:16, flexWrap:"wrap" }}>
                <span style={{ fontSize:12, fontWeight:700, letterSpacing:"1.2px", textTransform:"uppercase", color:C.faint, minWidth:90 }}>{cat}</span>
                <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                  {items.map(tech => (
                    <span key={tech} style={{ fontSize:13, color:C.muted, background:"rgba(255,255,255,0.06)", border:`1px solid ${C.border}`, borderRadius:8, padding:"5px 14px", fontFamily:"'JetBrains Mono',monospace" }}>{tech}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner title="Not sure which service you need?" sub="Tell us your challenge and we'll recommend the right approach — no obligation." btnLabel="Talk to Our Team" onBtn={()=>navigate("/contact")} />
    </main>
  );
}
