import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  userInfo: {}, //用户信息
  login: true,//是否登录
};

Vue.use(Vuex);
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
/*const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  },
  mutations,
  actions: {
    decrement ({ commit,state },playload) {
      commit('decrement',playload)
    }
  }
})*/

export default store;
