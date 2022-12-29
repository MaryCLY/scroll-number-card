<!--
 * @Author: lychen13
 * @Description: 示例
 * @FilePath: \scroll-number-card\examples\App.vue
-->
<template>
  <div id="app">
    <scroll-number-card num="144.1234万" text="个苹果" />
    <scroll-number-card num="144.12" text="件" :min-digits-left="4" :min-digits-right="4" />
    <scroll-number-card num="14" />
    <scroll-number-card num="14" :min-digits-right="2" />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
}
.scroll-number-wrapper {
  margin-bottom: 10px;
}
</style>
