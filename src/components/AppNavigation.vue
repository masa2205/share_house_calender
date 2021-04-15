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
      <div v-if="!isAuthenticated" class="hidden-sm-and-down">
        <v-btn text to="/sign-in" data-cy="signinBtn">SIGN IN</v-btn>
        <v-btn color="brown lighten-3" to="/join" class="nav-join" data-cy="joinBtn">JOIN</v-btn>
      </div>
      <div v-else>
        <v-btn outline color="brown lighten-3" @click="logout" data-cy="logout">Logout</v-btn>
      </div>
    </v-app-bar>
  </header>
</template>

<script>
  export default {
    name:"Navigation",
    data() {
      return{
        drawer: false,
        contents:[
          {name: 'point of ToDo',icon: 'mdi-vuetify',link:'/Test1'},
          {name: 'グラフ推移',icon: 'mdi-cogs',link:'/Test2'},
          {name: '途中経過',icon: 'mdi-palette',link:'/Counter'}
        ],
      }
    },
    computed: {
      isAuthenticated() {
        return this.$store.getters.isAuthenticated;
      }
    },
    methods: {
       logout() {
         this.$store.dispatch("userSignOut");
       }
    }
};
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