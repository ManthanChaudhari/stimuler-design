'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Mission() {
    const missionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Set initial state - always hidden until scroll trigger
        if (missionRef.current) {
            gsap.set(missionRef.current, { y: 60, opacity: 0 });

            gsap.to(missionRef.current, {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: missionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });
        }

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

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