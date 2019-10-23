<template>
  <div class="buyer-wrap">
    <header>
      <ul>
        <li v-for="(item,index) in SelectList" :class="getClassName(index)" @click="changeSeclect(index)">{{item.name}}</li>
      </ul>
    </header>
    <ul>
      <li v-for="item in buyerReviews[SelectList[selectNow].list]">
        <header>
          <div class="name">{{item.buyerName}}</div>
          <div class="time">{{toTime(item.createTime)}}</div>
        </header>
        <div>
          <img v-for="item_1 in item.postImg" :src="item_1" alt="">
        </div>
        <p class="comment">{{item.postDescribe}}</p>
        <p class="reply">{{item.adminReviews}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name:"buyer",
    data(){
      return {
//        SelectList:["全部评价","好评","差评","晒单"],
        SelectList:[
          {
            name:"全部评价",
            list:"all"
          },
          {
            name:"好评",
            list:"good"
          },
          {
            name:"差评",
            list:"bad"
          },
          {
            name:"晒图",
            list:"postForm"
          },
        ],
        selectNow:0 //当前选中的索引值
      }
    },
    methods:{
      //获取导航样式 10-23
      getClassName(index){
          //当前id等于被选中id，返回活动样式 10-22
          if(index==this.selectNow) return "active";
          else return "";
      },
      //修改当前页面 10-23
      changeSeclect(index){
        this.selectNow=index;
      },
      //时间转化 10-23
      toTime(time){
        let date=new Date(time*1000/1000);
        let y=date.getFullYear();
        let m=this.toTwo(date.getMonth()+1);
        let d=this.toTwo(date.getDate());
        let h=this.toTwo(date.getHours());
        let mi=this.toTwo(date.getMinutes());
        let s=this.toTwo(date.getSeconds());
        return y+"-"+m+"-"+d+" "+h+":"+mi+":"+s;
      },
      toTwo(n){
        if(n<0) return "0"+n;
        else return n;
      },
    },

    props:['buyerReviews'],
    mounted(){

    }
  }
</script>

<style scoped lang="less">
  @import '../../assets/detail/buyer';
</style>
