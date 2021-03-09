<template>
<div class="main-tab-bar">
  <tab-bar>
      <tab-bar-item :path="'/home'">
          <template v-slot:item-icon>
            <img src="@/assets/img/tabbarImg/home.svg" />
          </template>
          <template v-slot:item-icon-active>
            <img src="@/assets/img/tabbarImg/home_active.svg" />
          </template>
          <template v-slot:item-text>
            <div>首页</div>
          </template>
      </tab-bar-item>

      <tab-bar-item :path="'/search'">
          <template v-slot:item-icon>
            <img src="@/assets/img/tabbarImg/search.svg" />
          </template>
          <template v-slot:item-icon-active>
            <img src="@/assets/img/tabbarImg/search_active.svg" />
          </template>
          <template v-slot:item-text>
            <div>搜索</div>
          </template>
      </tab-bar-item>

      <tab-bar-item :path="'/cart'">
          <template v-slot:item-icon>
            <img src="@/assets/img/tabbarImg/order.svg" />
          </template>
          <template v-slot:item-icon-active>
            <img src="@/assets/img/tabbarImg/order_active.svg" />
          </template>
          <template v-slot:item-text>
            <div>订单</div>
          </template>
      </tab-bar-item>

      <tab-bar-item :path="'/profile'">
          <template v-slot:item-icon>
            <img src="@/assets/img/tabbarImg/profile.svg" />
          </template>
          <template v-slot:item-icon-active>
            <img src="@/assets/img/tabbarImg/profile_active.svg" />
          </template>
          <template v-slot:item-text>
            <div>我的</div>
          </template>
      </tab-bar-item>
  </tab-bar>
</div>
</template>

<script>
import TabBar from '../../common/tabBar/TabBar.vue'
import TabBarItem from '../../common/tabBar/TabBarItem.vue'
export default {
  components: { TabBar, TabBarItem },

}
</script>

<style scoped>
img {
    width: 22px;
    height: 22px;
}
</style>