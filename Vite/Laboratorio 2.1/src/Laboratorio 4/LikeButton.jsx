import { useState } from "react";

function LikeButton({ likeIniziali }) {
  const [count, setCount] = useState(likeIniziali);
  const [liked, setLiked] = useState(likeIniziali > 0);
  return (
    <div>
      <button
        style={{ padding: "5 10", width: 100, height: 40 }}
        onClick={() => {
          if (liked) {
            setLiked(false);
            setCount(count - 1);
          } else {
            setLiked(true);
            setCount(count + 1);
          }
        }}
      >
        {liked ? "♥︎" : "♡"} {count}
      </button>
    </div>
  );
}
export default LikeButton;
