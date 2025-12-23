export default function FriendsPage() {
  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto text-white">
      
      <h1 className="text-2xl font-bold mb-6">
        Find Friends
      </h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search people..."
        className="w-full mb-6 bg-neutral-900 border border-neutral-800 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
      />

      {/* Users list */}
      <div className="space-y-4">
        {[
          { name: "Aman Gupta", img: "35" },
          { name: "Neha Verma", img: "36" },
          { name: "Rohit Singh", img: "37" },
        ].map((user) => (
          <div
            key={user.name}
            className="flex items-center justify-between bg-neutral-900 border border-neutral-800 p-4 rounded-xl"
          >
            <div className="flex items-center gap-4">
              <img
                src={`https://i.pravatar.cc/${user.img}`}
                className="w-12 h-12 rounded-full"
                alt={user.name}
              />
              <div>
                <p className="font-semibold">
                  {user.name}
                </p>
                <p className="text-sm text-gray-400">
                  Suggested for you
                </p>
              </div>
            </div>

            <button className="bg-pink-600 hover:bg-pink-700 px-4 py-1 rounded-full text-sm transition">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
