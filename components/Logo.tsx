export function TechMark({ gid = "ti" }: { gid?: string }) {
  return (
    <svg viewBox="0 0 108 108" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F3F4F5" />
          <stop offset="25%" stopColor="#DCDFE1" />
          <stop offset="50%" stopColor="#C2C7CA" />
          <stop offset="80%" stopColor="#A9AEB1" />
          <stop offset="100%" stopColor="#8E9396" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="102" height="102" rx="24" fill="rgba(30,41,59,0.55)" stroke="#CBD5E1" strokeWidth="4.5" />
      <path d="M 22 22 L 56 22 C 80 22 86 42 86 54 C 86 66 80 86 56 86 L 22 86 Z" fill="none" stroke={`url(#${gid})`} strokeWidth="8" />
      <rect x="33" y="60" width="7" height="16" rx="2" fill="#93C5FD" />
      <rect x="43.5" y="52" width="7" height="24" rx="2" fill="#5C9DF5" />
      <rect x="54" y="44" width="7" height="32" rx="2" fill="#4285F4" />
    </svg>
  );
}

export function WorksMark() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="1.5" y="1.5" width="97" height="97" rx="22" fill="#0B0B0D" stroke="#D4A537" strokeWidth="2.6" />
      <path d="M31 24 H49 a26 26 0 0 1 0 52 H31 Z" fill="none" stroke="#F7F4EE" strokeWidth="6.5" />
      <path d="M52 35 C53.5 45 56 47.5 66 49 C56 50.5 53.5 53 52 63 C50.5 53 48 50.5 38 49 C48 47.5 50.5 45 52 35 Z" fill="#D4A537" />
      <circle cx="62" cy="62" r="2.6" fill="#D4A537" />
      <circle cx="60" cy="37" r="1.9" fill="#D4A537" opacity="0.7" />
    </svg>
  );
}
