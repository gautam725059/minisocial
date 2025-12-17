export default function RightSidebar() {
  return (
    // ❌ mobile pe hide | ✅ md+ pe show
    <div className="hidden lg:block w-1/5 p-4 space-y-4">
      
      {/* People you may know */}
      <div className="bg-neutral-900 p-4 rounded-xl shadow border border-neutral-800">
        <h3 className="font-bold mb-3 text-white">
          People you may know
        </h3>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/35"
              className="rounded-full"
            />
            <p className="text-gray-300">Aman Gupta</p>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/36"
              className="rounded-full"
            />
            <p className="text-gray-300">Neha Verma</p>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/37"
              className="rounded-full"
            />
            <p className="text-gray-300">Rohit Singh</p>
          </div>
        </div>
      </div>

      {/* Boost Post */}
      <div className="bg-neutral-900 p-4 rounded-xl shadow border border-neutral-800">
        <h3 className="font-bold mb-2 text-white">
          Boost your post
        </h3>

        <p className="text-sm text-gray-400">
          Reach more people by boosting your post
        </p>

        <button className="mt-3 w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg transition">
          Boost
        </button>
      </div>

    </div>
  );
}
