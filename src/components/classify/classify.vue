<template>
  <div class="classify-wrap">
    <search></search>
    <div class="content">
      <class-nav></class-nav>
    </div>
  </div>
</template>

<script>
  import search from "@/components/search"
  import classNav from "@/components/classify/classNav"
  export default{
    name:"classify",
    components:{
        search,classNav
    }
  }
</script>

<style scoped lang="less">
  .content{
    padding-top: 1.46rem;
    background: #fafafa;
  }
  .classify-wrap{
    height:100vh;
    overflow: hidden;
    background: #fafafa;
  }
</style>
