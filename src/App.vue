<template>
  <div id="app">
    <router-view/>
    <!--<my-nav></my-nav>-->
  </div>
</template>

<script>
  import myNav from "@/components/myNav"
export default {
  name: 'App',
  components:{
    myNav
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #fafafa;
}
body,html,#app{
  height:100%;
}
*{
  margin:0;padding:0;list-style: none;
}
body{
  max-width:750px;
  margin: 0 auto;

}
  a{
    text-decoration: none;
  }
  button{
    border: none;
    outline: none;
  }
</style>
