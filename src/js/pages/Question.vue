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
                <v-select
                  :items="partners"
                  v-model="partner"
                  label="Partner"
                  class="input-group"
                  item-value="text"
                ></v-select>
                <v-text-field
                  prepend-icon="question_answer"
                  name="title"
                  label="Title"
                  type="text"
                  :value="title">
                </v-text-field>
                <Option
                  v-for="option in options"
                  v-bind:key="option.id"
                  v-bind="option"
                  @remove="onRemove"
                ></Option>
                <v-layout row wrap>
                  <v-flex xs10>
                    <v-slider :max="30"  thumb-label step="10" ticks v-model="time" label="Duration in seconds:"></v-slider>
                  </v-flex>
                  <v-flex xs1>
                    <v-text-field v-model="time" type="number"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="ask" color="primary">Ask</v-btn>
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
      time: 10,
      partner: null,
      partners: [{text: "UltraHack"}, {text: "Digidino"}, {text: "ESA"}],
      title: "What is the first letter of the Alphabet?"
    }
  },
  methods: {
    onRemove(value) {
      this.options = this.options.filter(({id}) => id != value)
    },
    add() {
      const option = {id: uuid()}
      this.options.push(option)
    },
    ask() {
      const payload = {
        event_type: "CREATE_QUESTION",
        partner_title: this.partner,
        question: {
          duration: this.time,
          title: this.title,
          options: this.options
        }
      }
      const path = {name: "loading", params: {duration: this.time - 1}}

      this.$socket.sendObj(payload)
      this.$router.push(path)
    }
  }
}

export default Question
</script>
