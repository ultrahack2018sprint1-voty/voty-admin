import Question from "@/pages/Question"
import Loading from "@/pages/Loading"
import Results from "@/pages/Results"

const home = {
  path: "/question",
  name: "question",
  component: Question,
  props: true
}
const loading = {
  path: "/loading",
  name: "loading",
  component: Loading,
  props: true
}
const results = {
  path: "/results",
  name: "results",
  component: Results,
  props: true
}
const wildcard = {path: "*", redirect: "/question"}

const routes = [home, loading, results, wildcard]

export default routes
