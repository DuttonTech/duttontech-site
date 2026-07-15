import SubPage from "../../components/SubPage";
import { demoContent } from "../../lib/content";

export default function Page() {
  return (
    <SubPage>
      <div className="sub-card">
        <h1>Product Demo</h1>
        <p className="demo-subtitle">{demoContent.subtitle}</p>
        <p className="lead">{demoContent.description}</p>
      </div>

      <p className="demo-cap">▶ A quick auto-playing tour of the platform</p>
      <div className="demo-tour">
        <iframe src="/demo-tour.html" title="DuttonCapital product tour" loading="lazy" />
      </div>
    </SubPage>
  );
}
