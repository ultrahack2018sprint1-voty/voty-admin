<script>
import {Bar, mixins} from "vue-chartjs"

const options = {
  legend: {
    labels: {
      boxWidth: 0,
      fontSize: 20,
      fontStyle: "bold"
    }
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
}

const Graph = {
  mixins: [mixins.reactiveProp],
  extends: Bar,
  mounted() {
    this.renderChart(this.chartData, options)
  }
}

export default Graph
</script>
