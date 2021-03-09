<template>
  <div class="home">
    <nav-bar class="title">
      <template v-slot:left>
        <img class="search" src="@/assets/img/search.svg" />
      </template>
      <template v-slot:content>
        <div>达达外卖</div>
      </template>
      <template v-slot:right>
        <div class="login">登录|注册</div>
      </template>
    </nav-bar>

    <recommend class="recommend" :recommendList="recommend" />
    
    <good-list :goods="goods" />
  </div>
</template>

<script>
// @ is an alias to /src
import {getHomedata,getRecommend,getGoodsList} from '@/network/home' 
import NavBar from '@/components/common/navBar/NavBar.vue';
import Recommend from './childComps/Recommend.vue';
import GoodList from '@/components/content/goods/goodList.vue';
export default {
  name: 'Home',
  components: {
    NavBar,
    Recommend,
    GoodList
  },
  data() {
    return {
      recommend: [],
      goods: []
    }
  },
  created() {
    getRecommend().then(res=> {
      this.recommend = res.data;
    });
    getGoodsList().then(res=> {
      this.goods = res.data;
    })
  },
  
  methods: {

  }
}
</script>

<style scoped>
.title {
  background-color: #02a774;
  color: #fff;
  font-size: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.recommend {
  margin-top: 44px;
}
.search {
  width: 30px;
  height: 30px;
  margin-left: 10px;
  margin-top: 8px;
}
.login {
  font-size: 14px;
  margin-right: 5px;
}
</style>