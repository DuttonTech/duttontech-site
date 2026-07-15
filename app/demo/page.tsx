import SubPage from "../../components/SubPage";
import LivingDashboard from "../../components/LivingDashboard";
import { demoContent, APP_URL } from "../../lib/content";

const highlights = [
  { icon: "📈", title: "Live market context", body: "Prices, 52-week ranges and portfolio value update from real market data." },
  { icon: "🧩", title: "Everything at a glance", body: "Stocks, crypto, cash and watchlists in one clean, private view." },
  { icon: "🔐", title: "Private by default", body: "No bank links, no custody of funds — your data stays yours." },
];

export default function Page() {
  return (
    <SubPage>
      <div className="sub-card">
        <h1>Product Demo</h1>
        <p className="demo-subtitle">{demoContent.subtitle}</p>
        <p className="lead">{demoContent.description}</p>
      </div>

      <div className="demo-preview">
        <p className="demo-cap">
          <span className="dot" /> A live look at the DuttonCapital dashboard
        </p>
        <div className="demo-frame">
          <LivingDashboard />
        </div>
      </div>

      <div className="demo-highlights">
        {highlights.map((h) => (
          <div className="demo-hi" key={h.title}>
            <div className="ic">{h.icon}</div>
            <h3>{h.title}</h3>
            <p>{h.body}</p>
          </div>
        ))}
      </div>

      <div className="demo-cta-row">
        <a className="btn btn-solid btn-lg" href={APP_URL}>
          Open your live workspace →
        </a>
        <a className="btn btn-ghost btn-lg" href="/pricing">
          See pricing
        </a>
      </div>
    </SubPage>
  );
}
