import Cookie from "js-cookie";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const cookie_token = "escaped";
const expired_day = 1;

class UserCookie {
  /* Set cookie */
  static setCookie(cookie_value) {
    Cookie.set(cookie_token, cookie_value, { expires: expired_day });
  }

  /* generate random cookie string */
  static random_value(length = 8) {
    let random_str = "";
    for (let i = 0; i < length; i++) {
      random_str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return random_str;
  }

  /* Get cookie */
  static getCookie() {
    return Cookie.get(cookie_token);
  }

  /* Remove cookie */
  static rmCookie() {
    Cookie.remove(cookie_token);
  }
}

export default UserCookie;
