<template>
  <div class="toast" id="toast">
    <div>{{str}}</div>
  </div>
</template>

<script>
  export default{
    name:"toast",
    props:['str'],
  }
</script>

<style lang="less" scoped>
  .toast{
    div{
      position: fixed;
      z-index: 100;
      bottom:1.5rem;
      left:50%;
      /*display: none;*/
      margin-left: -2rem;
      width:4rem;
      background: rgba(0,0,0,0.4);
      text-align: center;
      line-height: 0.5rem;
      color:white;
    }
  }
</style>
