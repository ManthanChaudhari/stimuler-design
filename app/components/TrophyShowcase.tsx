"use client"

import Image from 'next/image'

export default function TrophyShowcase() {
  const generateDots = () => {
    const dots: { angle: number; radius: number; size: number; color: string; animationClass: string }[] = []

    // Two outer rows of dots forming semi-circle
    const rows = [
      { radius: 240, count: 11, size: 18, animationClass: 'animate-rotate-clockwise' },
      { radius: 160, count: 13, size: 12, animationClass: 'animate-rotate-clockwise' }
    ]

    rows.forEach((row) => {
      for (let i = 0; i < row.count; i++) {
        const angle = 180 * (i / (row.count - 1)) // Semi-circle from 0 to 180 degrees

        // Determine color based on position
        const progress = i / (row.count - 1)
        let color = "#38bdf8" // cyan for edges

        if (progress > 0.3 && progress < 0.7) {
          color = "#7c3aed" // purple for center
        }

        dots.push({
          angle,
          radius: row.radius,
          size: row.size,
          color,
          animationClass: row.animationClass
        })
      }
    })

    return dots
  }

  const dots = generateDots()

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0a0a1f]">
      {/* Purple gradient background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(88, 28, 135, 0.5) 0%, rgba(67, 56, 202, 0.3) 30%, transparent 70%)"
        }}
      />

      {/* Subtle arc lines */}
      <svg
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
        width="1000"
        height="600"
        viewBox="0 0 1000 600"
      >
        <path d="M 100 500 Q 500 100 900 500" fill="none" stroke="white" strokeWidth="1" />
        <path d="M 150 500 Q 500 150 850 500" fill="none" stroke="white" strokeWidth="0.5" />
      </svg>

      {/* Main content container */}
      <div className="relative h-[600px] w-[600px]">
        {/* Rotating dots pattern */}
        <div className="absolute inset-0">
          {dots.map((dot, index) => (
            <div
              key={index}
              className={`absolute ${dot.animationClass}`}
              style={{
                left: '50%',
                top: '50%',
                transformOrigin: '0 0',
                transform: `translate(-50%, -50%) rotate(${dot.angle}deg)`,
              }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  width: `${dot.size}px`,
                  height: `${dot.size}px`,
                  backgroundColor: dot.color,
                  boxShadow: `0 0 ${dot.size}px ${dot.color}40`,
                  left: `${dot.radius}px`,
                  top: '0px',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </div>
          ))}
        </div>

        {/* Trophy */}
        <div className="absolute left-1/2 bottom-55mot  -translate-x-1/2">
          {/* Glow effect */}
          <div
            className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(124, 58, 237, 0.6) 0%, rgba(124, 58, 237, 0.3) 40%, transparent 70%)"
            }}
          />

          {/* Trophy image */}
          <Image
            src="https://framerusercontent.com/images/9byiRjxzLkOX7o6o4cKXcZUSrKs.png?scale-down-to=512"
            alt="Google Play Best AI App Trophy"
            width={300}
            height={300}
            className="relative z-10 object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Trophy text below - outside the main container */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center z-20">
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          We won the Best AI App
          <br />
          2023 by Google Play!
        </h2>
      </div>
    </div>
  )
}