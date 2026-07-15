"use client";
import { useEffect, useState } from "react";
import { TechMark } from "./Logo";
import { APP_URL } from "../lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="hdr-inner">
        <a href="#top" className="brand hdr">
          <span className="mark">
            <TechMark gid="tech-hdr" />
          </span>
          <span className="txt">
            <span className="wordmark">
              Dutton<span className="t">Tech</span>
            </span>
            <span className="tagline">&quot;Your future is bright&quot;</span>
          </span>
        </a>
        <nav className="mainnav">
          <a href="#features">Platform</a>
          <a href="#privacy">Privacy</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#steps">Get started</a>
        </nav>
        <div className="hdr-cta">
          <a className="btn btn-ghost hide-sm" href={APP_URL}>
            Log In
          </a>
          <a className="btn btn-solid" href="#">
            Access Request
          </a>
        </div>
      </div>
    </header>
  );
}
