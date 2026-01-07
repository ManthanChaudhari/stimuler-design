export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999]">
      <div className="mx-auto max-w-[1440px] px-6 pt-4 pb-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">S</span>
          </div>
          <span className="text-white font-medium text-xl">
            Stimuler
          </span>
        </div>

        {/* Center Navigation Pill */}
        <div className="hidden lg:flex">
          <div
            className="
              flex items-center gap-10
              px-12 py-3
              rounded-full
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-md
            "
          >
            {["Features", "Testimonials", "About", "Contact", "Careers"].map(
              (item) => (
                <a
                  key={item}
                  className="text-base font-medium text-white/90 hover:text-white transition"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>

        {/* Download Button */}
        <button
          className="
            px-6 py-3
            rounded-full
            text-base font-medium
            text-white
            bg-gradient-to-r from-purple-600 to-indigo-700
            hover:from-purple-700 hover:to-indigo-800
            transition
          "
        >
          Download now
        </button>
      </div>
    </nav>
  );
}
