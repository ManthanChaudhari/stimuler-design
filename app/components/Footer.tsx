export default function Footer() {
  return (
    <footer className="border-t border-gray-800/50 py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-xs">S</span>
              </div>
            </div>
            <span className="text-white font-semibold text-xl">Stimuler</span>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800/50 text-center text-gray-400 text-sm">
          © 2024 Stimuler. All rights reserved.
        </div>
      </div>
    </footer>
  );
}