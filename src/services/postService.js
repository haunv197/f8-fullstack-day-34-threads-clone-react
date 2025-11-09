import axiosClient from "../api/axiosClient";

const postService = {
  getPosts() {
    return axiosClient.get("posts?_limit=10");
  },
  getPostDetailById(id) {
    if (!id) return;
    return axiosClient.get(`posts/${id}`);
  },
};

export default postService;
