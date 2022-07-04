import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    userName: "",
    userPassword: "",
    OK: false
  },
  getters: {
    getUserName(state) {
      return state.userName;
    },
    getUserPassword(state) {
      return state.userPassword;
    },
    getOK(state) {
      return state.OK
    }
  },
  mutations: {
    setUserName(state, name) {
      state.userName = name;
    },
    setUserPassword(state, password) {
      state.userPassword = password;
    },
    setOK(state, ok) {
      state.ok = ok
    }
  },
  actions: {
    setUserName({ commit }, name) {
      commit("setUserName", name);
    },
    setUserPassword({ commit }, password) {
      commit("setUserPassword", password);
    },
    setOK({ commit }, ok) {
      commit("setOK", ok)
    }
  },
  modules: {
  }
})