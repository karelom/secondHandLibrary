<template>
  <v-app>
    <!-- default icon font for Vuetify -->
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">
    <v-navigation-drawer app
      expand-on-hover>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="./assets/ficus_logo.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
      <v-list-item link to='/'>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item link to='/Intro'>
        <v-list-item-icon>
          <v-icon>mdi-domain</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Intro</v-list-item-title>
      </v-list-item>
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.1"></script>
<script>
import VueResource from '@/resource' // 'resource' for vue3.0 to access http; 'axios' for vue2.0
// import home from './components/HelloWorld'
export default {
  name: 'App',
  components: {
      // home
  },
  mounted () {
    this.$http.get('/api/user/get').then(data => {
      console.log(data)
    })
    this.$http.post('/api/user/post').then(data => {
      console.log(data)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
