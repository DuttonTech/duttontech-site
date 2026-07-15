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

/* ---------- Subpage content (Block 2) ---------- */

// Payment routing values currently shown on the live Streamlit site.
// CONFIRM with Andy: pricing amounts and which email should receive Zelle payments.
export const PAY_EMAIL = "DuttonCapital@gmail.com";

export const aboutParas: { lead?: string; body: string }[] = [
  { lead: "DuttonTech LLC", body: " is a financial data infrastructure company focused on building secure, high-performance portfolio analytics tools for modern investors." },
  { body: "Our mission is to simplify how individuals and private clients monitor and understand their assets. Traditional systems are often fragmented, slow, and difficult to manage. We replace that complexity with a streamlined, private, and responsive environment." },
  { lead: "DuttonCapital Asset Management", body: " is our flagship dashboard for portfolio tracking, market data visualization, and performance analysis. The platform does not execute trades, hold client funds, or provide financial advice." },
  { lead: "What we are:", body: " portfolio analytics, data visibility, and simulation support." },
  { lead: "What we are not:", body: " a brokerage, a bank, or an investment advisor." },
];

export const demoContent = {
  subtitle: "DuttonCapital Platform Walkthrough",
  description:
    "Experience the power and clarity of the DuttonCapital Asset Management dashboard. Designed for modern investors, our platform provides a secure, private environment to track live market performance, visualize portfolio distribution, and simulate strategic trades without ever linking external bank or brokerage accounts. Built for institutional-grade precision, it empowers you with total, uncompromised control over your financial data.",
};

export const plans: { name: string; price: string; per?: string; points: string[]; note: string }[] = [
  { name: "30-Day Private Beta Pass", price: "$25", points: ["Full dashboard access", "One-time payment and manual activation"], note: "Best for trial users and early adopters" },
  { name: "Monthly Subscription", price: "$15", per: "/mo", points: ["Continuous real-time access", "Priority support and ongoing data retention"], note: "Manual billing via Zelle or PayPal" },
];

export const faqs: { q: string; a: string }[] = [
  { q: "Who is DuttonTech built for?", a: "DuttonTech is built for users who want a private, manual-entry portfolio analytics environment for tracking holdings, cash balances, watchlists, simulated orders, and portfolio movement without connecting bank or brokerage accounts." },
  { q: "What sets DuttonTech apart from other portfolio trackers?", a: "DuttonTech focuses on privacy, control, and manual data ownership. It does not require aggregator connections, does not custody assets, does not execute trades, and keeps the workflow centered on user-entered portfolio data." },
  { q: "What does DuttonTech do to protect my privacy?", a: "DuttonTech is designed around controlled access, login protection, manual activation, and portfolio analytics without requiring bank, brokerage, or custody integrations." },
  { q: "Does DuttonCapital connect to my bank or broker?", a: "No. DuttonCapital Asset Mgmt is a portfolio analytics and visualization platform only. It does not connect to banks, brokerages, custodians, or payment credential systems." },
  { q: "What kind of assets can I track?", a: "You can track manually entered stock positions, Bitcoin quantity, cash balances, watchlists, and simulated limit-order ideas. Future enhancements may expand supported asset views." },
  { q: "Can I import my financial data?", a: "Yes. The platform supports CSV import workflows for portfolio data, using the required fields shown in the Data Center import section." },
  { q: "Do I have to input every transaction?", a: "No. You can maintain summary holdings by entering ticker, quantity, and purchase price. More detailed transaction-level support may be added later." },
  { q: "Does DuttonTech support dividend investing?", a: "A forward-looking dividend tracker is being prepared as a platform capability. The goal is to estimate annual dividend income and yield based on current holdings once dividend data is connected." },
  { q: "How is portfolio value calculated?", a: "The dashboard combines your entered quantities, purchase prices, cash balances, and available market data from external data providers to estimate portfolio value." },
  { q: "Can DuttonTech help me improve my portfolio?", a: "DuttonTech provides analytics views, charts, target fields, watchlists, and reporting tools. It does not provide personalized financial advice or investment recommendations." },
  { q: "How is DuttonTech different from my broker's built-in tools?", a: "DuttonTech is designed as an independent private analytics workspace where users can manually organize holdings, cash, watchlists, simulated orders, exports, and portfolio views without relying on broker connectivity." },
  { q: "What is the difference between the 30-Day Private Beta Pass and the Monthly Subscription?", a: "The 30-Day Private Beta Pass gives temporary dashboard access for evaluation. The Monthly Subscription is for continuous dashboard use and ongoing portfolio tracking." },
  { q: "How do I pay for access?", a: "Payment is handled manually through Zelle first and PayPal as backup. The administrator activates accounts after payment is confirmed." },
  { q: "Can I cancel or switch my subscription?", a: "Because billing is manually administered, subscription changes should be requested through DuttonTech support or administration." },
  { q: "Why do table edits sometimes not stick?", a: "Use Enter or Tab to commit a data entry cell before clicking Save." },
];

export const termsIntro =
  'These Terms of Service ("Terms") govern your use of the DuttonCapital Asset Mgmt platform provided by DuttonTech LLC ("DuttonTech", "we", "us"). By accessing or using the platform, you agree to these Terms.';
export const termsSections: { h: string; p: string }[] = [
  { h: "1. Nature of the service", p: "DuttonCapital provides portfolio tracking, analytics, and visualization software. It does not execute trades, hold or custody assets, connect to bank or brokerage accounts, or provide financial, investment, tax, or legal advice. All figures are based on information you enter or import, and you are responsible for their accuracy." },
  { h: "2. No financial advice", p: "Nothing on the platform constitutes a recommendation to buy, sell, or hold any security or asset. You are solely responsible for your own investment decisions and outcomes. Consider consulting a licensed professional before making financial decisions." },
  { h: "3. Account responsibility", p: "You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. Notify us promptly of any unauthorized use." },
  { h: "4. Payments and activation", p: "Access may be granted through passes or subscriptions. Payments are handled manually, and access is activated after administrator review. Fees, where applicable, are described at the time of sign-up." },
  { h: "5. Acceptable use", p: "You agree not to misuse the service, attempt unauthorized access, interfere with or disrupt the platform, or use it for any unlawful purpose." },
  { h: "6. Data and content", p: "You retain ownership of the portfolio data you enter. You are responsible for keeping your own records and for verifying any data before relying on it." },
  { h: "7. Availability", p: "We aim to keep the platform available and accurate but do not guarantee uninterrupted access, real-time data accuracy, or freedom from delays or errors." },
  { h: "8. Limitation of liability", p: 'The service is provided "as is" and "as available" without warranties of any kind. To the fullest extent permitted by law, DuttonTech is not liable for investment outcomes, data inaccuracies or delays, temporary outages, or any indirect or consequential damages arising from use of the platform.' },
  { h: "9. Changes to these Terms", p: "We may update these Terms from time to time. Material changes will be reflected by updating the date above; continued use constitutes acceptance." },
  { h: "10. Contact", p: "Questions about these Terms can be sent to DuttonTechLLC@gmail.com." },
];

export const privacyIntro =
  'This Privacy Policy explains how DuttonTech LLC ("DuttonTech", "we", "us") handles information in connection with the DuttonCapital Asset Mgmt platform. By using the platform, you agree to the practices described here.';
export const privacySections: { h: string; p: string }[] = [
  { h: "1. Information we collect", p: "We collect the account details you provide (such as your username and email), the portfolio information you enter or import (tickers, quantities, prices, dates, cash balances, watchlists, and similar), limited technical and usage information needed to operate and secure the platform, and any messages you send us for support." },
  { h: "2. How we use information", p: "We use your information to operate the platform's portfolio calculations and displays, to authenticate and secure your account, to provide support, and to maintain and improve the reliability of the service. We do not use your portfolio data to provide financial advice." },
  { h: "3. Data sharing", p: "We do not sell your personal information. Limited data may be processed by the cloud, hosting, and infrastructure providers we rely on solely to operate the service, and we may disclose information where required by law. We do not share your portfolio data with advertisers or data brokers." },
  { h: "4. Financial account access", p: "DuttonCapital does not connect to your bank or brokerage accounts, does not aggregate external financial accounts, and does not store payment card credentials. All portfolio data is entered or imported by you." },
  { h: "5. Data security", p: "We use measures such as access controls, login protection, and password hashing to help protect your information. No system can guarantee absolute security, and you are responsible for keeping your login credentials confidential." },
  { h: "6. Data retention", p: "We retain your account and portfolio data for as long as your account is active or as needed to provide the service. You may request deletion as described below." },
  { h: "7. Your rights", p: "You may request access to, correction of, or deletion of your personal data by contacting us at DuttonTechLLC@gmail.com. We will respond to reasonable requests consistent with applicable law." },
  { h: "8. Changes to this policy", p: "We may update this Privacy Policy from time to time. Material changes will be reflected by updating the date above." },
  { h: "9. Contact", p: "Questions about this policy can be sent to DuttonTechLLC@gmail.com." },
];
