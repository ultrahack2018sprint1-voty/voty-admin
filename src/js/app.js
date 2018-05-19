import Vue from "vue"

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
