export default function Footer() {
  return (
    <footer className="border-t border-gray-600/30 bg-[#0a0a0f] py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-xs">S</span>
              </div>
            </div>
            <span className="text-white font-semibold text-xl">Stimuler</span>
          </div>

          {/* Product Links Section */}
          <div className="flex flex-col gap-3 ml-8">
            <h3 className="text-white font-semibold text-xl mb-2">Product</h3>
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors text-base">
              About us
            </a>
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors text-base">
              IELTS
            </a>
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors text-base">
              Features
            </a>
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors text-base">
              Privacy policy
            </a>
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors text-base">
              Terms and Conditions
            </a>
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors text-base">
              Cancellation & Refund policy
            </a>
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors text-base">
              Data Deletion
            </a>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-4">
            <p className="text-gray-300 text-base italic">
              For more details and Enquiries
              <br />
              reach out to us anytime!
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-full transition-all shadow-lg shadow-purple-500/30 w-fit">
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
