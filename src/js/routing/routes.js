import Question from "@/pages/Question"
import Loading from "@/pages/Loading"
import Results from "@/pages/Results"

const home = {path: "/question", name: "question", component: Question}
const loading = {path: "/loading", name: "loading", component: Loading}
const results = {path: "/results", name: "results", component: Results}
const wildcard = {path: "*", redirect: "/question"}

const routes = [home, loading, results, wildcard]

export default routes
