import { useState, useEffect } from "react";
import { GLOBAL_CSS } from "./theme";
import { Navbar } from "./components/Layout";
import { Footer } from "./components/Layout";

// Pages
import Home      from "./pages/Home";
import About     from "./pages/About";
import Services  from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Team      from "./pages/Team";
import Blog      from "./pages/Blog";
import Careers   from "./pages/Careers";
import Contact   from "./pages/Contact";

const ROUTES = {
  "/":          Home,
  "/about":     About,
  "/services":  Services,
  "/portfolio": Portfolio,
  "/team":      Team,
  "/blog":      Blog,
  "/careers":   Careers,
  "/contact":   Contact,
};

export default function App() {
  const [path, setPath] = useState("/");

  const navigate = (to) => {
    setPath(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle browser back/forward (hash-based fallback)
  useEffect(() => {
    const hash = window.location.hash.replace("#", "") || "/";
    if (ROUTES[hash]) setPath(hash);
  }, []);

  useEffect(() => {
    window.location.hash = path === "/" ? "" : path;
  }, [path]);

  const PageComponent = ROUTES[path] || Home;

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <Navbar currentPath={path} navigate={navigate} />
      <PageComponent navigate={navigate} />
      <Footer navigate={navigate} />
    </>
  );
}
