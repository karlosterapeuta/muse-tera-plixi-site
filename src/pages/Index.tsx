import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import SystemDemo from '@/components/SystemDemo';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import SuccessStories from '@/components/SuccessStories';
import FAQ from '@/components/FAQ';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import ChatSupport from '@/components/ChatSupport';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-[#FAFBFD] to-[#F0F2F5]">
      {/* Global Noise Texture Overlay */}
      <div className="noise-overlay" />
      
      <Navigation />
      <Hero />
      <AboutUs />
      <SystemDemo />
      <Features />
      <Benefits />
      <Testimonials />
      <SuccessStories />
      <FAQ />
      <Pricing />
      <Footer />
      <ChatSupport />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
