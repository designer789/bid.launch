"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

// Chatbot UI Component
function ChatbotUI() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-4">
      <div className="flex flex-col h-full">
        {/* Chat Header */}
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-blue-500/20">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm">AI Assistant</h4>
            <p className="text-blue-300 text-xs">Online • 24/7 Support</p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 space-y-3 mb-4 overflow-hidden">
          {/* AI Message */}
          <div className="flex gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0"></div>
            <div className="bg-blue-600/30 rounded-lg p-3 max-w-[80%]">
              <p className="text-white text-sm">Hello! I&apos;m here to help optimize your tokenomics and fundraising strategy. What would you like to know?</p>
            </div>
          </div>

          {/* User Message */}
          <div className="flex gap-2 justify-end">
            <div className="bg-purple-600/30 rounded-lg p-3 max-w-[80%]">
              <p className="text-white text-sm">How can I improve my token distribution?</p>
            </div>
            <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0"></div>
          </div>

          {/* AI Response */}
          <div className="flex gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0"></div>
            <div className="bg-blue-600/30 rounded-lg p-3 max-w-[80%]">
              <p className="text-white text-sm">Based on your project metrics, I recommend allocating 40% for public sale, 20% for team, 15% for marketing...</p>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="flex gap-2">
          <div className="flex-1 bg-gray-800/50 rounded-lg px-3 py-2 border border-gray-600/30">
            <input 
              type="text" 
              placeholder="Ask me anything..." 
              className="w-full bg-transparent text-white text-sm placeholder-gray-400 outline-none"
              disabled
            />
          </div>
          <button className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// Dutch Auction UI Component
function DutchAuctionUI() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-2xl p-4">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-blue-500/20">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
            </svg>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm">Dutch Auction</h4>
            <p className="text-blue-300 text-xs">Live • Descending Price</p>
          </div>
        </div>

        {/* Auction Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-blue-600/20 rounded-lg p-3">
            <p className="text-blue-300 text-xs">Current Price</p>
            <p className="text-white font-bold text-lg">$0.85</p>
          </div>
          <div className="bg-indigo-600/20 rounded-lg p-3">
            <p className="text-indigo-300 text-xs">Raised</p>
            <p className="text-white font-bold text-lg">$2.4M</p>
          </div>
        </div>

        {/* Price Chart */}
        <div className="flex-1 mb-4">
          <div className="bg-gray-800/30 rounded-lg p-3 h-full">
            <div className="flex items-end justify-between h-full space-x-1">
              <div className="w-3 bg-blue-500 rounded-t h-16"></div>
              <div className="w-3 bg-blue-500 rounded-t h-20"></div>
              <div className="w-3 bg-blue-500 rounded-t h-24"></div>
              <div className="w-3 bg-blue-500 rounded-t h-28"></div>
              <div className="w-3 bg-blue-500 rounded-t h-32"></div>
              <div className="w-3 bg-blue-500 rounded-t h-20"></div>
              <div className="w-3 bg-blue-500 rounded-t h-16"></div>
              <div className="w-3 bg-blue-500 rounded-t h-12"></div>
            </div>
            <p className="text-center text-blue-300 text-xs mt-2">Price Decline</p>
          </div>
        </div>

        {/* Liquidity Info */}
        <div className="bg-indigo-600/20 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
            <p className="text-white font-semibold text-sm">Auto Liquidity: 38%</p>
          </div>
          <p className="text-indigo-300 text-xs">Funds automatically injected into DEX pools</p>
        </div>
      </div>
    </div>
  );
}

// Cross-Chain UI Component
function CrossChainUI() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-2xl p-4">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-blue-500/20">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm">Cross-Chain Bridge</h4>
            <p className="text-blue-300 text-xs">Multi-Chain • Seamless</p>
          </div>
        </div>

        {/* Chain Icons */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-blue-600/20 rounded-lg p-3 flex flex-col items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full mb-2"></div>
            <p className="text-white text-xs font-medium">Ethereum</p>
          </div>
          <div className="bg-indigo-600/20 rounded-lg p-3 flex flex-col items-center">
            <div className="w-8 h-8 bg-indigo-500 rounded-full mb-2"></div>
            <p className="text-white text-xs font-medium">Solana</p>
          </div>
          <div className="bg-blue-600/20 rounded-lg p-3 flex flex-col items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full mb-2"></div>
            <p className="text-white text-xs font-medium">Polygon</p>
          </div>
        </div>

        {/* Bridge Animation */}
        <div className="flex-1 mb-4 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              <div className="w-6 h-6 bg-indigo-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="h-full bg-gray-800/30 rounded-lg border-2 border-dashed border-blue-500/30"></div>
        </div>

        {/* Status */}
        <div className="bg-indigo-600/20 rounded-lg p-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <p className="text-white text-sm">All chains connected</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// AI Governance UI Component
function AIGovernanceUI() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-2xl p-4">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-blue-500/20">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm">AI Governance</h4>
            <p className="text-blue-300 text-xs">Smart • Automated</p>
          </div>
        </div>

        {/* Progress Tracking */}
        <div className="space-y-3 mb-4">
          <div className="bg-blue-600/20 rounded-lg p-3">
            <div className="flex justify-between items-center mb-2">
              <p className="text-white text-sm font-medium">GitHub Activity</p>
              <p className="text-blue-300 text-xs">85%</p>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
            </div>
          </div>
          
          <div className="bg-indigo-600/20 rounded-lg p-3">
            <div className="flex justify-between items-center mb-2">
              <p className="text-white text-sm font-medium">Milestone Progress</p>
              <p className="text-indigo-300 text-xs">3/5</p>
            </div>
            <div className="flex gap-1">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
              <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* DAO Vote */}
        <div className="flex-1 mb-4">
          <div className="bg-gray-800/30 rounded-lg p-3 h-full">
            <p className="text-white text-sm font-medium mb-3">DAO Vote: Release Team Tokens</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-blue-300 text-xs">Yes</span>
                <span className="text-white text-xs">68%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: '68%'}}></div>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-300 text-xs">No</span>
                <span className="text-white text-xs">32%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-indigo-500 h-2 rounded-full" style={{width: '32%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Status */}
        <div className="bg-indigo-600/20 rounded-lg p-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <p className="text-white text-sm">AI monitoring active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductOverview() {
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

  const features = [
    {
      id: 'universal-launchpad',
      title: 'Universal Launchpad',
      description: 'Support token launches for DeFi, NFT, GameFi, SocialFi, and more — all in one platform.',
      image: '/p1.png',
    },
    {
      id: 'ai-powered-strategy',
      title: 'AI-Powered Strategy & Support',
      description: 'Smart tools for founders to optimize fundraising goals and tokenomics, and real-time risk analysis for investors. Includes a 24/7 AI chatbot for instant support.',
      image: '/p2.png',
    },
    {
      id: 'dutch-auction',
      title: 'Dutch Auction with Liquidity Injection',
      description: 'Fair, descending-price auctions with 38% of raised funds and tokens auto-injected into DEX liquidity pools. Refund guaranteed if soft cap isn\'t met.',
      image: '/p3.png',
    },
    {
      id: 'cross-chain',
      title: 'Cross-Chain Compatible',
      description: 'Launch on Ethereum, Solana, Polygon, NEAR and more — powered by cross-chain liquidity infrastructure.',
      image: '/p4.png',
    },
    {
      id: 'ai-governance',
      title: 'AI Governance & Milestone Unlocks',
      description: 'AI verifies on-chain project progress, tracks GitHub commits, and supports milestone-based vesting and DAO unlock votes.',
      image: '/p5.png',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="py-20 bg-[#0C0E21]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-titillium text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Product Overview
          </h2>
        </div>

        {/* Features List */}
        <div className="space-y-20">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={feature.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16 transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${200 + index * 200}ms`
                }}
              >
                {/* Content */}
                <div className="relative flex flex-1 space-y-6 items-center justify-center">
                    <div className="flex flex-col gap-4 w-2/3">
                  <h3 className="font-titillium text-2xl md:text-4xl font-semibold text-white tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="font-lato text-lg text-white/50 leading-relaxed">
                    {feature.description}
                  </p>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1 w-full">
                  {feature.image ? (
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={1200}
                        height={900}
                        className="w-full h-full object-cover object-top"
                        priority={index === 0}
                        quality={95}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[4/3] border border-gray-600/30 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <p className="font-lato text-sm text-white/50">Image Placeholder</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 