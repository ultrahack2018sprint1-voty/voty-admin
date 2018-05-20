<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-progress-circular
          :size="200"
          :width="25"
          :rotate="-90"
          :value="value"
          color="pink"
        >
          {{100 - value}}
        </v-progress-circular>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
const Loading = {
  props: {
    duration: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      interval: null,
      value: 0
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  computed: {
    step() {
      return 100 / this.duration
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        clearInterval(this.interval)
        this.$router.push({name: "results"})
        return
      }
      this.value += this.step
    }, 1000)
  }
}

export default Loading
</script>
