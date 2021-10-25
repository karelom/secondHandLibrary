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
import UserService from '../UserService'

export default {
  name: 'login',
  data () {
    return {
      msg: "You're currently in Login!!",
      loading: false,
      showPW: false,
      account: '',
      password: ''
    }
  },
  props: {

  },
  methods: {
    async login () {
      this.loading = true
      const article = {
        acc: this.account,
        pw: this.password
      }

    //   this.$http.delete('api/posts/' + article.acc).then(data => {
    //     console.log(data.bodyText)
    //   })

    //   this.$http.put('api/posts', article).then(data => {
    //     console.log(data.bodyText)
    //   })

      let result = await UserService.checkUser(article)
      console.log(result.data)
      let isLogin
      if (result.data === '使用者登入成功') {
        isLogin = true
        this.$router.push('/')
      } else {
        isLogin = false
      }
      this.$emit('updateIsLogin', isLogin)
      this.$route.params.isLogin = isLogin

      await new Promise(resolve => setTimeout(resolve, 1000))
      this.loading = false
    }
  }
}
</script>
