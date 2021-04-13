<template>
  <header>
    <v-navigation-drawer class="font-weight-black" v-model="drawer" clipped app>
      <v-container>
        <v-list-item>
          <v-list-item-content>
              <v-list-item-title class="title blue--text text--darken-2">Contents</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense nav>
          <v-list-item v-for="content in contents" :key="content.name" :to="content.link">
            <v-list-item-icon>
              <v-icon>{{ content.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>{{ content.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar color="#78909C" dark clipped-left app>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <router-link to="/">
        <v-toolbar-title to="/" class="font-italic">Vuetify_share_house</v-toolbar-title>
      </router-link>  
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-on="on" v-bind="attrs" text elevation="24">Login</v-btn>
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
  </header>
</template>

<script>
  export default {
    name:"NaviGation",
    data() {
      return{
        drawer: false,
        contents:[
          {name: 'point of ToDo',icon: 'mdi-vuetify',link:'/Test1'},
          {name: 'グラフ推移',icon: 'mdi-cogs',link:'/Test2'},
          {name: '途中経過',icon: 'mdi-palette'}
        ]
      }
   }
  } 
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
.router-link-exact-active {
  color: black;
  text-decoration: none;
}
.v-toolbar__title {
  color: white;
  text-decoration: none;
}
</style>