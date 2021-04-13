import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import router from '@/router';

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