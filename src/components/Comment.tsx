import type { CommentType } from "../types/youtube";

const Comment = ({ data }: { data: CommentType }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img className="w-12 h-12" src="/userIcon.png" alt="user" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default Comment;
