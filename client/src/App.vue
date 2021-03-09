<template>
  <div>
      <!-- <router-view v-slot="{ Component }">
    <keep-alive include="Home,News">
      <component class="view" :is="Component" />
    </keep-alive>
  </router-view> -->

  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
    <main-tab-bar v-if="!showTabBar" />
  </div>
</template>
<script>
import MainTabBar from './components/content/mainTabBar/MainTabBar.vue'
import Home from '@/views/home/Home.vue'
export default {
  components: { MainTabBar,Home },
  computed: {
    showTabBar() {
      return this.$route.path.indexOf('/detail') !== -1;
    }
  }
}
</script>
<style scoped>
@import './assets/css/normalize.css';
</style>
