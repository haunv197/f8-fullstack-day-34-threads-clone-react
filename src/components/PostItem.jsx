import ButtonsAction from "./ButtonsAction";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const PostItem = (props) => {
  const { avatar, body, title, id, metrics, timeAgo, userId, username } =
    props.post;
  return (
    <div className="block border-t border-[rgba(0,0,0,0.15)] px-6 py-3 text-[15px]">
      <div className="flex gap-3">
        {/* avatar */}
        <Avatar className="h-9 w-9">
          <AvatarImage src={avatar} />
          <AvatarFallback>Avatar</AvatarFallback>
        </Avatar>

        {/* user, content */}
        <div>
          <div className="flex gap-1.5">
            <span>{username}</span>
            <span className="text-[#999]">{timeAgo}</span>
          </div>

          {/* content */}
          <div className="font-medium">{title}</div>
          <div>{body}</div>

          <div className="mt-2 flex gap-2">
            <div className="overflow-hidden rounded-md">
              <img src="https://placehold.co/400x500" className="max-w-full" />
            </div>
            <div className="overflow-hidden rounded-md">
              <img src="https://placehold.co/400x500" className="max-w-full" />
            </div>
          </div>

          <ButtonsAction metrics={metrics} />
        </div>
      </div>

      {!!props?.isDetail && (
        <div className="mt-1 flex justify-between border-t border-[rgba(0,0,0,0.15)] pt-4">
          <Button
            variant="ghost"
            className="h-5.5 cursor-pointer p-0 hover:bg-transparent"
          >
            Hàng đầu
          </Button>
          <Button
            variant="ghost"
            className="h-5.5 cursor-pointer p-0 text-[#0006] hover:bg-transparent"
          >
            Xem hoạt động
          </Button>
        </div>
      )}
    </div>
  );
};
export default PostItem;
