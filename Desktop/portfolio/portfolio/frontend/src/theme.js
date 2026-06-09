export const C = {
  bg:      "#08090C",
  bg2:     "#0F1016",
  bg3:     "#141519",
  border:  "rgba(255,255,255,0.06)",
  text:    "#F5F3EE",
  muted:   "rgba(245,243,238,0.55)",
  faint:   "rgba(245,243,238,0.28)",
  violet:  "#6C63FF",
  violetL: "#A89CFF",
  teal:    "#00D9A5",
  coral:   "#FF6B6B",
  amber:   "#FFB547",
  grad:    "linear-gradient(135deg,#6C63FF,#00D9A5)",
};

export const FONT = "'Sora','DM Sans',sans-serif";
export const MONO = "'JetBrains Mono',monospace";

export const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800;900&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;600&display=swap');
  *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
  html { scroll-behavior:smooth; }
  body { background:#08090C; color:#F5F3EE; font-family:'Sora','DM Sans',sans-serif; }
  ::selection { background:rgba(108,99,255,0.35); }
  ::-webkit-scrollbar { width:4px; }
  ::-webkit-scrollbar-track { background:#08090C; }
  ::-webkit-scrollbar-thumb { background:rgba(108,99,255,0.5); border-radius:2px; }
  a { text-decoration:none; color:inherit; }
  @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
  @keyframes pulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.5)} }
  @keyframes fadeIn { from{opacity:0} to{opacity:1} }
  @keyframes slideUp{ from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
`;
