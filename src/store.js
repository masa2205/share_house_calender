import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import firebase from "firebase";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store ({
  actions: {
    userLogin({ commit }, { email, password }) {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(user => {
            commit('setUser', user);
            commit('setIsAuthenticated', true);
          })
          .catch(() => {
            commit('setUser', null);
            commit('setIsAuthenticated', false);
            })
          .then(user => {
            commit('setUser', user);
            commit('setIsAuthenticated', true);
            router.push('/about'); //追加
          })
          .catch(() => {
            commit('setUser', null);
            commit('setIsAuthenticated', false);
            router.push('/');　//追加
          })
          
    },
    userJoin({ commit }, { email , password }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit('setUser', user);
          commit('setIsAuthenticated', false);
          router.push('/');
        })
        .catch(() => {
          commit('setUser', null);
          commit('setIsAuthenticated' , false);
          router.push('/');
        });
    }      
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated=payload;
    }
  },
});