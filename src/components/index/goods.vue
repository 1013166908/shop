<template>
  <div class="wrap">
    <div class="title">
      <div class="logo">
        <img :src="'../../../static/images/'+img.url+'.png'" alt="" :style="'width:'+ img.width +'rem;height:'+img.height+'rem'">
      </div>
      <h2>{{name}}</h2>
    </div>
    <ul>
      <li v-for="item in list" @click="toDetail(item.id)">
        <div class="top">
          <img :src="item.thumbnail" alt="">
        </div>
        <div class="bottom">
          <p class="name">{{item.name}}</p>
          <p>
            <span class="now">{{item.reduct_price}}</span>
            <span class="before">{{item.original_price}}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name:"goods",
    methods:{
      toDetail(id){
        console.log(id);
        this.$router.push({
          path:"/detail/"+id,
        })
      }
    },
    components:{
    },
    props:['img','name','list']
  }
</script>

<style lang="less" scoped>
  @import "../../assets/index/less/goodsList.less";
</style>
