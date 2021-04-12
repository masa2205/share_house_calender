<template>
  <div id="app" class="d-flex align-center" v-cloak>
    <v-app>
      <app-navigation/>
        <router-link to="/"/>
        <router-link to="/Test1"/>
      <v-footer color="#78909C" class="font-italic" dark app>Vuetify_share_house</v-footer>
      <transition mode=”out-in”>
        <router-view/>
      </transition>
    </v-app>  
  </div>  
</template>

<script>
import AppNavigation from "./components/AppNavigation";

export default {
  name: "App",
  components: {
    AppNavigation
  }
};
</script>

<style>
body {
background: #eee;
}
.page {
position: fixed;
left: 0;
right: 0;
width: inherit;
padding: 0 50px;
}

.router-transition-enter-active {
animation: fadeIn 1s;
animation-delay: .5s;
opacity: 0;
}



.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
</style>