import type { ReactNode } from "react";
import type { Item, Step } from "../lib/content";
import Reveal from "./Reveal";
import { MarketsMark } from "./Logo";

export function SectionHead({
  eyebrow,
  title,
  titleUnderline,
  desc,
}: {
  eyebrow: string;
  title: ReactNode;
  titleUnderline?: string;
  desc?: string;
}) {
  return (
    <Reveal className="sec-head">
      <div className="sec-eyebrow">{eyebrow}</div>
      <h2>
        {title}
        {titleUnderline ? (
          <>
            {" "}
            <span className="u">{titleUnderline}</span>
          </>
        ) : null}
      </h2>
      <span className="sec-bar" />
      {desc ? <p>{desc}</p> : null}
    </Reveal>
  );
}

export function Card({ item, delay = 0 }: { item: Item; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="card">
        <div className="card-head">
          <div className="ic">{item.icon}</div>
          <h3>{item.title}</h3>
        </div>
        <p>{item.body}</p>
      </div>
    </Reveal>
  );
}

export function CardGrid({ items, wide = false }: { items: Item[]; wide?: boolean }) {
  return (
    <div className={wide ? "grid2wide" : "grid3"}>
      {items.map((it, i) => (
        <Card key={it.title} item={it} delay={(i % 3) * 0.08} />
      ))}
    </div>
  );
}

export function Steps({ items }: { items: Step[] }) {
  return (
    <div className="steps">
      {items.map((s, i) => (
        <Reveal key={s.n} delay={(i % 4) * 0.08}>
          <div className="step">
            <div className="n">{s.n}</div>
            <h4>{s.title}</h4>
            <p>{s.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Spotlight({ title, desc }: { title: string; desc: string }) {
  return (
    <Reveal className="spotlight">
      <div className="spot-lockup">
        <span className="spot-logo">
          <MarketsMark />
        </span>
        <span className="spot-txt">
          <h2 className="spot-title">{title}</h2>
          <div className="spot-tagline">&quot;Every position, clearly tracked.&quot;</div>
        </span>
      </div>
      <div className="spot-divider" />
      <p className="spot-desc">{desc}</p>
    </Reveal>
  );
}
