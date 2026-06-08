import { useState } from "react";
import { C } from "../theme";
import { Reveal, Tag, BtnPrimary } from "../components/UI";

const OFFICES = [
  { city:"Rajkot (HQ)", address:"204 Tech Park, Kalawad Road, Rajkot, Gujarat — 360001", phone:"+91 98765 43210", email:"hello@softonexsolutions.com" },
  { city:"Mumbai",      address:"Level 12, One BKC, Bandra-Kurla Complex, Mumbai — 400051", phone:"+91 98765 43211", email:"mumbai@softonexsolutions.com" },
];

const FAQS = [
  { q:"How long does a typical project take?", a:"It depends on scope — a mobile MVP can be 8–12 weeks; a full enterprise platform may take 6–12 months. We scope every project carefully before committing to a timeline." },
  { q:"Do you work with startups or only enterprises?", a:"Both. We've launched products for solo founders and multinational enterprises. The engagement model adapts accordingly." },
  { q:"What does your pricing look like?", a:"We price per project or on a time-and-materials basis. After an initial discovery call, we'll give you a detailed estimate — no vague ballpark ranges." },
  { q:"Do you provide post-launch support?", a:"Yes. We offer SLA-backed maintenance plans covering bug fixes, security patches, performance monitoring, and feature development." },
];

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", company:"", budget:"", message:"" });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <main style={{ minHeight:"100vh", paddingTop:72 }}>

      {/* Hero */}
      <section style={{ padding:"80px 48px 48px", maxWidth:1280, margin:"0 auto" }}>
        <div style={{ maxWidth:680, animation:"fadeUp 0.8s ease both" }}>
          <Tag>Let's talk</Tag>
          <h1 style={{ fontSize:"clamp(38px,6vw,72px)", fontWeight:900, letterSpacing:"-3px", lineHeight:1.05, marginBottom:20 }}>
            Tell us about<br />
            <span style={{ background:"linear-gradient(90deg,#6C63FF,#00D9A5)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>your project.</span>
          </h1>
          <p style={{ fontSize:17, color:C.muted, lineHeight:1.85, fontWeight:300 }}>Whether you have a fully-formed spec or just an idea on a napkin — we'd love to hear from you. We respond within 24 hours.</p>
        </div>
      </section>

      {/* Form + info */}
      <section style={{ padding:"0 48px 80px", maxWidth:1280, margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"3fr 2fr", gap:56, alignItems:"start" }}>

          {/* Form */}
          <Reveal>
            {sent ? (
              <div style={{ background:"rgba(0,217,165,0.06)", border:"1px solid rgba(0,217,165,0.2)", borderRadius:24, padding:"64px 48px", textAlign:"center" }}>
                <div style={{ fontSize:52, marginBottom:20 }}>✅</div>
                <h3 style={{ fontSize:24, fontWeight:800, marginBottom:10 }}>Message received!</h3>
                <p style={{ color:C.muted, fontSize:15 }}>We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:16 }}>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
                  <div>
                    <label style={{ fontSize:12, fontWeight:600, color:C.faint, display:"block", marginBottom:8, letterSpacing:"0.5px" }}>Your name *</label>
                    <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required placeholder="Arjun Shah"
                      style={{ width:"100%", background:"rgba(255,255,255,0.05)", border:`1px solid ${C.border}`, borderRadius:12, padding:"13px 16px", color:C.text, fontFamily:"'Sora',sans-serif", fontSize:14, outline:"none", transition:"border-color 0.2s" }}
                      onFocus={e=>e.target.style.borderColor="#6C63FF"} onBlur={e=>e.target.style.borderColor=C.border} />
                  </div>
                  <div>
                    <label style={{ fontSize:12, fontWeight:600, color:C.faint, display:"block", marginBottom:8, letterSpacing:"0.5px" }}>Work email *</label>
                    <input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required placeholder="you@company.com"
                      style={{ width:"100%", background:"rgba(255,255,255,0.05)", border:`1px solid ${C.border}`, borderRadius:12, padding:"13px 16px", color:C.text, fontFamily:"'Sora',sans-serif", fontSize:14, outline:"none", transition:"border-color 0.2s" }}
                      onFocus={e=>e.target.style.borderColor="#6C63FF"} onBlur={e=>e.target.style.borderColor=C.border} />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize:12, fontWeight:600, color:C.faint, display:"block", marginBottom:8, letterSpacing:"0.5px" }}>Company</label>
                  <input value={form.company} onChange={e=>setForm({...form,company:e.target.value})} placeholder="Your company name"
                    style={{ width:"100%", background:"rgba(255,255,255,0.05)", border:`1px solid ${C.border}`, borderRadius:12, padding:"13px 16px", color:C.text, fontFamily:"'Sora',sans-serif", fontSize:14, outline:"none", transition:"border-color 0.2s" }}
                    onFocus={e=>e.target.style.borderColor="#6C63FF"} onBlur={e=>e.target.style.borderColor=C.border} />
                </div>
                <div>
                  <label style={{ fontSize:12, fontWeight:600, color:C.faint, display:"block", marginBottom:8, letterSpacing:"0.5px" }}>Estimated budget</label>
                  <select value={form.budget} onChange={e=>setForm({...form,budget:e.target.value})}
                    style={{ width:"100%", background:"#141519", border:`1px solid ${C.border}`, borderRadius:12, padding:"13px 16px", color:form.budget?C.text:C.faint, fontFamily:"'Sora',sans-serif", fontSize:14, outline:"none", cursor:"pointer" }}>
                    <option value="">Select a range</option>
                    <option>Under ₹5L</option>
                    <option>₹5L – ₹15L</option>
                    <option>₹15L – ₹50L</option>
                    <option>₹50L+</option>
                    <option>Let's discuss</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize:12, fontWeight:600, color:C.faint, display:"block", marginBottom:8, letterSpacing:"0.5px" }}>Tell us about your project *</label>
                  <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required rows={5} placeholder="What are you building? What's the challenge? What does success look like?"
                    style={{ width:"100%", background:"rgba(255,255,255,0.05)", border:`1px solid ${C.border}`, borderRadius:12, padding:"13px 16px", color:C.text, fontFamily:"'Sora',sans-serif", fontSize:14, outline:"none", resize:"vertical", transition:"border-color 0.2s" }}
                    onFocus={e=>e.target.style.borderColor="#6C63FF"} onBlur={e=>e.target.style.borderColor=C.border} />
                </div>
                <BtnPrimary style={{ marginTop:4 }}>Send Message →</BtnPrimary>
              </form>
            )}
          </Reveal>

          {/* Info panel */}
          <Reveal delay={120} style={{ display:"flex", flexDirection:"column", gap:24 }}>
            {OFFICES.map(o => (
              <div key={o.city} style={{ background:"rgba(255,255,255,0.03)", border:`1px solid ${C.border}`, borderRadius:18, padding:"26px 24px" }}>
                <h4 style={{ fontWeight:700, fontSize:15, marginBottom:14, color:C.violetL }}>{o.city}</h4>
                {[["📍",o.address],["📞",o.phone],["📧",o.email]].map(([icon,val])=>(
                  <div key={val} style={{ display:"flex", gap:10, marginBottom:10, alignItems:"flex-start" }}>
                    <span style={{ fontSize:14, flexShrink:0 }}>{icon}</span>
                    <span style={{ fontSize:13, color:C.muted, lineHeight:1.6 }}>{val}</span>
                  </div>
                ))}
              </div>
            ))}

            <div style={{ background:"rgba(108,99,255,0.08)", border:"1px solid rgba(108,99,255,0.2)", borderRadius:18, padding:"22px 24px" }}>
              <div style={{ fontSize:13, fontWeight:700, color:C.violetL, marginBottom:8 }}>⚡ Fast response guarantee</div>
              <p style={{ fontSize:13, color:C.muted, lineHeight:1.7 }}>Every inquiry gets a real, thoughtful response within 24 hours — not an automated reply.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding:"0 48px 100px", maxWidth:1280, margin:"0 auto" }}>
        <Reveal style={{ marginBottom:36 }}>
          <Tag>FAQ</Tag>
          <h2 style={{ fontSize:"clamp(26px,4vw,44px)", fontWeight:900, letterSpacing:"-2px" }}>Common questions</h2>
        </Reveal>
        <div style={{ display:"flex", flexDirection:"column", gap:12, maxWidth:760 }}>
          {FAQS.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 50}>
              <div style={{ background:openFaq===i?"rgba(108,99,255,0.06)":"rgba(255,255,255,0.025)", border:`1px solid ${openFaq===i?"rgba(108,99,255,0.3)":C.border}`, borderRadius:14, overflow:"hidden", transition:"all 0.3s" }}>
                <div onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{ padding:"20px 24px", cursor:"pointer", display:"flex", justifyContent:"space-between", alignItems:"center", gap:16 }}>
                  <span style={{ fontSize:15, fontWeight:700 }}>{faq.q}</span>
                  <span style={{ fontSize:18, color:C.violetL, flexShrink:0, transition:"transform 0.2s", transform:openFaq===i?"rotate(45deg)":"none" }}>+</span>
                </div>
                {openFaq===i && (
                  <div style={{ padding:"0 24px 20px", animation:"fadeUp 0.25s ease" }}>
                    <p style={{ fontSize:14, color:C.muted, lineHeight:1.8 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
