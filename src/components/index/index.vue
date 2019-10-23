<template>
  <div class="index-wrap">
    <search></search>
    <div class="content">
      <banner></banner>
      <goods v-for="(item,index) in list" :key="index" :img="img[index]" :name="item.name" :list="item.list"></goods>
    </div>
  </div>
</template>

<script>
  import search from '@/components/search'
  import banner from '@/components/index/banner'
  import goods from '@/components/index/goods'
  export default {
    name:"index",
    data(){
      return {
        name:"hehe",
        url:"baby.png",
        list:[],
        img:[
          {
            url:"hot",
            width:"0.29",
            height:"0.38"
          },
          {
            url:"baby",
            width:"0.39",
            height:"0.39"
          },
          {
            url:"hot",
            width:"0.29",
            height:"0.38"
          },
          {
            url:"hot",
            width:"0.29",
            height:"0.38"
          },
          {
            url:"hot",
            width:"0.29",
            height:"0.38"
          },
          {
            url:"hot",
            width:"0.29",
            height:"0.38"
          },
        ]
      }
    },
    components:{
        search,banner,goods
    },
    mounted(){
      this.$http({
        url:"http://yd.msword.top/getIndexData"
      }).then(res=>{
        this.list=res.data.data;
//        console.log(res.data.data);
      })
    }
  }
</script>

<style scoped>
  .index-wrap{
    padding-bottom: 1.01rem;
  }
  .content{
    padding-top: 1.46rem;
    background: #fafafa;
  }
  .search-wrap{
    background: url("../../assets/index/images/banner-top.png") !important;
  }
</style>


