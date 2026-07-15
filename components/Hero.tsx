import Reveal from "./Reveal";
import LivingDashboard from "./LivingDashboard";
import { TechMark } from "./Logo";
import { APP_URL } from "../lib/content";

export default function Hero() {
  return (
    <section className="hero wrap">
      <Reveal className="hero-brand">
        <div className="brand-lockup">
          <span className="mark">
            <TechMark gid="tech-hero" />
          </span>
          <span className="wordmark-lg">
            Dutton<span className="t">Tech</span>
          </span>
        </div>
        <div className="tagline-lg">&quot;Your future is bright&quot;</div>
        <p className="hero-intro">
          DuttonTech is an independent software company building secure, private tools for the modern
          investor. We design clean, reliable applications that help people organize, track, and
          understand their own portfolios — with privacy and clarity at the core, and without ever
          touching their money or connecting to their financial accounts.
        </p>
      </Reveal>

      <div className="hero-grid">
        <div>
          <span className="eyebrow">Private portfolio tracking</span>
          <h1>
            Your portfolio,
            <br />
            in one private view.
          </h1>
          <p className="lead">
            Track stocks, crypto, cash and watchlists from one dashboard built for clarity — without
            ever connecting a bank or brokerage.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid btn-lg" href="#">
              Request Access
            </a>
            <a className="btn btn-ghost btn-lg" href={APP_URL}>
              Log In
            </a>
          </div>
          <div className="hero-note">
            <span className="dot" /> No custody of funds · No account linking · Your data stays yours
          </div>
        </div>
        <LivingDashboard />
      </div>
    </section>
  );
}
