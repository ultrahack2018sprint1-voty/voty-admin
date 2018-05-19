<template>
  <v-content>
    <v-container fluid grid-list-xl>
      <v-layout row justify-space-around>
        <v-flex xs4>
          <Graph :chartData="data" :options="options"/>
        </v-flex>
      </v-layout>
      <v-layout row justify-space-around>
        <v-flex xs4>
          <v-alert :value="true" color="info">
             <v-icon large dark>start</v-icon>
            And the winner code is: <b>MC</b>
          </v-alert>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import Graph from "@/components/Graph"

const results = {
  winner_access_code: "vo7y",
  question: "What is the first letter of the Alphabet?",
  statistics: [
    {
      option: "A",
      correct: true,
      responses_count: 20
    },
    {
      option: "B",
      correct: false,
      responses_count: 17
    },
    {
      option: "C",
      correct: false,
      responses_count: 10
    }
  ]
}

const labels = results.statistics.map(({option}) => option)
const data = results.statistics.map(({responses_count}) => responses_count)
const label = results.question

const Results = {
  components: {Graph},
  data() {
    return {
      data: {
        labels: labels,
        datasets: [
          {
            label: label,
            data: data,
            backgroundColor: [
              "rgba(75, 192, 192, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 99, 132, 0.2)"
            ],
            borderColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(255,99,132,1)",
              "rgba(255,99,132,1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
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
    }
  }
}

export default Results
</script>
