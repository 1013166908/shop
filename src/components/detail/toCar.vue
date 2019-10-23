<template>
  <div class="to-car-wrap">
    <p>总价：<span>￥{{(price*this.$store.state.goodsCount).toFixed(2)}}</span></p>
    <div>
      <button style="background: #ff9900" @click="toBuyIfo">加入购物车</button>
      <button style="background: #eb2222">立即购买</button>
    </div>
  </div>
</template>

<script>
  export default{
    name:"toCar",
    props:['price'],
    methods:{
      toBuyIfo(){
        if(this.$store.state.goodsCount<1)
          this.$store.commit("add");
        document.body.style.overflow="hidden";
        let mask=document.getElementById("my-mask");
        let buyIfo=document.getElementById("buy-ifo");
        mask.style.display="block";
        buyIfo.style.display="block";
      },

    },
    mounted(){

    }
  }
</script>

<style lang="less" scoped>
  .to-car-wrap{
    position: fixed;
    z-index: 20;
    bottom:0;
    display: flex;
    width: 100%;
    height:1rem;
    background: white;
    border-top: 0.01rem solid #dddddd;
    line-height: 1rem;
    font-size: 0.3rem;
    p{
      flex: 1;
      padding-left: 0.3rem;
      span{
        color:#eb2222;
      }
    }
    div{
      display: flex;
      button{
        width:3.98rem/2;
        color:white;
      }
    }
  }
</style>
