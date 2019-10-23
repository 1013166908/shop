<template>
  <div class="title">
    <a href="javascript:;" @click='backHistory' class="back"><img src="../../assets/images/icon_back.png" alt=""></a><span>{{titleName}}</span><a href="javascript:;" @click="toNew(routerName)">{{toName}}</a>
  </div>
</template>

<script>
  export default {
    name:"myTitle",
    props:["titleName","routerName","toName"],
    methods:{
      backHistory(){
        this.$router.go(-1);
      },
      toNew(name){
        this.$router.push(name);
      }

    }
  }
</script>

<style lang="less" scoped>
  .title{
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.49rem 0.31rem 0 0.28rem;
    height:0.92rem;
    background:#ff9900;
    line-height: 0.42rem;
    font-size: 0.3749rem;
    color:white;
    a{
      display: block;
      color:white;
    }
    .back{
      width:0.24rem;
      height:0.42rem;
      img{
        width:100%;
      }
    }
  }
</style>
