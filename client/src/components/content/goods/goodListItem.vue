<template>
  <div class="good-list-item" @click="itemClick">
      <img class="logo" :src="img_url" >
      <div class="right">
        <div class="title">{{goodItem.name}}</div>

          <!-- 保准票 -->
        <div class="bill">
          <span v-for="(n,index) in goodItem.supports" :key="index">
            {{n.icon_name}}
          </span>
        </div>

        <!-- 评分 -->
        <div class="rating-order">
          <div class="rating">
            <star class="star" :rating="goodItem.rating" />
            <div class="sell">月售{{goodItem.recent_order_num}}单</div>
          </div>
          <div class="text">{{goodItem.delivery_mode.text}}</div>
        </div>
        
        <div class="send">
          ￥20起送/{{goodItem.piecewise_agent_fee.tips}}
        </div>  
      </div>
  </div>
</template>

<script>
import star from './star.vue'
export default {
  components: { star },
  data() {
    return {
      img_url: require('@/assets/img/goods/'+this.goodItem.image_path)
    }
  },
  props: {
    goodItem: {
      tpye: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    itemClick() {
      this.$router.push('/detail/'+this.goodItem.id);
    }
  }
}
</script>

<style scoped>
.good-list-item {
  display: flex;
  margin: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, .04);
  padding-bottom: 10px;
}
.right {
  margin-left: 10px;
  width: 100%;
}
.logo {
  border: 1px solid rgba(0, 0, 0, .3);
  width: 70px;
  height: 70px;
}
.title {
  font-size: 16px;
  font-weight: bold;
}
.title::before {
  content: '品牌';
  font-size: 11px;
  background-color: #ffd930;
  margin-right: 5px;
}
.bill {
  font-size: 12px;
  float: right;
  margin-right: 10px;
  color: rgba(0, 0, 0, .4);
  margin-top: 7px;
}
.bill span {
  border: 1px solid rgba(0, 0, 0, .05);
}
.rating-order {
  display: flex;
  width: 100%;
  margin-top: 30px;
  justify-content:space-between;
}
.rating {
  display: flex;
}
.sell {
  font-size: 12px;
  color: rgba(0, 0, 0, .6);
  margin-left: 12px;
  margin-top: 4px;
}
.text {
  font-size: 12px;
  color: #02a774;
  border: 1px solid #02a774;
  margin-right: 15px;
}
.send {
  margin-top: 10px;
  font-size: 12px;
  color: rgba(0, 0, 0, .6);
}
</style>