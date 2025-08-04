import { useState } from "react";
import Like from "../../assets/svg/likeButton.svg?react";
import LikeFilled from "../../assets/svg/filledLikeButton.svg?react";

function LikeButton() {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <div className="absolute right-0 mt-3 ml-3 mr-3 ">
      <button onClick={() => setIsLiked(!isLiked)}>
        <span>{isLiked ? <LikeFilled /> : <Like />}</span>
      </button>
    </div>
  );
}

export default LikeButton;
