import { siteContent } from "../siteContent.js";

export function AboutSection() {
  const { about } = siteContent;

  return (
    <section
      id="about"
      className="relative mx-auto max-w-[1140px] px-gutter pb-section-padding-mobile pt-24 md:pb-section-padding-desktop md:pt-32"
    >
      <div
        className="blob-1 pointer-events-none absolute left-10 top-20 -z-10 h-96 w-96 bg-primary-container/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="blob-2 pointer-events-none absolute right-0 top-1/2 -z-10 h-[500px] w-[500px] bg-secondary-container/20 blur-3xl"
        aria-hidden="true"
      />

      <header className="mb-16 md:mb-24 md:pl-12">
        <h2 className="mb-6 font-headline text-4xl font-bold text-deep-loam md:text-5xl md:leading-[1.1] md:tracking-tight">
          {about.title}
        </h2>
        <p className="max-w-2xl font-body text-lg leading-relaxed text-dried-grass">{about.subtitle}</p>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-16">
        <div className="relative flex items-start justify-center pt-0 md:col-span-5 md:pt-12">
          <div className="relative w-72 pb-12">
            <div className="relative -rotate-2 rounded-lg border border-timber/50 bg-stone p-4 pb-10 shadow-moss transition-transform duration-500 hover:rotate-0">
              <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-md border border-timber/30 bg-surface-container-low">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed-dim/20 to-secondary-fixed-dim/20" />
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-2 border-dashed border-primary/30">
                  <span className="material-symbols-outlined text-4xl text-primary/40" aria-hidden="true">
                    landscape
                  </span>
                </div>
              </div>
            </div>
            <p className="absolute bottom-0 left-0 w-full text-center font-mono text-xs text-dried-grass">
              {about.polaroidCaption}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-16 md:col-span-7 md:gap-24">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container/30">
                <span className="material-symbols-outlined text-primary" aria-hidden="true">
                  school
                </span>
              </div>
              <h3 className="font-headline text-2xl font-semibold text-deep-loam">教育经历</h3>
            </div>
            <div className="space-y-6">
              {about.education.map((item) =>
                item.variant === "organic" ? (
                  <div
                    key={item.title}
                    className="blob-3 border border-timber/50 bg-surface p-8 shadow-moss transition-transform hover:-translate-y-1"
                  >
                    <p className="mb-1 font-body text-sm font-bold tracking-wide text-primary">{item.title}</p>
                    <p className="font-body text-base text-on-surface-variant">{item.place}</p>
                    <p className="mt-2 font-body text-sm text-dried-grass">{item.years}</p>
                  </div>
                ) : (
                  <div
                    key={item.title}
                    className="ml-0 rounded-2xl border border-timber/30 bg-stone/50 p-8 transition-transform hover:-translate-y-1 md:ml-12"
                  >
                    <p className="mb-1 font-body text-sm font-bold tracking-wide text-deep-loam">{item.title}</p>
                    <p className="font-body text-base text-on-surface-variant">{item.place}</p>
                    <p className="mt-2 font-body text-sm text-dried-grass">{item.years}</p>
                  </div>
                )
              )}
            </div>
          </div>

          <div>
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container/30">
                <span className="material-symbols-outlined text-secondary" aria-hidden="true">
                  work
                </span>
              </div>
              <h3 className="font-headline text-2xl font-semibold text-deep-loam">工作经历</h3>
            </div>
            <div className="relative space-y-12 border-l border-timber/50 pl-6 md:pl-10">
              {about.experience.map((job, i) => (
                <div key={`${job.title}-${i}`} className="relative">
                  <div
                    className={
                      job.dot === "primary"
                        ? "absolute -left-[31px] top-2 h-4 w-4 rounded-full border-4 border-surface bg-primary md:-left-[47px]"
                        : "absolute -left-[29px] top-2 h-3 w-3 rounded-full border-2 border-surface bg-timber md:-left-[45px]"
                    }
                    aria-hidden="true"
                  />
                  {job.dot === "primary" ? (
                    <div className="rounded-tl-3xl rounded-br-3xl rounded-bl-md rounded-tr-md border border-timber/50 bg-surface p-8 shadow-moss">
                      <p className="mb-1 font-body text-sm font-bold tracking-wide text-primary">{job.title}</p>
                      <p className="font-body text-base text-on-surface-variant">{job.place}</p>
                      <p className="mb-4 mt-2 font-body text-sm text-dried-grass">{job.years}</p>
                      {job.detail ? (
                        <p className="font-body text-base text-on-surface-variant">{job.detail}</p>
                      ) : null}
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-timber/30 bg-surface-container-low p-6">
                      <p className="mb-1 font-body text-sm font-bold tracking-wide text-deep-loam">{job.title}</p>
                      <p className="font-body text-base text-on-surface-variant">{job.place}</p>
                      <p className="mt-2 font-body text-sm text-dried-grass">{job.years}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tertiary-container/30">
                <span className="material-symbols-outlined text-tertiary" aria-hidden="true">
                  palette
                </span>
              </div>
              <h3 className="font-headline text-2xl font-semibold text-deep-loam">爱好</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {about.hobbies.map((h) => (
                <div
                  key={h}
                  className="cursor-default rounded-full border border-timber/50 bg-surface py-3 text-center transition-colors hover:bg-stone"
                >
                  <span className="font-body text-sm font-semibold tracking-wide text-on-surface-variant">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
