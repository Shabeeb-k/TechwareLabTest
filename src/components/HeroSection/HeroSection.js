import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './HeroSection.scss';

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Create timeline for coordinated animations
    const tl = gsap.timeline();

    // Main title animation
    tl.fromTo(titleRef.current.querySelectorAll('.title-word'), 
      { 
        opacity: 0, 
        y: 100,
        rotateX: -90
      }, 
      { 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        duration: 1.2, 
        ease: "power3.out",
        stagger: 0.1
      }
    )
    // Subtitle animation
    .fromTo(subtitleRef.current,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5"
    )
    // CTA button animation
    .fromTo(ctaRef.current,
      {
        opacity: 0,
        scale: 0.8
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.3");
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="ellipse-background">
        <div className="ellipse ellipse-2"></div>
        <div className="ellipse ellipse-3"></div>
        <div className="ellipse ellipse-4"></div>
        <div className="ellipse ellipse-5"></div>
        <div className="ellipse ellipse-6"></div>
        <div className="ellipse ellipse-7"></div>
        <div className="ellipse ellipse-8"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title" ref={titleRef}>
          <span className="title-word">Smarter</span>
          <span className="title-word">Solutions</span>
          <span className="title-word">Powered</span>
          <span className="title-word">by</span>
          <span className="title-word">AI</span>
        </h1>
        
        <p className="hero-subtitle" ref={subtitleRef}>
          Streamline operations, reduce costs, and scale effortlessly with our AI-driven tools.
        </p>
        
        <div className="hero-cta" ref={ctaRef}>
          <button className="cta-primary">
            Start A Project
            <span className="button-icon">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;