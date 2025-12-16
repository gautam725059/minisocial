export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white shadow">
      
      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-600">
        SocialApp
      </h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search friends..."
        className="w-1/3 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        <span className="text-xl cursor-pointer">💬</span>
        <span className="text-xl cursor-pointer">🔔</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-10 h-10 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
}
