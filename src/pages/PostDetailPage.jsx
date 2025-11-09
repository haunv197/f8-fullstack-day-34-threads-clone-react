import { useEffect, useState } from "react";
import { useParams } from "react-router";
import postService from "../services/postService";
import PostItem from "../components/PostItem";
import { AVATAR_PLACEHOLDER_URL } from "../constants/url";
import commentService from "../services/commentService";
import CommentItem from "../components/CommentITem";
import { Button } from "../components/ui/button";

const PostDetailPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!id) return;
    postService.getPostDetailById(id).then((data) => {
      const newData = {
        ...data,
        avatar: `${AVATAR_PLACEHOLDER_URL}${data.id % 2 === 0 ? "boy" : "girl"} `,
        username: `user_${data.id}`,
        timeAgo: "2 giờ",
        metrics: {
          likeNumber: 69,
          commentNumber: 7,
          rePostNumber: 12,
          shareNumber: 10,
        },
      };
      setPost(newData);
    });

    commentService.getComments().then((data) => {
      const newData = data.map((item) => {
        return {
          ...item,
          avatar: `${AVATAR_PLACEHOLDER_URL}${item.id % 2 === 0 ? "boy" : "girl"} `,
          username: `user_comment_${item.id}`,
          timeAgo: "2 giờ",
          metrics: {
            likeNumber: 1,
            commentNumber: 1,
            rePostNumber: 0,
            shareNumber: 0,
          },
        };
      });
      setComments(newData);
    });
  }, []);

  return (
    <>
      <div>{post && <PostItem post={post} isDetail={true} />}</div>

      {comments &&
        !!comments.length &&
        comments.map((comment) => (
          <CommentItem key={comment.id} {...comment} />
        ))}
    </>
  );
};

export default PostDetailPage;
