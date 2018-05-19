import Vue from "vue"
import VueRouter from "vue-router"
import routes from "@/routing/routes"

Vue.use(VueRouter)

const mode = "history"
const config = {mode, routes}
const Router = new VueRouter(config)

export default Router
