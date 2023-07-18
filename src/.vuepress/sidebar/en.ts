import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Casual Notes",
      icon: "laptop-code",
      prefix: "notes/",
      link: "notes/",
      children: "structure",
    },
    {
      text: "CS Notes",
      icon: "book",
      prefix: "csnotes/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
});
