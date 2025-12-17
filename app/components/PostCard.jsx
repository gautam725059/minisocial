"use client";

import { useState } from "react";

export default function PostCard({ post }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
    setLiked(!liked);
  };

  const handleComment = () => {
    if (!comment.trim()) return;
    setComments([...comments, comment]);
    setComment("");
  };

  const handleShare = () => {
    alert("Post shared successfully 🔁");
  };

  return (
    <div
      className="
        bg-neutral-900 text-white
        p-4 rounded-xl shadow
        border border-neutral-800
        w-full
      "
    >
      {/* User */}
      <div className="flex items-center gap-3 mb-2">
        <img
          src="https://i.pravatar.cc/40"
          className="rounded-full w-10 h-10"
          alt="user"
        />
        <h3 className="font-semibold text-sm sm:text-base">
          {post.name}
        </h3>
      </div>

      {/* Text */}
      {post.content && (
        <p className="mb-2 text-sm sm:text-base text-gray-200">
          {post.content}
        </p>
      )}

      {/* Image */}
      {post.image && (
        <img
          src={post.image}
          className="
            rounded-lg mb-3
            w-full max-h-80
            object-cover
          "
          alt="post"
        />
      )}

      {/* Video */}
      {post.video && (
        <video
          src={post.video}
          controls
          className="rounded-lg mb-3 w-full max-h-80"
        />
      )}

      {/* Action Buttons */}
      <div
        className="
          flex justify-between items-center
          text-xs sm:text-sm
          border-t border-neutral-800 pt-3
        "
      >
        <button
          onClick={handleLike}
          className={`flex items-center gap-1 ${
            liked ? "text-pink-500 font-semibold" : "text-gray-400"
          }`}
        >
          ❤️ Like {likes > 0 && `(${likes})`}
        </button>

        <button
          onClick={() => setShowCommentBox(!showCommentBox)}
          className="flex items-center gap-1 text-gray-400"
        >
          💬 Comment
        </button>

        <button
          onClick={handleShare}
          className="flex items-center gap-1 text-gray-400"
        >
          🔁 Share
        </button>
      </div>

      {/* Comment Box */}
      {showCommentBox && (
        <div className="mt-3">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
            className="
              w-full p-2 rounded
              bg-neutral-800 text-white
              border border-neutral-700
              text-sm
              placeholder-gray-400
            "
          />

          <button
            onClick={handleComment}
            className="
              mt-2 bg-pink-600 hover:bg-pink-700
              text-white px-3 py-1
              rounded text-sm
            "
          >
            Add Comment
          </button>

          {/* Comment List */}
          <div className="mt-3 space-y-1">
            {comments.map((c, index) => (
              <p
                key={index}
                className="
                  text-sm bg-neutral-800
                  p-2 rounded text-gray-200
                "
              >
                {c}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
