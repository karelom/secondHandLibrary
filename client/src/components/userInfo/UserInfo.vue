<template>
  <div>
    <span>
      <slot :users="user">
        <h1>Welcome, {{ account }}!</h1>
      </slot>
    </span>
  </div>
</template>

<script>
// import Cookies from "js-cookie";

export default {
  name: "UserInfo",
  props: {
    account: String,
  },
  data() {
    return {
      user: {
        firstName: "David",
        lastName: "HSU",
      },
    };
  },
  mounted() {},
  methods: {
    getCookiesName() {},
  },
};
</script>
