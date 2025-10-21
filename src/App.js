import React from 'react';
import './App.scss';
import HeroSection from './components/HeroSection/HeroSection';
import ScrollRevealText from './components/ScrollRevealText/ScrollRevealText';
import BentoGrid from './components/BentoGrid/BentoGrid';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ScrollRevealText />
      <BentoGrid />
      <Footer />
    </div>
  );
}

export default App;
