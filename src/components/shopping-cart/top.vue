<template>
  <div class="shop-car-top">
    <div>
      <img src="../../../static/images/back.png" alt="">
      <p>购物车</p>
    </div>

  </div>
</template>

<script>
  export default{
    name:"top"
  }
</script>

<style lang="less" scoped>
.shop-car-top{
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height: 0.93rem;
  padding:0.4rem 0 0;
  z-index: 25;
  background: #ff9900;
  >div{
    display: flex;
    align-items: center;
    height: 0.93rem;
    padding:0 0.4rem 0;
  }
  img{
    width:0.23rem;
    height:0.37rem;
    vertical-align: middle;
  }
  p{
    flex:1;
    font-size: 0.42rem;
    color:white;
    text-align: center;
  }
}
</style>
