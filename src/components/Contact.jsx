import React, { useState } from "react";
import { HiSparkles, HiMail, HiUser, HiChatAlt2 } from "react-icons/hi";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkgpjawk";

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: false, error: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formState.name,
          Email: formState.email,
          Message: formState.message
        })
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: false });
        setFormState({ name: "", email: "", message: "" });
      } else {
        setStatus({ loading: false, success: false, error: true });
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: true });
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-[#F5F2EB] text-[#3D2645] min-h-screen relative overflow-hidden font-['Fredoka',sans-serif] flex items-center justify-center">
      
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#E8DFF5]/70 rounded-full blur-[90px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FCE1E4]/80 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-xl z-10 space-y-8 relative pt-12">
        
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-white border-2 border-dashed border-[#D0BCD5] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide text-[#6C5B7B] shadow-sm transform rotate-1">
            <HiSparkles className="text-[#FB6B90] animate-spin duration-[5000ms]" /> Dispatch a Secret Message ✦
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-wide filter drop-shadow-[0_2px_0px_rgba(208,188,213,0.3)]">
            Let's Start <br />
            <span className="bg-gradient-to-r from-[#B491C8] via-[#FB6B90] to-[#FFB7B2] bg-clip-text text-transparent">Something Magical</span>
          </h2>
          <p className="text-[#5E4B66] text-sm md:text-base font-medium max-w-sm mx-auto">
            Drop your inputs below to manifest a project collaboration, freelance gig, or just share some doodles!
          </p>
        </div>

        {status.success ? (
          <div className="bg-white border-4 border-[#D0BCD5] p-8 rounded-[32px] text-center shadow-[0_12px_0px_0px_#D0BCD5] transform -rotate-1 space-y-4">
            <div className="text-6xl animate-bounce">✨🕊️</div>
            <h3 className="text-2xl font-black text-[#3D2645]">Spell Dispatched!</h3>
            <p className="text-sm text-[#5E4B66] font-medium leading-relaxed">
              Your message packet has successfully bypassed the internet matrix and landed straight in my inbox (**arzoosingh147@gmail.com**). I'll catch up with you soon! 🧸🪄
            </p>
            <button 
              onClick={() => setStatus({ loading: false, success: false, error: false })}
              className="mt-2 px-5 py-2.5 bg-[#E8DFF5]/60 hover:bg-[#E8DFF5] border-2 border-[#D0BCD5] rounded-xl text-xs font-bold uppercase tracking-wide text-[#3D2645] transition-all cursor-pointer"
            >
              Send Another Transmission
            </button>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="bg-white border-4 border-[#D0BCD5] p-6 md:p-8 rounded-[36px] shadow-[0_12px_0px_0px_#D0BCD5] space-y-5 relative"
          >
            <div className="space-y-1.5 relative">
              <label className="text-xs font-black uppercase tracking-wide text-[#6C5B7B] ml-2 flex items-center gap-1">
                <HiUser className="text-[#B491C8]" /> What Should I Call You?
              </label>
              <input 
                type="text" 
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                disabled={status.loading}
                placeholder="e.g. Creative Sprite"
                className="w-full px-5 py-3.5 bg-[#F5F2EB]/50 border-2 border-[#D0BCD5] rounded-2xl text-sm font-medium text-[#3D2645] placeholder-[#6C5B7B]/50 focus:bg-white focus:border-[#FB6B90] focus:ring-0 outline-none transition-all disabled:opacity-50"
              />
            </div>

            <div className="space-y-1.5 relative">
              <label className="text-xs font-black uppercase tracking-wide text-[#6C5B7B] ml-2 flex items-center gap-1">
                <HiMail className="text-[#B491C8]" /> Where Can I Return Mail?
              </label>
              <input 
                type="email" 
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                disabled={status.loading}
                placeholder="your.email@universe.com"
                className="w-full px-5 py-3.5 bg-[#F5F2EB]/50 border-2 border-[#D0BCD5] rounded-2xl text-sm font-medium text-[#3D2645] placeholder-[#6C5B7B]/50 focus:bg-white focus:border-[#FB6B90] focus:ring-0 outline-none transition-all disabled:opacity-50"
              />
            </div>

            <div className="space-y-1.5 relative">
              <label className="text-xs font-black uppercase tracking-wide text-[#6C5B7B] ml-2 flex items-center gap-1">
                <HiChatAlt2 className="text-[#B491C8]" /> Describe The Vibe / Project Lore
              </label>
              <textarea 
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows="4"
                disabled={status.loading}
                placeholder="Let's build a chaotic layout framework..."
                className="w-full px-5 py-3.5 bg-[#F5F2EB]/50 border-2 border-[#D0BCD5] rounded-2xl text-sm font-medium text-[#3D2645] placeholder-[#6C5B7B]/50 focus:bg-white focus:border-[#FB6B90] focus:ring-0 outline-none transition-all resize-none disabled:opacity-50"
              />
            </div>

            {status.error && (
              <p className="text-xs font-bold text-red-500 text-center bg-red-50 border border-red-200 py-2 rounded-xl">
                ❌ Oh no! The mailing sprite tripped. Please try again!
              </p>
            )}

            <div className="pt-2">
              <button 
                type="submit"
                disabled={status.loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#B491C8] via-[#FB6B90] to-[#FFB7B2] font-black text-white shadow-[0_5px_0px_0px_#D0BCD5] hover:shadow-[0_8px_0px_0px_#D0BCD5] active:translate-y-1 active:shadow-none transition-all duration-150 text-base tracking-wide cursor-pointer border-none outline-none disabled:opacity-50"
              >
                <span>{status.loading ? "Chanting Spells... 🔮" : "Cast Message Spell 🪄"}</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};

export default Contact;
