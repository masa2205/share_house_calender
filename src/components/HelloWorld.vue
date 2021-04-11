<template>
  <v-app>
    <v-navigation-drawer class="font-weight-black" v-model="drawer" clipped app>Lists</v-navigation-drawer>
    <v-app-bar color="#78909C" dark clipped-left app>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-italic">Vuetify_share_house</v-toolbar-title>
    </v-app-bar>
    <v-footer color="#78909C" class="font-italic" dark app>Vuetify_share_house</v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return{
        drawer: null
      }
   }
  } 
</script>