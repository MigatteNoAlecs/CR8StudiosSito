import type { ReactNode } from "react";

export type IconName =
  | "globe"
  | "smartphone"
  | "instagram"
  | "mail"
  | "phone"
  | "map-pin"
  | "code"
  | "film"
  | "message"
  | "external-link"
  | "utensils"
  | "store"
  | "check";

const paths: Record<IconName, ReactNode> = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </>
  ),
  smartphone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 17h2" />
    </>
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="0.5" fill="currentColor" stroke="none" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="m3 8 9 6 9 6 9 6 21 8" />
    </>
  ),
  phone: <path d="M6.5 4h3l1.5 5-2 1.5a11 11 0 0 0 5 5L13.5 13 18.5 14.5V18a2 2 0 0 1-2 2A14 14 0 0 1 4 6.5a2 2 0 0 1 2-2.5z" />,
  "map-pin": (
    <>
      <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  code: <path d="m8 9-3 3 3 3M16 9l3 3-3 3M13 6l-2 12" />,
  film: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 5v14M12 5v14M17 5v14" />
    </>
  ),
  message: (
    <>
      <path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-4 3V7a2 2 0 0 1 2-2z" />
    </>
  ),
  "external-link": (
    <>
      <path d="M14 5h5v5M10 14 19 5M19 14v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" />
    </>
  ),
  utensils: (
    <>
      <path d="M6 4v8M10 4v8M6 12v8M10 12v3a2 2 0 0 0 4 0v-9" />
      <path d="M16 4v16" />
    </>
  ),
  store: (
    <>
      <path d="M4 10 6 4h12l2 6M6 10h12v10H6z" />
      <path d="M10 14h4" />
    </>
  ),
  check: <path d="M5 12.5 9.5 16.5 19 7.5" />,
};

export function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}
