<template>
  <div class="login">
    <my-title :titleName="'登录'" :toName="'注册'" :routerName="'register'"></my-title>
    <!--<div @click="active('main-content')" style="background: orange">点击登录</div>-->
    <div class="content">
      <div class="input">
        <span>手机号：</span><input type="text" v-model="phone">
      </div>
      <div class="input">
        <span>密码：</span><input type="text" v-model="password">
      </div>
      <my-button :btnName="'登录'" :routerName="'main-content'"></my-button>
    </div>
  </div>
</template>

<script>
  import myTitle from "@/components/login-register/myTitle"
  import myButton from "@/components/login-register/myButton"
  export default {
    name:"login",
    data(){
      return{
        phone:"",
        password:"",
      }
    },
    methods:{
      active(routerName){
        this.$router.push(routerName)
      }
    },
    components:{
      myTitle,myButton
    }
  }
</script>

<style lang="less" scoped>
  .login{
    height:100%;
    background: white;
    .content{
      padding:1.26rem 0.75rem 0;
      .input{
        height:1.26rem;
        border-bottom: 0.01rem solid #8f8f8f;
        line-height: 1.26rem;
        font-size: 0.32rem;
        input{
          border:none;
          outline: none;
        }
      }
    }
  }
</style>
