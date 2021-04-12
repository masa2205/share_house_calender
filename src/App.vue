<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div id="app" class="d-flex align-center" v-cloak>
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