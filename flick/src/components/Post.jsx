import { useState } from "react";
import "../App.css";

function Post({ user, image, caption }) {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = () => {
    if (comment === "") return;
    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div className="post">
      <h3>{user}</h3>

      <img src={image} alt="" />

      <div 
        className="actions"
        onClick={() => setLiked(!liked)}
      >
        {liked ? "❤️" : "🤍"} Like
      </div>

      <div className="caption">
        <b>{user}</b> {caption}
      </div>

      {comments.map((c, i) => (
        <div key={i} className="comment">💬 {c}</div>
      ))}

      <div className="input-box">
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button onClick={addComment}>Post</button>
      </div>
    </div>
  );
}

export default Post;