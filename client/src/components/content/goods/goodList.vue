<template>
  <div class="goodList">
      <div class="nearby">附近商家</div>
      <good-list-item v-for="(item,index) in goods" :key="index"  :good-item="item"/>
  </div>
</template>

<script>
import goodListItem from './goodListItem.vue'
export default {
  components: { goodListItem },
  props: {
    goods: {
      tpye: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goodList {
    margin-left: 10px;
    margin-bottom: 49px;
}
.nearby {
    margin-top: 25px;
    font-size: 14px;
    color: rgba(0, 0, 0, .4);
}
</style>