"use client";

import { useRouter } from "next/navigation";

const menuItems = [
  { label: "Profile", path: "/profile" },
  { label: "Find-frinds", path: "/Find-frinds" },
  { label: "Analytics", path: "/Analytics" },
  { label: "Settings", path: "/settings" },
  ,
];

export default function LeftSidebar({ isOpen, onClose }) {
  const router = useRouter();

  const handleClick = (path) => {
    onClose();        // close sidebar (mobile)
    router.push(path); // navigate
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:static top-0 left-0 h-full md:h-auto w-64 md:w-1/5 p-4 z-50
          bg-neutral-900 text-white transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        `}
      >
        <div className="rounded-xl border border-neutral-800 p-4 h-full">
          {/* Close button mobile */}
          <button
            onClick={onClose}
            className="md:hidden mb-4 w-full text-right text-gray-400"
          >
            ✕ Close
          </button>

          {/* Menu */}
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li
                key={item.label}
                onClick={() => handleClick(item.path)}
                className="cursor-pointer px-3 py-2 rounded-lg
                           hover:bg-neutral-800 transition"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
