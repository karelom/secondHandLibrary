<template>
    <div>
        <p>{{ msg }}</p>
        <v-form>
          <v-container>
            <v-row
              justify="center"
            >
              <v-col
                cols="12"
                sm="3"
              >
                <v-text-field
                  v-model="account"
                  label="Account"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="3"
              >
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
            </v-row>
          </v-container>
        </v-form>

        <v-btn
            :loading="loading"
            @click="login">Login</v-btn>
    </div>
</template>

<script>
export default {
  name: 'account',
  data () {
    return {
      msg: "You're currently in Account!!",
      loading: false,
      showPW: false,
      account: '',
      password: ''
    }
  },
  methods: {
    async login () {
      this.loading = true
      const article = {
        acc: this.account,
        pw: this.password
      }
      this.$http.post('/api/user/login', article).then(data => {
        console.log(data)
      })
      await new Promise(resolve => setTimeout(resolve, 3000))
      this.loading = false
    }
  }
}
</script>
