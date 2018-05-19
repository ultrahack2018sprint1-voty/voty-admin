import Home from "@/pages/Home"

const home = {path: "/", name: "home", component: Home}
const wildcard = {path: "*", redirect: "/"}

const routes = [home, wildcard]

export default routes
