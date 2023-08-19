# 个人博客

## 项目介绍

这是一个 blog 项目，使用了 `vuepress` 搭建，主要用于记录个人的学习笔记和生活琐事。

```bash
# node 版本
# 推荐使用 node 16.20.0

# 安装依赖
npm install

# 运行(缓存)
npm run docs:dev cache

# 运行(清除缓存)
npm run docs:dev no cache

# 打包
npm run docs:build
```

> 该项目暂时不再维护，后续使用 [vdoing](https://github.com/xugaoyi/vuepress-theme-vdoing) 进行重构
> 因为 `@vuepress/blog` 需要自定义 `layout`。在网上溜达一圈之后发现，`vdoing` 这个主题功能更加齐全。
