/*
 * @Author: HaoJie
 * @Date: 2022-08-30 16:03:15
 * @LastEditTime: 2022-08-30 17:32:59
 * @LastEditors: HaoJie
 * @FilePath: \vuePress\docs\.vuepress\config.ts
 */
import { defineUserConfig, defaultTheme } from "vuepress";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";
import { nprogressPlugin } from "@vuepress/plugin-nprogress";
// 爬虫
// import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  base: "/",
  head: [["link", { rel: "icon", href: "/images/logo.jpg" }]],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "_海色灏茫",
      description: "_海色灏茫的个人博客",
    },
    "/en/": {
      lang: "en-US",
      title: "_HaiSeHaoMang",
      description: "HaiSeHaoMang Personal Blog",
    },
  },
  theme: defaultTheme({
    locales: {
      "/": {
        selectLanguageName: "简体中文",
      },
      "/en/": {
        selectLanguageName: "English",
      },
    },
  }),
  // dev
  dest: "./dist",
  public: "./docs/.vuepress/public",
  host: "0.0.0.0",
  port: 8080,
  open: false,
  templateDev: "./docs/.vuepress/client/templates/dev.html",
  // build
  shouldPreload: true, // 预加载
  shouldPrefetch: true, // 预拉取
  templateBuild: "./docs/.vuepress/client/templates/build.html",
  // Markdown 配置
  markdown: {},
  // 插件配置
  plugins: [
    backToTopPlugin(),
    nprogressPlugin(),
    mediumZoomPlugin({
      selector: ":not(a) > img",
      delay: 500,
      zoomOptions: {
        margin: 0,
        background: "#BADA55",
        scrollOffset: 0,
      },
    }),
    // docsearchPlugin({}),
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        },
        "/en/": {
          placeholder: "Search",
        },
      },
      hotKeys: ["s", "/"],
      maxSuggestions: 5,
      isSearchable: (page) => true, // 用于判断一个页面是否应该被包含在搜索索引中
      getExtraFields: () => [], // 用于在页面的搜索索引中添加额外字段
    }),
  ],
});
