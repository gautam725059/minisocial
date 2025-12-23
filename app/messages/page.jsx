export default function MessagesPage() {
  return (
    <div className="p-6 text-white max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Messages 💬</h1>

      <div className="space-y-4">
        {["Aman", "Neha", "Rohit"].map((name) => (
          <div
            key={name}
            className="flex items-center gap-4 bg-neutral-900 border border-neutral-800 p-4 rounded-xl"
          >
            <img
              src="https://i.pravatar.cc/50"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-gray-400">
                Last message preview...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
