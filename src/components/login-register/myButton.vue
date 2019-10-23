<template>
  <div class="btn">
    <button @click="toNew(routerName)">{{btnName}}</button>
  </div>
</template>

<script>
  export default {
    name:"myButton",
    props:["btnName","routerName"],
    methods:{
      toNew(name){
        this.$router.push(name);
      }
    }
  }
</script>

<style scoped>
  button{
    width:100%;
    height:1.01rem;
    border:none;
    border-radius: 0.08rem;
    background: #ff9900;
    line-height: 1.01rem;
    font-size: 0.3749rem;
    color:white;
  }
</style>
