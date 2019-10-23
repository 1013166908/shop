import Vue from 'vue'
import Vuex from 'vuex'
 Vue.use(Vuex);

const store=new Vuex.Store({
  state:{
    goodsCount:0,
    shopCar:[
      {
        id:"00001",
        count:1
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
    }
  }
})

export default store;
