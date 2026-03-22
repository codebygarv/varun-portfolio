import { Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col text-white pt-6 md:pt-0">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <div className="w-12 h-1 bg-[#ABB6FF] rounded-full mb-6"></div>
      </div>

      <div className="max-w-2xl mx-auto bg-[#2B2B2C]/40 border border-white/5 p-8 rounded-3xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <h2 className="text-2xl font-bold mb-6 relative z-10">Get In Touch</h2>

        <form className="flex flex-col  gap-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-400">Full Name</label>
              <input
                type="text"
                id="name"
                className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ABB6FF]/50 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-400">Email Address</label>
              <input
                type="email"
                id="email"
                className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ABB6FF]/50 transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-400">Your Message</label>
            <textarea
              id="message"
              rows={5}
              className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ABB6FF]/50 transition-colors resize-none"
              placeholder="Hello! I have a project in mind..."
            ></textarea>
          </div>

          <button type="button" className="group self-end flex items-center gap-3 bg-gradient-to-r from-zinc-800 to-zinc-900 border border-white/10 hover:border-[#ABB6FF]/50 text-white px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#ABB6FF]/10 font-medium mt-2">
            <span>Send Message</span>
            <Send size={16} className="text-[#8A8A8B] group-hover:text-[#ABB6FF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </button>
        </form>
      </div>

    </div>
  );
};

export default Contact;
