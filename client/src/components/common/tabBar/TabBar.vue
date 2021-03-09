<template>
  <div class="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.tab-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 9;
  border-top: 1px solid rgba(0, 0, 0, .05);
}
</style>