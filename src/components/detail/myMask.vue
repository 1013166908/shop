<template>
  <div class="mask-wrap" id="my-mask" @click="toClose">

  </div>
</template>

<script>
  export default{
    name:"myMask",
    methods:{
        toClose(){
          document.body.style.overflow="visible";
          let mask=document.getElementById("my-mask");
          let buyIfo=document.getElementById("buy-ifo");
          mask.style.display="none";
          buyIfo.style.display="none";
        }
    }
  }
</script>

<style lang="less" scoped>
  .mask-wrap{
    position: fixed;
    top:0;
    left:0;
    display: none;
    width:100%;
    height:100vh;
    z-index: 15;
    background: rgba(0,0,0,0.5);
  }
</style>
