"use client"

import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const phoneRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const waveformRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Heading entrance animation
    if (headingRef.current) {
      gsap.set(headingRef.current, { y: 50, opacity: 0 })
      gsap.to(headingRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.0,
        ease: "power3.out",
        delay: 0.1,
      })
    }

    // Phone entrance animation
    if (phoneRef.current) {
      gsap.set(phoneRef.current, { y: 100, opacity: 0 })
      gsap.to(phoneRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      })
    }

    // Side elements animation
    if (waveformRef.current) {
      gsap.set(waveformRef.current, { x: -100, opacity: 0 })
      gsap.to(waveformRef.current, {
        x: 0,
        opacity: 1,
        duration: 1.0,
        ease: "power2.out",
        delay: 0.8,
      })
    }

    if (statsRef.current) {
      gsap.set(statsRef.current, { x: 100, opacity: 0 })
      gsap.to(statsRef.current, {
        x: 0,
        opacity: 1,
        duration: 1.0,
        ease: "power2.out",
        delay: 1.0,
      })
    }
  }, [])
  return (
    <section className="relative w-full overflow-hidden min-h-screen flex flex-col items-center justify-start pt-10 sm:pt-16 lg:pt-20 mb-20">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-32 left-1/3 w-4 h-4 bg-purple-400/30 rotate-45 animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-60 right-1/3 w-3 h-3 bg-blue-400/40 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-40 left-1/5 w-2 h-2 bg-pink-400/50 rotate-45 animate-bounce" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-80 right-1/4 w-5 h-5 bg-cyan-400/30 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-8 h-full w-full">
            {Array.from({length: 144}).map((_, i) => (
              <div key={i} className="border border-white/10 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
            ))}
          </div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/6 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/5 w-1 h-1 bg-purple-400/60 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-blue-400/50 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-pink-400/40 rounded-full animate-ping" style={{animationDelay: '4s'}}></div>
        
        {/* Radial Lines */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-96 h-96">
            {Array.from({length: 8}).map((_, i) => (
              <div 
                key={i} 
                className="absolute top-1/2 left-1/2 w-px h-48 bg-gradient-to-t from-transparent via-white/10 to-transparent origin-bottom animate-rotate-ray"
                style={{
                  transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '20s'
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Floating Rings */}
        <div className="absolute top-20 right-10">
          <div className="w-32 h-32 border border-purple-400/20 rounded-full animate-rotate-clockwise"></div>
          <div className="absolute top-4 left-4 w-24 h-24 border border-blue-400/15 rounded-full animate-rotate-counter-clockwise"></div>
        </div>
        
        <div className="absolute bottom-32 left-16">
          <div className="w-24 h-24 border border-pink-400/20 rounded-full animate-rotate-counter-clockwise"></div>
          <div className="absolute top-2 left-2 w-20 h-20 border border-cyan-400/15 rounded-full animate-rotate-clockwise"></div>
        </div>
      </div>
      {/* Notification Banner */}
      <div className="mb-8">
        <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-yellow-500/20 rounded-full border border-purple-300/30 backdrop-blur-sm">
          <span className="text-sm text-white/90">New AI Testimonial Feature is ✨</span>
          <button className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors">Check it Out →</button>
        </div>
      </div>

      {/* Main Heading */}
      <div className="text-center mb-12">
        <h1
          ref={headingRef}
          className="font-inter font-bold text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight text-white mb-6"
        >
          <span className="block">Perfectly, Speaking,</span>
          <span className="block">Writing with AI</span>
        </h1>

        <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          Master English with AI tools that correct grammar, fix pronunciation, and build fluency in real time.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105">
          Learn More
        </button>
        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
          Download App →
        </button>
      </div>

      {/* Main Content Area with Phone and Side Elements */}
      <div className="relative w-full max-w-5xl mx-auto px-4">
        {/* Left Side - Audio Waveform */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10" ref={waveformRef}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="mb-4">
              <h3 className="text-white font-medium mb-2">Tap what you hear and select</h3>
              <h3 className="text-white font-medium">the word down!</h3>
            </div>

            {/* Audio Waveform Visualization */}
            <div className="flex items-center gap-1 mb-4">
              <div className="w-1 bg-purple-400 rounded-full animate-pulse" style={{ height: "20px" }}></div>
              <div
                className="w-1 bg-purple-400 rounded-full animate-pulse"
                style={{ height: "35px", animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-1 bg-purple-400 rounded-full animate-pulse"
                style={{ height: "25px", animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-1 bg-purple-400 rounded-full animate-pulse"
                style={{ height: "40px", animationDelay: "0.3s" }}
              ></div>
              <div
                className="w-1 bg-purple-400 rounded-full animate-pulse"
                style={{ height: "30px", animationDelay: "0.4s" }}
              ></div>
              <div
                className="w-1 bg-purple-400 rounded-full animate-pulse"
                style={{ height: "45px", animationDelay: "0.5s" }}
              ></div>
              <div
                className="w-1 bg-purple-400 rounded-full animate-pulse"
                style={{ height: "20px", animationDelay: "0.6s" }}
              ></div>
              <div
                className="w-1 bg-purple-400 rounded-full animate-pulse"
                style={{ height: "35px", animationDelay: "0.7s" }}
              ></div>
            </div>

            {/* Play Button */}
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            <div className="mt-4 text-center">
              <div className="text-white/60 text-sm">Could</div>
              <div className="text-white/60 text-sm">You</div>
            </div>
          </div>
        </div>

        {/* Center - Phone Mockup */}
        <div className="flex justify-center" ref={phoneRef}>
          <div className="relative">
            <div className="w-80 h-[650px] bg-black rounded-[2.5rem] p-2 shadow-2xl border border-gray-700/50">
              <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                {/* Status bar */}
                <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-6 py-4">
                  <span className="text-white text-sm font-medium">11:42</span>
                  <div className="flex items-center gap-1">
                    <div className="flex gap-1">
                      <div className="w-1 h-3 bg-white rounded-full"></div>
                      <div className="w-1 h-3 bg-white rounded-full"></div>
                      <div className="w-1 h-3 bg-white/50 rounded-full"></div>
                      <div className="w-1 h-3 bg-white/50 rounded-full"></div>
                    </div>
                    <span className="text-white text-sm ml-2">506</span>
                  </div>
                </div>

                {/* Phone Content */}
                <div className="pt-16 px-4 h-full">
                  {/* User Profile */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">RA</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">Ravi Agarwal</div>
                      <div className="text-gray-400 text-sm">January, 2025</div>
                    </div>
                  </div>

                  {/* Calendar */}
                  <div className="grid grid-cols-7 gap-2 mb-6 text-center">
                    {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                      <div key={i} className="text-gray-400 text-xs py-2">
                        {day}
                      </div>
                    ))}
                    {[13, 14, 15, 16, 17, 18, 19].map((date, i) => (
                      <div key={i} className={`text-white text-sm py-2 rounded ${date === 17 ? "bg-orange-500" : ""}`}>
                        {date}
                      </div>
                    ))}
                  </div>

                  {/* Daily AI Challenge */}
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-4 mb-4 border border-purple-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">Daily AI Challenge</span>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-400">🤖</span>
                        <span className="text-white text-sm">Continue →</span>
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm">5,325 Learners</div>
                  </div>

                  {/* My Accuracy */}
                  <div className="bg-gray-800/50 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">My Accuracy</span>
                      <span className="text-gray-400 text-sm">No Data →</span>
                    </div>
                    <div className="text-gray-500 text-sm">No Results</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Stats Card */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2" ref={statsRef}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-center mb-4">
              <div className="text-white font-medium mb-2">This Month</div>
              <div className="text-3xl font-bold text-white mb-1">+21%</div>
              <div className="text-green-400 text-sm">↗ +2.1% vs last month</div>
            </div>

            {/* Progress Bars */}
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm text-white/70 mb-1">
                  <span>Speaking</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm text-white/70 mb-1">
                  <span>Grammar</span>
                  <span>72%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full"
                    style={{ width: "72%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm text-white/70 mb-1">
                  <span>Vocabulary</span>
                  <span>91%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                    style={{ width: "91%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}