import { useState } from "react";
import { C } from "../theme";
import { BLOG_POSTS } from "../data";
import { Reveal, Tag, SectionHead, Card } from "../components/UI";

export default function Blog({ navigate }) {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <main style={{ minHeight:"100vh", paddingTop:72 }}>

      {/* Hero */}
      <section style={{ padding:"80px 48px 48px", maxWidth:1280, margin:"0 auto" }}>
        <div style={{ maxWidth:680, animation:"fadeUp 0.8s ease both" }}>
          <Tag>Insights</Tag>
          <h1 style={{ fontSize:"clamp(38px,6vw,72px)", fontWeight:900, letterSpacing:"-3px", lineHeight:1.05, marginBottom:20 }}>
            From the<br />
            <span style={{ background:"linear-gradient(90deg,#6C63FF,#00D9A5)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>engineering floor</span>
          </h1>
          <p style={{ fontSize:17, color:C.muted, lineHeight:1.85, fontWeight:300 }}>Honest takes on software architecture, AI, mobile development, and lessons from building 300+ products.</p>
        </div>
      </section>

      {/* Featured post */}
      <section style={{ padding:"0 48px 56px", maxWidth:1280, margin:"0 auto" }}>
        <Reveal>
          <div style={{ background:`linear-gradient(135deg,${featured.color}15,${featured.color}06)`, border:`1px solid ${featured.color}30`, borderRadius:24, padding:"52px 52px", cursor:"pointer", transition:"transform 0.3s", borderTop:`3px solid ${featured.color}` }}
            onMouseEnter={e=>e.currentTarget.style.transform="translateY(-4px)"}
            onMouseLeave={e=>e.currentTarget.style.transform=""}
          >
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:20, marginBottom:24 }}>
              <div>
                <div style={{ fontSize:11, fontWeight:700, letterSpacing:"1.2px", textTransform:"uppercase", color:featured.color, marginBottom:12 }}>Featured · {featured.category}</div>
                <h2 style={{ fontSize:"clamp(22px,3.5vw,36px)", fontWeight:900, letterSpacing:"-1px", maxWidth:560, lineHeight:1.15 }}>{featured.title}</h2>
              </div>
              <span style={{ fontSize:42 }}>{featured.emoji}</span>
            </div>
            <p style={{ fontSize:15, color:C.muted, lineHeight:1.8, maxWidth:600, marginBottom:24 }}>{featured.excerpt}</p>
            <div style={{ display:"flex", gap:20, alignItems:"center" }}>
              <span style={{ fontSize:13, color:C.faint }}>{featured.date}</span>
              <span style={{ fontSize:11, color:C.faint }}>·</span>
              <span style={{ fontSize:13, color:C.faint }}>{featured.read} read</span>
              <span style={{ fontSize:13, fontWeight:700, color:featured.color, marginLeft:"auto" }}>Read Article →</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Post grid */}
      <section style={{ padding:"0 48px 100px", maxWidth:1280, margin:"0 auto" }}>
        <Reveal style={{ marginBottom:32 }}>
          <h3 style={{ fontSize:22, fontWeight:800, letterSpacing:"-0.8px" }}>More articles</h3>
        </Reveal>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:18 }}>
          {rest.map((post, i) => (
            <Reveal key={post.id} delay={i * 60}>
              <Card accentColor={post.color} style={{ padding:"28px 26px", cursor:"pointer", borderTop:`3px solid ${post.color}`, height:"100%", display:"flex", flexDirection:"column" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:16 }}>
                  <div style={{ fontSize:11, fontWeight:700, letterSpacing:"1.2px", textTransform:"uppercase", color:post.color }}>{post.category}</div>
                  <span style={{ fontSize:28 }}>{post.emoji}</span>
                </div>
                <h4 style={{ fontSize:17, fontWeight:800, letterSpacing:"-0.4px", lineHeight:1.3, marginBottom:12 }}>{post.title}</h4>
                <p style={{ fontSize:13.5, color:C.muted, lineHeight:1.75, flex:1 }}>{post.excerpt}</p>
                <div style={{ display:"flex", gap:16, alignItems:"center", marginTop:20 }}>
                  <span style={{ fontSize:12, color:C.faint }}>{post.date}</span>
                  <span style={{ fontSize:12, color:C.faint }}>·</span>
                  <span style={{ fontSize:12, color:C.faint }}>{post.read} read</span>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
