<script>
import {Bar, mixins} from "vue-chartjs"

const Graph = {
  mixins: [mixins.reactiveProp],
  extends: Bar,
  props: ["options"],
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}

export default Graph
</script>
