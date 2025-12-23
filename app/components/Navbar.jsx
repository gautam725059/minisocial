"use client";
import { useRouter } from "next/navigation";

export default function Navbar({ onLeftSidebarToggle }) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-black text-white border-b border-neutral-800 sticky top-0 z-50">
      
      {/* Mobile logo → sidebar */}
      <h1
        className="text-lg sm:text-xl font-bold text-pink-500 cursor-pointer md:hidden"
        onClick={onLeftSidebarToggle}
      >
        SocialApp
      </h1>

      {/* Desktop logo */}
      <h1 className="hidden md:block text-xl font-bold text-pink-500">
        SocialApp
      </h1>

      {/* Search (desktop) */}
      <input
        type="text"
        placeholder="Search friends..."
        className="hidden md:block w-1/3 bg-neutral-800 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
      />

      {/* Right icons */}
      <div className="flex items-center gap-4">
        {/* Chat */}
        <span
          className="text-xl cursor-pointer hover:text-pink-500"
          onClick={() => router.push("/messages")}
        >
          💬
        </span>

        {/* Notification */}
        <span
          className="text-xl cursor-pointer hover:text-pink-500"
          onClick={() => router.push("/notifications")}
        >
          🔔
        </span>

        {/* Profile */}
        <img
          src="https://i.pravatar.cc/40"
          className="w-9 h-9 rounded-full cursor-pointer"
          onClick={() => router.push("/profile")}
        />
      </div>
    </div>
  );
}
