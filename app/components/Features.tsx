export default function Features() {
  return (
    <section id="features" className="py-32 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Stimuler</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced AI technology meets personalized learning to help you master English speaking faster than ever before.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-purple-500/30 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Personalized Feedback</h3>
            <p className="text-gray-300 leading-relaxed">
              Get detailed, AI-powered feedback on your pronunciation, grammar, and speaking patterns to improve faster.
            </p>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-purple-500/30 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">AI Coach</h3>
            <p className="text-gray-300 leading-relaxed">
              Practice with our intelligent AI coach that adapts to your learning style and provides real-time guidance.
            </p>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-purple-500/30 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Track Progress</h3>
            <p className="text-gray-300 leading-relaxed">
              Monitor your improvement with detailed analytics and celebrate milestones as you advance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}