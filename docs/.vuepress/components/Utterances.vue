<!--
 * @Author: HaoJie
 * @Date: 2023-08-19 19:36:32
 * @LastEditTime: 2024-02-23 10:23:01
 * @LastEditors: HaoJie
 * @FilePath: \official-website\docs\.vuepress\components\Utterances.vue
-->
<template lang="pug">
#comment
</template>
<script>
export default {
  name: "Utterances",
  props: {
    // 传入的 issue-number
  },
  methods: {
    initValine() {
      // 建立脚本以及属性
      const utterances = document.createElement("script");
      utterances.type = "text/javascript";
      utterances.async = true;
      utterances.setAttribute("issue-term", "pathname");
      utterances.setAttribute("theme", "github-light");
      utterances.setAttribute("repo", `peihaojie/official-website`);
      utterances.crossorigin = "anonymous";
      utterances.src = "https://utteranc.es/client.js";

      // comment 是要插入评论的地方
      window.document.getElementById("comment").appendChild(utterances);
    },
  },
  mounted: function () {
    // 每次挂载时候，进行初始化
    this.initValine();
  },
};
</script>
