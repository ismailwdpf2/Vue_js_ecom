// store/index.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    cart: [], // Initial cart state
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, index) {
      state.cart.splice(index, 1);
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
    removeFromCart({ commit }, index) {
      commit('removeFromCart', index);
    },
  },
  getters: {
    cartItems: state => state.cart,
  },
});

export default store;
