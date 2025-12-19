"use client";

import { useState } from "react";
import Feed from "./components/Feed";
import LeftSidebar from "./components/LeftSidebar";
import Navbar from "./components/Navbar";
import RightSidebar from "./components/RightSidebar";

export default function AppLayout() {
  const [leftOpen, setLeftOpen] = useState(false);

  return (
    <div className="flex gap-6 bg-black text-white min-h-screen">
      {/* Left Sidebar */}
      < LeftSidebar isOpen={leftOpen} onClose={() => setLeftOpen(false)} />

      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        < Navbar onLeftSidebarToggle={() => setLeftOpen(true)} />

        {/* Main Content */}
        <div className="flex flex-1 p-4 gap-4">
          {/* Feed */}
          <div className="w-full lg:w-3/5 space-y-4">
            <Feed/>
          </div>

          {/* Right Sidebar */}
          <div className=" hidden lg:block ">
            < RightSidebar/>
          </div>
        </div>
      </div>
    </div>
  );
}
