<template>
    <div>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
  name: 'intro',
  data () {
    return {
      msg: "You're currently in Intro!!"
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
