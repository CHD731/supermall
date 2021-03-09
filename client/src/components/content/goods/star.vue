<template>
  <div class="star">
      <span v-for="(s,index) in star" :key="index" :class="s"></span>
      <span class="rating">{{rating}}</span>
  </div>
</template>

<script>
export default {
    props: {
        rating: Number
    },
    computed: {
      star() {
        let arr = [];
        //on表示小数点前的数
        let on = Math.floor(this.rating);
        //评分和向下取整的评分都*10并相减，大于4就显示半心
        let afterNum= (this.rating*10)-(on*10);
        let i =0;
        while(i<5) {
              if(i===on) {
                (afterNum>4) ? arr.push('half') : arr.push('null');
              }
              else {
                arr.push('full');
              }
            i++;
          }
            return arr;
        }
      }
    }
</script>

<style scoped>
.full {
  background-image: url('../../../assets/img/star/star24_on@2x.png');
}
.half {
  background-image: url('../../../assets/img/star/star24_half@2x.png');
}
.null {
  background-image: url('../../../assets/img/star/star24_off@2x.png');
}
.star span{
  background-repeat: no-repeat;
  background-size: 10px 10px;
  display: inline-block;
  width: 10px;
  height: 10px;
}
.rating {
    color: #ff6000;
    font-size: 12px;
}
</style>