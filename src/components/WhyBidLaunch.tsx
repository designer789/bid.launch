"use client";

import { useEffect, useRef, useState } from 'react';

export default function WhyBidLaunch() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const benefits = [
    {
      id: 'liquidity-security',
      title: 'Built-In Liquidity Security',
      description: '38% of tokens and raised funds go directly into DEX liquidity pools to ensure deep trading post-launch.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: 'ai-smarter',
      title: 'AI Makes It Smarter',
      description: 'AI-driven pricing curves, liquidity simulations, and investor insights make fundraising and investing smoother and safer.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      id: 'radical-transparency',
      title: 'Radical Transparency',
      description: 'All auctions are on-chain, failure = automatic refund, with open AI dashboards showing project metrics.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      id: 'inclusive-design',
      title: 'Inclusive by Design',
      description: 'Multi-chain, low-cost, and Web2-onboarding ready — ideal for both crypto-native and Web2 founders transitioning in.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-[#0C0E21]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-titillium text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Why bid.launch?
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
                        <div 
              key={benefit.id} 
              className={`p-[2px] rounded-2xl relative overflow-hidden group transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{
                transitionDelay: `${200 + index * 150}ms`
              }}
            >
              {/* Default Glow */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-100 transition-opacity duration-500 ease-in-out"
                style={{
                  background: 'radial-gradient(ellipse at top, rgb(107, 162, 255) 0%, transparent 70%)'
                }}
              ></div>
              
              {/* Hover Glow */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                style={{
                  background: 'radial-gradient(ellipse at top right, rgb(107, 162, 255) 0%, transparent 70%)'
                }}
              ></div>
                              <div
                  className="w-full h-full relative p-8 rounded-2xl border border-gray-600/30 transition-all duration-300"
                style={{
                  background: 'radial-gradient(306.043% 100% at 50% -1.2598e-06%, rgb(13, 15, 36) 45.3484%, rgb(10, 18, 86) 100%)'
                }}
              >
              
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#005EFF] to-[#303eb2] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="font-titillium text-xl md:text-2xl font-semibold text-white tracking-tight">
                  {benefit.title}
                </h3>
                <p className="font-lato text-base md:text-lg text-white/50 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#005EFF]/5 to-[#303eb2]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 