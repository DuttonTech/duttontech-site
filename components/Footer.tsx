import Reveal from "./Reveal";
import { TechMark, WorksMark } from "./Logo";
import { EMAIL } from "../lib/content";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <Reveal>
            <div className="brand foot">
              <span className="mark">
                <TechMark gid="tech-foot" />
              </span>
              <span className="txt">
                <span className="wordmark">
                  Dutton<span className="t">Tech</span>
                </span>
                <span className="tagline">&quot;Your future is bright&quot;</span>
              </span>
            </div>
            <div className="foot-comm">
              <b>Communications</b>
              <a className="mail" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </div>
          </Reveal>

          <Reveal className="foot-col" delay={0.08}>
            <h5>Info</h5>
            <a href="/about">About Us</a>
            <a href="/demo">Product Demo</a>
          </Reveal>
          <Reveal className="foot-col" delay={0.16}>
            <h5>Resources</h5>
            <a href="/pricing">Pricing</a>
            <a href="/help">Help Center / F.A.Q.</a>
          </Reveal>
          <Reveal className="foot-col" delay={0.24}>
            <h5>Legal</h5>
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
          </Reveal>
        </div>

        <Reveal>
          <a className="dw-strip" href="https://duttonworks.com" target="_blank" rel="noopener noreferrer">
            <span className="mark">
              <WorksMark />
            </span>
            <span className="dw-name">
              Dutton<span className="w">Works</span>
            </span>
            <span className="sep">|</span>
            <em>Design that works</em>
            <span className="go">Visit our web design studio →</span>
          </a>
        </Reveal>

        <p className="legal">
          DuttonTech and DuttonCapital Asset Mgmt provide software tools for portfolio tracking, analytics,
          visualization, simulation and reporting. DuttonTech does not provide financial, investment, tax,
          legal, brokerage, custody or payment services. The platform does not execute trades, hold assets,
          connect to bank or brokerage accounts, or provide personalized investment recommendations. Users are
          responsible for verifying their own data and making their own financial decisions.
        </p>
        <p className="copy">© 2026 DuttonTech LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}
