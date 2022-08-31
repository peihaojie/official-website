<!--
 * @Author: HaoJie
 * @Date: 2022-08-31 14:33:45
 * @LastEditTime: 2022-08-31 14:33:47
 * @LastEditors: HaoJie
 * @FilePath: \vuePress\docs\.vuepress\components\clipboard.vue
-->
<template>
  <div>
    <p>
      著作权归 haoJie 所有。 链接：<a :href="location">{{
        location
      }}</a>
    </p>
    <div v-html="html" />
  </div>
</template>

<script>
export default {
  props: ["html"],

  created() {
    this.location = window.location;
  },
};
</script>
