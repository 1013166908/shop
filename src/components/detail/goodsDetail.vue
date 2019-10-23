<template>
  <div class="goods-detail-wrap">
    <img v-for="item in imgArr" :src='item' alt="">
  </div>
</template>

<script>

  export default{
    name:"goodsDetail",
    props:['imgArr'],
  }
</script>

<style scoped>
  .goods-detail-wrap{
    padding: 0 0.5rem 0 0.46rem;
  }
  img{
    display: block;
    width:6.52rem;
    margin-bottom: 0.03rem;
  }
</style>
