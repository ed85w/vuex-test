import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const myStore = new Vuex.Store({
  state: {
    products: [
      {name: 'banana', price: 10},
      {name: 'apple', price: 20},
      {name: 'orange', price: 30},
      {name: 'melon', price: 40},
    ]
  },
  // getter = uses state data to produce manipulated data 
  getters: {
    saleProducts: state => {
      var saleProds = state.products.map(el => { 
        return {
        name: '**' + el.name + '**',
        price: el.price / 2
      }
      });
      return saleProds;
    }
  },
  // mutations - edit the state data 
  mutations: {
    // reducePriceInStore: state => {
    //   state.products.forEach(product => {
    //     product.price -= 1;
    //   });
    // }
    reducePriceInStore: (state, amount) => {
      state.products.forEach(product => {
        product.price -= amount;
      });
    }
  }
})