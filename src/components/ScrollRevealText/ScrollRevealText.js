import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollRevealText.scss';

gsap.registerPlugin(ScrollTrigger);

const ScrollRevealText = () => {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const elements = textRefs.current;

    elements.forEach((element, index) => {
      if (element) {
        gsap.fromTo(element,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "top 20%",
              toggleActions: "play none none reverse",
              scrub: false,
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <section className="scroll-reveal-section" ref={sectionRef}>
      <div className="container">
        <div className="text-block" ref={addToRefs}>
          <p>
            <span className="text-primary">We build cutting-edge AI solutions that help businesses automate </span>
            <span className="text-secondary">processes, gain insights, and deliver smarter experiences. Whether you're looking to streamline operations, personalize customer journeys, or leverage predictive analytics, our AI-powered tools are designed to drive growth and innovation.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScrollRevealText;