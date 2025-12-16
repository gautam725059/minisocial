export default function RightSidebar() {
  return (
    <div className="w-1/5 p-4 space-y-4">
      
      {/* People you may know */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-bold mb-3">
          People you may know
        </h3>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <img src="https://i.pravatar.cc/35" className="rounded-full" />
            <p>Aman Gupta</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://i.pravatar.cc/36" className="rounded-full" />
            <p>Neha Verma</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://i.pravatar.cc/37" className="rounded-full" />
            <p>Rohit Singh</p>
          </div>
        </div>
      </div>

      {/* Boost Post */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-bold mb-2">
          Boost your post
        </h3>
        <p className="text-sm text-gray-600">
          Reach more people by boosting your post
        </p>
        <button className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg">
          Boost
        </button>
      </div>

    </div>
  );
}
