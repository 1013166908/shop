<template>
  <div class="shop-car-wrap">
    <top></top>
    <div class="content">
      <ul>
        <car-goods v-for="(item,index) in this.$store.state.shopCar" :goodsIfo="item" :key="index"></car-goods>
      </ul>
    </div>
    <footer>
      <img src="../../../static/images/quanxuan.jpg" alt="">
      <div>
        <p>合计￥<span id="total_price">{{total.toFixed(2)}}</span><br>不含运费</p>
        <button>去结算</button>
      </div>
    </footer>
  </div>
</template>

<script>
  import top from './top.vue'
  import carGoods from './carGoods.vue'
  export default{
    name:"shopCar",
    data(){
      return {
          total:0
      }
    },
    mounted(){
      this.$store.state.shopCar.map((value)=>{
        this.total+=value.count*value.price;
    })
    },
    components:{
        top,carGoods
    }
  }
</script>

<style lang="less" scoped>
  .shop-car-wrap{
    padding-top: 1.33rem;
    padding-bottom: 2.13rem;
  }
  footer{
    position: fixed;
    left:0;
    bottom:1.06rem;
    display: flex;
    /*justify-content: space-between;*/
    width: 100%;
    height:1.12rem;
    border-top: 0.03rem solid #eee;
    img{
      display: block;
      width:2.65rem;
    }
    div{
      display: flex;
      width: 100%;
      p{
        flex: 1;
        background: white;
        padding-top: 0.28rem;
        font-size: 0.24rem;
        color:#c2c2c2;
        line-height: 0.3rem;
        text-align: center;
      }
      button{
        width:2.32rem;
        background: #ff5500;
        border: none;
        margin-top: -0.03rem;
        line-height: 1.15rem;
        color:white;
      }
    }
  }
</style>
