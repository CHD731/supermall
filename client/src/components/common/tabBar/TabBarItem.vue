<template>
  <div class="tab-bar-item" @click="tabBarClick">
      <div v-if="!isActive">
        <slot name="item-icon"></slot>
      </div>
      <div v-else>
          <slot name="item-icon-active"></slot>
      </div>
      <div class="item-text" :style="activeStyle">
        <slot name="item-text"></slot>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: {
        path: String
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle() {
            return this.isActive ? {color: '#02a774'} : {}
        }
    },
    methods: {
        tabBarClick() {
            this.$router.push(this.path);
        }
    }
}
</script>

<style scoped>
.tab-bar-item {
    flex: 1;
    text-align: center;
    margin-bottom: 5px;
    margin-top: 5px;
}
.item-text {
    font-size: 12px;
    color: #999;
}
.active {
    color: #02a774;
}

</style>