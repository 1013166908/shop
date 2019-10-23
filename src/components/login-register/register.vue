<template>
  <div class="register">
    <my-title :titleName="'注册'" :toName="'登录'" :routerName="'login'"></my-title>
    <div class="content">
      <div class="input">
        <span>手机号：</span><input type="text" v-model="phone">
      </div>
      <div class="input">
        <span>密码：</span><input type="text" v-model="password">
      </div>
      <div class="input">
        <span>验证码：</span><input type="text" v-model="code">
      </div>
      <my-button :btnName="'下一步'" :routerName="'login'"></my-button>
    </div>

    <!--<div @click="active('login')" style="background: orange">下一步</div>-->
  </div>
</template>

<script>
  import myTitle from "@/components/login-register/myTitle"
  import myButton from "@/components/login-register/myButton"
  export default {
    name:"register",
    data(){
        return{
          phone:"",
          password:"",
          code:""
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
  .register{
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
