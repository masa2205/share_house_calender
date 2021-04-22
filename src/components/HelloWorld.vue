<template>
  <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
    <v-layout justify-center align-left column pa-5>
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
  background: url("https://user-images.githubusercontent.com/65245621/115658257-6a9a5d80-a373-11eb-9a14-74a8c10e435d.jpg");
  background-size: cover;
  width: 100%;
  height: 250%;
}
</style>