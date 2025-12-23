"use client";

import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();

  const handleLogout = () => {
    // abhi simple logout (later auth add kar sakte ho)
    alert("Logged out successfully");
    router.push("/login"); // ya "/" jahan le jana ho
  };

  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto text-white">
      
      <h1 className="text-2xl font-bold mb-6">
        Settings
      </h1>

      {/* Account Section */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 mb-6">
        <h2 className="font-semibold text-lg mb-4">
          Account
        </h2>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center cursor-not-allowed opacity-60">
            <span>Email</span>
            <span className="text-gray-400">
              gautam@gmai.com
            </span>
          </div>

          <div className="flex justify-between items-center cursor-not-allowed opacity-60">
            <span>Username</span>
            <span className="text-gray-400">
              _gautam
            </span>
          </div>

          <div className="flex justify-between items-center cursor-not-allowed opacity-60">
            <span>Change Password</span>
            <span className="text-gray-400">→</span>
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 mb-6">
        <h2 className="font-semibold text-lg mb-4">
          Preferences
        </h2>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between opacity-60">
            <span>Dark Mode</span>
            <span className="text-pink-500 font-semibold">
              Enabled
            </span>
          </div>

          <div className="flex justify-between opacity-60">
            <span>Notifications</span>
            <span className="text-gray-400">
              On
            </span>
          </div>
        </div>
      </div>

      {/* Logout */}
      <div className="bg-neutral-900 border border-red-900 rounded-2xl p-5">
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded-xl font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
