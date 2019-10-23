<template>
  <div class="main">
    <div class="main-content">
      <router-view/>
    </div>
    <my-nav></my-nav>
  </div>
</template>

<script>
  import myNav from "@/components/myNav"
  export default {
    name: 'mainContent',
    components:{
      myNav
    }
  }
</script>

<style scoped>

</style>
