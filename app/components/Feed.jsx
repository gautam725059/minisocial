"use client";

import { useState } from "react";
import CreatePost from "./CreatePost";
import PostCard from "./PostCard";
import { posts as initialPosts } from "../Data/Post";

export default function Feed() {
  const [posts, setPosts] = useState(initialPosts);

  // ab addPost object receive karega
  const addPost = (data) => {
    const newPost = {
      id: Date.now(),
      name: "You",
      content: data.text || "",
      image: data.image ? URL.createObjectURL(data.image) : null,
      video: data.video ? URL.createObjectURL(data.video) : null,
    };

    setPosts([newPost, ...posts]);
  };

  return (
    <div className="w-3/5 p-4 space-y-4">
      <CreatePost addPost={addPost} />

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
