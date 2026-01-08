"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ProductProcess() {
  const badgeRef = useRef<HTMLDivElement>(null)
  const heading1Ref = useRef<HTMLHeadingElement>(null)
  const heading2Ref = useRef<HTMLHeadingElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const phoneContainerRef = useRef<HTMLDivElement>(null)

  const slide1Ref = useRef<HTMLDivElement>(null)
  const slide2Ref = useRef<HTMLDivElement>(null)
  const slide3Ref = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Set initial states for header
    if (badgeRef.current) gsap.set(badgeRef.current, { y: 30, opacity: 0 })
    if (heading1Ref.current) gsap.set(heading1Ref.current, { y: 50, opacity: 0 })
    if (heading2Ref.current) gsap.set(heading2Ref.current, { y: 50, opacity: 0 })
    if (bgRef.current) gsap.set(bgRef.current, { scale: 0.8, opacity: 0 })

    if (slide1Ref.current) gsap.set(slide1Ref.current, { x: "100vw", opacity: 0 })
    if (slide2Ref.current) gsap.set(slide2Ref.current, { x: "100vw", opacity: 0 })
    if (slide3Ref.current) gsap.set(slide3Ref.current, { x: "100vw", opacity: 0 })

    // Badge and headings animation
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonials",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })

    if (badgeRef.current) {
      headerTl.to(badgeRef.current, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" })
    }
    if (heading1Ref.current) {
      headerTl.to(heading1Ref.current, { y: 0, opacity: 1, duration: 1.0, ease: "power3.out" }, "-=0.4")
    }
    if (heading2Ref.current) {
      headerTl.to(heading2Ref.current, { y: 0, opacity: 1, duration: 1.0, ease: "power3.out" }, "-=0.6")
    }

    // Background gradient animation
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: { trigger: "#testimonials", start: "top 60%", toggleActions: "play none none none" },
      })
      gsap.to(bgRef.current, { scale: 1.1, duration: 3.0, ease: "power2.inOut", repeat: -1, yoyo: true })
    }

    const phoneTl = gsap.timeline({
      scrollTrigger: {
        trigger: phoneContainerRef.current,
        start: "top top", // start when section hits top of viewport
        end: "+=300%",
        pin: true,
        scrub: 1,
      },
    })

    // Phone 1: slide in from right, stay, then slide out to left
    phoneTl
      .to(slide1Ref.current, { x: 0, opacity: 1, duration: 1, ease: "power2.out" })
      .to(slide1Ref.current, { duration: 0.5 }) // pause in center
      .to(slide1Ref.current, { x: "-100vw", opacity: 0, duration: 1, ease: "power2.in" })

    // Phone 2: slide in from right, stay, then slide out to left
    phoneTl
      .to(slide2Ref.current, { x: 0, opacity: 1, duration: 1, ease: "power2.out" })
      .to(slide2Ref.current, { duration: 0.5 }) // pause in center
      .to(slide2Ref.current, { x: "-100vw", opacity: 0, duration: 1, ease: "power2.in" })

    // Phone 3: slide in from right and stay
    phoneTl.to(slide3Ref.current, { x: 0, opacity: 1, duration: 1, ease: "power2.out" })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id="testimonials" ref={sectionRef} className="overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 text-center">
        {/* AI Powered Badge with lines */}
        <div ref={badgeRef} className="mb-4 flex items-center justify-center gap-0">
          <div className="flex-1 h-px bg-linear-to-r from-transparent to-purple-400/50 max-w-32"></div>
          <span className="inline-block px-6 py-2 text-xl font-medium text-purple-700">AI POWERED</span>
          <div className="flex-1 h-px bg-linear-to-l from-transparent to-purple-400/50 max-w-32"></div>
        </div>

        {/* Main Heading */}
        <h2 ref={heading1Ref} className="text-5xl lg:text-6xl font-semibold text-white mb-2 leading-tight">
          English Practice enables you to speak
        </h2>
        <h2 ref={heading2Ref} className="text-5xl lg:text-6xl font-semibold text-gray-400 leading-tight">
          more than ever
        </h2>

        <div ref={phoneContainerRef} className="relative h-screen flex items-center overflow-visible">
          {/* Background gradient - positioned on right side behind phone */}
          <div
            ref={bgRef}
            className="absolute top-1/2 right-[15%] transform -translate-y-1/2 w-[500px] h-[500px] bg-linear-to-br from-purple-600/60 via-fuchsia-600/40 to-blue-900/50 rounded-full blur-3xl -z-10 pointer-events-none"
          ></div>

          {/* Phone 1 Slide */}
          <div ref={slide1Ref} className="absolute inset-0 flex items-center">
            <div className="w-full flex items-center justify-center gap-8 px-8">
              <div className="text-left max-w-md">
                <h3 className="text-4xl font-bold text-white mb-6">Impromptu speaking</h3>
                <div className="text-gray-300 space-y-3">
                  <p className="text-xl">Get a topic, speak for 60 seconds, get live feedback</p>
                  <p className="text-xl">That is all! Unlimited topics to practice</p>
                  <p className="text-xl">Speak - Get Feedback - Repeat</p>
                </div>
              </div>
              <img
                src="https://framerusercontent.com/images/nZFLe0HyiJwkGdJwuGZsCzsOWJE.png?scale-down-to=2048"
                alt="Phone mockup 1"
                className="h-[90vh] w-auto object-contain"
              />
            </div>
          </div>

          {/* Phone 2 Slide */}
          <div ref={slide2Ref} className="absolute inset-0 flex items-center">
            <div className="w-full flex items-center justify-center gap-8 px-8">
              <div className="text-left max-w-md">
                <h3 className="text-4xl font-bold text-white mb-6">Chat on themes with Sarah!</h3>
                <div className="text-gray-300 space-y-3">
                  <p className="text-xl">
                    From family to hobbies to technology, practice across 20+ exciting themes and get instant feedback
                  </p>
                  <p className="text-xl">Sample answers and improvement tips also included!</p>
                </div>
              </div>
              <img
                src="https://framerusercontent.com/images/SsejWIDozyuTodLczfNWa2Ri8o.png?width=752&height=1632"
                alt="Phone mockup 2"
                className="h-[90vh] w-auto object-contain"
              />
            </div>
          </div>

          {/* Phone 3 Slide */}
          <div ref={slide3Ref} className="absolute inset-0 flex items-center">
            <div className="w-full flex items-center justify-center gap-8 px-8">
              <div className="text-left max-w-md">
                <h3 className="text-4xl font-bold text-white mb-6">Practice anywhere</h3>
                <div className="text-gray-300 space-y-3">
                  <p className="text-xl">Practice on your phone, anytime, anywhere</p>
                  <p className="text-xl">No scheduling, no waiting</p>
                  <p className="text-xl">Your personal English coach</p>
                </div>
              </div>
              <img
                src="https://framerusercontent.com/images/U1c3Dpil94gETX19iD1A2wziik.png?width=752&height=1632"
                alt="Phone mockup 3"
                className="h-[90vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
