<template>
  <div id="app">
    <Tab v-if="!$route.meta.hideNav"></Tab>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
import Tab from "./components/TabOne.vue";

export default {
  components: {
    Tab,
  },
};
</script>

<style lang="scss" scoped>
#app {
  margin-top: 50px;
}
</style>
