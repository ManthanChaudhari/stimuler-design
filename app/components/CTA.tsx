export default function CTA() {
  return (
    <section className="py-32">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">
          Ready to Transform Your English?
        </h2>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Join millions of learners worldwide and start your journey to fluent English speaking today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#" className="inline-block group">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl px-8 py-6 flex items-center gap-4 hover:bg-gray-800/80 transition-all shadow-xl border border-gray-800/50 group-hover:border-gray-700/50">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">GET IT ON</div>
                <div className="text-white font-semibold text-xl">Google Play</div>
              </div>
            </div>
          </a>
          
          <a href="#" className="inline-block group">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl px-8 py-6 flex items-center gap-4 hover:bg-gray-800/80 transition-all shadow-xl border border-gray-800/50 group-hover:border-gray-700/50">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-white rounded-lg flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Available on the</div>
                <div className="text-white font-semibold text-xl">App Store</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}