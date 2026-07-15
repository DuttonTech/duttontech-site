import type { ReactNode } from "react";

export default function SubPage({
  title,
  lead,
  children,
}: {
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <main className="sub wrap">
      <a className="sub-back" href="/">
        ← Return to Home
      </a>
      <div className="sub-card">
        <h1>{title}</h1>
        {lead ? <p className="lead">{lead}</p> : null}
        {children}
        <p className="sub-note">This section is being finalized and will be published shortly.</p>
      </div>
    </main>
  );
}
