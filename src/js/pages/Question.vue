<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Question?</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field prepend-icon="question_answer" name="title" label="Title" type="text" value="What is the first letter of the Alphabet?"></v-text-field>
                <Option
                  v-for="option in options"
                  v-bind:key="option.id"
                  v-bind="option"
                  @remove="onRemove"
                ></Option>
                <v-select
                  :items="times"
                  v-model="time"
                  label="Time in seconds"
                  class="input-group"
                  item-value="number"
                ></v-select>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary">Ask</v-btn>
            </v-card-actions>
            <v-btn
              @click="add"
              color="success"
              dark
              small
              absolute
              bottom
              left
              fab
            >
              <v-icon>add</v-icon>
            </v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import Option from "@/components/Option"
import uuid from "uuid/v4"

const Question = {
  components: {Option},
  data() {
    return {
      options: [
        {id: uuid(), body: "B", correct: false},
        {id: uuid(), body: "C", correct: false},
        {id: uuid(), body: "A", correct: true},
        {id: uuid(), body: "D", correct: false}
      ],
      time: null,
      times: [{text: 10}, {text: 20}, {text: 30}]
    }
  },
  methods: {
    onRemove(value) {
      this.options = this.options.filter(({id}) => id != value)
    },
    add() {
      const option = {id: uuid()}
      this.options.push(option)
    }
  }
}

export default Question
</script>
