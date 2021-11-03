<template>
  <div>
    <v-alert
      :value="countDown.show"
      dense
      text
      type="error"
      border="left"
      transition="slide-y-transition"
      dismissible
      @input="dismissible_close"
      >Login fail, please try again!
    </v-alert>
    <p>{{ msg }}</p>
    <v-btn @click="register"> Register </v-btn>
    <v-form>
      <v-container>
        <v-row class="justify-md-center">
          <v-col cols="4" sm="3">
            <v-text-field
              v-model="account"
              label="Account"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="4" sm="3">
            <v-text-field
              v-model="password"
              :append-icon="showPW ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPW ? 'text' : 'password'"
              @click:append="showPW = !showPW"
              label="Password"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="1">
            <v-btn
              class="green lighten-1 white--text"
              :loading="loading"
              @click="login"
            >
              Login
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import UserService from "../../UserService";

export default {
  name: "login",
  data() {
    return {
      msg: "You're currently in Login!!",
      loading: false,
      showPW: false,
      account: "",
      password: "",
      countDown: {
        show: false,
        timer: 3,
      },
    };
  },
  props: {},
  methods: {
    async login() {
      this.loading = true;
      const article = {
        acc: this.account,
        pw: this.password,
      };

      // [Delete]
      // let result = await UserService.deleteUser('6177a5a9807c22001f5f9e24')
      // console.log(result.data)

      // [Check]
      let result = await UserService.checkUser(article);
      console.log(result.data);
      let isLogin;
      if (result.data === "使用者登入成功") {
        isLogin = true;
        this.$router.replace("/");
        this.account = "";
        this.password = "";
      } else {
        isLogin = false;
        this.countDown.show = true;
        this.count_down_timer();
      }
      this.$emit("updateIsLogin", isLogin);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.loading = false;
    },
    count_down_timer() {
      if (this.countDown.show && this.countDown.timer > 0) {
        window.setTimeout(() => {
          this.countDown.timer -= 1;
          this.count_down_timer();
        }, 1000);
      } else {
        this.reset_timer();
      }
    },
    reset_timer() {
      this.countDown.show = false;
      this.countDown.timer = 3;
    },
    dismissible_close(value) {
      this.countDown.show = value;
    },
    register() {
      this.$router.replace("/Register");
    },
    reset_values() {
      this.showPW = false;
      (this.account = ""), (this.password = ""), this.reset_timer();
    },
  },
  computed: {},
  beforeRouteLeave(to, from, next) {
    this.reset_values();
    next();
  },
};
</script>
