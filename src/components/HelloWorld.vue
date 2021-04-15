<template>
  <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
    <v-layout justify-center align-center column pa-5>
      <div class="display-4 font-weight-black white--text text-xs-center">Whelcome To</div>
      <div class="display-4 font-weight-black white--text text-xs-center mb-3">Masa's House</div>
      <div class="display-1 font-weight-bold white--text text-xs-center">good job!</div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorlld"
};
</script>

<style scoped>
.home-hero {
  background: url("https://picsum.photos/id/11/10/6");
  background-size: cover;
  width: 100%;
  height: 250%;
}
</style>