import Vue from "vue"
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"

Vue.use(Vuetify)

import App from "@/pages/App"
import router from "@/routing/router"
import store from "@/state/store"

const el = "#app"
const render = createElement => createElement(App)
const config = {
  el,
  router,
  store,
  render
}

new Vue(config)
