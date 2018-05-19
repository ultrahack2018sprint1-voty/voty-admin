<template>
  <v-layout align-center>
    <v-flex>
      <v-checkbox
        v-model="checked"
        :id="id"
        hide-details
      ></v-checkbox>
    </v-flex>
    <v-flex xs9>
      <v-text-field
        label="Option"
        :value="body"
      ></v-text-field>
    </v-flex>
    <v-flex xs2>
      <v-btn fab dark small color="error" @click="remove">
        <v-icon dark>remove</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
const Option = {
  props: ["id", "body", "correct"],
  methods: {
    remove() {
      this.$emit("remove", this.id)
    }
  },
  data() {
    return {
      checked: this.correct
    }
  }
}

export default Option
</script>
