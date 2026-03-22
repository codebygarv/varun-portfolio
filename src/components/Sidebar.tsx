import { SiUnrealengine } from "react-icons/si";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="group lg:sticky lg:top-8 w-full lg:w-[25%] xl:w-[22%] bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:bg-zinc-900/60 hover:border-white/20 shadow-2xl overflow-hidden shrink-0 z-10">
      <div className="flex flex-col gap-6">

        {/* Top Layout */}
        <div className="relative flex flex-row md:flex-col lg:flex-col gap-4 items-center justify-start z-10 md:border-b border-[#3A3A3B] lg:border-b md:pb-6 lg:pb-6">

          {/* Picture */}
          <div className="flex justify-center items-center bg-zinc-900/40 backdrop-blur-xl h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] border border-white/10 rounded-2xl p-2 shrink-0 transition-all duration-500 hover:bg-zinc-900/60 hover:border-white/20 shadow-2xl">
            <img className="h-full w-full rounded-lg object-cover" src={"vt.jpg"} alt="Profile" />
          </div>

          {/* Name and Designation */}
          <div className="flex flex-col items-start md:items-center lg:items-center">
            <div className="flex items-center gap-1.5">
              <span className="text-xl md:text-[1.15rem] font-bold text-white transition-all duration-300">
                Varun
              </span>
            </div>
            <span className="text-sm font-medium text-gray-400 tracking-wide group-hover:text-gray-300 transition-colors duration-300">
              Game Developer
            </span>
          </div>

          {/* Small icons for Mobile */}
          <div className="md:hidden lg:hidden flex flex-wrap gap-2 ml-auto">
            <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-full p-3 h-12 w-12 flex justify-center items-center shrink-0 transition-all duration-500 hover:bg-zinc-900/60 hover:border-white/20 shadow-2xl">
              <SiUnrealengine className="text-white text-xl" />
            </div>
          </div>
        </div>

        {/* Bottom Layout */}
        <div className="hidden md:flex lg:flex flex-col gap-6">
          {/* Contact Information */}
          <div className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center bg-zinc-900/40 border border-white/10 rounded-xl h-10 w-10 shrink-0 shadow-sm transition-colors hover:bg-zinc-900/60 hover:border-white/30 text-[#ABB6FF] hover:text-white">
                <Mail size={16} />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-[10px] text-[#8A8A8B] uppercase tracking-wider font-semibold">Email</span>
                <a href="mailto:varunthakral999@gmail.com" className="text-[sm] text-white truncate hover:text-gray-300 transition-colors cursor-pointer" >varunthakral999@gmail.com</a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center bg-zinc-900/40 border border-white/10 rounded-xl h-10 w-10 shrink-0 shadow-sm transition-colors hover:bg-zinc-900/60 hover:border-white/30 text-[#ABB6FF] hover:text-white">
                <MapPin size={16} />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-[10px] text-[#8A8A8B] uppercase tracking-wider font-semibold">Location</span>
                <span className="text-sm text-white truncate">kurukshetra, HR</span>
              </div>
            </div>

            {/* Contact Number */}
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center bg-zinc-900/40 border border-white/10 rounded-xl h-10 w-10 shrink-0 shadow-sm transition-colors hover:bg-zinc-900/60 hover:border-white/30 text-[#ABB6FF] hover:text-white">
                <Phone size={16} />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-[10px] text-[#8A8A8B] uppercase tracking-wider font-semibold">Phone</span>
                <span className="text-sm text-white truncate">+91 9588710931</span>
              </div>
            </div>

            {/* Birthday */}
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center bg-zinc-900/40 border border-white/10 rounded-xl h-10 w-10 shrink-0 shadow-sm transition-colors hover:bg-zinc-900/60 hover:border-white/30 text-[#ABB6FF] hover:text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h14a2 2 0 012 2v6z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7V3m0 0a2 2 0 00-2 2m2-2a2 2 0 012 2m-4 5h8"></path></svg>
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-[10px] text-[#8A8A8B] uppercase tracking-wider font-semibold">Birthday</span>
                <span className="text-sm text-white truncate">1 December, 2001</span>
              </div>
            </div>

          </div>

          {/* Download Resume Button */}
          <div className="flex justify-center mt-2">
            <button className="flex items-center gap-2 bg-gradient-to-r from-zinc-800 to-zinc-900 border border-white/10 hover:border-[#ABB6FF]/50 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#ABB6FF]/10 shrink-0 w-full justify-center group font-medium text-sm">
              <span>Download Resume</span>
              <svg className="w-4 h-4 text-[#8A8A8B] group-hover:text-[#ABB6FF] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 mt-2 pt-4 border-t border-[#3A3A3B]">
            <a href="#" className="text-[#8A8A8B] hover:text-white transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="#" className="text-[#8A8A8B] hover:text-blue-500 transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-[#8A8A8B] hover:text-sky-400 transition-colors duration-300">
              <Twitter size={20} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;