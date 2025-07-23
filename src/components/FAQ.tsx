"use client";

import { useState, useEffect, useRef } from 'react';

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);
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

  const toggleItem = (id: string) => {
    setOpenItem(prev => prev === id ? null : id);
  };

  const faqs = [
    {
      id: 'what-is-bidlaunch',
      question: 'What is bid.launch?',
      answer: 'bid.launch is an AI-powered decentralized launchpad that enables Web3 projects to fundraise via Dutch auctions while offering investors real-time analytics, refund protections, and liquidity backing.'
    },
    {
      id: 'dutch-auction-work',
      question: 'How does the Dutch auction work?',
      answer: 'Auctions start at a high price and drop over 48 hours. When the target of 38% funding is reached, the smart contract injects liquidity into DEXes. If the threshold isn&apos;t met, all funds are refunded automatically.'
    },
    {
      id: 'bid-token-use',
      question: 'What can $BID be used for?',
      answer: '$BID can be used to participate in auctions, unlock AI analysis tools, vote in governance, and earn rewards through staking.'
    },
    {
      id: 'ai-support',
      question: 'How does AI support project and investor success?',
      answer: 'AI suggests optimal fundraising strategies, detects bidding manipulation, simulates liquidity scenarios, and even verifies project milestones for token unlocks.'
    },
    {
      id: 'cross-chain',
      question: 'Is bid.launch cross-chain?',
      answer: 'Yes. It supports Ethereum, Solana, NEAR, Polygon, and more — ensuring flexibility and reach for both project creators and investors.'
    },
    {
      id: 'auction-fails',
      question: 'What happens if the auction fails?',
      answer: 'If the minimum 38% target isn&apos;t met in 48 hours, all funds are automatically refunded, and unsold tokens are returned to the project.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="faq" 
      className="py-20 bg-[#0C0E21]"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-titillium text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            FAQ
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openItem === faq.id;
            
            return (
              <div
                key={faq.id}
                className={`group relative rounded-2xl border transition-all duration-500 ${
                  isOpen 
                    ? 'border-[#005EFF]/50 shadow-lg shadow-[#005EFF]/10' 
                    : 'border-gray-600/30 hover:border-gray-500/40'
                } ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{
                  background: isOpen 
                    ? 'linear-gradient(135deg, rgba(13, 15, 36, 0.9) 0%, rgba(10, 18, 86, 0.8) 100%)'
                    : 'linear-gradient(135deg, rgba(13, 15, 36, 0.6) 0%, rgba(10, 18, 86, 0.4) 100%)',
                  transitionDelay: `${200 + index * 100}ms`,
                  transitionDuration: '1000ms'
                }}
              >
                {/* Subtle glow effect */}
                <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                  isOpen ? 'opacity-100' : 'opacity-0'
                }`} style={{
                  background: 'radial-gradient(circle at top left, rgba(107, 162, 255, 0.1) 0%, transparent 50%)'
                }}></div>
                
                {/* Question Header */}
                <button
                  onClick={() => toggleItem(faq.id)}
                  className={`relative w-full px-6 py-8 text-left flex items-center justify-between group-hover:bg-white/5 transition-all duration-300 ${
                    isOpen ? 'bg-white/5' : ''
                  }`}
                >
                  <h3 className="font-titillium text-lg md:text-xl font-semibold text-white pr-6 leading-tight">
                    {faq.question}
                  </h3>
                  
                  {/* Enhanced Icon */}
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <div className={`w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                        ? 'bg-[#005EFF] border-[#005EFF] rotate-45 scale-110' 
                        : 'group-hover:border-white/50 group-hover:bg-white/10'
                    }`}>
                      <svg 
                        className={`w-4 h-4 text-white transition-transform duration-300`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                {/* Answer Content */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-8">
                    <div className="border-t border-white/10 pt-6">
                      <p className="font-lato text-base md:text-lg text-white/85 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 