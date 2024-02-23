<!--
 * @Author: HaoJie
 * @Date: 2024-02-23 11:32:13
 * @LastEditTime: 2024-02-23 14:02:42
 * @LastEditors: HaoJie
 * @FilePath: \official-website\docs\.vuepress\components\clipboard.vue
-->
<template lang="pug">
div
  p
    span 著作权归 haoJie 所有。 链接：
    a(:href="location") {{ location }}
  div(v-html="html")
</template>

<script>
export default {
  props: ["html"],

  created() {
    this.location = window.location;
  },
};
</script>
