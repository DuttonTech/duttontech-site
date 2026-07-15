import SubPage from "../../components/SubPage";
import { termsIntro, termsSections } from "../../lib/content";

export default function Page() {
  return (
    <SubPage>
      <div className="sub-card">
        <h1>Terms of Service</h1>
        <p className="doc-updated">Last updated: July 2026</p>
        <div className="prose">
          <p>{termsIntro}</p>
          {termsSections.map((s) => (
            <section key={s.h}>
              <h2 className="doc-h">{s.h}</h2>
              <p>{s.p}</p>
            </section>
          ))}
          <p className="doc-foot">This document is provided for general informational purposes and does not constitute legal advice.</p>
        </div>
      </div>
    </SubPage>
  );
}
