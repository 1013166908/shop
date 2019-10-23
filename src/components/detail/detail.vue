<template>
  <div class="detail-wrap">
    <div class="top"></div>
    <div class="content" v-if="goods.pid">
      <my-mask></my-mask>
      <buy-ifo :img="goods.swiperImgArr[0]" :buySelect="goods.buySelect" :price="goods.reduct_price" :total="goods.total"></buy-ifo>
      <div class="ifo">
        <header class="img">
          <button class="btn-return" @click="$router.back(-1)"></button>
          <button class="btn-car"></button>
          <button class="btn-more"></button>
          <img :src="goods.swiperImgArr[0]" alt="">
          <ul>
            <li v-for="item in 3"></li>
          </ul>
        </header>
        <footer>
          <header>
            <h1>{{goods.name}}</h1>
            <div>收藏</div>
          </header>
          <footer>
            <div class="price">
              <span class="original">{{'￥'+goods.original_price}}</span><span class="now">{{'￥'+goods.reduct_price}}</span>
            </div>
            <div class="tag">
              <div>
                <div>{{goods.allowance*100+'折'}}</div>
                <div v-if="goods.isFreeShip">包邮</div>
              </div>
              <ul>
                <li v-for="item in goods.describe">{{item}}</li>
              </ul>
            </div>
          </footer>
        </footer>
      </div>
      <div class="other">
        <div class="other-nav">
          <a href="javascript:;" @click="changeBuyer" :class="getClassName(!buyer)" ><span>商品详情</span></a>
          <a href="javascript:;" @click="changeBuyer" :class="getClassName(buyer)" ><span>买家口碑</span></a>
        </div>
        <div class="other-content">
          <goods-detail v-show="!buyer" :imgArr="this.goods.shopDes"></goods-detail>
          <buyer v-show="buyer" :buyerReviews="this.goods.buyerReviews"></buyer>
        </div>
      </div>
    </div>
    <to-car :price="goods.reduct_price"></to-car>
  </div>
</template>

<script>
  import goodsDetail from '@/components/detail/goodsDetail'
  import buyer from '@/components/detail/buyer'
  import toCar from '@/components/detail/toCar'
  import myMask from '@/components/detail/myMask'
  import buyIfo from '@/components/detail/buyIfo'
  export default{
    name:"detail",
    data(){
        return {
          goods:{},
          buyer:false,
        }
    },
    methods:{
      //切换详情-买家 10-22
      changeBuyer(){
          this.buyer=!this.buyer;
      },
      //获取活动名 10-22
      getClassName(flag){
        if(flag) return "active";
        else return "";
      }
    },
    components:{
      goodsDetail,buyer,toCar,myMask,buyIfo
    },
    mounted(){
      let pid=this.$route.path.split("/")[2];
      this.$http({
        url:"http://yd.msword.top/getDetails",
        params:{
            pid:pid
        }
      }).then(res=>{
        this.goods=res.data.data;
        console.log(this.goods);
      })
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/detail/detail";
</style>
