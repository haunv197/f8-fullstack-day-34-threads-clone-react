import { useEffect, useState } from "react";
import postService from "../services/postService";
import { AVATAR_PLACEHOLDER_URL } from "../constants/url";
import PostItem from "../components/PostItem";
import { NavLink } from "react-router";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getPosts().then((data) => {
      if (!data?.length) {
        return;
      }
      const newData = data.map((item) => ({
        ...item,
        avatar: `${AVATAR_PLACEHOLDER_URL}${item.id % 2 === 0 ? "boy" : "girl"} `,
        username: `user_${item.id}`,
        timeAgo: "2 giờ",
        metrics: {
          likeNumber: 69,
          commentNumber: 7,
          rePostNumber: 12,
          shareNumber: 10,
        },
      }));
      setPosts(newData);
    });
    return () => {};
  }, []);

  return (
    <div className="">
      {/* Create new post   */}
      <div className=""></div>

      {/* List post */}
      <div className="">
        {posts &&
          !!posts.length &&
          posts.map((post) => {
            return (
              <NavLink
                key={post.id}
                to={`/${post.username}/post/${post.id}`}
                className="flex border-t border-gray-300 nth-1:border-t-0"
              >
                <PostItem post={post} />
              </NavLink>
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;
