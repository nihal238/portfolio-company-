import { useState, useEffect } from "react";
import { C, FONT } from "../theme";
import { NAV_ITEMS } from "../data";

export function Navbar({ currentPath, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [currentPath]);

  const go = (path) => { navigate(path); setMenuOpen(false); };

  return (
    <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:200, height:72, padding:"0 48px", display:"flex", alignItems:"center", justifyContent:"space-between", background:scrolled||menuOpen?"rgba(8,9,12,0.95)":"transparent", backdropFilter:scrolled||menuOpen?"blur(20px)":"none", borderBottom:scrolled||menuOpen?`1px solid ${C.border}`:"none", transition:"all 0.3s" }}>
      {/* Logo */}
      <div onClick={()=>go("/")} style={{ display:"flex", alignItems:"center", gap:10, cursor:"pointer", userSelect:"none" }}>
        <div style={{ width:36, height:36, borderRadius:10, background:"linear-gradient(135deg,#6C63FF,#00D9A5)", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:900, fontSize:17, color:C.bg }}>S</div>
        <span style={{ fontWeight:800, fontSize:17, letterSpacing:"-0.3px" }}>Softonex <span style={{ color:C.violet }}>Solutions</span></span>
      </div>

      {/* Links */}
      <div style={{ display:"flex", gap:2, alignItems:"center" }}>
        {NAV_ITEMS.map(item => {
          const active = currentPath===item.path || (item.path!=="/"&&currentPath.startsWith(item.path));
          return (
            <button key={item.path} onClick={()=>go(item.path)}
              style={{ background:active?"rgba(108,99,255,0.12)":"transparent", border:"none", color:active?C.violetL:"rgba(245,243,238,0.6)", fontWeight:active?700:500, fontSize:13, padding:"7px 13px", borderRadius:100, cursor:"pointer", fontFamily:FONT, transition:"all 0.2s" }}
              onMouseEnter={e=>{ if(!active) e.currentTarget.style.color=C.text; }}
              onMouseLeave={e=>{ if(!active) e.currentTarget.style.color="rgba(245,243,238,0.6)"; }}
            >{item.label}</button>
          );
        })}
        <button onClick={()=>go("/contact")}
          style={{ marginLeft:10, background:"linear-gradient(135deg,#6C63FF,#00D9A5)", color:C.bg, fontWeight:800, fontSize:13, padding:"9px 20px", borderRadius:100, border:"none", cursor:"pointer", fontFamily:FONT, transition:"all 0.2s" }}
          onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-1px)"; e.currentTarget.style.boxShadow="0 8px 24px rgba(108,99,255,0.3)"; }}
          onMouseLeave={e=>{ e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow=""; }}
        >Get a Quote</button>
      </div>
    </nav>
  );
}

export function Footer({ navigate }) {
  const cols = {
    Company:  [["About","/about"],["Team","/team"],["Blog","/blog"],["Careers","/careers"],["Contact","/contact"]],
    Services: [["Custom Software","/services"],["Mobile Apps","/services"],["AI & ML","/services"],["Cloud","/services"],["Cybersecurity","/services"]],
    Work:     [["Portfolio","/portfolio"],["Case Studies","/portfolio"]],
  };

  return (
    <footer style={{ background:C.bg2, borderTop:`1px solid ${C.border}`, padding:"64px 48px 36px" }}>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:48, marginBottom:52 }}>
          <div>
            <div onClick={()=>navigate("/")} style={{ display:"flex", alignItems:"center", gap:10, cursor:"pointer", marginBottom:16 }}>
              <div style={{ width:32, height:32, borderRadius:9, background:"linear-gradient(135deg,#6C63FF,#00D9A5)", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:900, fontSize:14, color:C.bg }}>S</div>
              <span style={{ fontWeight:800, fontSize:15 }}>Softonex <span style={{ color:C.violet }}>Solutions</span></span>
            </div>
            <p style={{ fontSize:13.5, color:C.muted, lineHeight:1.8, maxWidth:280, marginBottom:16 }}>Building world-class digital products from Rajkot, Gujarat — trusted by clients across India and beyond.</p>
            <p style={{ fontSize:12, color:C.faint }}>hello@softonexsolutions.com</p>
            <p style={{ fontSize:12, color:C.faint, marginTop:4 }}>+91 98765 43210</p>
          </div>
          {Object.entries(cols).map(([col, links]) => (
            <div key={col}>
              <div style={{ fontSize:11, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", color:C.faint, marginBottom:18 }}>{col}</div>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                {links.map(([label, path]) => (
                  <span key={label} onClick={()=>navigate(path)} style={{ fontSize:13.5, color:C.muted, cursor:"pointer", transition:"color 0.2s" }}
                    onMouseEnter={e=>e.currentTarget.style.color=C.teal}
                    onMouseLeave={e=>e.currentTarget.style.color=C.muted}
                  >{label}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:24, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
          <p style={{ fontSize:12, color:C.faint }}>© 2025 Softonex Solutions Pvt. Ltd. · Rajkot, Gujarat, India</p>
          <div style={{ display:"flex", gap:20 }}>
            {["Privacy Policy","Terms of Service"].map(l=>(
              <span key={l} style={{ fontSize:12, color:C.faint, cursor:"pointer" }}
                onMouseEnter={e=>e.currentTarget.style.color=C.text}
                onMouseLeave={e=>e.currentTarget.style.color=C.faint}
              >{l}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
