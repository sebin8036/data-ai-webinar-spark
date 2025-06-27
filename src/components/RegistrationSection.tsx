
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
          <h2 className="text-4xl font-bold mb-6">Don't Miss This Opportunity</h2>
          <p className="text-xl text-blue-100 mb-12">
            Join thousands of professionals who are advancing their careers with data analytics and AI knowledge
          </p>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-300 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Registration Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Secure Your Spot Today</h3>
            <div className="max-w-md mx-auto space-y-4">
              <Input 
                placeholder="Your Full Name" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
              />
              <Input 
                type="email" 
                placeholder="Your Email Address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
              />
              <Input 
                placeholder="Your Organization (Optional)" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
              />
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 h-12 text-lg font-semibold rounded-xl"
              >
                Register for Free
              </Button>
            </div>
          </div>
          
          {/* Benefits */}
          <div className="text-left max-w-2xl mx-auto">
            <h4 className="text-xl font-bold mb-6 text-center">What's Included:</h4>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
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
