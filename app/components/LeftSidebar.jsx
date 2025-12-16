const menuItems = [
  "Profile",
  "Find Friends",
  "Analytics",
  "Settings",
  "Security",
  "Logout",
];

export default function LeftSidebar() {
  return (
    <div className="w-1/5 p-4">
      <div className="bg-white rounded-xl shadow p-4">
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-100 transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
