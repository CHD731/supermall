<template>
  <div class="recommend">
    <swiper>
      <swiper-item v-for="(arrList,index) in recommendGroup" :key="index">
        <div class="recommend-swiper">
          <div class="recommend-swiper-item" v-for="(item,aaa) in arrList" :key="aaa">
            <div class="food">
              <img :src="'https://fuss10.elemecdn.com'+item.image_url" />
            </div>
            <span>{{item.title}}</span>
          </div>
        </div>
       </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from '@/components/common/swiper/Swiper.vue'
import SwiperItem from '@/components/common/swiper/SwiperItem.vue'
export default {
  components: { SwiperItem, Swiper },
  data() {
    return {
    }
  },
  props: {
    recommendList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    //将16条数据分成两组
    recommendGroup() {
      let arr =[]
      let temparr = []
      this.recommendList.forEach(item => {
        if(temparr.length === 8)  {
          temparr = []
        }
        if(temparr.length === 0) {
          arr.push(temparr)
        }
        temparr.push(item);
      })
        return arr
    },
  }
}
</script>

<style scoped>
.recommend::after {
  content: '';
  position: absolute;
  top: 246px;
  height: 12px;
  width: 100%;
  background: rgba(0, 0, 0, .05);
  border-bottom: 1px solid rgba(0, 0, 0,.1);
}
.recommend-swiper {
  display: flex;
  flex-wrap: wrap;
}
.recommend-swiper-item {
  margin-bottom: 25px;
  text-align: center;
  flex: 0 0 25%;
}
.food {
  margin-bottom: 5px;
}
.food img {
  width: 50px;
}
span {
  color: rgba(0, 0, 0, .6);
  font-size: 13px;
}

</style>