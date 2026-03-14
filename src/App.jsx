import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen selection:bg-gold selection:text-dark">
      <Navbar />
      <Hero />
      <PortfolioGrid />
      <Footer />
    </main>
  );
}

export default App;
