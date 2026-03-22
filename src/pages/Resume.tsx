import { BookOpen, Briefcase } from "lucide-react";

const Resume = () => {
  return (
    <div className="flex flex-col text-white pt-6 md:pt-0">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Resume</h1>
        <div className="w-12 h-1 bg-[#ABB6FF] rounded-full mb-6"></div>
      </div>

      {/* Education */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-[#2B2B2C]/40 border border-white/10 p-3 rounded-xl shadow-lg text-[#ABB6FF]">
            <BookOpen size={24} />
          </div>
          <h2 className="text-2xl font-bold">Education</h2>
        </div>
        
        <div className="relative border-l border-white/10 ml-6 pl-8 space-y-8">
          <div className="relative">
            <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full bg-[#ABB6FF] border-4 border-[#1E1E1F] shadow-[0_0_0_3px_rgba(171,182,255,0.2)]"></span>
            <h3 className="text-lg font-bold text-white mb-1">Game Design and Development</h3>
            <span className="text-sm font-medium text-[#ABB6FF] tracking-wider uppercase">Indore University &bull; 2019 - 2023</span>
            <p className="mt-3 text-[#D6D6D6] text-[15px] leading-relaxed">
              Bachelor's degree focusing on core gameplay systems, interactive narrative, and engine architecture. Participated in multiple game jams, leading the programming efforts using Unreal Engine and C++.
            </p>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-[#2B2B2C]/40 border border-white/10 p-3 rounded-xl shadow-lg text-[#ABB6FF]">
            <Briefcase size={24} />
          </div>
          <h2 className="text-2xl font-bold">Experience</h2>
        </div>
        
        <div className="relative border-l border-white/10 ml-6 pl-8 space-y-8">
          <div className="relative">
            <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full bg-[#ABB6FF] border-4 border-[#1E1E1F] shadow-[0_0_0_3px_rgba(171,182,255,0.2)]"></span>
            <h3 className="text-lg font-bold text-white mb-1">Gameplay Programmer</h3>
            <span className="text-sm font-medium text-[#ABB6FF] tracking-wider uppercase">Indie Game Studio &bull; 2023 - Present</span>
            <p className="mt-3 text-[#D6D6D6] text-[15px] leading-relaxed">
              Developed core player controller mechanics and interactive dialogue systems. Managed physics-based puzzles using Unity Engine's rigidbodies and custom C# wrappers.
            </p>
          </div>
          <div className="relative">
            <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full bg-zinc-600 border-4 border-[#1E1E1F]"></span>
            <h3 className="text-lg font-bold text-white mb-1">Level Designer Intern</h3>
            <span className="text-sm font-medium text-[#ABB6FF] tracking-wider uppercase">Creative Arts Agency &bull; 2021 - 2023</span>
            <p className="mt-3 text-[#D6D6D6] text-[15px] leading-relaxed">
              Assisted in prototyping level designs using Unreal Engine 5. Created blockouts and tested flow, rhythm, and pacing of immersive narrative maps.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Resume;
