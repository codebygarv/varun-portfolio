const Portfolio = () => {
  const projects = [
    { title: "Neon Cybernetic", category: "Unreal Engine 5", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" },
    { title: "Fantasy World", category: "Level Design", image: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=2070&auto=format&fit=crop" },
    { title: "Space Shooter 2D", category: "Unity Mobile", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" },
    { title: "VR Escape Room", category: "Virtual Reality", image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2070&auto=format&fit=crop" }
  ];

  return (
    <div className="flex flex-col text-white pt-6 md:pt-0">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
        <div className="w-12 h-1 bg-[#ABB6FF] rounded-full mb-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-white/5 cursor-pointer">
            <div className="relative h-48 sm:h-60 overflow-hidden">
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
               />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#ABB6FF] transition-colors">{project.title}</h3>
              <p className="text-[#8A8A8B] text-sm uppercase tracking-wider font-medium">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
