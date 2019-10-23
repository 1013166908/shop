<template>
  <div class="buy-ifo-wrap" id="buy-ifo">
    <div class="img">
      <img :src='img' alt="">
    </div>
    <img @click="toClose" src="../../../static/images/close.png" alt="">
    <header>
      <p class="price">￥{{price}}</p>
      <p>库存{{total}}件</p>
      <p>请选择商品属性</p>
    </header>
    <div class="add">
      <p>购买数量</p>
      <div>
        <button @click="sub">-</button>
        <p>{{num}}</p>
        <button @click="add">+</button>
      </div>
    </div>
    <div class="select">
      <div v-for="(item,index) in buySelect">
        <h4>{{item.name}}</h4>
        <ul>
          <li v-for="(item_1,index_1) in item.list" @click="changeStyle(index,index_1)" :class="getStyle(index,index_1)">{{item_1}}</li>
        </ul>
      </div>
    </div>
    <toast :str="toast_str"></toast>
  </div>
</template>

<script>
  import toast from '../toast.vue'
  export default{
    name:"buyIfo",
    data(){
      return{
        num:1,
        flag_1:0,
        flag_2:0,
        toast_str:""
      }
    },
    components:{
      toast
    },
    methods:{
      add(){
        if(this.num<this.total) {
            this.num++;
            this.$store.commit("add");
        }
      },
      sub(){
        if(this.num>1) {
          this.num--;
          this.$store.commit("sub");
        }
        else{
          //模仿toast
          this.toast_str="至少购买一件";
          let toast=document.getElementById("toast");
          toast.style.display="block";
          setTimeout(()=>{
            toast.style.display="none";
          },500);
        }
      },
      //关闭购买信息
      toClose(){
        document.body.style.overflow="visible";
        let mask=document.getElementById("my-mask");
        let buyIfo=document.getElementById("buy-ifo");
        mask.style.display="none";
        buyIfo.style.display="none";
      },
      //获取样式
      getStyle(index1,index2){
          if(index1==0){
              if(index2==this.flag_1) return "active";
              else return "";
          }
          else{
              if(index2==this.flag_2) return "active";
              else return "";
          }
      },
      changeStyle(index1,index2){
        if(index1==0){
          this.flag_1=index2;
        }
        else{
          this.flag_2=index2;
        }
      },
    },
    mounted(){
      this.$store.commit("reset");
    },
    props:['img','buySelect','price','total']
  }
</script>

<style lang="less" scoped>
  @import "../../assets/detail/buy-ifo";
</style>
