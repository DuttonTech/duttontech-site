import SubPage from "../../components/SubPage";
import { faqs } from "../../lib/content";

export default function Page() {
  return (
    <SubPage>
      <div className="faq-head">
        <h1>Frequently Asked Questions</h1>
        <p>
          Everything you need to know about DuttonTech, DuttonCapital Asset Mgmt, privacy, portfolio
          tracking, activation, and support.
        </p>
      </div>
      <div className="faq-list">
        {faqs.map((f) => (
          <details className="faq-item" key={f.q}>
            <summary>{f.q}</summary>
            <div className="faq-a">{f.a}</div>
          </details>
        ))}
      </div>
    </SubPage>
  );
}
