<template>
  <div>
    <span>
      <slot :users="user">
        <h1>Welcome, {{ user.lastName }}!</h1>
      </slot>
    </span>
  </div>
</template>

<script>
import Cookies from "js-cookie";

export default {
  name: "UserInfo",
  data() {
    return {
      user: {
        firstName: "David",
        lastName: "HSU",
      },
    };
  },
  mounted() {
    document.cookie = "escaped=%u5317";
    document.cookie = "default=%E5%8C%97";
    // override origin Cookies settings
    var cookiesNew = Cookies.withConverter({
      read: (value, name) => {
        if (name === "escaped") {
          return unescape(value);
        }
        return Cookies.converter.read(value, name);
      },
      write: (value) => {
        console.log(value);
        return value.toUpperCase();
      },
    });
    // cookiesNew.set("username", "David", { expires: 1 });
    console.log(cookiesNew.get("escaped"));
  },
  methods: {
    getCookiesName() {},
  },
};
</script>
