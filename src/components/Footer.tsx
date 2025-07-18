
import { Link } from "react-router-dom";
import { Leaf, Mail, Circle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Unique Quality Training</span>
            </div>
            <p className="text-gray-400 text-sm">
              Leading provider of ISO 14001 Environmental Management Systems training and certification services.
            </p>
            <div className="flex space-x-4">
              <Circle className="w-5 h-5 text-gray-400 hover:text-green-400 cursor-pointer" />
              <Circle className="w-5 h-5 text-gray-400 hover:text-green-400 cursor-pointer" />
              <Circle className="w-5 h-5 text-gray-400 hover:text-green-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link to="/iso-14001-environmental-management-systems" className="text-gray-400 hover:text-green-400 transition-colors">ISO 14001</Link></li>
              <li><Link to="/training" className="text-gray-400 hover:text-green-400 transition-colors">Training</Link></li>
              <li><Link to="/success-stories" className="text-gray-400 hover:text-green-400 transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>ISO 14001 Training</li>
              <li>Environmental Auditing</li>
              <li>Compliance Consulting</li>
              <li>Certification Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@uniquequalitytraining.com</span>
              </div>
              <p>123 Green Street</p>
              <p>India</p>
              <p>+91 9876543210</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Unique Quality Training. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
