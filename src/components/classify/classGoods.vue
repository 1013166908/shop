<template>
  <ul>
    <li v-for="(item,index) in goodsList.list">
      <div><img :src="item.thumbnail" alt=""></div>
      <p>{{item.name}}</p>
    </li>
  </ul>
</template>

<script>
  export default{
    name:"classGoods",
    data(){
      return{
        goodsListAll:[],
        goodsList:[],
        pathNow:0
      }
    },
    watch:{
      $route(to, from){
        this.pathNow=to.path.split("/")[3];
        this.goodsList=this.goodsListAll[this.pathNow];
      },
    },
    mounted(){
      this.$http({
        url:"http://yd.msword.top/getClassify"
      }).then(res=>{
//        console.log(res.data);
        this.goodsListAll=res.data.data;
        this.goodsList=res.data.data[0];
      })
    },
  }
</script>

<style scoped lang="less">
  ul{
    /*height:100%;*/
    padding-bottom: 0.01rem;
    /*background: white;*/
    overflow: hidden;
    li{
      float:left;
      overflow: hidden;
      width:2.26rem;
      height:2.35rem;
      border:0.02rem solid #1d84a7;
      border-radius: 0.05rem;
      margin:0.21rem 0.1rem 0 0.13rem;
      div{
        padding:0.16rem 0.32rem 0 0.3rem;
        height:1.72rem;
        img{
          width:100%;
        }
      }
      p{
        line-height: 0.48rem;
        font-size:0.22rem;
        text-align: center;
        background: #1d84a7;
        color:white;
      }
    }
  }
</style>
