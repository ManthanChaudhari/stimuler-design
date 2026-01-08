'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const scrollingTextRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollingTextRef.current) {
      const textElement = scrollingTextRef.current;

      // Kill any existing animations and clear CSS animations
      gsap.killTweensOf(textElement);
      textElement.style.animation = 'none';

      // Create continuous scrolling with no gaps
      gsap.set(textElement, { x: 0, clearProps: 'all' });

      console.log('Starting VERY slow animation with 200 second duration');

      gsap.to(textElement, {
        x: '-100%',
        duration: 2000,
        ease: 'none',
        repeat: -1,
        onStart: () => console.log('GSAP Animation started - faster speed'),
        onRepeat: () => console.log('GSAP Animation repeating')
      });
    }

    // Stats section scroll-triggered animation
    if (statsRef.current) {
      gsap.set(statsRef.current, { y: 50, opacity: 0 });

      gsap.to(statsRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    } else {
      console.log('Stats ref not found');
    }
  }, []);

  return (
    <section id="features" className="py-15 -mt-16 relative ">
      {/* Top white divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/20"></div>

      <div className="max-w-7xl mx-auto px-8">
        {/* Funding Announcement - Scrolling */}
        <div className="text-center mb-20 overflow-hidden relative h-16">
          {/* Left shadow gradient */}
          <div className="absolute left-0 top-0 w-20 h-full z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #0a0a0a, transparent)' }}></div>

          {/* Right shadow gradient */}
          <div className="absolute right-0 top-0 w-20 h-full z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #0a0a0a, transparent)' }}></div>

          <div
            ref={scrollingTextRef}
            className="absolute whitespace-nowrap animate-scroll-fast"
          >
            <span className="text-4xl text-purple-400 text-glow-purple">
              Stimuler bags <span className="text-purple-300 font-bold">$3.75mn</span> to strengthen its AI - led English tutor! <span className="text-purple-300 font-bold">Checkout👆</span>
              <span className="mx-16"> </span>
              Stimuler bags <span className="text-purple-300 font-bold">$3.75mn</span> to strengthen its AI - led English tutor! <span className="text-purple-300 font-bold">Checkout👆</span>
              <span className="mx-16"> </span>
              Stimuler bags <span className="text-purple-300 font-bold">$3.75mn</span> to strengthen its AI - led English tutor! <span className="text-purple-300 font-bold">Checkout👆</span>
              <span className="mx-16"> </span>
              Stimuler bags <span className="text-purple-300 font-bold">$3.75mn</span> to strengthen its AI - led English tutor! <span className="text-purple-300 font-bold">Checkout👆</span>
              <span className="mx-16"> </span>
              Stimuler bags <span className="text-purple-300 font-bold">$3.75mn</span> to strengthen its AI - led English tutor! <span className="text-purple-300 font-bold">Checkout👆</span>
              <span className="mx-16"> </span>
              Stimuler bags <span className="text-purple-300 font-bold">$3.75mn</span> to strengthen its AI - led English tutor! <span className="text-purple-300 font-bold">Checkout👆</span>
              <span className="mx-16"> </span>
              Stimuler bags <span className="text-purple-300 font-bold">$3.75mn</span> to strengthen its AI - led English tutor! <span className="text-purple-300 font-bold">Checkout👆</span>
              <span className="mx-16"> </span>
              Stimuler bags <span className="text-purple-300 font-bold">$3.75mn</span> to strengthen its AI - led English tutor! <span className="text-purple-300 font-bold">Checkout👆</span>
              <span className="mx-16"> </span>
              Stimuler bags <span className="text-purple-300 font-bold">$3.75mn</span> to strengthen its AI - led English tutor! <span className="text-purple-300 font-bold">Checkout👆</span>
            </span>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="flex flex-col md:flex-row items-center justify-center gap-90 max-w-5xl mx-auto -mt-8">
          {/* Trusted Worldwide */}
          <div className="text-left -ml-8 ">
            <h3 className="text-3xl font-medium text-white leading-tight">Trusted</h3>
            <p className="text-3xl font-medium text-white leading-tight">Worldwide</p>
          </div>

          {/* Stats - closer together */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-15 items-center">
            <div className="text-center">
              <div className="text-5xl  text-white mb-2">200+</div>
              <p className="text-sm text-gray-400">Countries world wide</p>
            </div>

            <div className="text-center">
              <div className="text-5xl  text-white mb-2">4M+</div>
              <p className="text-sm text-gray-400">App Downloads</p>
            </div>

            <div className="text-center">
              <div className="text-5xl  text-white mb-2 flex items-center justify-center gap-1">
                4.7<span className="text-yellow-400 text-4xl">⭐</span>
              </div>
              <p className="text-sm text-gray-400">App rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom white divider line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20"></div>
    </section>
  );
}