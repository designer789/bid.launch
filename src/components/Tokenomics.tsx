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

        {/* 关键修改处：
            1. 移除了 lg:grid-cols-2
            2. 添加了 max-w-2xl mx-auto 确保内容在中间且不会拉得太宽
        */}
        <div className={`max-w-2xl mx-auto transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
        style={{
          transitionDelay: '200ms'
        }}>
          {/* Token Info & Utility Column */}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                {/* 提示：这里我加了一个 md:grid-cols-2 让 Utility 在宽屏时可以并排显示，如果不喜欢可以改回 space-y-4 */}
                {utilities.map((utility, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-br from-[#005EFF] to-[#303eb2] rounded-full flex-shrink-0"></div>
                    <p className="font-lato text-lg text-white/80">{utility}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
