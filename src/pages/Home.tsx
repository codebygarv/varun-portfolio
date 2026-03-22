import { SiUnrealengine, SiUnity } from "react-icons/si";

const Home = () => {
  return (
    <div className="flex flex-col text-white pt-6 md:pt-0">

      {/* Header section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <div className="w-12 h-1 bg-[#ABB6FF] rounded-full mb-6"></div>
      </div>

      {/* Intro text */}
      <div className="text-[#D6D6D6] text-[15px] space-y-5 leading-relaxed font-light mb-10">
        <p>
          Hi! I'm Varun. I make Video Games.
        </p>
        <p>
          I'm a Unreal Engine Developer from Kurukshetra, Haryana. I recently graduated with a bachelor's degree in Game Design and Development. I find great joy in crafting unforgettable experiences that come alive through the computer screen.
        </p>
        <p>
          My role involves not only developing games but also creating cinematic sequences and editing videos to enhance storytelling. I strive to blend technical expertise with creative vision, aiming to create games that are both engaging and visually stunning. With experience in designing gameplay mechanics and producing cinematic content, I bring a personalized touch to every project, ensuring it stands out and resonates with audiences.
        </p>
      </div>

      {/* What I'm Doing section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">What I'm Doing</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Unreal Engine Card */}
          <div className="bg-[#2B2B2C]/40 border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center relative overflow-hidden group hover:bg-[#2B2B2C]/60 hover:border-white/10 transition-all duration-300 shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-white/10"></div>
            <div className="text-4xl text-white opacity-80 shrink-0">
              <SiUnrealengine />
            </div>
            <div className="flex flex-col z-10">
              <h3 className="text-lg font-bold mb-2">Unreal Engine</h3>
              <p className="text-[#D6D6D6] text-sm leading-relaxed">
                Skilled in using Unreal Engine for creating games and cinematics, proficient with Blueprints for game logic and visual scripting.
              </p>
            </div>
          </div>

          {/* Unity Engine Card */}
          <div className="bg-[#2B2B2C]/40 border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center relative overflow-hidden group hover:bg-[#2B2B2C]/60 hover:border-white/10 transition-all duration-300 shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-white/10"></div>
            <div className="text-4xl text-white opacity-80 shrink-0">
              <SiUnity />
            </div>
            <div className="flex flex-col z-10">
              <h3 className="text-lg font-bold mb-2">Unity Engine</h3>
              <p className="text-[#D6D6D6] text-sm leading-relaxed">
                Experienced in developing 2D and 3D games, utilizing C# for scripting and creating engaging gameplay mechanics.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-16 pb-10">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        <div className="space-y-6">
          <div className="bg-[#2B2B2C]/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:bg-[#2B2B2C]/60 hover:border-white/10 transition-all duration-300 shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-white/10"></div>
            <h3 className="text-xl font-bold text-[#ABB6FF] mb-1">Gameplay Programmer</h3>
            <span className="text-sm text-gray-400 font-medium tracking-wider uppercase">Indie Game Studio &bull; 2023 - Present</span>
            <p className="mt-4 text-[#D6D6D6] text-[15px] leading-relaxed">
              Developed core player controller mechanics and interactive dialogue systems. Managed physics-based puzzles using Unity Engine's rigidbodies and custom C# wrappers. Optimized game performance by implementing object pooling, significantly reducing stutters.
            </p>
          </div>
          <div className="bg-[#2B2B2C]/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:bg-[#2B2B2C]/60 hover:border-white/10 transition-all duration-300 shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-white/10"></div>
            <h3 className="text-xl font-bold text-[#ABB6FF] mb-1">Level Designer Intern</h3>
            <span className="text-sm text-gray-400 font-medium tracking-wider uppercase">Creative Arts Agency &bull; 2021 - 2023</span>
            <p className="mt-4 text-[#D6D6D6] text-[15px] leading-relaxed">
              Assisted in prototyping level designs using Unreal Engine 5. Created blockouts and tested flow, rhythm, and pacing of immersive narrative maps. Integrated audio cues and cinematic visual effects.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
