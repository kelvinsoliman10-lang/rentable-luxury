import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark-soft pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <div className="flex items-center mb-8">
              <span className="font-display text-2xl tracking-[0.4em] uppercase text-gold leading-none">Rentable</span>
            </div>
            <p className="text-white/30 text-sm font-light leading-relaxed max-w-sm tracking-wide">
              Redefining the standard of luxury real estate through architectural excellence and timeless design in the world's most exclusive destinations.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-gold text-[10px] uppercase tracking-[0.4em] mb-8 font-semibold">Navigation</h4>
            <ul className="space-y-4">
              {['Portfolio', 'Services', 'Legacy', 'Contact'].map(item => (
                <li key={item}>
                  <a 
                    href={item === 'Portfolio' ? '#portfolio' : '#'} 
                    onClick={(e) => {
                      if (item === 'Portfolio') {
                        e.preventDefault();
                        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-xs text-white/50 hover:text-white transition-colors duration-300 font-light tracking-widest"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-gold text-[10px] uppercase tracking-[0.4em] mb-8 font-semibold">HQ</h4>
            <p className="text-xs text-white/30 font-light leading-loose tracking-widest uppercase">
              Cap Cana Marina<br />
              Punta Cana 23000<br />
              Dominican Republic
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-gold text-[10px] uppercase tracking-[0.4em] mb-8 font-semibold">Stay Connected</h4>
            <div className="flex flex-wrap gap-6">
              {['Instagram', 'Linkedin', 'Vimeo', 'Journal'].map(social => (
                <a key={social} href="#" className="text-[10px] text-white/40 hover:text-white transition-colors duration-300 uppercase tracking-[0.2em] border-b border-white/5 hover:border-white pb-1 font-medium">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-[9px] uppercase tracking-[0.5em] text-white/10 mb-6 md:mb-0">
            © 2026 RENTABLE LUXURY ESTATES. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-12">
            <a href="#" className="text-[9px] uppercase tracking-[0.4em] text-white/10 hover:text-gold transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-[9px] uppercase tracking-[0.4em] text-white/10 hover:text-gold transition-colors duration-300">Legal Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
