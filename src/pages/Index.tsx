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
import SpaceBackground from '@/components/SpaceBackground';

const WaveDivider = ({ flip = false, color = 'hsl(var(--background))' }: { flip?: boolean; color?: string }) => (
  <div className={`relative w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''}`} style={{ marginTop: flip ? 0 : -1, marginBottom: flip ? -1 : 0 }}>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[80px]">
      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill={color} opacity=".25" />
      <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill={color} opacity=".5" />
      <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill={color} />
    </svg>
  </div>
);

const CurveDivider = ({ flip = false, color = 'hsl(var(--background))' }: { flip?: boolean; color?: string }) => (
  <div className={`relative w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''}`} style={{ marginTop: flip ? 0 : -1, marginBottom: flip ? -1 : 0 }}>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[50px] md:h-[70px]">
      <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill={color} />
    </svg>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Space Background */}
      <SpaceBackground />
      
      {/* Global Noise Texture Overlay */}
      <div className="noise-overlay" />
      
      <Navigation />
      <Hero />
      
      {/* Wave transition from Hero to AboutUs */}
      <WaveDivider color="hsl(var(--muted))" />
      <AboutUs />
      
      {/* Curve transition to SystemDemo */}
      <CurveDivider flip color="hsl(var(--muted))" />
      <SystemDemo />
      
      {/* Wave to Features */}
      <WaveDivider color="hsl(var(--muted))" />
      <Features />
      
      {/* Curve to Benefits */}
      <CurveDivider flip color="hsl(var(--muted))" />
      <Benefits />
      
      {/* Wave to Testimonials */}
      <WaveDivider color="hsl(var(--background))" />
      <Testimonials />
      
      {/* Curve to SuccessStories */}
      <CurveDivider color="hsl(var(--muted))" />
      <SuccessStories />
      
      {/* Wave to FAQ */}
      <CurveDivider flip color="hsl(var(--muted))" />
      <FAQ />
      
      {/* Wave to Pricing */}
      <WaveDivider color="hsl(var(--muted))" />
      <Pricing />
      
      <Footer />
      <ChatSupport />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
