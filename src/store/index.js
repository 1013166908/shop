import Vue from 'vue'
import Vuex from 'vuex'
 Vue.use(Vuex);

const store=new Vuex.Store({
  state:{
    goodsCount:0,
    shopCar:[
      {
        id:"00001",
        count:1,
        price:88
      },
      {
        id:"00002",
        count:3,
        price:69
      }
    ]
  },
  mutations:{
    reset(state){
      state.goodsCount=0;
    },
    add(state){
      state.goodsCount++;
    },
    sub(state){
      state.goodsCount--;
    },
    //购物车相关
    add_1(state,id){
      state.shopCar.map((item)=>{
        if(item.id==id) item.count++;
      })
    },
    sub_1(state,id){
      state.shopCar.map((item)=>{
        if(item.id==id) item.count--;
      })
    },
    addGoods(state,goods){
      let newGoods={
        id:goods.id,
        count:goods.count,
        price:goods.price
      }
      state.shopCar.push(newGoods);
    }
  }
})

export default store;
