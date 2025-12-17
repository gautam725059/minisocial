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

    addPost({ text, image, video });

    setText("");
    setImage(null);
    setVideo(null);
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
      {/* Textarea */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
        className="
          w-full bg-neutral-800 text-white
          border border-neutral-700
          rounded-lg p-3 resize-none
          focus:outline-none
          placeholder-gray-400
          text-sm sm:text-base
        "
        rows={3}
      />

      {/* Preview */}
      {image && (
        <img
          src={URL.createObjectURL(image)}
          className="mt-2 rounded-lg w-full max-h-60 object-cover"
          alt="preview"
        />
      )}

      {video && (
        <video
          src={URL.createObjectURL(video)}
          controls
          className="mt-2 rounded-lg w-full max-h-60"
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

      {/* Action Buttons */}
      <div
        className="
          flex flex-wrap items-center justify-between
          gap-2 mt-3
        "
      >
        <button
          type="button"
          onClick={() => imageInputRef.current.click()}
          className="
            text-gray-400 hover:text-white
            text-sm flex items-center gap-1
          "
        >
          📷 Photo
        </button>

        <button
          type="button"
          onClick={() => videoInputRef.current.click()}
          className="
            text-gray-400 hover:text-white
            text-sm flex items-center gap-1
          "
        >
          🎥 Video
        </button>

        <button
          onClick={handlePost}
          className="
            bg-pink-600 hover:bg-pink-700
            text-white px-4 py-1
            rounded-lg text-sm
            w-full sm:w-auto
          "
        >
          Post
        </button>
      </div>
    </div>
  );
}
