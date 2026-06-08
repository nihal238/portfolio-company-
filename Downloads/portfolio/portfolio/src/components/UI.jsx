import { useRef, useEffect, useState } from "react";
import { C, FONT } from "../theme";

export function Reveal({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.08 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: v?1:0, transform: v?"translateY(0)":"translateY(28px)", transition:`opacity 0.65s ease ${delay}ms,transform 0.65s ease ${delay}ms`, ...style }}>
      {children}
    </div>
  );
}

export function Tag({ children }) {
  return (
    <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(108,99,255,0.12)", border:"1px solid rgba(108,99,255,0.25)", borderRadius:100, padding:"6px 18px", fontSize:11, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", color:C.violetL, marginBottom:20 }}>
      {children}
    </div>
  );
}

export function SectionHead({ tag, title, sub, center = false }) {
  return (
    <Reveal style={{ textAlign:center?"center":"left", marginBottom:52 }}>
      <Tag>{tag}</Tag>
      <h2 style={{ fontSize:"clamp(30px,5vw,52px)", fontWeight:900, letterSpacing:"-2px", lineHeight:1.08, marginBottom:sub?16:0 }}>
        {title}
      </h2>
      {sub && <p style={{ fontSize:16, color:C.muted, maxWidth:center?520:480, margin:center?"0 auto":undefined, lineHeight:1.8, marginTop:12 }}>{sub}</p>}
    </Reveal>
  );
}

export function BtnPrimary({ children, onClick, style = {} }) {
  const [h, setH] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      style={{ background:C.grad, color:C.bg, fontWeight:800, fontSize:15, padding:"14px 34px", borderRadius:100, border:"none", cursor:"pointer", fontFamily:FONT, letterSpacing:"-0.2px", transform:h?"translateY(-2px)":"none", boxShadow:h?"0 16px 40px rgba(108,99,255,0.3)":"none", transition:"all 0.2s", ...style }}>
      {children}
    </button>
  );
}

export function BtnOutline({ children, onClick, style = {} }) {
  const [h, setH] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      style={{ background:"transparent", color:h?C.teal:C.text, fontWeight:600, fontSize:15, padding:"13px 32px", borderRadius:100, border:`1.5px solid ${h?C.teal:"rgba(245,243,238,0.2)"}`, cursor:"pointer", fontFamily:FONT, transition:"all 0.2s", ...style }}>
      {children}
    </button>
  );
}

export function Card({ children, hover = true, accentColor, style = {} }) {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={()=>hover&&setH(true)} onMouseLeave={()=>hover&&setH(false)}
      style={{ background: h&&accentColor ? `${accentColor}10` : h ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.025)", border:`1px solid ${h&&accentColor?`${accentColor}35`:h?"rgba(255,255,255,0.1)":C.border}`, borderRadius:20, transition:"all 0.3s", transform:h?"translateY(-4px)":"none", ...style }}>
      {children}
    </div>
  );
}

export function Avatar({ init, color, size = 52 }) {
  return (
    <div style={{ width:size, height:size, borderRadius:"50%", background:`${color}20`, border:`2px solid ${color}40`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:size*0.3, fontWeight:700, color, flexShrink:0 }}>
      {init}
    </div>
  );
}

export function ImpactPill({ children, color }) {
  return (
    <span style={{ fontSize:12, fontWeight:600, color, background:`${color}12`, border:`1px solid ${color}25`, borderRadius:100, padding:"4px 12px" }}>
      {children}
    </span>
  );
}

export function TechTag({ children }) {
  return (
    <span style={{ fontSize:11, color:"rgba(245,243,238,0.4)", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:6, padding:"3px 9px", fontFamily:"'JetBrains Mono',monospace" }}>
      {children}
    </span>
  );
}

export function StatCard({ val, label }) {
  return (
    <div style={{ textAlign:"center" }}>
      <div style={{ fontSize:36, fontWeight:900, letterSpacing:"-1px", background:C.grad, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>{val}</div>
      <div style={{ fontSize:12, color:C.faint, marginTop:4, letterSpacing:"0.3px" }}>{label}</div>
    </div>
  );
}

export function Page({ children }) {
  useEffect(() => { window.scrollTo(0,0); }, []);
  return <main style={{ minHeight:"100vh", paddingTop:72 }}>{children}</main>;
}

export function CTABanner({ title, sub, btnLabel = "Get in Touch", onBtn }) {
  return (
    <Reveal>
      <div style={{ margin:"0 48px 100px", borderRadius:28, background:"linear-gradient(135deg,rgba(108,99,255,0.12),rgba(0,217,165,0.08))", border:"1px solid rgba(108,99,255,0.2)", padding:"64px 56px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:32, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", right:-60, top:-60, width:300, height:300, borderRadius:"50%", background:"radial-gradient(circle,rgba(0,217,165,0.07) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div>
          <h2 style={{ fontSize:"clamp(24px,4vw,40px)", fontWeight:900, letterSpacing:"-1.5px", marginBottom:10 }}>{title}</h2>
          <p style={{ fontSize:15, color:C.muted, maxWidth:440, lineHeight:1.75 }}>{sub}</p>
        </div>
        <BtnPrimary onClick={onBtn}>{btnLabel} →</BtnPrimary>
      </div>
    </Reveal>
  );
}
