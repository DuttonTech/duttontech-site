"use client";
import { motion, useReducedMotion, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { holdings } from "../lib/content";

export default function LivingDashboard() {
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? 128476 : 0);

  useEffect(() => {
    if (reduce) return;
    const controls = animate(0, 128476, {
      duration: 1.6,
      ease: [0.22, 0.61, 0.36, 1],
      onUpdate: (v) => setVal(Math.floor(v)),
    });
    return () => controls.stop();
  }, [reduce]);

  return (
    <div className="dash">
      <div className="dash-top">
        <div>
          <div className="dash-label">Portfolio value</div>
          <div className="dash-val">${val.toLocaleString()}</div>
          <div className="dash-chg">
            ▲ +2.4% · <span style={{ color: "var(--muted)", fontWeight: 600 }}>today</span>
          </div>
        </div>
        <div className="live-tag">
          <span className="dot" /> Live market data
        </div>
      </div>

      <div className="chart">
        <svg viewBox="0 0 400 118" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lg" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#4285F4" />
              <stop offset="1" stopColor="#6BA1F7" />
            </linearGradient>
            <linearGradient id="fillg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="rgba(66,133,244,.35)" />
              <stop offset="1" stopColor="rgba(66,133,244,0)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,92 L44,80 L88,88 L132,60 L176,66 L220,40 L264,50 L308,26 L352,34 L400,14 L400,118 L0,118 Z"
            fill="url(#fillg)"
            initial={{ opacity: reduce ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: reduce ? 0 : 1.4 }}
          />
          <motion.path
            className="spark"
            d="M0,92 L44,80 L88,88 L132,60 L176,66 L220,40 L264,50 L308,26 L352,34 L400,14"
            initial={{ pathLength: reduce ? 1 : 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.1, delay: reduce ? 0 : 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          />
        </svg>
      </div>

      <div className="holds">
        {holdings.map((h, i) => (
          <motion.div
            key={h.tick}
            className="hrow"
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: reduce ? 0 : 1.5 + i * 0.18, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <span
              className="tick"
              style={{ background: `${h.color}22`, color: h.color, border: `1px solid ${h.color}55` }}
            >
              {h.tick}
            </span>
            <div>
              <div className="hname">{h.tick}</div>
              <div className="hsub">{h.sub}</div>
            </div>
            <div className="hval">
              <b>{h.val}</b> <span style={{ color: h.up ? "var(--green)" : "var(--red)" }}>{h.chg}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
