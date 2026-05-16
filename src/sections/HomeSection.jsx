import { siteContent } from "../siteContent.js";

export function HomeSection() {
  const { home, contacts } = siteContent;
  const { heroImage } = home;

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[min(921px,100svh)] max-w-[1140px] flex-col justify-center bg-[length:100%_4px] px-gutter py-section-padding-mobile md:px-section-padding-desktop md:py-section-padding-desktop"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, transparent, transparent 2px, rgba(0,0,0,0.012) 2px, rgba(0,0,0,0.012) 4px)",
      }}
    >
      <div className="grid grid-cols-1 items-center gap-gutter md:grid-cols-12">
        <div className="mb-12 flex justify-center md:col-span-5 md:mb-0 md:justify-start">
          <div className="relative h-64 w-64 transition-transform duration-700 ease-out hover:scale-105 md:h-80 md:w-80 md:-rotate-2">
            <div className="blob-1 relative h-full w-full overflow-hidden shadow-moss ring-2 ring-primary ring-offset-2 ring-offset-[#fdfcf8]">
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                width={400}
                height={400}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-8 md:col-span-7">
          <h1 className="max-w-2xl font-headline text-4xl font-bold leading-tight text-deep-loam md:text-5xl md:leading-[1.1] md:tracking-tight">
            {home.headlineBefore}
            <span className="text-primary italic font-light">{home.headlineAccent}</span>
            {home.headlineAfter}
          </h1>
          <p className="max-w-xl font-body text-lg leading-relaxed text-dried-grass">{home.intro}</p>
          <div className="mt-4 flex w-full max-w-lg flex-wrap items-center gap-6 border-t border-timber/50 pt-4">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group -ml-2 flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-stone"
              >
                <span
                  className="material-symbols-outlined text-primary transition-transform group-hover:scale-110"
                  aria-hidden="true"
                >
                  {c.icon}
                </span>
                <span className="font-body text-sm font-semibold tracking-wide text-bark group-hover:text-primary">
                  {c.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
