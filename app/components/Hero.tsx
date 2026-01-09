'use client';

import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const popupRef = useRef<HTMLDivElement>(null);
  const grammarPopupRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const grammarBgRef = useRef<HTMLDivElement>(null);
  const popupBgRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Heading entrance animation from bottom to top
    if (headingRef.current) {
      console.log('Heading ref found, starting animation');
      gsap.set(headingRef.current, { y: 50, opacity: 0 });
      gsap.to(headingRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.0,
        ease: "power3.out",
        delay: 0.1,
        onComplete: () => console.log('Heading animation complete')
      });
    } else {
      console.log('Heading ref not found');
    }

    // Character entrance animation on page load
    if (characterRef.current) {
      console.log('Character ref found, starting animation');
      gsap.set(characterRef.current, { y: 100, opacity: 0 });
      gsap.to(characterRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.5,
        onComplete: () => console.log('Character animation complete')
      });
    } else {
      console.log('Character ref not found');
    }

    // Phone entrance animation from right to left
    if (phoneRef.current) {
      console.log('Phone ref found, starting animation');
      gsap.set(phoneRef.current, { x: 200, opacity: 0 });
      gsap.to(phoneRef.current, {
        x: 0,
        opacity: 1,
        duration: 1.0,
        ease: "power2.out",
        delay: 0.2,
        onComplete: () => console.log('Phone animation complete')
      });
    } else {
      console.log('Phone ref not found');
    }

    // Grammar popup background entrance animation
    if (grammarBgRef.current) {
      console.log('Grammar background ref found, starting animation');
      gsap.set(grammarBgRef.current, { scale: 0.5, opacity: 0 });
      gsap.to(grammarBgRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1.0,
        ease: "back.out(1.7)",
        delay: 1.0,
        onComplete: () => console.log('Grammar background animation complete')
      });
    } else {
      console.log('Grammar background ref not found');
    }

    // Popup background entrance animation
    if (popupBgRef.current) {
      console.log('Popup background ref found, starting animation');
      gsap.set(popupBgRef.current, { scale: 0.5, opacity: 0 });
      gsap.to(popupBgRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1.0,
        ease: "back.out(1.7)",
        delay: 1.2,
        onComplete: () => console.log('Popup background animation complete')
      });
    } else {
      console.log('Popup background ref not found');
    }

    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? 1 : -1; // 1 for down, -1 for up

      // Animate pronunciation popup
      if (popupRef.current) {
        gsap.to(popupRef.current, {
          y: scrollDirection * 20,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(popupRef.current, {
              y: 0,
              duration: 0.5,
              ease: "power2.out"
            });
          }
        });
      }

      // Animate grammar popup
      if (grammarPopupRef.current) {
        console.log('Animating grammar popup:', scrollDirection);
        gsap.to(grammarPopupRef.current, {
          y: scrollDirection * 10,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(grammarPopupRef.current, {
              y: 0,
              duration: 0.5,
              ease: "power2.out"
            });
          }
        });
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className="relative max-w-7xl mx-auto px-8 pt-45 pb-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side - Hero Text */}
        <div className="space-y-4 -mt-30">
          <h1 ref={headingRef} className="font-inter font-semibold text-5xl lg:text-4xl xl:text-5xl leading-[1.1] tracking-tight text-white text-left">
            <span className="block whitespace-nowrap ">
              World's fastest way to Speak
            </span>
            <span className="block">
              English better!
            </span>
          </h1>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="https://play.google.com/store/apps/details?id=com.stimuler" target="_blank" rel="noopener noreferrer" className="inline-block">
              <div className="flex items-center gap-4 px-6 py-3 min-w-[210px]
                  rounded-xl bg-black
                  border border-white/30
                  shadow-[0_0_40px_rgba(139,92,246,0.25)]
                  hover:scale-[1.03] transition-all duration-300">

                {/* Play Icon */}
                <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
                  <path d="M3.609 1.814L13.792 12L3.609 22.186C3.538 22.104 3.5 21.998 3.5 21.886V2.114C3.5 2.002 3.538 1.896 3.609 1.814Z" fill="#4285F4" />
                  <path d="M20.683 10.747L16.208 8.168L13.792 12L16.208 15.832L20.683 13.253C21.439 12.831 21.439 11.169 20.683 10.747Z" fill="#EA4335" />
                  <path d="M3.609 1.814C3.859 1.538 4.263 1.538 4.513 1.814L16.208 8.168L13.792 12L4.513 22.186C4.263 22.462 3.859 22.462 3.609 22.186L13.792 12L3.609 1.814Z" fill="#34A853" />
                  <path d="M13.792 12L16.208 15.832L4.513 22.186C4.263 22.462 3.859 22.462 3.609 22.186L13.792 12Z" fill="#FBBC04" />
                </svg>

                {/* Text */}
                <div className="leading-tight">
                  <p className="text-[11px] text-gray-300 uppercase tracking-wide">
                    Get it on
                  </p>
                  <p className="text-white text-xl font-medium">
                    Google Play
                  </p>
                </div>
              </div>
            </a>


            <a href="#" className="inline-block">
              <div className="flex items-center gap-4 px-6 py-3 min-w-[210px]
                              rounded-xl bg-black
                              border border-white/30
                              shadow-[0_0_40px_rgba(139,92,246,0.25)]
                              hover:scale-[1.03] transition-all duration-300">
                <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="leading-tight">
                  <p className="text-[11px] text-gray-300 uppercase tracking-wide">
                    Available on the
                  </p>
                  <p className="text-white text-xl font-medium">
                    App Store
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side - Phone and Character */}
        <div className="relative flex justify-center items-center h-[600px]">


          {/* Background image behind phone */}
          <div className="absolute top-0 -right-80 z-20 overflow-hidden" >
            <Image
              src="https://framerusercontent.com/images/DqVcgecKChw6jkoEVbhIxuYYCoA.jpg?scale-down-to=2048&width=4096&height=3112"
              alt="Background design"
              width={4096}
              height={3112}
              className="w-full h-[610px] object-cover object-left"
            />
          </div>

          {/* Pronunciation error popup - positioned outside phone on the right */}
          <div className="absolute top-16 right-[-80px] z-40" ref={popupRef}>
            <div ref={popupBgRef}>
              <div className="bg-black/90 backdrop-blur-sm rounded-bl-3xl rounded-br-3xl rounded-tl-3xl shadow-2xl border border-white/60 min-w-[200px] p-4">
                <div className="text-white font-medium text-sm mb-1 text-center">You mispronounced</div>
                <div className="text-red-400 text-sm font-bold mb-3 text-center">&quot; Horror &quot;</div>
                <button className="bg-linear-to-r from-red-500 to-red-500 hover:from-red-600 hover:to-red-700 text-white px-6 py-2 rounded-lg text-xs font-bold transition-colors shadow-lg w-full">
                  RETRY
                </button>
              </div>
            </div>
          </div>

          {/* Grammar score popup - positioned on the left side of phone */}
          <div className="absolute top-90 left-[-70px] z-40" ref={grammarPopupRef}>
            <div ref={grammarBgRef}>
              <div className="bg-gray-950/90 backdrop-blur-sm rounded-bl-2xl rounded-br-2xl rounded-tl-2xl shadow-2xl border border-white/60 min-w-[180px] min-h-[100px] p-4 relative flex flex-col items-center justify-center">
                {/* Pointed corner for top-right */}

                <div className="text-white font-medium text-sm mb-1 text-center">
                  You scored <span className="text-blue-400 font-bold">7.5 Band</span> in
                </div>
                <div className="text-white font-medium text-sm mb-2 text-center">
                  Grammar ! <span className="text-green-400 font-bold">Great job</span>
                </div>
                <div className="flex justify-center">
                  <span className="text-lg">🔥</span>
                </div>
              </div>
              {/* Small avatar circle */}
              <div className="absolute -left-12 top-1.1/2 transform -translate-y-1/2 w-10 h-10 bg-linear-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-xl">👳‍♀️</span>
              </div>
            </div>
          </div>

          {/* Main phone with Video */}
          <div className="relative z-30" ref={phoneRef}>
            <div className="w-80 h-[630px] bg-linear-to-b from-black-900 to-black-800 rounded-[2.5rem] p-2 shadow-2xl border border-gray-700/50">
              <div className="w-full h-full bg-black rounded-4xl overflow-hidden relative">
                {/* Status bar */}
                <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-6 py-4">
                  <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                </div>

                {/* Video Content */}
                <div className="w-full h-full">
                  <video
                    className="w-full h-full object-cover rounded-4xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="https://framerusercontent.com/assets/CTXoomnRufE2x9YyusfQ2aU18.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Character image - positioned on the right side */}
          <div className="absolute bottom-0 right-[-150px] z-40" >
            <div className="w-80 h-80 relative">
              <Image
                src="https://framerusercontent.com/images/gaqLxCc0Q5M0Y0gACBMrZLk.png?width=720&height=960"
                alt="Character illustration"
                width={720}
                height={960}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}