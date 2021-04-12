<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div id="app" class="d-flex align-center">
        <router-link to="/">HelloWorld</router-link>
        <router-link to="/Test1">Test1</router-link>
      </div>
    </v-app-bar>
    <transition mode=”out-in”>
      <router-view/>
    </transition>
  </v-app>
</template>

<script>

</script>

<style>
.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
</style>