import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'glass py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-display text-2xl tracking-[0.4em] uppercase text-gold leading-none">Rentable</span>
        </div>
        
        <div className="hidden md:flex space-x-10">
          {['Portfolio', 'Residences', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-[11px] uppercase tracking-[0.4em] text-white/60 hover:text-gold transition-colors duration-500 font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        <button 
          onClick={() => window.location.href = '#contact'}
          className="px-6 py-2 border border-gold/30 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-gold hover:text-dark transition-all duration-500"
        >
          Enquire
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
