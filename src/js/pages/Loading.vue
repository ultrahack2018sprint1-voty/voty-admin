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
  data() {
    return {
      interval: {},
      value: 0
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return clearInterval(this.interval)
      }
      this.value += 5
    }, 1000)
  }
}

export default Loading
</script>
