const Blog = () => {
  const posts = [
    { title: "Optimizing Collision Detection in Unity", date: "Oct 12, 2024", excerpt: "Learn how to significantly reduce overhead when dealing with complex multi-body physics in 2D platformers..." },
    { title: "Unreal Engine 5: Lumen vs Ray Tracing", date: "Sep 28, 2024", excerpt: "A deep dive into the performance overhead of hardware ray tracing compared to Unreal Engine's software Lumen rendering..." },
    { title: "Structuring Dialogues for RPGs", date: "Aug 15, 2024", excerpt: "Building a node-based dialogue editor from scratch can seem daunting, but it scales much better than standard arrays..." }
  ];

  return (
    <div className="flex flex-col text-white pt-6 md:pt-0">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <div className="w-12 h-1 bg-[#ABB6FF] rounded-full mb-6"></div>
      </div>

      <div className="space-y-8">
        {posts.map((post, index) => (
          <div key={index} className="group pb-8 border-b border-white/5 last:border-0 cursor-pointer">
            <span className="text-[#ABB6FF] text-sm tracking-wider font-medium mb-2 block">{post.date}</span>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ABB6FF] transition-colors duration-300">{post.title}</h3>
            <p className="text-[#D6D6D6] text-[15px] leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
