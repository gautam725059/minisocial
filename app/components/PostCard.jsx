"use client";

import { useState } from "react";

export default function PostCard({ post }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // Like handler
  const handleLike = () => {
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
    setLiked(!liked);
  };

  // Comment handler
  const handleComment = () => {
    if (!comment.trim()) return;
    setComments([...comments, comment]);
    setComment("");
  };

  // Share handler
  const handleShare = () => {
    alert("Post shared successfully 🔁");
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      {/* User */}
      <div className="flex items-center gap-3 mb-2">
        <img
          src="https://i.pravatar.cc/40"
          className="rounded-full"
          alt="user"
        />
        <h3 className="font-bold">{post.name}</h3>
      </div>

      {/* Text */}
      {post.content && <p className="mb-2">{post.content}</p>}

      {/* Image */}
      {post.image && (
        <img
          src={post.image}
          className="rounded-lg mb-3 max-h-80 object-cover"
          alt="post"
        />
      )}

      {/* Video */}
      {post.video && (
        <video
          src={post.video}
          controls
          className="rounded-lg mb-3 max-h-80"
        />
      )}

      {/* Action Buttons */}
      <div className="flex justify-between text-sm border-t pt-3">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1 ${
            liked ? "text-blue-500 font-bold" : ""
          }`}
        >
          ❤️ Like {likes > 0 && `(${likes})`}
        </button>

        <button
          onClick={() => setShowCommentBox(!showCommentBox)}
          className="flex items-center gap-1"
        >
          💬 Comment
        </button>

        <button
          onClick={handleShare}
          className="flex items-center gap-1"
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
            className="w-full border p-2 rounded"
          />

          <button
            onClick={handleComment}
            className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
          >
            Add Comment
          </button>

          {/* Comment List */}
          <div className="mt-3 space-y-1">
            {comments.map((c, index) => (
              <p
                key={index}
                className="text-sm bg-gray-100 p-2 rounded"
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
