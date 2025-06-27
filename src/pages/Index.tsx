
import HeroSection from '@/components/HeroSection';
import HostSection from '@/components/HostSection';
import TopicsSection from '@/components/TopicsSection';
import RegistrationSection from '@/components/RegistrationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HostSection />
      <TopicsSection />
      <RegistrationSection />
      <Footer />
    </div>
  );
};

export default Index;
