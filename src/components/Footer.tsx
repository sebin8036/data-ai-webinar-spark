
import { Calendar, Clock, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Event Details */}
          <div>
            <h4 className="text-lg font-bold mb-4">Event Details</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4" />
                <span>July 13, 2025</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4" />
                <span>90 Minutes</span>
              </div>
            </div>
          </div>
          
          {/* Host Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Host</h4>
            <div className="text-gray-300">
              <p className="font-semibold text-white">Rakshit Singh Pawar</p>
              <p className="text-sm">Manager - International Business Development</p>
              <p className="text-sm">University of Europe for Applied Sciences</p>
            </div>
          </div>
          
          {/* Topics */}
          <div>
            <h4 className="text-lg font-bold mb-4">Key Topics</h4>
            <div className="text-gray-300 text-sm space-y-1">
              <p>• Data Analytics Fundamentals</p>
              <p>• AI & Machine Learning</p>
              <p>• Business Applications</p>
              <p>• Career Opportunities</p>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Need Help?</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@webinar.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Data Analytics & AI Webinar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
