import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductOverview from '@/components/ProductOverview';
import WhyBidLaunch from '@/components/WhyBidLaunch';
import Tokenomics from '@/components/Tokenomics';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0C0E21]">
      <Header />
      <Hero />
      <ProductOverview />
      <WhyBidLaunch />
      <Tokenomics />
      <FAQ />
      <Footer />
    </div>
  );
}
