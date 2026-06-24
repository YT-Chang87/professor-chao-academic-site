export type Lang = "zh" | "en";

export const labels = {
  zh: {
    locale: "zh-Hant",
    langName: "English",
    draft: "網站提案草稿",
    draftDetail: "內容尚待趙浩然教授確認",
    nav: {
      home: "首頁",
      about: "關於教授",
      research: "研究方向",
      publications: "學術著作",
      projects: "研究計畫",
      team: "團隊成員",
      news: "最新消息",
      contact: "聯絡資訊"
    },
    explore: "探索研究方向",
    profile: "教授簡介",
    overview: "研究概覽",
    latest: "最新消息",
    viewAll: "查看完整內容",
    education: "學歷",
    experience: "經歷",
    keywords: "關鍵字",
    journal: "期刊論文",
    conference: "研討會論文",
    funder: "補助機構",
    role: "執行角色",
    contactLead: "歡迎學術交流、研究合作與學生諮詢。",
    email: "電子郵件",
    office: "研究室",
    external: "學術連結",
    pending: "待確認",
    backHome: "返回首頁",
    skip: "跳至主要內容",
    footerNote: "網站內容尚待確認，請勿視為教授正式公開資料。"
  },
  en: {
    locale: "en",
    langName: "繁體中文",
    draft: "Website Proposal Draft",
    draftDetail: "Content pending confirmation by Prof. Hao-Ran Chao",
    nav: {
      home: "Home",
      about: "About",
      research: "Research",
      publications: "Publications",
      projects: "Projects",
      team: "Team",
      news: "News",
      contact: "Contact"
    },
    explore: "Explore Research",
    profile: "Profile",
    overview: "Research Overview",
    latest: "Latest News",
    viewAll: "View full section",
    education: "Education",
    experience: "Experience",
    keywords: "Keywords",
    journal: "Journal Article",
    conference: "Conference Paper",
    funder: "Funder",
    role: "Role",
    contactLead: "Academic exchange, research collaboration, and student inquiries are welcome.",
    email: "Email",
    office: "Office",
    external: "Academic Links",
    pending: "To be confirmed",
    backHome: "Back to home",
    skip: "Skip to main content",
    footerNote: "Content is pending confirmation and should not be treated as official information."
  }
} as const;

export const sectionKeys = ["about", "research", "publications", "projects", "team", "news", "contact"] as const;
export type Section = typeof sectionKeys[number];
