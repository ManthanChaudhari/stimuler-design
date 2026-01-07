'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Mission({ shouldAnimate }: { shouldAnimate?: boolean }) {
    const missionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Set initial state - always hidden until animation starts
        if (missionRef.current) {
            gsap.set(missionRef.current, { y: 60, opacity: 0 });
        }
    }, []);

    useEffect(() => {
        if (shouldAnimate && missionRef.current) {
            console.log('Mission ref found, starting animation');
            gsap.to(missionRef.current, {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power3.out",
                delay: 0.2,
                onComplete: () => console.log('Mission animation complete')
            });
        }
    }, [shouldAnimate]);

    return (
        <section ref={missionRef} className="py-16 px-8">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-3xl text-gray-400 leading-tight">
                    For centuries, Speaking Fluent English has been a <span className="text-white font-semibold">hidden social currency</span>. For <span className="text-white font-semibold">non-native speakers, the solutions</span> to attain this (like private coaching) have been <span className="text-white font-semibold">highly inaccessible</span> to the masses. <span className="text-white font-semibold">With AI, we want to enable every single global citizen to have their personal speech coach</span> and use this social currency to move abroad or progress in their career & societal goals
                </p>
            </div>
        </section>
    );
}