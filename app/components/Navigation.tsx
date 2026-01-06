export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full flex items-center justify-between px-8 py-6 z-[9999]">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center shadow-lg">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <span className="text-purple-600 font-bold text-xs">S</span>
          </div>
        </div>
        <span className="text-white font-semibold text-xl drop-shadow-lg">Stimuler</span>
      </div>
      
      {/* Navigation Links with Rounded Border Container */}
      <div className="hidden lg:flex items-center">
        <div className="flex items-center gap-10 px-12 py-5 rounded-full border border-gray-600/60 bg-gray-800/50 backdrop-blur-sm shadow-lg">
          <a href="#features" className="text-white hover:text-gray-300 transition-colors text-lg font-medium">Features</a>
          <a href="#testimonials" className="text-white hover:text-gray-300 transition-colors text-lg font-medium">Testimonials</a>
          <a href="#about" className="text-white hover:text-gray-300 transition-colors text-lg font-medium">About</a>
          <a href="#contact" className="text-white hover:text-gray-300 transition-colors text-lg font-medium">Contact</a>
          <a href="#careers" className="text-white hover:text-gray-300 transition-colors text-lg font-medium">Careers</a>
        </div>
      </div>
      
      <button className="bg-linear-to-r from-purple-600 via-purple-700 to-indigo-700 hover:from-purple-700 hover:via-purple-800 hover:to-indigo-800 px-6 py-3 rounded-full text-white font-semibold text-lg transition-all shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/40 border border-purple-500/20">
        Download now
      </button>
    </nav>
  );
}