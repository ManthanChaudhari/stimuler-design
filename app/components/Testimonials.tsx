export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 text-center">
        {/* AI Powered Badge */}
        <div className="mb-8">
          <span className="inline-block px-6 py-2 text-sm font-medium text-purple-400 border border-purple-400/30 rounded-full bg-purple-400/10">
            AI POWERED
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          English Practice enables you to speak
        </h2>
        <h2 className="text-5xl lg:text-6xl font-bold text-gray-400 leading-tight">
          more than ever
        </h2>
      </div>
    </section>
  );
}