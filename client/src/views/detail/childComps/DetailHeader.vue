<template>
  <div class="detail-header" v-if="detailHeader">
        <div class="detail-title">
            {{detailHeader.name}}
        </div>

        <div class="detail-message">
            <span>{{detailHeader.score}}</span>
            <span>月售{{detailHeader.sellCount}}单</span>
            <span>{{detailHeader.description}}</span>
            <span>约{{detailHeader.deliveryTime}}分钟</span>
            <span>距离{{detailHeader.distance}}</span>
        </div>

        <div class="seletor" v-if="getSeletor" @click="seletorClick">
            <span class="mini-tag" :class="activityClass[getSeletor[0].type]">{{getSeletor[0].name}}</span>
            <span class="activity-content">{{getSeletor[0].content}}</span>
            <span class="discount">{{getSeletor.length}}个优惠</span>
        </div>
        <div class="activity-bg">
            <div class="activity" v-if="showActivity">
                <div class="activity-title">优惠活动</div>
                    <ul class="activity-item">
                        <li v-for="(item,index) in getSeletor" :key="index">
                            <span :class="activityClass[item.type]">{{item.name}}</span>
                            <span class="activity-text">{{item.content}}</span>
                        </li>
                    </ul>
            </div>
        </div>
      </div>
</template>

<script>

export default {
    props: {
        detailHeader: Object
    },
    data() {
        return {
            activityClass: ['activity-green','activity-red','activity-orange'],
            showActivity: true
        }
    },
    computed: {
      getSeletor() {
          return this.detailHeader.supports
      }
  },
  methods: {
      seletorClick() {
          this.showActivity = true
      }
  }
}
</script>

<style>

.detail-title {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    margin-top: 40px;
}
.detail-title::before {
  content: '品牌';
  font-size: 11px;
  background-color: #ffd930;
  margin-right: 10px;
  padding: 1px 5px;
}
.detail-title::after {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 7px solid rgba(0, 0, 0, .6);
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    
}

.detail-message {
    margin-top: 10px;
    font-size: 12px;
    text-align: center;
}
.detail-message span {
    margin-right: 10px;
}
.seletor {
    display: flex;
    justify-content:space-between;
    align-items: center;
    margin: 10px 40px;
    font-size: 12px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, .1);
    padding: 5px;
    color: #6E6E6E;
}
.activity-content {
    width: 60%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.discount::after {
    content: '';
    width: 0;
    height: 0;
    border-top: 5px solid #6E6E6E;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    position: relative;
    top: 12px;
    left: 3px;
}



.activity-bg {
    background-color: rgba(0, 0, 0, .5);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;
}
.activity {
    position:fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-bottom: 10px;
    background-color: #fff;
}
.activity-title {
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
}
.activity-green,
.activity-red,
.activity-orange {
    color: #fff;
    padding: 2px 4px;
    border-radius: 2px;
}
.activity-green {
    background: #70BC46;
}
.activity-red {
    background: #F07373;
}
.activity-orange {
    background: #F1884F;
}
.activity-item {
    display: inline-block;
    width: 100%;
}
.activity-item{
    height: 160px;
    overflow-y: auto;
}
.activity-item li {
    font-size: 13px;
    margin-bottom: 15px;
    list-style: none;
    display: flex;
    align-items: center;
}
.activity-text {
    width: 200px;
    margin-left: 10px;
}
</style>