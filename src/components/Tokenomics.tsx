"use client";

import { useEffect, useRef, useState } from 'react';

export default function Tokenomics() {
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
  const utilities = [
    'Participate in all auctions',
    'Gain AI tool access', 
    'Governance voting',
    'Staking for yield and fee sharing',
    'Discounted participation fees'
  ];

  const allocations = [
    { category: 'Fair Launch', percentage: 60, color: 'from-[#005EFF] to-[#303eb2]' },
    { category: 'Liquidity & Auction Reserve', percentage: 20, color: 'from-[#303eb2] to-[#4c63d4]' },
    { category: 'Ecosystem & Rewards', percentage: 10, color: 'from-[#4c63d4] to-[#6b83e6]' },
    { category: 'Contributors & Team', percentage: 5, color: 'from-[#6b83e6] to-[#8aa3f8]' },
    { category: 'Marketing & Partnerships', percentage: 5, color: 'from-[#8aa3f8] to-[#a9c3ff]' }
  ];

  return (
    <section 
      ref={sectionRef}
      id="tokenomics" 
      className="py-20 bg-[#0C0E21]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-titillium text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Tokenomics
          </h2>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
        style={{
          transitionDelay: '200ms'
        }}>
          {/* Left Column - Token Info & Utility */}
          <div className="space-y-12">
            {/* Token Basic Info */}
            <div className={`p-8 rounded-2xl border border-gray-600/30 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`} 
            style={{
              background: 'radial-gradient(306.043% 100% at 50% -1.2598e-06%, rgb(13, 15, 36) 45.3484%, rgb(10, 18, 86) 100%)',
              transitionDelay: '300ms'
            }}>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-[#005EFF] to-[#303eb2] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="font-titillium text-2xl font-bold text-white">$BID</span>
                </div>
                <h3 className="font-titillium text-2xl md:text-3xl font-semibold text-white">
                  Token Name: $BID
                </h3>
                <p className="font-lato text-xl text-white/80">
                  Total Supply: <span className="font-semibold text-white">1,000,000,000 $BID</span>
                </p>
              </div>
            </div>

            {/* Utility Section */}
            <div className={`p-8 rounded-2xl border border-gray-600/30 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`} 
            style={{
              background: 'radial-gradient(306.043% 100% at 50% -1.2598e-06%, rgb(13, 15, 36) 45.3484%, rgb(10, 18, 86) 100%)',
              transitionDelay: '400ms'
            }}>
              <h3 className="font-titillium text-2xl font-semibold text-white mb-6">Utility</h3>
              <div className="space-y-4">
                {utilities.map((utility, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-br from-[#005EFF] to-[#303eb2] rounded-full flex-shrink-0"></div>
                    <p className="font-lato text-lg text-white/80">{utility}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Allocation */}
          <div className={`p-8 rounded-2xl border border-gray-600/30 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`} 
          style={{
            background: 'radial-gradient(306.043% 100% at 50% -1.2598e-06%, rgb(13, 15, 36) 45.3484%, rgb(10, 18, 86) 100%)',
            transitionDelay: '500ms'
          }}>
            <h3 className="font-titillium text-2xl font-semibold text-white mb-8">Allocation</h3>
            <div className="space-y-6">
              {allocations.map((allocation, index) => (
                <div key={index} className={`space-y-2 transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: `${600 + index * 100}ms`
                }}>
                  <div className="flex justify-between items-center">
                    <span className="font-lato text-lg text-white/80">{allocation.category}</span>
                    <span className="font-titillium text-xl font-semibold text-white">{allocation.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full bg-gradient-to-r ${allocation.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${allocation.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Verification */}
            <div className={`mt-8 pt-6 border-t border-gray-600/30 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              transitionDelay: '1100ms'
            }}>
              <div className="flex justify-between items-center">
                <span className="font-titillium text-lg font-semibold text-white">Total:</span>
                <span className="font-titillium text-xl font-bold text-white">100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 