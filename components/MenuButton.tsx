"use client";

type MenuButtonProps = {
  open?: boolean;
  onClick: () => void;
  label: string;
};

export function MenuButton({ open = false, onClick, label }: MenuButtonProps) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label={label}
      aria-expanded={open}
      aria-controls="mobile-nav-panel"
      className="menu-btn touch-target flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-border bg-surface text-zinc-50 transition-colors active:bg-elevated lg:hidden"
    >
      <span className={`burger ${open ? "burger--open" : ""}`} aria-hidden>
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line burger__line--accent" />
      </span>
    </button>
  );
}
