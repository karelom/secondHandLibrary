<template>
  <div>
    <v-alert
      :value="valid === 1"
      dense
      text
      type="success"
      border="left"
      transition="slide-y-transition"
      >{{ msg_success }}
    </v-alert>
    <v-alert
      :value="valid === 2"
      dense
      text
      type="error"
      border="left"
      transition="slide-y-transition"
      >{{ msg_error }}
    </v-alert>
    <v-form ref="form" lazy-validation @submit="check_form">
      <v-container>
        <v-row class="justify-md-center">
          <v-col cols="12" sm="7">
            <v-text-field
              v-model="user.name"
              :counter="50"
              :rules="rules.nameRule"
              label="Account"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="7">
            <v-text-field
              v-model="user.password"
              :rules="[(v) => !!v || 'Password is required']"
              label="Password"
              required
              :append-icon="showPW1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPW1 ? 'text' : 'password'"
              @click:append="showPW1 = !showPW1"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="7">
            <v-text-field
              v-model="user.pw_confirm"
              :rules="rules.pwRule"
              label="Password Comfirm"
              required
              :append-icon="showPW2 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPW2 ? 'text' : 'password'"
              @click:append="showPW2 = !showPW2"
            ></v-text-field>
          </v-col>
          <!-- <v-col cols="12" sm="7">
            <v-checkbox
              v-model="checkbox"
              :rules="[(v) => !!v || 'You must agree to continue!']"
              label="Do you agree?"
              required
            ></v-checkbox>
          </v-col> -->
        </v-row>

        <v-btn color="success" class="mr-4" type="submit"> submit </v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import UserService from "../../UserService";
export default {
  name: "register",
  data() {
    return {
      msg_success: "You're now Registered!",
      msg_error: "Registration failed!",
      valid: 0,
      showPW1: false,
      showPW2: false,
      user: {
        name: "",
        password: "",
        pw_confirm: "",
      },
      rules: {
        nameRule: [
          (v) => !!v || "Account is required",
          (v) =>
            (v && v.length <= 50) || "Name must be less than 50 characters",
        ],
        pwRule: [
          (v) => !!v || "Password Comfirm is required",
          (v) => v == this.user.password || "Password not matching",
        ],
      },
    };
  },
  methods: {
    reset_values() {
      this.valid = 0;
      this.showPW1 = false;
      this.showPW2 = false;
      this.user.name = "";
      this.user.password = "";
      this.user.pw_confirm = "";
    },
    async check_form() {
      if (!this.$refs.form.validate()) return;

      let result = await UserService.insertUser({
        acc: this.user.name,
        pw: this.user.password,
      });
      console.log(result);

      if (result.data === "使用者創建成功") {
        this.valid = 1;
        await new Promise((resolve) => setTimeout(resolve, 3000));
        this.$router.replace("/Login");
      } else {
        this.valid = 2;
        await new Promise((resolve) => setTimeout(resolve, 3000));
        this.valid = 0;
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    console.log("call beforeRouteLeave");
    this.reset_values();
    this.$refs.form.reset();
    next();
  },
};
</script>

<style>
</style>