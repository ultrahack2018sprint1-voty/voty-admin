<template>
  <v-app>
   <v-toolbar color="indigo" dark fixed app>
     <v-toolbar-title>Voty Admin</v-toolbar-title>
     <v-spacer></v-spacer>
     <v-toolbar-items class="hidden-sm-and-down">
       <v-btn to="question" flat>Question</v-btn>
       <v-btn to="results" flat>Results</v-btn>
     </v-toolbar-items>
    </v-toolbar>
    <router-view/>
    <v-footer color="indigo" app inset></v-footer>
  </v-app>
</template>
