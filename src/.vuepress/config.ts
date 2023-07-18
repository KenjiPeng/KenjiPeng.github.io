import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Kenji Hub",
      description: "Kenji Peng's blog and knowledge hub",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Kenji Hub",
      description: "Kenji的博客和知识仓库",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
