import SubPage from "../../components/SubPage";
import { plans, PAY_EMAIL } from "../../lib/content";

export default function Page() {
  return (
    <SubPage>
      <div className="price-head">
        <h1>Pricing &amp; Activation</h1>
        <p>Simple, manual payment activation using Zelle first and PayPal as backup.</p>
      </div>

      <div className="price-grid">
        {plans.map((p) => (
          <div className="price-card" key={p.name}>
            <h3>{p.name}</h3>
            <div className="price">
              {p.price}
              {p.per ? <span className="per">{p.per}</span> : null}
            </div>
            {p.points.map((pt) => (
              <p className="pt" key={pt}>
                {pt}
              </p>
            ))}
            <p className="pt-note">{p.note}</p>
          </div>
        ))}
      </div>

      <div className="pay-box">
        <h3>Manual Payment Routing</h3>
        <ol>
          <li>Request access from the landing page.</li>
          <li>
            Once approved, send your payment via <strong>Zelle</strong> to{" "}
            <strong>{PAY_EMAIL}</strong> (PayPal available as a backup).
          </li>
          <li>Include your approved, exact username in the payment memo.</li>
          <li>Your account is activated manually by the administrator once payment is confirmed.</li>
        </ol>
      </div>
    </SubPage>
  );
}
