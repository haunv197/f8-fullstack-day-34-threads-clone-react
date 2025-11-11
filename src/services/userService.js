import axiosClient from "../api/axiosClient";

const userService = {
  getUserInfo(username) {
    return axiosClient.get(`users/${username}`);
  },
};

export default userService;
