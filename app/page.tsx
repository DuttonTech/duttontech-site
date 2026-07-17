import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { SectionHead, CardGrid, Steps, Spotlight } from "../components/ui";
import { features, trust, caps, caps2, steps } from "../lib/content";

export default function Home() {
  return (
    <>
      <span id="top" />
      <Header />
      <Hero />

      <section className="band wrap" id="features">
        <SectionHead
          eyebrow="All your investments in one place"
          title="A private workspace built for clarity and control"
          desc="Track holdings, cash, watchlists and limit-order ideas from one dashboard designed to be read at a glance."
        />
        <CardGrid items={features} />
      </section>

      <section className="band wrap" id="security">
        <SectionHead
          eyebrow="Private by design"
          title="The environment where your data stays"
          titleUnderline="under your control"
          desc="DuttonTech is a secure analytics and visualization environment. It never custodies assets, executes trades, or connects to your accounts."
        />
        <CardGrid items={trust} />
      </section>

      <section className="band wrap" id="product">
        <Spotlight
          title="DuttonMarkets Portfolio Tracker"
          desc="DuttonMarkets Portfolio Tracker is our flagship portfolio platform — a secure, private workspace for tracking your stocks and crypto with real precision. Organize holdings into active-trading and long-term buckets, record every purchase and sale with accurate lot-based accounting, and see your live market values, targets, and realized performance at a glance. You keep full control of your data; the platform never executes trades or touches your accounts."
        />
      </section>

      <section className="band wrap" id="capabilities">
        <SectionHead eyebrow="The complete toolkit" title="Platform Capabilities" />
        <CardGrid items={caps} />
        <CardGrid items={caps2} wide />
      </section>

      <section className="band wrap" id="steps">
        <SectionHead
          eyebrow="Up and running with DuttonMarkets in minutes"
          title="From request to tracking, in four steps"
        />
        <Steps items={steps} />
      </section>

      <Footer />
      <BackToTop />
    </>
  );
}
