export default function NotificationsPage() {
  return (
    <div className="p-6 text-white max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Notifications 🔔</h1>

      <div className="space-y-4">
        {[
          "Aman followed you",
          "Neha liked your post",
          "Rohit commented on your post",
        ].map((text, i) => (
          <div
            key={i}
            className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl"
          >
            <p>{text}</p>
            <p className="text-xs text-gray-400 mt-1">2 min ago</p>
          </div>
        ))}
      </div>
    </div>
  );
}
