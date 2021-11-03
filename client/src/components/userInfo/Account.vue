<template>
  <div>
    <UserInfo>
      <template v-slot="{ users }">
        <h1>Welcome to Ficusdata, {{ users.firstName }}!</h1>
      </template>
    </UserInfo>

    <v-dialog v-model="dialog_visible" persistent max-width="290">
      <template #activator="{ on, attrs }">
        <v-btn color="red" dark v-bind="attrs" v-on="on"> Logout </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Are you sure you want to logout?
        </v-card-title>
        <v-card-text>We will miss you.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="darken-1" text @click="dialog_visible = false">
            Cancel
          </v-btn>
          <v-btn color="red darken-1" text @click="logout"> Sure </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "account",
  components: {
    UserInfo: () => import("./UserInfo.vue"), // prevent circular reference
  },
  data() {
    return {
      logout_alert: false,
      dialog_visible: false,
    };
  },
  methods: {
    logout() {
      this.dialog_visible = false;
      this.$emit("updateIsLogin", false);
      this.$router.replace("/Login");
    },
  },
};
</script>
