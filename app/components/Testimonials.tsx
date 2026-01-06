export default function Testimonials() {
  const testimonials = [
    "Its simply brilliant. Its a boon for introverts like me. Talking to an AI coach is much easier than randos in the internet! Its gives a very detailed feedback. Love it",
    "Stimuler helped me get from IELTS band 5.5 to 8 in only a month. The subscription price is so reasonable compared to other AI apps in the market",
    "Stimuler helped me work on my pronounciation. It's almost 2 weeks and I have noticed a good improvement. Thanks team",
    "Amazing app especially for those who are from non- english environment and can't practice in day to day life ''Stimuler is the Solution '' Extremely love it ❤️"
  ];

  return (
    <section id="testimonials" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-300">
            Join thousands of learners who have transformed their English speaking skills
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                "{testimonial}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}