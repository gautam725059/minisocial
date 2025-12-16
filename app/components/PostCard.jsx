export default function PostCard({ post }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      
      <div className="flex items-center gap-3 mb-2">
        <img src="https://i.pravatar.cc/40" className="rounded-full" />
        <h3 className="font-bold">{post.name}</h3>
      </div>

      <p className="mb-2">{post.content}</p>

      <img src={post.image} className="rounded-lg" />
    </div>
  );
}
