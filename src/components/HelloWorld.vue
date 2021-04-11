<template>
  <v-app>
    <v-navigation-drawer class="font-weight-black" v-model="drawer" clipped app>Lists</v-navigation-drawer>
    <v-app-bar color="#78909C" dark clipped-left app>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-italic">Vuetify_share_house</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-on="on" v-bind="attrs">Login
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Email*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Password*" type="password" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
          </v-card-actions>  
        </v-card>  
      </v-dialog>
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