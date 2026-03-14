import React from 'react';

const PropertyCard = ({ image, title, location, price, size, delay }) => (
  <div className="group cursor-pointer animate-reveal-up" style={{ animationDelay: `${delay}s` }}>
    <div className="relative aspect-[4/5] overflow-hidden mb-6">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000 ease-out"
      />
      <div className="absolute inset-0 border border-white/5 group-hover:border-gold/30 transition-colors duration-700"></div>
      
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
        <div className="bg-gold px-4 py-2 text-[10px] text-dark uppercase tracking-widest font-bold">
          View Property
        </div>
      </div>
    </div>
    
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-display text-xl uppercase tracking-widest mb-1 group-hover:text-gold transition-colors duration-500">{title}</h3>
        <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-light">{location}</p>
      </div>
      <div className="text-right">
        <p className="text-gold text-sm tracking-widest mb-1 font-medium">{price}</p>
        <p className="text-white/20 text-[9px] uppercase tracking-[0.2em]">{size}</p>
      </div>
    </div>
  </div>
);

const PortfolioGrid = () => {
  const properties = [
    {
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
      title: "Solstice Manor",
      location: "East Coast / Rep. Dom",
      price: "$8,500,000",
      size: "1,200 SQ M",
      delay: 0.1
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      title: "Obsidian Villa",
      location: "Private Bay / Cap Cana",
      price: "$12,200,000",
      size: "2,400 SQ M",
      delay: 0.3
    },
    {
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2092&auto=format&fit=crop",
      title: "Ivory Pavilion",
      location: "Casa de Campo / La Romana",
      price: "$6,900,000",
      size: "950 SQ M",
      delay: 0.5
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-dark">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/5 pb-12">
          <div className="max-w-2xl">
            <span className="text-gold text-[10px] uppercase tracking-[0.5em] mb-4 block">Selected Works</span>
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tight leading-none">
              Focused <br /> <span className="text-white/20 italic">Living</span>
            </h2>
          </div>
          <div className="mt-8 md:mt-0 max-w-xs md:text-right">
            <p className="text-white/40 text-xs font-light leading-relaxed tracking-wide">
              A curated selection of properties that define the next generation of architectural luxury and Mediterranean elegance.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {properties.map((prop, index) => (
            <PropertyCard key={index} {...prop} />
          ))}
        </div>
        
        <div className="mt-24 flex justify-center">
          <button 
            onClick={() => alert('Loading full collection...')}
            className="group text-[10px] uppercase tracking-[0.5em] text-white/50 hover:text-gold transition-colors duration-500 py-4 border-b border-white/10 hover:border-gold transition-all duration-500"
          >
            DISCOVER ALL PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
