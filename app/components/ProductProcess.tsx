"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const stepVideos = {
    1: "https://framerusercontent.com/assets/H2XzzQoba15g73dkfQxRZTmarc.mp4",
    2: "https://framerusercontent.com/assets/eQTLMprUrl5TH3KYRJn3JKJ5aAc.mp4",
    3: "https://framerusercontent.com/assets/hc9oomhbb0z7tY9MwwMWn0tVdHw.mp4", // Updated step 3 video URL
}

export default function ProductProcess() {
    const progressLine1Ref = useRef<HTMLDivElement>(null)
    const progressLine2Ref = useRef<HTMLDivElement>(null)
    const progressLine3Ref = useRef<HTMLDivElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1)

    useEffect(() => {
        const video = videoRef.current
        if (video) {
            video.src = stepVideos[activeStep]
            video.load()
            video.play()
        }
    }, [activeStep])

    useEffect(() => {
        const progressLine1 = progressLine1Ref.current
        const progressLine2 = progressLine2Ref.current
        const progressLine3 = progressLine3Ref.current
        const video = videoRef.current

        if (!progressLine1 || !progressLine2 || !progressLine3) return

        const resetAllProgressBars = () => {
            progressLine1.style.transition = "none"
            progressLine1.style.width = "0%"
            progressLine2.style.transition = "none"
            progressLine2.style.width = "0%"
            progressLine3.style.transition = "none"
            progressLine3.style.width = "0%"
        }

        const animateProgress1 = () => {
            resetAllProgressBars()
            setActiveStep(1)

            void progressLine1.offsetWidth

            setTimeout(() => {
                progressLine1.style.transition = "width 8s linear"
                progressLine1.style.width = "100%"
            }, 50)

            setTimeout(() => {
                animateProgress2()
            }, 8100)
        }

        const animateProgress2 = () => {
            setActiveStep(2)

            void progressLine2.offsetWidth

            setTimeout(() => {
                progressLine2.style.transition = "width 8s linear"
                progressLine2.style.width = "100%"
            }, 50)

            setTimeout(() => {
                animateProgress3()
            }, 8100)
        }

        const animateProgress3 = () => {
            setActiveStep(3)

            void progressLine3.offsetWidth

            setTimeout(() => {
                progressLine3.style.transition = "width 8s linear"
                progressLine3.style.width = "100%"
            }, 50)

            setTimeout(() => {
                animateProgress1()
            }, 8100)
        }

        animateProgress1()
    }, [])

    return (
        <section id="product-process" className="py-16 overflow-hidden">
            <div className="max-w-full mx-auto px-4 text-center">
                <div className="mb-16">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="flex-1 h-px bg-linear-to-r from-transparent to-purple-400/50 max-w-32"></div>
                        <p className="text-purple-500 text-lg font-medium tracking-wider uppercase">OUR PRODUCT PHILOSOPHY</p>
                        <div className="flex-1 h-px bg-linear-to-l from-transparent to-purple-400/50 max-w-32"></div>
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-semibold text-white mb-2 leading-tight">3 step improvement</h2>
                    <h2 className="text-5xl lg:text-6xl font-semibold text-gray-400 leading-tight">process!</h2>
                </div>

                <div className="w-full flex justify-between items-start gap-12 bg-black p-8 rounded-xl">
                    <video
                        ref={videoRef}
                        className="w-1/2 rounded-xl shadow-2xl h-96 object-contain"
                        src={stepVideos[activeStep]}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />

                    <div className="w-1/2 space-y-12 text-left">
                        {/* Step 01 */}
                        <div>
                            <div className="flex items-start gap-4">
                                <span className="text-gray-400 text-lg font-bold">01.</span>
                                <h3
                                    className={`text-lg font-bold transition-colors duration-300 ${activeStep === 1 ? "text-white" : "text-gray-500"}`}
                                >
                                    We help you speak
                                </h3>
                            </div>
                            {/* Progress bar and description only visible when active */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ${activeStep === 1 ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                            >
                                <div className="w-160 h-0.5 bg-gray-800 relative overflow-hidden mb-4">
                                    <div
                                        ref={progressLine1Ref}
                                        className="h-full bg-violet-500 absolute top-0 left-0"
                                        style={{ width: "0%" }}
                                    ></div>
                                </div>
                                <p className="text-gray-300 text-base leading-relaxed">
                                    Whether that's a direct conversation with our AI Coach Sarah on 100+ topics, or scenario based
                                    practice or just random challenges, we make sure that you speak more English on Stimuler than you have
                                    ever done before
                                </p>
                            </div>
                        </div>

                        {/* Step 02 */}
                        <div>
                            <div className="flex items-start gap-4">
                                <span className="text-gray-400 text-lg font-bold">02.</span>
                                <h3
                                    className={`text-lg font-bold transition-colors duration-300 ${activeStep === 2 ? "text-white" : "text-gray-500"}`}
                                >
                                    Prompt Feedback of your speech
                                </h3>
                            </div>
                            {/* Progress bar and description only visible when active */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ${activeStep === 2 ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                            >
                                <div className="w-160 h-0.5 bg-gray-800 relative overflow-hidden mb-4">
                                    <div
                                        ref={progressLine2Ref}
                                        className="h-full bg-violet-500 absolute top-0 left-0"
                                        style={{ width: "0%" }}
                                    ></div>
                                </div>
                                <p className="text-gray-300 text-base leading-relaxed">
                                    Receive instant feedback on your pronunciation, tone, and fluency from our AI Coach Sarah.
                                </p>
                            </div>
                        </div>

                        {/* Step 03 */}
                        <div>
                            <div className="flex items-start gap-4">
                                <span className="text-gray-400 text-lg font-bold">03.</span>
                                <h3
                                    className={`text-lg font-bold transition-colors duration-300 ${activeStep === 3 ? "text-white" : "text-gray-500"}`}
                                >
                                    Engaging Practice to improve mistakes
                                </h3>
                            </div>
                            {/* Progress bar and description only visible when active */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ${activeStep === 3 ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                            >
                                <div className="w-160 h-0.5 bg-gray-800 relative overflow-hidden mb-4">
                                    <div
                                        ref={progressLine3Ref}
                                        className="h-full bg-violet-500 absolute top-0 left-0"
                                        style={{ width: "0%" }}
                                    ></div>
                                </div>
                                <p className="text-gray-300 text-base leading-relaxed">
                                    Engage in interactive practice sessions that target your specific areas of improvement, making your
                                    learning experience more personalized and effective.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
