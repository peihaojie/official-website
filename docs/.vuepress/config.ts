/*
 * @Author: HaoJie
 * @Date: 2022-08-31 14:49:04
 * @LastEditTime: 2022-08-31 16:49:58
 * @LastEditors: HaoJie
 * @FilePath: \vuePress\docs\.vuepress\config.ts
 */
import { defineConfig } from "vuepress/config";

export default defineConfig({
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
  // theme: "gungnir",
  themeConfig: {
    locales: {
      "/": {
        selectText: "选择语言",
        label: "简体中文",
        editLinkText: "在 GitHub 上编辑此页",
      },
      "/en/": {
        selectText: "Languages",
        label: "English",
        editLinkText: "Edit this page on GitHub",
      },
    },
    search: true,
    searchMaxSuggestions: 30,
    lastUpdated: "Last Updated", // string | boolean
    // nextLinks: false, // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    // prevLinks: false, // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接

    repo: "https://github.com/peihaojie/vuePress", // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "查看源码",

    // 以下为可选的编辑链接选项
    // docsRepo: "vuejs/vuepress", // 假如你的文档仓库和项目本身不在一个仓库：
    // docsDir: "docs", // 假如文档不是放在仓库的根目录下：
    // docsBranch: "master", // 假如文档放在一个特定的分支下：
    editLinks: true, // 默认是 false, 设置为 true 来启用
    editLinkText: "帮助我们改善此页面！", // 默认为 "Edit this page"
    smoothScroll: true,

    personalInfo: {
      name: "haoJie",
      avatar: "/images/logo.jpg",
    },
  } as any,
  // dev
  dest: "./dist",
  host: "0.0.0.0",
  port: 8080,
  // build
  shouldPrefetch: () => true, // 预拉取
  // Markdown 配置
  markdown: {},
  // 插件配置
  plugins: [
    ["vuepress-plugin-smooth-scroll"],
    ["@vuepress/active-header-links"],
    ["vuepress-plugin-nprogress"],
    ["reading-progress"],
    ["vuepress-plugin-code-copy", true],
    ["cursor-effects"],
    ["go-top"],
    ["fulltext-search"],
    [
      "vuepress-plugin-helper-live2d",
      {
        // 是否开启控制台日志打印(default: false)
        log: false,
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: "shizuku",
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false, // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8, // 模型透明度(default: 0.8)
          },
        },
      },
    ],
    [
      "vuepress-plugin-zooming",
      {
        selector: ".theme-default-content img",
        delay: 1000,
        options: {
          bgColor: "black",
          zIndex: 10000,
        },
      },
    ],
    [
      "copyright",
      {
        noCopy: false, // 选中的文字将无法被复制
        minLength: 0, // 如果长度超过 100 个字符
        clipboardComponent: ".vuepress/components/clipboard.vue",
      },
    ],
    [
      "dynamic-title",
      {
        showIcon: "/images/logo.jpg",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000,
      },
    ],
  ] as any,
});
