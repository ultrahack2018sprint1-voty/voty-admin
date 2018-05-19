import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {}
const mutations = {}
const actions = {}
const config = {
  state,
  mutations,
  actions
}
const store = new Vuex.Store(config)

export default store
