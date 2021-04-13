import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    count:1234
  },
  actions,
  getters,
  mutations
});

export default store;