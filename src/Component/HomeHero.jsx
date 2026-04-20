// eslint-disable-next-line no-unused-vars
import React from 'react'

const HomeHero = () => {
  return (
<section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
  {/* Background with deepened shadows and focal blur */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-brand-primary mix-blend-multiply opacity-60 z-10" />
    <img 
      src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2600&auto=format&fit=crop" 
      className="w-full h-full object-cover blur-[2px] opacity-80" 
      alt="Mountain range adventure" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-brand-primary/40 z-20" />
  </div>

  <div className="relative z-30 max-w-7xl mx-auto px-4 text-center">
    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-primary/10 backdrop-blur-xl border border-white/20 mb-8 shadow-xl">
      <span className="w-2 h-2 rounded-full bg-brand-secondary animate-ping" />
      <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Premiere Travel Experiences</span>
    </div>

    <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-white mb-8 leading-[0.9] drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]">
      Chase Your <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-accent">Wildest</span> Dreams
    </h1>

    <p className="max-w-xl mx-auto text-lg md:text-xl text-white mb-16 font-medium leading-relaxed drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
      Bespoke journeys designed for the bold. TrackingTravel connects you with the world's most extraordinary destinations.
    </p>

    {/* Floating Search Dashboard with sophisticated layered shadows */}
    <div className="max-w-5xl mx-auto transform hover:-translate-y-1 transition-transform duration-500">
      <form 
        className="bg-white/90 backdrop-blur-3xl rounded-[2.5rem] p-3 border border-white/50"
        style={{
          boxShadow: '0 20px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.5) inset'
        }}
      >
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2">
          
          {/* Destination */}
          <div className="flex-1 p-5 rounded-[1.75rem] hover:bg-slate-50 transition-all text-left flex items-center gap-5 cursor-pointer group">
            <div className="w-14 h-14 rounded-2xl bg-brand-primary/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M21 21l-4.35-4.35"/><circle cx="11" cy="11" r="7"/></svg>
            </div>
            <div className="flex-1">
              <label htmlFor="destination" className="text-[10px] font-black text-slate-400 uppercase tracking-widest block cursor-pointer mb-1">Destination</label>
              <input 
                id="destination"
                name="destination"
                type="text" 
                placeholder="Where to?" 
                className="bg-transparent border-none p-0 focus:ring-0 text-brand-primary font-black placeholder:text-slate-300 w-full text-lg" 
                required 
              />
            </div>
          </div>

          <div className="hidden lg:block w-px h-16 bg-slate-100" />

          {/* Dates */}
          <div className="flex-1 p-5 rounded-[1.75rem] hover:bg-slate-50 transition-all text-left flex items-center gap-5 cursor-pointer group">
            <div className="w-14 h-14 rounded-2xl bg-brand-secondary/5 flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all duration-300">
               <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z"/></svg>
            </div>
            <div className="flex-1">
              <label htmlFor="departure-date" className="text-[10px] font-black text-slate-400 uppercase tracking-widest block cursor-pointer mb-1">Check In</label>
              <input 
                id="departure-date"
                name="departure-date"
                type="date" 
                className="bg-transparent border-none p-0 focus:ring-0 text-brand-primary font-bold w-full uppercase text-sm" 
                required 
              />
            </div>
          </div>

          <div className="hidden lg:block w-px h-16 bg-slate-100" />

          {/* Travelers */}
          <div className="flex-1 p-5 rounded-[1.75rem] hover:bg-slate-50 transition-all text-left flex items-center gap-5 cursor-pointer group">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8z"/></svg>
            </div>
            <div className="flex-1">
              <label htmlFor="travelers" className="text-[10px] font-black text-slate-400 uppercase tracking-widest block cursor-pointer mb-1">Guests</label>
              <input 
                id="travelers"
                name="travelers"
                type="number" 
                min="1"
                placeholder="0"
                className="bg-transparent border-none p-0 focus:ring-0 text-brand-primary font-black placeholder:text-slate-300 w-full text-lg" 
                required 
              />
            </div>
          </div>

          {/* Search Button */}
          <button type="submit" className="px-10 py-6 bg-brand-secondary text-white rounded-[1.75rem] font-black hover:bg-brand-primary transition-all shadow-2xl shadow-brand-secondary/40 flex items-center justify-center gap-3 active:scale-95 group">
            <span className="uppercase tracking-widest text-sm">Explore</span>
            <svg className="group-hover:translate-x-1 transition-transform" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

  );
};

export default HomeHero;