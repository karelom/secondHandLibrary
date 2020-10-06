<template>
    <div class="hello">
        <p>{{ msg }}</p>
        <button v-on:click='get'>Get</button>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Home page.'
    }
  },
  methods: {
    get () {
      this.$http.post('/api/user/login').then(data => {
        console.log(data)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
