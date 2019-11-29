<template>
  <div class="nav">
      <router-link to="/main-content/index">
        <div class="nav-index">
          <div></div>
          <p>首页</p>
        </div>
      </router-link>
      <router-link to="/main-content/classify">
        <div>
          <div class="nav-class"></div>
          <p>分类</p>
        </div>
      </router-link>
      <router-link to="/main-content/shopping-cart">
        <div>
          <div class="nav-car"></div>
          <p>购物车</p>
        </div>
      </router-link>
      <router-link to="/main-content/me">
        <div >
          <div class="nav-me"></div>
          <p>我</p>
        </div>
      </router-link>
  </div>
</template>

<script>
  export default {
      name:"myNav",
  }
</script>

<style lang="less" scoped>
  @import "../assets/less/myNav";
</style>
