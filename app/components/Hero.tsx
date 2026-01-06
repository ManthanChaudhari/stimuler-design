export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-8 pt-16 pb-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side - Hero Text */}
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
            World's fastest way to{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Speak
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              English
            </span>{" "}
            better!
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
            For non-native speakers, the solutions to attain fluent English speaking skills have been highly inaccessible to the masses.
          </p>
          
          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#" className="inline-block group">
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl px-5 py-4 flex items-center gap-4 hover:bg-gray-800/80 transition-all shadow-xl border border-gray-800/50 group-hover:border-gray-700/50">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">GET IT ON</div>
                  <div className="text-white font-semibold text-lg">Google Play</div>
                </div>
              </div>
            </a>
            
            <a href="#" className="inline-block group">
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl px-5 py-4 flex items-center gap-4 hover:bg-gray-800/80 transition-all shadow-xl border border-gray-800/50 group-hover:border-gray-700/50">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-200 to-white rounded-lg flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Available on the</div>
                  <div className="text-white font-semibold text-lg">App Store</div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side - Phone and Character */}
        <div className="relative flex justify-center items-center h-[600px]">
          
          {/* Large gradient background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] h-[500px] bg-gradient-to-br from-purple-600/30 via-pink-500/20 to-orange-400/20 rounded-full blur-3xl"></div>
          </div>
          
          {/* Main phone with Video */}
          <div className="relative z-30">
            <div className="w-80 h-[580px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[2.5rem] p-2 shadow-2xl border border-gray-700/50">
              <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                {/* Status bar */}
                <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-6 py-4">
                  <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                  <div className="text-white text-sm font-medium">9:41</div>
                  <div className="flex gap-1">
                    <div className="w-6 h-3 bg-green-500 rounded-sm"></div>
                  </div>
                </div>
                
                {/* Close button */}
                <div className="absolute top-4 right-6 z-10">
                  <div className="w-8 h-8 bg-gray-700/50 rounded-full flex items-center justify-center">
                    <span className="text-gray-400 text-lg">×</span>
                  </div>
                </div>
                
                {/* Video Content */}
                <div className="w-full h-full">
                  <video 
                    className="w-full h-full object-cover rounded-[2rem]"
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
          
          {/* Pronunciation error popup */}
          {/* <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-40">
            <div className="bg-gray-800/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-700/50 min-w-[320px]">
              <div className="text-white font-semibold text-lg mb-2">You mispronounced</div>
              <div className="text-red-400 text-2xl font-bold mb-4">"Horror"</div>
              <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-2 rounded-full text-sm font-bold transition-colors shadow-lg w-full">
                RETRY
              </button>
            </div>
          </div> */}
          
          {/* Character illustration - bottom right */}
          <div className="absolute bottom-0 right-8 z-40">
            <div className="w-40 h-40 bg-linear-to-br from-purple-400 via-pink-400 to-orange-400 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-5xl">👩‍🎓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}