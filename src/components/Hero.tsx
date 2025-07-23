"use client";

import { useEffect, useRef, useState } from 'react';
import { AuroraBackground } from './AuroraBackground';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featureBoxes = [
    {
      id: 'launchpad',
      title: 'Launchpad',
    },
    {
      id: 'ai-powered',
      title: 'AI-Powered',
    },
    {
      id: 'cross-chain',
      title: 'Cross-Chain',
    },
  ];

  return (
    <AuroraBackground 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className={`relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 lg:py-0 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Main Heading */}
        <h1 className={`font-titillium text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 sm:mb-6 leading-tight max-w-5xl mx-auto bg-gradient-to-b from-gray-300 via-gray-100 to-gray-400 bg-clip-text text-transparent transition-all duration-1000 ease-out delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          AI-Powered Bidding for Web3 Launches.
        </h1>

        {/* Subtitle */}
        <h2 className={`font-titillium text-lg sm:text-xl md:text-2xl font-medium text-white/90 mb-6 max-w-4xl mx-auto transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          bid.launch is an AI-driven launchpad reinventing Web3 fundraising.
        </h2>

        {/* Description */}
        <div className={`max-w-3xl lg:max-w-4xl mx-auto mb-8 sm:mb-16 transition-all duration-1000 ease-out delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="font-lato text-sm sm:text-base md:text-lg text-white/50 leading-relaxed px-4 sm:px-0">
            With dynamic Dutch auctions and built-in liquidity injection, we help any project — DeFi, NFT, GameFi or SocialFi — raise capital transparently, fairly, and efficiently. Powered by AI, backed by code, open to all.
          </p>
        </div>

        {/* Feature Image Boxes */}
        <div className={`flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 justify-center items-center mb-8 sm:mb-12 max-w-6xl mx-auto px-4 md:px-0 transition-all duration-1000 ease-out  ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {featureBoxes.map((box) => (
            <div 
              key={box.id}
              className={`p-[2px] bg-gradient-to-b from-[#005EFF] to-transparent rounded-2xl w-full sm:max-w-sm md:w-auto md:flex-1 lg:flex-none transition-all duration-300 ease-out group relative z-20 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{
                
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                card.style.boxShadow = `0 25px 50px rgba(0, 94, 255, 0.2)`;
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
                card.style.boxShadow = 'none';
              }}
            >
              
                                            <div 
                className="group relative rounded-2xl overflow-hidden bg-[#1a237e] p-4 sm:p-6 md:p-8 w-full flex flex-col justify-center items-center transition-all duration-300 ease-out" 
              >
                  {/* Inner glow effect */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: '#0c0e21',
                      boxShadow: 'inset 0px 8.01365px 48.0819px -14.0239px #005EFF'
                    }}
                  ></div>
                  {/* Card background SVG */}
                  <div className="absolute inset-0 opacity-60 z-10">
                    <svg width="422" height="539" viewBox="0 0 422 539" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <g style={{mixBlendMode: 'screen'}} filter="url(#filter0_f_4_3456)">
                        <path d="M158.691 358.506C314.312 -81.6085 649.316 -290.57 733.347 -348.553L-337.88 -16.9311L-180.317 923.938C50.094 870.968 11.6324 774.404 158.691 358.506Z" fill="url(#paint0_radial_4_3456)" fillOpacity="0.6"/>
                      </g>
                      <defs>
                        <filter id="filter0_f_4_3456" x="-486.082" y="-496.755" width="1367.63" height="1568.89" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="74.1009" result="effect1_foregroundBlur_4_3456"/>
                        </filter>
                        <radialGradient id="paint0_radial_4_3456" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(449.534 256.434) rotate(-150.409) scale(615.014 615.032)">
                          <stop offset="0.409332" stopColor="#005EFF"/>
                          <stop offset="1" stopOpacity="0"/>
                          <stop offset="1" stopColor="#2D2E32" stopOpacity="0"/>
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0c0e21] z-20"></div>
                <div className="relative z-30 flex flex-col items-center p-4 sm:p-6 md:p-8">
                  {box.id === 'launchpad' && (
                    <div className="w-full h-full mb-8">
                      <img 
                        src="/launchpad.svg" 
                        alt="Launchpad" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  {box.id === 'ai-powered' && (
                    <div className="w-full h-full mb-8">
                      <img 
                        src="/aipower.svg" 
                        alt="AI Powered" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  {box.id === 'cross-chain' && (
                    <div className="w-full h-full mb-8">
                      <img 
                        src="/chain.svg" 
                        alt="Cross Chain" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <h3 className="font-titillium text-base sm:text-lg md:text-2xl font-semibold text-center uppercase bg-gradient-to-b from-gray-300 via-gray-100 to-gray-400 bg-clip-text text-transparent">{box.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out delay-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/40 rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1.5 sm:mt-2"></div>
        </div>
      </div>
    </AuroraBackground>
  );
} 