import axiosClient from "../api/axiosClient";

const userService = {
  getProfile() {
    return axiosClient.get("user");
  },
};

export default userService;
