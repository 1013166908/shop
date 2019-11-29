<template>
  <li class="car-goods-wrap">
    <header>
      <img src="../../../static/images/shop.jpg" alt="">
    </header>
    <div class="content" v-if="goods.name">
      <img :src="goods.swiperImgArr[0]" alt="">
      <div class="ifo">
        <h3>{{goods.name}}</h3>
        <div>
          <button @click="sub">-</button>
          <p>{{goodsIfo.count}}</p>
          <button @click="add">+</button>
        </div>
      </div>
      <div class="price">￥{{(goodsIfo.count*goods.reduct_price).toFixed(2)}}</div>
    </div>
  </li>
</template>

<script>
  export default{
    name:"car-goods",
    data(){
      return{
          goods:{}
      }
    },
    props:["goodsIfo"],
    methods:{

      add(){
        if(this.goodsIfo.count<this.goods.total){
          this.$store.commit("add_1",this.goodsIfo.id);
          let total=document.getElementById("total_price");
//          console.log(this.goodsIfo.price);
          total.innerHTML=(parseFloat(total.innerHTML)+parseFloat(this.goodsIfo.price)).toFixed(2);
        }

      },
      sub(){
          if(this.goodsIfo.count>1){
            this.$store.commit("sub_1",this.goodsIfo.id);
            let total=document.getElementById("total_price");
            total.innerHTML=(parseFloat(total.innerHTML)-this.goodsIfo.price).toFixed(2);
          }
      },
    },
    mounted(){
      this.$http({
        url:"http://yd.msword.top/getDetails",
        params:{
          pid:this.goodsIfo.id
        }
      }).then(res=>{
        this.goods=res.data.data;
      })
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/shopping-cart/car-goods";
</style>
