"use client";
import { useEffect, useState } from "react";
import { TechMark } from "./Logo";
import { APP_URL } from "../lib/content";

const NAV = [
  { href: "#features", label: "Platform" },
  { href: "#security", label: "Security" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#steps", label: "Get started" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // smooth-scroll only for in-page anchors (default page scroll is instant)
  const goAnchor = (e: React.MouseEvent, href: string) => {
    setOpen(false);
    if (!href.startsWith("#")) return;
    const id = href.slice(1);
    if (id === "top") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="hdr-inner">
        <a href="#top" className="brand hdr" onClick={(e) => goAnchor(e, "#top")}>
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
          {NAV.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => goAnchor(e, l.href)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hdr-cta">
          <a className="btn btn-ghost" href={APP_URL}>
            Log In
          </a>
          <a className="btn btn-solid" href="#">
            Access Request
          </a>
        </div>

        <button
          type="button"
          className={open ? "hamburger open" : "hamburger"}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={open ? "mobile-panel open" : "mobile-panel"}>
        {NAV.map((l) => (
          <a key={l.href} className="mlink" href={l.href} onClick={(e) => goAnchor(e, l.href)}>
            {l.label}
          </a>
        ))}
        <a className="btn btn-ghost" href={APP_URL} onClick={() => setOpen(false)}>
          Log In
        </a>
        <a className="btn btn-solid" href="#" onClick={() => setOpen(false)}>
          Access Request
        </a>
      </div>
    </header>
  );
}
