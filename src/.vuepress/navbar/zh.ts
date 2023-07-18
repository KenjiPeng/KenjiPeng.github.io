import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/notes/",
  {
    text: "技术总结",
    icon: "pen-to-square",
    prefix: "/csnotes/",
    children: [
      {
        text: "Spring",
        icon: "pen-to-square",
        prefix: "spring/",
        children: [
          { text: "SpringFramework", icon: "pen-to-square", link: "1" },
          { text: "SpringBoot", icon: "pen-to-square", link: "2" },
          { text: "SpringCloud", icon: "pen-to-square", link: "3" }
        ],
      },
      {
        text: "Database",
        icon: "pen-to-square",
        prefix: "Database/",
        children: [
          { text: "MySQL", icon: "pen-to-square",link: "1"},
          { text: "PostgreSQL",icon: "pen-to-square",link: "2"},
          { text: "Clickhouse",icon: "pen-to-square",link: "3"},
          { text: "Redis",icon: "pen-to-square",link: "4"},
          { text: "MongoDB",icon: "pen-to-square",link: "5"},
        ],
      }
    ],
  },
  {
    text: "关于我",
    icon: "face-smile",
    link: "/intro",
  },
  {
    text: "GitHub",
    icon: "book",
    link: "https://github.com/KenjiPeng",
  },
]);
