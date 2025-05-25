
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SystemDemo from '@/components/SystemDemo';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import SuccessStories from '@/components/SuccessStories';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <SystemDemo />
      <Features />
      <Benefits />
      <Testimonials />
      <SuccessStories />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
