const NAV = [
  { id: "home", label: "首页" },
  { id: "about", label: "关于我" },
  { id: "works", label: "作品" },
];

function navLinkClass(id, activeId) {
  const base =
    "nav-link relative font-body text-sm font-semibold tracking-wide transition-colors duration-300";
  const active = id === activeId;
  return [
    base,
    active
      ? "is-active text-primary font-bold"
      : "text-on-surface-variant hover:text-primary",
  ].join(" ");
}

function mobileItemClass(id, activeId) {
  const active = id === activeId;
  return [
    "flex flex-col items-center justify-center rounded-full px-4 py-2 transition-all",
    active
      ? "bg-primary-container text-on-primary-container scale-95"
      : "text-on-surface-variant hover:bg-surface-container-high",
  ].join(" ");
}

const ICONS = { home: "home", about: "person", works: "architecture" };

export function NavDesktop({ activeId }) {
  return (
    <nav
      className="nav-glass shadow-moss fixed right-4 top-4 z-50 ml-auto hidden max-w-max items-center gap-6 rounded-full border border-timber/50 px-6 py-3 md:flex"
      aria-label="主导航"
    >
      <a
        href="#home"
        className="blob-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-headline text-xl font-semibold text-on-primary"
      >
        HH
      </a>
      <div className="flex items-center gap-6">
        {NAV.map(({ id, label }) => (
          <a key={id} href={`#${id}`} className={navLinkClass(id, activeId)}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export function NavMobile({ activeId }) {
  return (
    <nav
      className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around rounded-t-xl border-t border-timber/30 bg-surface px-4 pb-6 pt-3 shadow-nav md:hidden"
      aria-label="主导航"
    >
      {NAV.map(({ id, label }) => (
        <a key={id} href={`#${id}`} className={mobileItemClass(id, activeId)}>
          <span
            className="material-symbols-outlined mb-1"
            data-fill={id === activeId ? "1" : undefined}
            aria-hidden="true"
          >
            {ICONS[id]}
          </span>
          <span className="font-body text-sm font-semibold tracking-wide">{label}</span>
        </a>
      ))}
    </nav>
  );
}
