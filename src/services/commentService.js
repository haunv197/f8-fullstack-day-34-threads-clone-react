import axiosClient from "../api/axiosClient";

const commentService = {
  getComments() {
    return axiosClient.get("comments?_limit=10");
  },
};

export default commentService;
