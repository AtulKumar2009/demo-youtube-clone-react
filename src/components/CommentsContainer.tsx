import type { CommentType } from "../types/youtube";
import { commentsData } from "../utils/mockData";
import Comment from "./Comment";

const CommentsList = ({ comments }: { comments: Array<CommentType> }) => {
  return comments.map((comment) => (
    <div key={comment.key}>
      <Comment data={comment} />
      {comment.replies.length > 0 && (
        <div className="pl-5 border-l border-l-black ml-5">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      {<CommentsList comments={commentsData} />}
    </div>
  );
};

export default CommentsContainer;
