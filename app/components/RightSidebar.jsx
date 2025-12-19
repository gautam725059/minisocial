export default function RightSidebar() {
  return (
    // ❌ mobile hide | ✅ desktop show
    <div className="hidden lg:flex lg:flex-col p-4 gap-6">
      
      {/* People you may know */}
     <div className="bg-neutral-900 p-5 rounded-2xl shadow-lg border border-neutral-800">
  <h3 className="font-semibold text-lg mb-4 text-white">
    People you may know
  </h3>

  <div className="space-y-3">
    {[
      { name: "Aman Gupta", img: "35" },
      { name: "Neha Verma", img: "36" },
      { name: "Rohit Singh", img: "37" },
    ].map((user) => (
      <div
        key={user.name}
        className="flex   p-2 rounded-lg hover:bg-neutral-800 transition"
      >
        <div className="flex items-center gap-3">
          <img
            src={`https://i.pravatar.cc/${user.img}`}
            className="w-9 h-9 rounded-full"
            alt={user.name}
          />
          <p className="text-gray-300 text-sm font-medium">
            {user.name}
          </p>
        </div>

        <button className="text-xs px-3 py-1 rounded-full bg-blue-800 text-gray-400 ">
          Follow
        </button>
      </div>
    ))}
  </div>
</div>


      {/* Boost Post */}
      <div className=" from-pink-600 to-purple-600 rounded-2xl shadow-lg">
        <div className="bg-neutral-900 p-5 rounded-2xl">
          <h3 className="font-semibold text-lg mb-2 text-white">
            Boost your post
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed">
            Reach more people and grow faster by boosting your post.
          </p>

          <button className="mt-4 w-full bg-pink-600 hover:bg-pink-700 text-white py-2.5 rounded-xl transition font-medium">
            Boost Now
          </button>
        </div>
      </div>

    </div>
  );
}
