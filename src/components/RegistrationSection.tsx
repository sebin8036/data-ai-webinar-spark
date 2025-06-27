
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, Users, Globe, Award } from 'lucide-react';

const RegistrationSection = () => {
  const benefits = [
    "Live Q&A session with the expert",
    "Downloadable resources and materials",
    "Certificate of participation",
    "Access to exclusive community",
    "Recording available for 30 days"
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "5,000+", label: "Students Educated" },
    { icon: <Globe className="w-6 h-6" />, number: "50+", label: "Countries Reached" },
    { icon: <Award className="w-6 h-6" />, number: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Don't Miss This Opportunity</h2>
            <p className="text-xl text-blue-100 mb-12">
              Join thousands of professionals who are advancing their careers with data analytics and AI knowledge
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="text-blue-300 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Registration Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20 animate-fade-in delay-700 hover:bg-white/15 transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-6">Secure Your Spot Today</h3>
            <div className="max-w-md mx-auto space-y-4">
              <Input 
                placeholder="Your Full Name" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 transition-all duration-300 focus:bg-white/20 focus:scale-105"
              />
              <Input 
                type="email" 
                placeholder="Your Email Address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 transition-all duration-300 focus:bg-white/20 focus:scale-105"
              />
              <Input 
                placeholder="Your Organization (Optional)" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 transition-all duration-300 focus:bg-white/20 focus:scale-105"
              />
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 h-12 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Register for Free
              </Button>
            </div>
          </div>
          
          {/* Benefits */}
          <div className="text-left max-w-2xl mx-auto animate-fade-in delay-900">
            <h4 className="text-xl font-bold mb-6 text-center">What's Included:</h4>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 animate-fade-in hover:translate-x-2 transition-transform duration-300"
                  style={{ animationDelay: `${1000 + index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
