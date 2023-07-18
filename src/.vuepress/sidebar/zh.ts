import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "生活随笔",
      icon: "laptop-code",
      prefix: "notes/",
      link: "notes/",
      children: "structure",
    },
    {
      text: "技术总结",
      icon: "book",
      prefix: "csnotes/",
      children: "structure",
    },
    {
      text: "关于我",
      icon: "user-tag",
      link: "/zh/intro",
    },
  ],
});
