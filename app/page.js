"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import Feed from "./components/Feed";
import RightSidebar from "./components/RightSidebar";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // redirect if not logged in
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex bg-gray-100 min-h-screen">
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </div>
    </>
  );
}
