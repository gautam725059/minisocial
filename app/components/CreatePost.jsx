"use client";

import { useState } from "react";

export default function CreatePost({ addPost }) {
  const [text, setText] = useState("");

  const handlePost = () => {
    if (text.trim() === "") return;

    addPost(text);
    setText("");
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full border rounded-lg p-3 resize-none focus:outline-none"
      />

      <div className="flex justify-between mt-3">
        <button className="text-sm">📷 Photo</button>
        <button className="text-sm">🎥 Video</button>
        <button
          onClick={handlePost}
          className="bg-blue-500 text-white px-4 py-1 rounded-lg"
        >
          Post
        </button>
      </div>
    </div>
  );
}
