"use client"

import Image from "next/image"

const testimonialsRow1 = [
  {
    id: 1,
    text: "Stimuler helped me get from IELTS band 5.5 to 8 in only a month. The subscription price is so reasonable compared to other AI apps in the market",
    name: "Regina",
    handle: "@remo!",
    avatar: "https://framerusercontent.com/images/0OBj7uN1ncKrMVzB0GprNt5uI.jpg?scale-down-to=1024&width=3744&height=5616",
  },
  {
    id: 2,
    text: "Stimuler helped me work on my pronounciation. It's almost 2 weeks and I have noticed a good improvement. Thanks team",
    name: "Pawan Dubey",
    handle: "@Pawa090",
    avatar: "https://framerusercontent.com/images/SCLaExdmiXrn32AxMUnFpE5KBE.jpg?scale-down-to=1024&width=4160&height=6240",
  },
  {
    id: 3,
    text: 'Amazing app especially for those who are from non-english environment and can\'t practice in day to day life "Stimuler is the Solution" Extremely love it ❤️',
    name: "Lara",
    handle: "@lara17",
    avatar: "https://framerusercontent.com/images/5AR5WjJxyvJ43labZsGKHxyRNaw.jpg?scale-down-to=512&width=5184&height=3456",
  },
  {
    id: 4,
    text: "Its simply brilliant. Its a boon for introverts like me. Talking to an AI coach is much easier than randos in the internet! Its gives a very detailed feedback. Love it",
    name: "Daniël",
    handle: "@dvdwinden",
    avatar: "https://framerusercontent.com/images/SiHj8IXtMQ0A70pTrI5LN5msw.jpg?scale-down-to=512&width=3648&height=3648",
  },
]

const testimonialsRow2 = [
  {
    id: 6,
    text: "This app is unfamiliar I have never seen such a great essential app, he help me build my vocabulary fix my grammar mistakes",
    name: "Saudon",
    handle: "@donumanis",
    avatar: "https://framerusercontent.com/images/kMSY7wYTHuEJfuoza76gZMu4NW4.jpg?scale-down-to=1024&width=3569&height=5354",
  },
  {
    id: 7,
    text: "I love this app, I have been working on my English skills in addition this app helps me a lot to improve my speech and reading.",
    name: "JohnD",
    handle: "@JohnD456",
    avatar: "https://framerusercontent.com/images/vetbW6rrDxZHwo5adOYVQkz3gU.jpg?scale-down-to=1024&width=3315&height=4144",
  },
  {
    id: 8,
    text: "Extremely helpful for improving +2 band in speaking modules. Suits perfect for my speking demands. Gives personalized feedback to your speech",
    name: "Ragav",
    handle: "@danayanragav",
    avatar: "https://framerusercontent.com/images/INsEbc3LWu01dkxYYAMUvrMctqQ.jpg?scale-down-to=1024&width=1856&height=2784",
  },
  {
    id: 9,
    text: "As someone preparing for the IELTS, this is a great app that has helped me improve significantly in just a few weeks.",
    name: "Sophie",
    handle: "@sophie_study",
    avatar: "data:image/jpeg;base64,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"
 },
  {
    id: 10,
    text: "Finally, I've found the best help to correct me from mistakes in grammar, pronunciation, and everything, which has greatly improved my confidence in English.",
    name: "Manoj kumar",
    handle: "@Indianmanoj",
    avatar: "https://framerusercontent.com/images/aqIiXq8baIrzPlkQ8AmsRwPsv6A.jpg?scale-down-to=1024&width=3624&height=5436",
  },
]

const headerAvatars = [
  "https://framerusercontent.com/images/8IVQr1NfJbWuoaFIlf3H3YzT8.png?scale-down-to=512&width=567&height=567",
  "https://framerusercontent.com/images/vXFUCfqsVmt2jJzFQzqoz1NG3JM.png?scale-down-to=512&width=1024&height=1024",
  "https://framerusercontent.com/images/KskzNB7vcdvM2gglrVNEdeDw.png?scale-down-to=512&width=1024&height=1024",
]

function TestimonialCard({ testimonial }) {
  return (
    <div className="shrink-0 w-[400px] bg-[#12121c] border border-[#2a2a3c] hover:border-purple-500 rounded-xl p-6 mx-2 transition-colors duration-300">
      <p className="text-gray-300 text-sm leading-relaxed mb-8">{testimonial.text}</p>
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
        </div>
        <div>
          <p className="text-white font-medium text-sm">{testimonial.name}</p>
          <p className="text-gray-500 text-xs">{testimonial.handle}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0f] py-16 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          {/* TESTIMONIALS label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-purple-500" />
            <span className="text-purple-500 text-lg font-medium tracking-widest uppercase">Testimonials</span>
            <div className="h-px w-16 bg-linear-to-l from-transparent to-purple-500" />
          </div>

          {/* Avatars row with half earth background */}
          <div className="flex justify-center mb-8 relative">
            {/* Half Earth Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[100px] z-0">
              <svg 
                className="w-full h-full animate-spin" 
                viewBox="0 0 200 100"
                style={{ animationDuration: '30s' }}
              >
                <defs>
                  <pattern id="earthDots" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="0.8" fill="rgba(255, 255, 255, 0.3)" />
                  </pattern>
                </defs>
                <path 
                  d="M 0 100 A 100 100 0 0 1 200 100 Z" 
                  fill="url(#earthDots)" 
                  opacity="0.5"
                />
              </svg>
            </div>
            
            <div className="flex -space-x-3 relative z-10">
              {headerAvatars.map((avatar, index) => (
                <div key={index} className="relative w-16 h-16 rounded-full border-2 border-[#0a0a0f] overflow-hidden">
                  <Image src={avatar || "/placeholder.svg"} alt={`User ${index + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white mb-12">
            What Our Users Say about us!
          </h2>
        </div>
      </div>

      <div className="space-y-6">
        {/* Row 1 - scrolling right to left */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-left">
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonialsRow1, ...testimonialsRow1].map((testimonial, index) => (
              <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Row 2 - scrolling left to right */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-right">
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonialsRow2, ...testimonialsRow2].map((testimonial, index) => (
              <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
