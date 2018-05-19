import Vue from "vue"
import Buefy from "buefy"
import "buefy/lib/buefy.css"

Vue.use(Buefy)

import App from "@/pages/App"
import router from "@/routing/router"

const el = "#app"
const render = createElement => createElement(App)
const config = {
  el,
  router,
  render
}

new Vue(config)
