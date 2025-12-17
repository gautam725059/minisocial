"use client";

const menuItems = [
  "Profile",
  "Find Friends",
  "Analytics",
  "Settings",
  "Security",
  "Logout",
];

export default function LeftSidebar({ isOpen, onClose }) {
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
        <div className="bg-neutral-900 rounded-xl shadow p-4 border border-neutral-800 h-full">
          {/* Close button mobile */}
          <button
            onClick={onClose}
            className="md:hidden mb-4 text-right w-full text-gray-400"
          >
            ✕ Close
          </button>

          {/* Menu items */}
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={onClose}
                className="cursor-pointer px-3 py-2 rounded-lg hover:bg-neutral-800 transition"
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
