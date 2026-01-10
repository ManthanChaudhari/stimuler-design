"use client"

import { useEffect, useState } from "react"

interface Star {
    id: number
    x: number
    y: number
    size: number
    opacity: number
    duration: number
    delay: number
}

export function LearningJourneyCard() {
    const [stars, setStars] = useState<Star[]>([])

    useEffect(() => {
        const generatedStars: Star[] = []
        for (let i = 0; i < 20; i++) { // Increased to 20 stars for better visibility
            generatedStars.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 4 + 3, // 3px to 7px (larger and more visible)
                opacity: Math.random() * 0.4 + 0.7, // 0.7 to 1.1 (higher opacity)
                duration: Math.random() * 6 + 8, // 8s to 14s (slower for better visibility)
                delay: Math.random() * 15, // 0 to 15s delay for staggered effect
            })
        }
        // Use setTimeout to avoid synchronous setState in effect
        setTimeout(() => setStars(generatedStars), 0)
    }, [])

    return (
        <section className="py-16 px-4 relative bg-[#0a0a0f]">
            {/* Animated Stars Background - Behind everything */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: '1000px' }}>
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="absolute text-white animate-star-forward"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            fontSize: `${star.size}px`,
                            opacity: star.opacity,
                            filter: `drop-shadow(0 0 8px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 12px rgba(255, 255, 255, 0.4))`,
                            animationDuration: `${star.duration}s`,
                            animationDelay: `${star.delay}s`,
                            transformStyle: 'preserve-3d',
                            zIndex: 1,
                        }}
                    >
                        ★
                    </div>
                ))}
            </div>

            <div className="relative max-w-6xl mx-auto mt-12 z-10">
                {/* Main Card with gradient background */}
                <div
                    className="relative rounded-2xl px-12 py-8 md:px-20 md:py-12 overflow-hidden"
                    style={{
                        background: `linear-gradient(
                            135deg,
                            #070c15 0%,
                            #0a111c 20%,
                            #0d1623 40%,
                            #101b2a 60%,
                            #132031 80%,
                            #162538 100%
                        )`,
                        height: '280px',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}
                >
                    {/* Rotating Cone-Shaped Light Beam */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 animate-move-ray" style={{ transformOrigin: '0% 0%' }}>
                            {/* Outer cone as shading radiating from center line */}
                            <div
                                className="absolute"
                                style={{
                                    width: '800px',
                                    height: '600px',
                                    background: `linear-gradient(
                                        to right,
                                        rgba(255, 255, 255, 0.4) 0%,
                                        rgba(255, 255, 255, 0.3) 20%,
                                        rgba(255, 255, 255, 0.15) 40%,
                                        rgba(255, 255, 255, 0.08) 60%,
                                        rgba(255, 255, 255, 0.03) 80%,
                                        transparent 100%
                                    ),
                                    radial-gradient(
                                        ellipse 100% 15% at 0% 50%,
                                        rgba(255, 255, 255, 0.2) 0%,
                                        transparent 100%
                                    )`,
                                    clipPath: 'polygon(0% 50%, 100% 25%, 100% 75%)',
                                    transformOrigin: '0% 50%',
                                    filter: 'blur(8px)',
                                    top: '-300px',
                                    left: '0px',
                                }}
                            />
                        </div>
                    </div>

                    {/* Subtle overlay for depth with light violet in middle */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: `radial-gradient(
                                ellipse 60% 40% at 50% 50%,
                                rgba(139, 92, 246, 0.15) 0%,
                                rgba(139, 92, 246, 0.08) 30%,
                                transparent 60%,
                                rgba(0, 0, 0, 0.1) 80%,
                                rgba(0, 0, 0, 0.2) 100%
                            )`
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-20 text-center flex flex-col justify-center h-full">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 leading-tight">
                            Let&apos;s Get your personalized fun learning journey started!
                        </h1>

                        <p className="text-gray-300 text-base md:text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
                            Why wait for a speaking partner when you have Sarah! It just takes 10minutes everyday to sound like a native
                        </p>

                        {/* Button */}
                        <button className="bg-white/15 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-white/25 transition-all duration-300 hover:scale-105 mx-auto">
                            Let&apos;s Begin
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}