/*
 * @Author: HaoJie
 * @Date: 2022-08-31 14:49:04
 * @LastEditTime: 2024-02-23 10:55:22
 * @LastEditors: HaoJie
 * @FilePath: \official-website\docs\.vuepress\config.ts
 */
import { defineConfig, UserPlugins, DefaultThemeConfig } from "vuepress/config";

/**
 * https://vuepress.vuejs.org/zh/config
 */
export default defineConfig({
  head: [["link", { rel: "icon", href: "/images/logo.jpg" }]],
  // 键名是该语言所属的子路径
  // 作为特例，默认语言可以使用 '/' 作为其路径。
  locales: {
    "/": {
      lang: "zh-CN", // 将会被设置为 <html> 的 lang 属性
      title: "_海色灏茫",
      description: "_海色灏茫的个人博客",
    },
    "/en/": {
      lang: "en-US",
      title: "_haiSeHaoMang",
      description: "HaiSeHaoMang Personal Blog",
    },
  },
  // dev
  dest: "./web",
  host: "127.0.0.1",
  port: 8088,
  // build
  shouldPrefetch: () => true, // 预拉取
  // Markdown 配置
  markdown: {
    // 代码块显示行号
    lineNumbers: true,
  },
  chainWebpack: config => {
    config.module
      .rule("pug")
      .test(/\.pug$/)
      .use("pug-plain-loader")
      .loader("pug-plain-loader")
      .end();
  },
  /**
   * https://vuepress.vuejs.org/zh/theme/default-theme-config.html
   */
  themeConfig: <DefaultThemeConfig>{
    // 多语言配置
    locales: {
      "/": {
        // 多语言下拉菜单的标题
        selectText: "选择语言",
        // 该语言在下拉菜单中的标签
        label: "简体中文",
        // 编辑链接文字
        editLinkText: "在 GitHub 上编辑此页",
        // 导航栏
        navbar: true,
        // 自定义导航栏
        nav: [
          { text: "首页", link: "/" },
          {
            text: "文章",
            items: [
              { text: "生命在于折腾", link: "/zh/guide/self" },
              { text: "测试页面", link: "/zh/guide/page1" },
            ],
          },
        ],
        // sidebar: {
        //   "/": [
        //     {
        //       title: "分组 1", // 必要的
        //       path: "/zh/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //       collapsable: false, // 不可折叠，可选的, 默认值是 true,
        //       sidebarDepth: 2, // 嵌套的标题链接，可选的, 默认值是 1
        //       children: ["/"],
        //     },
        //   ],
        // },
      },
      "/en/": {
        selectText: "Languages",
        label: "English",
        editLinkText: "Edit this page on GitHub",
        // 导航栏
        navbar: true,
        // 自定义导航栏
        nav: [
          { text: "Home", link: "/en/" },
          // {
          //   text: "Article",
          //   link: "/en/",
          //   items: [{ text: "page1", link: "/en/guide/page1" }],
          // },
        ],
      },
    },
    // 嵌套的标题链接
    sidebarDepth: 2,
    // 显示所有页面的标题链接
    displayAllHeaders: true,
    // 活动的标题链接
    activeHeaderLinks: true,
    // 上一篇链接
    prev: true,
    // 下一篇链接
    next: true,
    // 内置搜索
    search: true,
    // 内置搜索
    tags: true,
    searchMaxSuggestions: 30,
    lastUpdated: "Last Updated", // string | boolean
    // nextLinks: false, // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    // prevLinks: false, // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接

    repo: "https://github.com/peihaojie/official-website",
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    // repoLabel: "查看源码",

    // 以下为可选的编辑链接选项
    // docsRepo: "vuejs/vuepress", // 假如你的文档仓库和项目本身不在一个仓库：
    docsDir: "docs", // 假如文档不是放在仓库的根目录下：
    docsBranch: "main", // 假如文档放在一个特定的分支下：
    editLinks: true, // 默认是 false, 设置为 true 来启用
    // editLinkText: "帮助我们改善此页面！", // 默认为 "Edit this page"
    smoothScroll: true,

    personalInfo: {
      name: "haoJie",
      avatar: "/images/logo.jpg",
    },
  },
  // 插件配置
  plugins: <UserPlugins>[
    /**
     * 平滑滚动
     * https://github.com/vuepress/vuepress-plugin-smooth-scroll
     */
    ["vuepress-plugin-smooth-scroll"],
    /**
     * 页面滚动时自动激活侧边栏链接的插件
     * https://vuepress.vuejs.org/zh/plugin/official/plugin-active-header-links.html
     */
    ["@vuepress/active-header-links"],
    /**
     * 进度条插件
     * https://vuepress.vuejs.org/zh/plugin/official/plugin-nprogress.html
     */
    ["@vuepress/nprogress'"],
    /**
     * 阅读进度条插件
     * https://github.com/tolking/vuepress-plugin-reading-progress
     */
    ["reading-progress"],
    /**
     * 为所有代码块添加复制代码
     * https://github.com/znicholasbrown/vuepress-plugin-code-copy
     */
    ["vuepress-plugin-code-copy", true],
    /**
     * 为鼠标添加可爱的点击效果
     * https://github.com/moefyit/vuepress-plugin-cursor-effects
     */
    ["cursor-effects"],
    /**
     * 点击可爱的猫猫回到顶部
     * https://github.com/moefyit/vuepress-plugin-go-top
     */
    ["go-top"],
    /**
     * 全文搜索功能
     * https://github.com/leo-buneev/vuepress-plugin-fulltext-search
     */
    ["fulltext-search"],
    /**
     * Live2D 看板娘
     * https://github.com/JoeyBling/vuepress-plugin-helper-live2d
     */
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
            width: 165, // 模型的长度(default: 135)
            height: 450, // 模型的高度(default: 300)
            hOffset: 20, //  水平偏移(default: 65)
            vOffset: -110, //  垂直偏移(default: 0)
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
    /**
     * 缩放图像
     * https://github.com/vuepress/vuepress-plugin-zooming
     */
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
    /**
     * 处理复制行为
     * https://github.com/vuepress/vuepress-plugin-copyright
     */
    [
      "copyright",
      {
        noCopy: false, // 选中的文字将无法被复制
        minLength: 0, // 如果长度超过 100 个字符
        clipboardComponent: ".vuepress/components/Clipboard.vue",
      },
    ],
    /**
     * 动态标题
     * https://github.com/moefyit/vuepress-plugin-dynamic-title
     */
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
    /**
     * 博客
     * https://vuepress.vuejs.org/zh/plugin/official/plugin-blog.html
     */
    [
      "@vuepress/blog",
      {
        directories: [
          {
            // 当前分类的唯一 ID
            id: "post",
            // 目标文件夹
            dirname: "zh/_posts",
            // `entry page` (或者 `list page`) 的路径
            path: "/post",
            itemPermalink: "/posts/:year/:month/:day/:slug",
            // 组件需要自定义，准备转向其他 theme 解决方案
            layout: "IndexPost",
            itemLayout: "Post",
            pagination: {
              lengthPerPage: 10,
            },
          },
        ],
        sitemap: {
          hostname: "http://www.snowmanbar.com",
        },
      },
    ],
  ],
});
