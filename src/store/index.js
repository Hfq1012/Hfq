import Vue from 'vue'
import Vuex from 'vuex'
import productData from '../../mock/product'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: [],
    cartList: []
  },
  getters: {
    brands: state => {
      const brands = state.productList.map(item => item.brands);
      return getFilterArray(brands);
    }
  },
  mutations: {
    setProductList(state, data) {
      state.productList = data
    },
    addCart(state, id) {
      const isAdded = state.cartList.find(item => item.id === id);
      if(isAdded) {
        isAdded.count ++;
      } else {
        state.cartList.push({
          id: id,
          count: 1
        })
      }
    },
    editCartCount(state, payload) {
      const product = state.cartList.find(item => item.id === payload.id);
      product.count += payload.count;
    },
    deleteCart(state, id) {
      const index = state.cartList.findIndex(item => item.id === id);
      state.cartList.splice(index, 1);
    },
    emptyCart(state) {
      state.cartList = [];
    }
  },
  actions: {
    getProductList (context) {
      setTimeout(() => {
        context.commit('setProductList', productData)
      }, 500)
    },
    buy(context) {
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit('emptyCart');
          resolve();
        }, 500)
      });
    }
  }
});

function getFilterArray(array) {
  const res = [];
  const json = {};
  for(let i=0; i<array.length; i++) {
    const _self = array[i];
    if(!json[_self]) {
      res.push(_self);
      json[_self] = 1;
    }
  }
  return res;
}

