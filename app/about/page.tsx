import SubPage from "../../components/SubPage";
import { aboutParas } from "../../lib/content";

export default function Page() {
  return (
    <SubPage>
      <div className="sub-card">
        <h1>About DuttonTech</h1>
        <div className="prose">
          {aboutParas.map((p, i) => (
            <p key={i}>
              {p.lead ? <strong>{p.lead}</strong> : null}
              {p.body}
            </p>
          ))}
        </div>
      </div>
    </SubPage>
  );
}
