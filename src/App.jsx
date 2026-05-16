import { AmbientBlobs } from "./components/AmbientBlobs.jsx";
import ClickSpark from "./components/ClickSpark.jsx";
import { NoiseOverlay } from "./components/NoiseOverlay.jsx";
import { ScanlineOverlay } from "./components/ScanlineOverlay.jsx";
import { NavDesktop, NavMobile } from "./components/SiteNav.jsx";
import { useActiveSection } from "./hooks/useActiveSection.js";
import { AboutSection } from "./sections/AboutSection.jsx";
import { HomeSection } from "./sections/HomeSection.jsx";
import { WorksSection } from "./sections/WorksSection.jsx";

const SECTION_IDS = ["home", "about", "works"];

export default function App() {
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <div className="relative min-h-dvh overflow-x-hidden text-on-surface antialiased">
      <ClickSpark
        sparkColor="#E2F1D3"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <NoiseOverlay />
        <ScanlineOverlay />
        <AmbientBlobs />
        <NavDesktop activeId={activeId} />
        <NavMobile activeId={activeId} />
        <main className="relative z-10 pb-28 md:pb-0">
          <HomeSection />
          <AboutSection />
          <WorksSection />
        </main>
      </ClickSpark>
    </div>
  );
}
