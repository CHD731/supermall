<template>
  <div class="detail-nav-bar">
     <nav-bar class="nav-bar" :style="navBg" >
          <template v-slot:left>
            <img class="back" src="@/assets/img/detail/back.svg" @click="back" />
          </template>
          <template v-slot:content>
            <img class="avatar" :src="navdata.avatar" @click="back" />
          </template>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navBar/NavBar.vue';
export default {
  components: { NavBar },
  data() {
      return {
          bgImg: null
      }
  },
  props: {
      navdata: {
          type: Object,
          default() {
              return {}
          }
      }
  },
  methods: {
      back() {
          this.$router.back();
      }
  },
  computed: {
      navBg() {
        //   console.log(this.navdata);
          this.bgImg=this.navdata.bgImg;
        //   console.log(this.navData);
        //   return this.navData.info.name
          return this.bgImg ? {background: 'url('+this.bgImg+')'} : {}
      }
  }

}
</script>

<style scoped>
.avatar {
    width: 70px;
    height: 70px;
    margin-top: 7px;
    border: 1px solid rgba(0, 0, 0, .1);
}
.back {
    width: 25px;
    height: 25px;
    color: #fff;
    margin-left: 15px;
    margin-top: 10px;
}
</style>