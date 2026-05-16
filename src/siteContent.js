/**
 * 站点文案与链接 — 按需修改为你的真实信息
 */
export const siteContent = {
  home: {
    headlineAccent: "HH",
    headlineBefore: "你好，我是 ",
    headlineAfter: "，关注有机质感与数字手作的前端与界面实践者。",
    intro:
      "我相信界面可以少些“软件感”，多些像空间与纸张一样的温度。欢迎来到我的数字花园。",
    /** 首页左侧不规则图形内展示的图片（可改为 /images/你的文件.jpg） */
    heroImage: {
      src: "/images/home-hero.svg",
      alt: "首页主视觉",
    },
  },
  contacts: [
    { label: "微信", href: "#", icon: "chat" },
    { label: "GitHub", href: "https://github.com/", icon: "code" },
    { label: "邮箱", href: "mailto:hello@example.com", icon: "mail" },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "work_outline" },
  ],
  about: {
    title: "经历与手作",
    subtitle:
      "一条非线性的路径：在工具、自然形态与以人为中心的体验之间来回穿行。",
    polaroidCaption: "图 1 · 创作者（占位图形，无肖像）",
    education: [
      {
        title: "交互设计 MFA",
        place: "示例艺术学院",
        years: "2018 — 2020",
        variant: "organic",
      },
      {
        title: "哲学 BA",
        place: "示例综合大学",
        years: "2014 — 2018",
        variant: "offset",
      },
    ],
    experience: [
      {
        title: "高级产品设计师",
        place: "示例工作室",
        years: "2021 — 至今",
        detail: "负责设计系统与偏有机风格的界面探索。",
        dot: "primary",
      },
      {
        title: "UI/UX 设计师",
        place: "示例科技公司",
        years: "2019 — 2021",
        detail: "",
        dot: "muted",
      },
    ],
    hobbies: ["陶艺", "胶片摄影", "抱石", "植物"],
  },
  works: {
    title: "精选作品",
    subtitle:
      "形式与功能之间的一些探索。刻意保留不完美与手作感，作为数字物存在的痕迹。",
    projects: [
      {
        id: "eco",
        category: "数字平台",
        year: "2023",
        title: "生态系统架构",
        description:
          "以菌根网络为隐喻，重新想象社区参与与有机增长模型。",
        href: "#",
        cta: "查看项目",
        layout: "featured",
      },
      {
        id: "woven",
        category: "品牌识别",
        year: "2022",
        title: "编织字体",
        description: "织物纹样与算法排版之间的交界实验。",
        href: "#",
        cta: "阅读案例",
        layout: "narrow",
      },
      {
        id: "tactile",
        category: "交互设计",
        year: "2022",
        title: "触感界面",
        description: "通过微交互，把物理 affordance 带回平面屏幕。",
        href: "#",
        cta: "查看项目",
        layout: "offset",
      },
      {
        id: "zines",
        category: "印刷 / 实体",
        year: "2021",
        title: "不完美的装订",
        description: "一系列手工 zine，探讨现代编辑设计中的侘寂。",
        href: "#",
        cta: "查看图集",
        layout: "wide",
      },
    ],
  },
};
