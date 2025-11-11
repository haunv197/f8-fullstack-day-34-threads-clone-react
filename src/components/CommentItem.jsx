import ButtonsAction from "./ButtonsAction";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const CommentItem = (comments) => {
  const { avatar, body, name, id, metrics, timeAgo, userId, username } =
    comments;
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
            <span className="font-medium">{username}</span>
            <span className="text-[#999]">{timeAgo}</span>
          </div>

          {/* content */}
          <div>{name}</div>
          {/* <div>{body}</div> */}

          <ButtonsAction metrics={metrics} />
        </div>
      </div>
    </div>
  );
};
export default CommentItem;
