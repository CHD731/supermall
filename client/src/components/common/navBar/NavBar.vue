<template>
  <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="content"><slot name="content"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-bar {
    height: 44px;
    display: flex;
    line-height: 44px;
}
.left,.right {
    width: 80px;
}
.content {
    flex: 1;
    text-align: center;
}


</style>