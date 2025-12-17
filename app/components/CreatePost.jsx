"use client";

import { useState, useRef } from "react";

export default function CreatePost({ addPost }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const handlePost = () => {
    if (text.trim() === "" && !image && !video) return;

    addPost({
      text,
      image,
      video,
    });

    setText("");
    setImage(null);
    setVideo(null);
  };

  // Image select
  const handleImageClick = () => {
    imageInputRef.current.click();
  };

  // Video select
  const handleVideoClick = () => {
    videoInputRef.current.click();
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full border rounded-lg p-3 resize-none focus:outline-none"
      />

      {/* Preview */}
      {image && (
        <img
          src={URL.createObjectURL(image)}
          className="mt-2 rounded-lg max-h-60"
        />
      )}

      {video && (
        <video
          src={URL.createObjectURL(video)}
          controls
          className="mt-2 rounded-lg max-h-60"
        />
      )}

      {/* Hidden Inputs */}
      <input
        type="file"
        accept="image/*"
        ref={imageInputRef}
        hidden
        onChange={(e) => setImage(e.target.files[0])}
      />

      <input
        type="file"
        accept="video/*"
        ref={videoInputRef}
        hidden
        onChange={(e) => setVideo(e.target.files[0])}
      />

      <div className="flex justify-between mt-3">
        <button
          type="button"
          onClick={handleImageClick}
          className="text-sm"
        >
          📷 Photo
        </button>

        <button
          type="button"
          onClick={handleVideoClick}
          className="text-sm"
        >
          🎥 Video
        </button>

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
