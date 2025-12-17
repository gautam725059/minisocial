"use client";

import { useState } from "react";

const menuItems = [
  "Profile",
  "Find Friends",
  "Analytics",
  "Settings",
  "Security",
  "Logout",
];

export default function LeftSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-500 text-white px-3 py-2 rounded-lg"
      >
        ☰
      </button>

      {/* Overlay (mobile) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full md:h-auto w-64 md:w-1/5 p-4 z-50
        bg-gray-100 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <div className="bg-white rounded-xl shadow p-4">
          {/* Close button (mobile) */}
          <button
            onClick={() => setOpen(false)}
            className="md:hidden mb-4 text-right w-full text-gray-500"
          >
            ✕ Close
          </button>

          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => setOpen(false)}
                className="cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-100 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
