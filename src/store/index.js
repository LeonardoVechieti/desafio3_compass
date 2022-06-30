import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: "",
    userPassword: ""
  },
  getters: {
  },
  mutations: {
    getUserName(state) {
      return state.userName;
    },

    getUserPassword(state) {
      return state.userPassword;
    },

    isCharAtName(state, char) {
      return state.userName.includes(char);
    },

    foo(state) {
      return typeof(state.userName)
    },

    setUserName(state, name) {
      state.userName = name;
    },

    setUserPassword(state, password) {
      state.userPassword = password;
    }
  },
  actions: {

    getUserName({ commit }) {
      commit("getUserName");
    },

    getUserPassword({ commit }) {
      commit("getUserPassword");
    },

    setUserName({ commit }, name) {
      commit("setUserName", name);
    },

    setUserPassword({ commit }, password) {
      commit("setUserPassword", password); 
    },

    isCharAt({ commit }, char) {
      commit("isCharAt", char);
    },

    foo({ commit }) {
      commit("foo")
    }
  },
  modules: {
  }
})
