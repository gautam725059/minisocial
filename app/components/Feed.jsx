"use client";

import { useState } from "react";
import CreatePost from "./CreatePost";
import PostCard from "./PostCard";
import { posts as initialPosts } from "../Data/Post";

export default function Feed() {
  const [posts, setPosts] = useState(initialPosts);

  const addPost = (content) => {
    const newPost = {
      id: Date.now(),
      name: "You",
      content: content,
      image: "https://picsum.photos/500/30" + Math.floor(Math.random() * 10),
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
