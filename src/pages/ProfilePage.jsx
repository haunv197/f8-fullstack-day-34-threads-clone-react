import PostItem from "@/components/PostItem";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AVATAR_PLACEHOLDER_URL } from "@/constants/url";
import postService from "@/services/postService";
import userService from "@/services/userService";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  let { username } = useParams();
  if (!username) {
    return null;
  }

  useEffect(() => {
    userService.getUserInfo(1).then((user) => {
      setUser({
        ...user,
        avatar: `${AVATAR_PLACEHOLDER_URL}${user.id % 2 === 0 ? "boy" : "girl"} `,
      });
    });

    postService.getPostsByUserId(1).then((posts) => {
      const newPost = posts.map((post) => ({
        ...post,
        avatar: `${AVATAR_PLACEHOLDER_URL}boy`,
        username: `username`,
        timeAgo: "2 giờ",
        metrics: {
          likeNumber: 0,
          commentNumber: 0,
          rePostNumber: 0,
          shareNumber: 0,
        },
        isImages: false,
      }));
      setPosts(newPost);
    });
  }, []);

  const tabs = [
    {
      value: "threads",
      title: "Threads",
    },
    {
      value: "replies",
      title: "Replies",
    },
    {
      value: "media",
      title: "Media",
    },
    {
      value: "reposts",
      title: "Reposts",
    },
  ];

  const classTabItem = "flex items-center justify-center py-4 ";

  return (
    <>
      <div className="min-h-dvh">
        <div className="px-6 pt-4 pb-2.5">
          <div>
            <div className="flex items-center justify-between">
              <div className="">
                {user && (
                  <>
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    <div>{user.username}</div>
                  </>
                )}
              </div>
              <div>
                <Link to="https://www.instagram.com/username/">
                  <Avatar className="h-21 w-21 rounded-full">
                    <AvatarImage src={user?.avatar} />
                    <AvatarFallback>Avatar của {user?.username}</AvatarFallback>
                  </Avatar>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="text-gray-400">
              <Link
                to="https://www.instagram.com/username/"
                className="hover:underline"
              >
                <span>10</span> người theo dõi
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="https://www.threads.com/insights"
                title="Thông tin chi tiết"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-black"
                >
                  <rect
                    className="stroke-black stroke-2"
                    fill="none"
                    height="20"
                    rx="5"
                    width="20"
                    x="2"
                    y="2"
                  ></rect>
                  <rect height="12" rx="1" width="2" x="11" y="6"></rect>
                  <rect height="9" rx="1" width="2" x="15" y="9"></rect>
                  <rect height="5" rx="1" width="2" x="7" y="13"></rect>
                </svg>
              </Link>

              <Link to="https://www.instagram.com/username/" title="Instagram">
                <svg
                  aria-label="Instagram"
                  role="img"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-black"
                >
                  <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="px-6 py-3">
          <Button
            className="text-s-default flex w-full cursor-pointer"
            variant="outline"
          >
            Edit Profile
          </Button>
        </div>

        <div>
          <Tabs defaultValue="threads">
            <TabsList className="flex w-full p-0">
              {tabs &&
                !!tabs.length &&
                tabs.map((tab, index) => (
                  <TabsTrigger
                    key={index}
                    className="h-12 flex-1 cursor-pointer rounded-none border-b-gray-200 bg-white text-gray-400 data-[state=active]:border-b-black data-[state=active]:text-black data-[state=active]:shadow-none"
                    value={tab.value}
                  >
                    {tab.title}
                  </TabsTrigger>
                ))}
            </TabsList>
            <TabsContent value="threads" className={classTabItem}>
              <div className="flex flex-col">
                {!!posts?.length ? (
                  posts.map((post) => <PostItem key={post.id} post={post} />)
                ) : (
                  <div className="text-gray-400">Không có thread nào</div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="replies" className={classTabItem}>
              <div className="text-gray-400">Chưa có thread trả lời nào.</div>
            </TabsContent>
            <TabsContent value="media" className={classTabItem}>
              <div className="text-gray-400"> Chưa có thread nào.</div>
            </TabsContent>
            <TabsContent value="reposts" className={classTabItem}>
              <div className="text-gray-400"> Chưa có bài đăng lại nào.</div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
