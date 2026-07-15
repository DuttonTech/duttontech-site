export type Item = { icon: string; title: string; body: string };
export type Step = { n: string; title: string; body: string };
export type Holding = { tick: string; color: string; sub: string; val: string; chg: string; up: boolean };

export const features: Item[] = [
  { icon: "💼", title: "Portfolio visibility", body: "Track active-trading and long-term stock buckets, Bitcoin, Ethereum, cash balances, watchlists and limit-order ideas from one organized workspace." },
  { icon: "⌨️", title: "Manual-entry control", body: "Enter and update positions without connecting bank accounts, brokerages or custodial platforms." },
  { icon: "📄", title: "CSV import & export", body: "Move portfolio data in and out with simple CSV workflows for flexible reporting and recordkeeping." },
  { icon: "🌐", title: "Real-time market context", body: "See live prices, 52-week ranges, portfolio values and technical charting from the dashboard." },
  { icon: "🧪", title: "Simulation & planning", body: "Use target prices, watchlists and strategy fields to evaluate ideas before acting elsewhere." },
  { icon: "👤", title: "Built for independent users", body: "Designed for people who want privacy, structure and a clean view of their own activity." },
];

export const trust: Item[] = [
  { icon: "🔌", title: "No bank or brokerage connection required", body: "Works entirely from portfolio information you enter and files you import." },
  { icon: "🏛️", title: "No custody of funds", body: "The platform never holds cash, securities, crypto or financial accounts." },
  { icon: "⛔", title: "No trade execution", body: "An analytics and tracking environment — not a brokerage platform." },
  { icon: "🗂️", title: "User-controlled records", body: "Update, export and manage your portfolio data without third-party account aggregation." },
  { icon: "🔐", title: "Private analytics workflow", body: "Built around controlled access, login protection and manual activation." },
  { icon: "🛡️", title: "Clear boundaries", body: "Software tools and analytics views — not personalized financial advice." },
];

export const caps: Item[] = [
  { icon: "📊", title: "Real-time visibility", body: "Monitor holdings, cash balances, live market value, and portfolio movement from one clear dashboard." },
  { icon: "🧾", title: "Lot-based accounting", body: "Every purchase is stored as its own dated lot, viewable as individual tax lots or a blended average cost basis." },
  { icon: "🔄", title: "FIFO selling", body: "Record sales that draw down your oldest shares first, the way standard tax reporting expects." },
  { icon: "📈", title: "Realized performance", body: "See the actual profit or loss you have booked, per portfolio, with total realized P/L, trades closed, and win rate." },
  { icon: "🌈", title: "Stocks and crypto together", body: "Track equities alongside Bitcoin, Ethereum, USDC, and more, with cash balances and watchlists in one private view." },
  { icon: "🎯", title: "Strategy-driven targets", body: "Set your own exit-target percentages and see a strategic sell price calculated for every position automatically." },
  { icon: "💰", title: "Dividend income estimate", body: "View an estimated annual dividend income figure based on your current holdings and each stock's yield." },
  { icon: "👀", title: "Focused watchlist", body: "Track target buy prices, current prices, and buy-zone status for the handful of tickers you are actively following." },
  { icon: "🔒", title: "Private and secure by design", body: "Login-protected, manually activated access with no bank connections, no custody of funds, and no stored payment credentials." },
];

export const caps2: Item[] = [
  { icon: "⚙️", title: "Why users choose DuttonTech", body: "The platform is built around clarity, control, and independence for users who want a clean view of portfolio activity." },
  { icon: "🚫", title: "We do not", body: "DuttonTech does not execute trades, provide financial advice, custody funds, or access external financial accounts." },
];

export const steps: Step[] = [
  { n: "Step 1", title: "Request access", body: "Submit your name, professional email and intended use through the Access Request form on the landing page." },
  { n: "Step 2", title: "Complete manual activation", body: "After administrator review and payment confirmation, your account is activated for the appropriate access plan." },
  { n: "Step 3", title: "Build your portfolio workspace", body: "Enter holdings manually, add cash balances, upload CSV files, and create watchlists or limit-order plans." },
  { n: "Step 4", title: "Track, analyze and export", body: "Review live prices, portfolio values, target levels, analytics charts and exportable data from your environment." },
];

export const holdings: Holding[] = [
  { tick: "AAPL", color: "#0EA5E9", sub: "Apple · 40 sh", val: "$9,420", chg: "+1.2%", up: true },
  { tick: "BTC", color: "#F59E0B", sub: "Bitcoin · 0.35", val: "$22,180", chg: "+3.4%", up: true },
  { tick: "ETH", color: "#8B5CF6", sub: "Ethereum · 4.2", val: "$14,760", chg: "-0.6%", up: false },
  { tick: "MSFT", color: "#4285F4", sub: "Microsoft · 22", val: "$9,910", chg: "+0.8%", up: true },
];

export const APP_URL = "https://app.duttontech.com";
export const EMAIL = "DuttonTechLLC@gmail.com";
