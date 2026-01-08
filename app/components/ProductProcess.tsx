'use client';

import { useEffect, useRef } from 'react';

export default function ProductProcess() {
    const progressLineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const progressLine = progressLineRef.current;
        if (!progressLine) return;

        // Animate the line from left to right continuously
        const animateProgress = () => {
            progressLine.style.width = '0%';
            progressLine.style.transition = 'width 3s linear';

            // Start animation
            setTimeout(() => {
                progressLine.style.width = '100%';
            }, 100);

            // Reset and repeat
            setTimeout(() => {
                animateProgress();
            }, 3500);
        };

        animateProgress();
    }, []);
    return (
        <section id="product-process" className="py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 text-center">


                {/* Main Heading */}
                <div className="mb-16">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="flex-1 h-px bg-linear-to-r from-transparent to-purple-400/50 max-w-32"></div>
                        <p className="text-purple-500 text-lg font-medium tracking-wider uppercase">
                            OUR PRODUCT PHILOSOPHY
                        </p>
                        <div className="flex-1 h-px bg-linear-to-l from-transparent to-purple-400/50 max-w-32"></div>
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-semibold text-white mb-2 leading-tight">
                        3 step improvement
                    </h2>
                    <h2 className="text-5xl lg:text-6xl font-semibold text-gray-400 leading-tight">
                        process!
                    </h2>
                </div>

                {/* Video Section */}
                <div className="w-full flex justify-between items-start gap-12 bg-black p-8 rounded-xl">
                    <video
                        className="w-1/2 rounded-xl shadow-2xl h-80 object-contain"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="https://framerusercontent.com/assets/H2XzzQoba15g73dkfQxRZTmarc.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Right side - Process steps */}
                    <div className="w-1/2 space-y-12 text-left">
                        {/* Step 1 */}
                        <div>
                            <div className="flex items-start gap-4 mb-4">
                                <span className="text-gray-400 text-2xl font-bold">01.</span>
                                <h3 className="text-white text-2xl font-bold">We help you speak</h3>
                            </div>
                            <div className="w-full h-px bg-gray-600 mb-4 relative overflow-hidden">
                                <div
                                    ref={progressLineRef}
                                    className="h-full bg-purple-400 absolute top-0 left-0"
                                    style={{ width: '0%' }}
                                ></div>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Whether that's a direct conversation with our AI Coach Sarah on 100+ topics, or scenario based practice or just random challenges, we make sure that you speak more English on Stimuler than you have ever done before
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div>
                            <div className="flex items-start gap-4 mb-4">
                                <span className="text-gray-400 text-2xl font-bold">02.</span>
                                <h3 className="text-gray-400 text-2xl font-bold">Prompt Feedback of your speech</h3>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div>
                            <div className="flex items-start gap-4 mb-4">
                                <span className="text-gray-400 text-2xl font-bold">03.</span>
                                <h3 className="text-gray-400 text-2xl font-bold">Engaging Practice to improve mistakes</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}