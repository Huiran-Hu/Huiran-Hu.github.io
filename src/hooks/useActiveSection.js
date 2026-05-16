import { useEffect, useState } from "react";

/**
 * 根据视口交叉情况高亮当前区块 id（与 #锚点 对应）
 */
export function useActiveSection(sectionIds, { rootMargin = "-42% 0px -42% 0px" } = {}) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit?.target?.id) setActiveId(hit.target.id);
      },
      { root: null, rootMargin, threshold: [0, 0.15, 0.35, 0.55, 0.75, 1] }
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, sectionIds]);

  return activeId;
}
