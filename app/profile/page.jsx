export default function ProfilePage() {
  return (
    <div className="p-4 sm:p-6 text-white max-w-4xl mx-auto">
      
      {/* Profile Header */}
      <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          
          {/* Profile Image */}
          <img
            src="https://i.pravatar.cc/120"
            className="w-28 h-28 rounded-full"
            alt="profile"
          />

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Your Name</h1>
            <p className="text-gray-400 text-sm mb-4">
              Full Stack Developer 🚀
            </p>

            {/* Followers / Following */}
            <div className="flex gap-8 text-sm">
              <div>
                <p className="font-bold text-white">0</p>
                <p className="text-gray-400">Posts</p>
              </div>
              <div>
                <p className="font-bold text-white">0</p>
                <p className="text-gray-400">Followers</p>
              </div>
              <div>
                <p className="font-bold text-white">0</p>
                <p className="text-gray-400">Following</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">
          Posts
        </h2>

        {/* Posts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          
          {/* Post 1 */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
            <img
              src="https://picsum.photos/300/300?1"
              className="w-full h-full object-cover"
              alt="post"
            />
          </div>

          {/* Post 2 */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
            <img
              src="https://picsum.photos/300/300?2"
              className="w-full h-full object-cover"
              alt="post"
            />
          </div>

        </div>

        {/* Empty State (future) */}
        {/* <p className="text-gray-500 text-sm mt-6">
          No posts yet
        </p> */}
      </div>
    </div>
  );
}
