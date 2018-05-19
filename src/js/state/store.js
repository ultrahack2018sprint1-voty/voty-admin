import Vue from "vue"
import Vuex from "vuex"
import VueNativeSock from "vue-native-websocket"

Vue.use(Vuex)

const state = {
  socket: {
    isConnected: false,
    message: null,
    reconnectError: false,
    winnerSelection: null
  }
}
const mutations = {
  SOCKET_ONOPEN(state, event) {
    console.log(event)
    state.socket.isConnected = true
  },
  SOCKET_ONCLOSE(state, event) {
    console.log(event)
    state.socket.isConnected = false
  },
  SOCKET_ONERROR(state, event) {
    console.error(state, event)
  },
  SOCKET_ONMESSAGE(state, message) {
    state.message = message
  },
  SOCKET_RECONNECT(state, count) {
    console.info(state, count)
  },
  SOCKET_RECONNECT_ERROR(state) {
    state.socket.reconnectError = true
  },
  WINNER_SELECTION(state, {winner_access_code, question, statistics}) {
    this.winnerSelection = {winner_access_code, question, statistics}
  }
}
const config = {
  state,
  mutations
}
const store = new Vuex.Store(config)
const options = {
  reconnection: true,
  reconnectionAttempts: 5,
  format: "json",
  store
}

Vue.use(VueNativeSock, "wss://ws-vo7y.herokuapp.com/", options)

export default store
