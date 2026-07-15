import type { ReactNode } from "react";

export default function SubPage({ children }: { children: ReactNode }) {
  return (
    <main className="sub wrap">
      <a className="sub-back" href="/">
        ← Return to Home
      </a>
      {children}
    </main>
  );
}
