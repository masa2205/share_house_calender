<template>
  <v-content>
    <v-container fluid fill-height>
      <v-list three-line>
        <template v-for="(comment, index) in comments">
          <v-list-item
              :key="index"
              avatar
          >
            <v-list-item-avatar>
              <img :src="comment.avatar">
            </v-list-item-avatar>
    
            <v-list-item-content>
              <v-list-item-subtitle class="text--primary subheading">{{comment.content}}</v-list-item-subtitle>
              <v-list-item-subtitle>
                {{comment.createdAt.toDate().toLocaleString()}}
              </v-list-item-subtitle>
            </v-list-item-content>
    
            <v-list-item-action>
            </v-list-item-action>
          </v-list-item>
          <v-divider :key="comment.id"></v-divider>
        </template>
      </v-list>
      <Form/>
    </v-container>  
  </v-content>
</template>

<script>
  import {db} from '@/plugins/firebase';
  import Form from '@/views/Form';
  export default {
    name: "Chat",
    components: {
      Form
    },
    data: () => ({
      comments: [],
    }),
    firestore() {
      return {
        // firestoreのcommentsコレクションを参照
        comments: db.collection('comments').orderBy('createdAt')

      }
    },
  }
</script>

<style scoped>

</style>