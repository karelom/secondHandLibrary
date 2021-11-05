<template>
  <v-app>
    <link
      href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css"
      rel="stylesheet"
    />
    <v-navigation-drawer app permanent expand-on-hover>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img :src="require('./assets/logo.png')"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
      <v-list-item v-show="!isLogin" link to="/Login" replace>
        <v-list-item-content>
          <v-list-item-title class="title"> Login </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-show="isLogin" link to="/Account" replace>
        <v-list-item-content>
          <v-list-item-title class="title"> Sandra Adams </v-list-item-title>
          <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link to="/" replace>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/Intro" replace>
        <v-list-item-icon>
          <v-icon>mdi-domain</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Intro</v-list-item-title>
      </v-list-item>
    </v-navigation-drawer>
    <v-app-bar app collapse-on-scroll color="teal lighten-3">
      <v-toolbar-title>汎思數據</v-toolbar-title>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <keep-alive>
          <!-- If using vue-router -->
          <router-view
            :account="user_account"
            @updateIsLogin="check"
          ></router-view>
        </keep-alive>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>
<script>
import UserService from "./UserService";
import UserCookie from "./UserCookie";

export default {
  name: "App",
  components: {},
  data() {
    return {
      isLogin: false,
      posts: [], // get the result of axios
      error: "", // get the error of axios
      user_account: "",
    };
  },
  async created() {
    // try {
    //   this.posts = await UserService.getDB();
    //   console.log(this.posts[0]);
    // } catch (err) {
    //   this.error = err.message;
    // }
  },
  async mounted() {
    this.$router.replace("/").catch(() => {});

    // todo: automatic insert default user to mongoDB
    let result = await UserService.insertUser({
      token: "%u5317",
      acc: "test",
      pw: "1234",
    });
    console.log(result.data);

    this.auto_login();
  },
  methods: {
    check(isLogin) {
      this.isLogin = isLogin;
      if (this.isLogin) this.auto_login();
    },
    /* auto login user */
    async auto_login() {
      let token = UserCookie.getCookie();
      if (token != undefined) {
        this.posts = await UserService.getUser(token.toString());
        this.isLogin = true;
        console.log(`auto login: [${this.posts}]`);
        this.user_account = this.posts;
      } else {
        console.log("token undefined");
      }
    },
  },
  computed: {},
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
