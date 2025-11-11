import axiosClient from "../api/axiosClient";

const postService = {
  getPosts() {
    return axiosClient.get("posts?_limit=10");
  },
  getPostDetailById(id) {
    if (!id) return;
    return axiosClient.get(`posts/${id}`);
  },
  getPostsByUserId(userId) {
    if (!userId) return;
    return axiosClient.get(`users/${userId}/posts`);
  },
};

export default postService;
