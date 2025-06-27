
import { LinkedinIcon, GraduationCap, Building2 } from 'lucide-react';

const HostSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Your Host</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn from an industry expert with extensive experience in international business development and education
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Host Avatar */}
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                  RSP
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-3 shadow-lg">
                  <LinkedinIcon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              
              {/* Host Details */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Rakshit Singh Pawar</h3>
                <p className="text-xl text-blue-600 font-semibold mb-4">Manager - International Business Development</p>
                
                <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                  <Building2 className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">University of Europe for Applied Sciences, Germany</span>
                </div>
                
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <p>Expert in international business development with focus on educational technology and innovation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <p>Experienced in bridging academic research with practical industry applications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostSection;
