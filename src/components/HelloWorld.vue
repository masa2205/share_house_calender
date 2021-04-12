<template>
  <v-app>
    <v-img
     lazy-src="https://picsum.photos/id/11/10/6"
     max-height="auto"
     max-width="auto"
     src="https://picsum.photos/id/11/500/300">
    </v-img>
    <v-date-picker :mode="mode" :formats="formats" v-model="selectedDate"></v-date-picker>
  </v-app>
</template>

<script>
  
</script>