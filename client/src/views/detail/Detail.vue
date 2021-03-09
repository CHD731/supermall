<template>
  <div class="detail">
      <detail-nav-bar :navdata="this.detailInfo" />

      <detail-header :detailHeader="detailInfo" />
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue';
import {getDetail} from '@/network/detail.js';
import DetailHeader from './childComps/DetailHeader.vue';
export default {
  components: { DetailNavBar, DetailHeader },
  data() {
      return {
          id: null,
          detailInfo: {},
          
      }
  },
  created() {
      this.id = this.$route.params.id;
      getDetail(this.id).then(res=> {
          console.log(res.data.info);
          this.detailInfo = res.data.info;
      })
  },
  computed: {
      getSeletor() {
          return this.detailInfo.supports
      }
  },
  methods: {
      
  },
}
</script>

<style>

</style>