import axios from "axios";
// import { post } from '../../server/package/src/routes/posts'

const url = "api/posts/";

class UserService {
  // Get Data base
  static async getDB() {
    const res = await axios.get(url);
    return res.data;
  }

  /* Get User Data */
  static async getUser(token) {
    const res = await axios.get(`${url}cookie`, {
      params: {
        token: token,
      },
    });
    return res.data;
  }

  // Check User Data
  static checkUser(user) {
    return axios.post(`${url}login`, {
      user,
    });
  }

  // Create User Data
  static insertUser(user) {
    return axios.post(url, {
      user,
    });
  }

  // Delete User Data
  static deleteUser(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default UserService;
