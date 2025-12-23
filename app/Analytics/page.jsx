"use client";

export default function AnalyticsPage() {
  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto text-white">
      
      <h1 className="text-2xl font-bold mb-6">
        Analytics
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        
        <StatCard title="Posts" value="0" />
        <StatCard title="Likes" value="0" />
        <StatCard title="Followers" value="0" />
        <StatCard title="Reach" value="0" />

      </div>

      {/* Activity */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
        <h2 className="font-semibold text-lg mb-4">
          Activity Overview
        </h2>

        <p className="text-gray-400 text-sm">
          You haven’t posted anything yet.
        </p>

        <div className="mt-6 h-32 rounded-xl bg-neutral-800 flex items-center justify-center text-gray-500 text-sm">
          Chart will appear here 📊
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl text-center">
      <p className="text-gray-400 text-sm">
        {title}
      </p>
      <p className="text-xl font-bold">
        {value}
      </p>
    </div>
  );
}
