import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-dark/60"></div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(197,163,103,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center space-x-4 mb-8 animate-reveal-up" style={{ animationDelay: '0.1s' }}>
            <div className="h-[1px] w-12 bg-gold/50"></div>
            <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-medium">Timeless Refinement</span>
            <div className="h-[1px] w-12 bg-gold/50"></div>
          </div>
          
          <h1 className="text-6xl md:text-[9rem] font-display uppercase tracking-tight leading-[0.9] mb-12 animate-reveal-up" style={{ animationDelay: '0.3s' }}>
            Private <br />
            <span className="text-white/20 italic">Estates</span>
          </h1>
          
          <div className="max-w-xl animate-reveal-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-white/50 text-sm md:text-base font-light leading-relaxed tracking-wide mb-12">
              Discover unparalleled architectural excellence in the heart of the Caribbean. 
              Where modern sophistication meets the serene rhythm of the ocean.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-12 py-4 rounded-full bg-gold text-dark text-[11px] uppercase tracking-[0.3em] font-bold overflow-hidden transition-all duration-500"
              >
                <span className="relative z-10">EXPLORE ESTATES</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
              
              <button 
                onClick={() => alert('Launching Cinematic Showreel...')}
                className="text-[11px] uppercase tracking-[0.3em] font-medium text-white group flex items-center"
              >
                <span>VIEW SHOWREEL</span>
                <div className="ml-4 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold transition-colors duration-500">
                  <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-white border-b-[4px] border-b-transparent ml-1"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual Indicator of Scroll */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold/50 to-transparent"></div>
        <span className="text-[9px] uppercase tracking-[0.5em] text-white/30 mt-4">SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;
