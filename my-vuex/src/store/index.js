/**
 * Created by llsienna on 2018/7/9.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import dialog from '@/components/data/dialog.js'
import dialog2 from '@/components/data/dialog2.js'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    msg: 'hello vuex2'
  },
  modules: {
    dialog: dialog,
    dialog2: dialog2
  },
  mutations: {
    add: function () {
      this.state.dialog2.count++
    },
    reduce: function () {
      this.state.dialog2.count--
    }
  },
  actions: {
    add: function (context) {
      context.commit('add')
    },
    reduce: function (context) {
      context.commit('reduce')
    }
  },
  getters: {
    msg2: state => state.msg + '我是getter'
  }
})
