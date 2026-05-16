import { siteContent } from "../siteContent.js";

function Thumbnail({ layout }) {
  if (layout === "featured") {
    return (
      <div className="card-organic-1 group-hover:shadow-moss-lift relative aspect-video w-full overflow-hidden border border-timber/50 bg-stone shadow-moss-tight transition-all duration-500 ease-out group-hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed to-secondary-fixed opacity-60 mix-blend-multiply" />
        <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <circle className="text-tertiary-container" cx="20" cy="80" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle className="text-primary-container opacity-20" cx="80" cy="20" r="30" fill="currentColor" />
          <path
            className="text-burnt-sienna opacity-30"
            d="M0,50 Q25,20 50,50 T100,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>
    );
  }
  if (layout === "narrow") {
    return (
      <div className="card-organic-2 group-hover:shadow-clay-lift relative aspect-[4/5] w-full overflow-hidden border border-timber/50 bg-surface-container shadow-clay transition-all duration-500 ease-out group-hover:-translate-y-2">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary-container via-surface to-surface-container opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-32 w-32 animate-[spin_60s_linear_infinite] rounded-full border border-dashed border-secondary/40" />
          <div className="absolute h-20 w-20 rounded-full bg-secondary-fixed/50 blur-xl" />
        </div>
      </div>
    );
  }
  if (layout === "offset") {
    return (
      <div className="card-organic-3 relative aspect-square w-full overflow-hidden border border-timber/50 bg-pale-mist shadow-moss-tight transition-all duration-500 ease-out group-hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-t from-stone to-transparent" />
        <div className="absolute bottom-0 left-0 h-1/2 w-full border-t border-white/20 bg-primary-fixed/20 backdrop-blur-md" />
        <div className="absolute right-1/4 top-1/4 h-48 w-24 rotate-45 rounded-full bg-tertiary-container/10 backdrop-blur-sm" />
      </div>
    );
  }
  return (
    <div className="group-hover:shadow-primary-soft relative aspect-video w-full overflow-hidden rounded-[2rem] border border-timber/50 bg-surface-container-low shadow-moss-tight transition-all duration-500 ease-out group-hover:-translate-y-2">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(222,216,207,0.3)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-4">
        <div className="h-16 w-16 rounded-full bg-primary/80 mix-blend-multiply" />
        <div className="-ml-8 h-16 w-16 rounded-full bg-secondary/60 mix-blend-multiply" />
      </div>
    </div>
  );
}

function gridClass(layout) {
  switch (layout) {
    case "featured":
      return "md:col-span-8";
    case "narrow":
      return "md:col-span-4 md:translate-y-16";
    case "offset":
      return "md:col-span-5 md:col-start-2 md:-translate-y-8";
    default:
      return "md:col-span-6";
  }
}

export function WorksSection() {
  const { works } = siteContent;

  return (
    <section
      id="works"
      className="relative z-10 mx-auto flex w-full max-w-[1140px] flex-col gap-16 px-gutter pb-section-padding-desktop pt-section-padding-mobile md:gap-24 md:pb-40 md:pt-section-padding-desktop"
    >
      <div
        className="blob-2 pointer-events-none absolute right-0 top-[35%] -z-10 h-[700px] w-[500px] translate-x-1/3 bg-secondary-fixed/30 blur-[80px] opacity-40"
        aria-hidden="true"
      />
      <div
        className="blob-1 pointer-events-none absolute left-0 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-primary-fixed/30 blur-[80px] opacity-40"
        aria-hidden="true"
      />

      <header className="flex max-w-2xl flex-col gap-6">
        <h2 className="font-headline text-4xl font-bold text-deep-loam md:text-5xl md:leading-[1.1] md:tracking-tight">
          {works.title}
        </h2>
        <p className="max-w-xl font-body text-lg leading-relaxed text-dried-grass">{works.subtitle}</p>
      </header>

      <div className="grid grid-cols-1 gap-y-12 md:grid-cols-12 md:gap-x-gutter md:gap-y-24">
        {works.projects.map((p) => (
          <article key={p.id} className={`group flex flex-col gap-6 ${gridClass(p.layout)}`}>
            <Thumbnail layout={p.layout} />
            <div className={`flex flex-col gap-3 pl-2 ${p.layout === "featured" ? "md:pl-4 md:gap-4" : ""}`}>
              <div className="flex items-center gap-3">
                <span className="font-body text-sm font-semibold uppercase tracking-widest text-secondary">
                  {p.category}
                </span>
                <span className="h-1 w-1 rounded-full bg-timber" aria-hidden="true" />
                <span className="font-body text-sm font-semibold tracking-wide text-outline">{p.year}</span>
              </div>
              <h3 className="font-headline text-2xl font-semibold text-on-surface transition-colors duration-300 group-hover:text-primary md:text-[32px] md:leading-tight">
                {p.title}
              </h3>
              <p className="max-w-lg font-body text-base text-on-surface-variant">{p.description}</p>
              {p.layout === "featured" ? (
                <div className="mt-2">
                  <a
                    href={p.href}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-body text-sm font-semibold tracking-wide text-pale-mist transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_8px_20px_rgba(93,112,82,0.25)] active:scale-95"
                  >
                    {p.cta}
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      arrow_forward
                    </span>
                  </a>
                </div>
              ) : p.layout === "offset" ? (
                <a
                  href={p.href}
                  className="mt-2 inline-flex w-fit items-center justify-center gap-2 rounded-full border-2 border-timber px-5 py-2 font-body text-sm font-semibold tracking-wide text-tertiary transition-all duration-300 hover:border-secondary hover:bg-surface-bright hover:text-secondary active:scale-95"
                >
                  {p.cta}
                </a>
              ) : (
                <a
                  href={p.href}
                  className="group/link mt-2 inline-flex w-fit items-center gap-2 font-body text-sm font-semibold tracking-wide text-primary transition-colors hover:text-primary-container"
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">
                    {p.cta}
                  </span>
                  <span
                    className="material-symbols-outlined text-base transition-transform group-hover/link:translate-x-1"
                    aria-hidden="true"
                  >
                    east
                  </span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="h-12 md:hidden" aria-hidden="true" />
    </section>
  );
}
