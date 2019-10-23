<template>
  <div class="class-wrap">
    <div class="class-nav">
      <router-link v-for="(item,index) in goodsListAll" :goodsList="item" :to="'/main-content/classify/'+index" :key="index">{{item.name}}</router-link>
    </div>
    <div class="class-goods">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name:"classNav",
    data(){
        return {
//            routerName:["baby","cosmetic","house","food","world"],
            goodsListAll:[]
        }
    },
    mounted(){
      this.$http({
        url:"http://yd.msword.top/getClassify"
      }).then(res=>{
        console.log(res.data);
        this.goodsListAll=res.data.data;
      })
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/classify/class-nav";
</style>
