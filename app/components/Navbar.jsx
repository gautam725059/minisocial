"use client";
import { useRouter } from "next/navigation";

export default function Navbar({ onLeftSidebarToggle }) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-black text-white border-b border-neutral-800 sticky top-0 z-50">
      
      {/* Left: Logo / SocialApp */}
      <h1
        className="text-lg sm:text-xl font-bold text-pink-500 cursor-pointer md:hidden"
        onClick={onLeftSidebarToggle} // ✅ mobile pe sidebar open
      >
        SocialApp
      </h1>

      {/* Desktop logo (no click) */}
      <h1 className="hidden md:block text-xl font-bold text-pink-500">
        SocialApp
      </h1>

      {/* Center: Search (desktop only) */}
      <input
        type="text"
        placeholder="Search friends..."
        className="hidden md:block w-1/3 bg-neutral-800 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-400"
      />

      {/* Right Icons */}
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="text-xl cursor-pointer">💬</span>
        <span className="text-xl cursor-pointer">🔔</span>

        {/* Profile click → /profile */}
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer"
          onClick={() => router.push("/profile")}
        />
      </div>
    </div>
  );
}
