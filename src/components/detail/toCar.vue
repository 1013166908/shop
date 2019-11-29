<template>
  <div class="to-car-wrap">
    <p>总价：<span>￥{{(price*this.$store.state.goodsCount).toFixed(2)}}</span></p>
    <div>
      <button style="background: #ff9900" @click="toBuyIfo">加入购物车</button>
      <button style="background: #eb2222">立即购买</button>
    </div>
    <toast :str="toast_str"></toast>
  </div>
</template>

<script>
  import toast from '../toast.vue'
  export default{
    name:"toCar",
    data(){
        return{
          toast_str:""
        }
    },
    props:['id','price'],
    components:{
      toast
    },
    methods:{

      toBuyIfo(){
        let buyIfo=document.getElementById("buy-ifo");
        let display=getComputedStyle(buyIfo).display;
        if(display=="none"){
          if(this.$store.state.goodsCount<1)
            this.$store.commit("add");
          document.body.style.overflow="hidden";
          let mask=document.getElementById("my-mask");
          mask.style.display="block";
          buyIfo.style.display="block";
          this.flag=true;
        }
        else{
          //添加入购物车

          let count=document.getElementById("add_count").innerHTML;
//          console.log(count);
          let newGoods={
            id:this.id,
            count:count,
            price:this.price
          }
          this.$store.commit("addGoods",newGoods);
          //弹出提示
          this.toast_str="添加成功";
          let toast=document.getElementById("toast");
          setTimeout(()=>{
            this.toast_str="";
          },800);

          //消失
          document.body.style.overflow="visible";
          let mask=document.getElementById("my-mask");
          mask.style.display="none";
          buyIfo.style.display="none";
        }
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
