
import { Calendar, Clock, User, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-16 h-16 border border-white/20 rounded-full animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative container mx-auto px-6 py-20 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20 animate-fade-in">
          <span className="text-sm font-medium">Free Webinar</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-fade-in delay-300">
          Data Analytics
          <br />
          & Artificial Intelligence
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl leading-relaxed animate-fade-in delay-500">
          Discover the future of data-driven decision making and AI innovation in this exclusive webinar
        </p>
        
        {/* Webinar Details Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 w-full max-w-4xl">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in delay-700">
            <Calendar className="w-8 h-8 mb-3 text-blue-300" />
            <p className="text-sm text-blue-200 mb-1">Date</p>
            <p className="font-semibold">July 13, 2025</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in delay-800">
            <Clock className="w-8 h-8 mb-3 text-purple-300" />
            <p className="text-sm text-blue-200 mb-1">Duration</p>
            <p className="font-semibold">90 Minutes</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in delay-900">
            <User className="w-8 h-8 mb-3 text-indigo-300" />
            <p className="text-sm text-blue-200 mb-1">Format</p>
            <p className="font-semibold">Live Online</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in delay-1000">
            <MapPin className="w-8 h-8 mb-3 text-cyan-300" />
            <p className="text-sm text-blue-200 mb-1">Access</p>
            <p className="font-semibold">Worldwide</p>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="animate-fade-in delay-1100">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
          >
            Register Now - It's Free!
          </Button>
          
          <p className="text-blue-200 mt-4 text-sm">No credit card required • Instant access</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
