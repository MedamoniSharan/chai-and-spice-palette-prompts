import { Coffee, Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">Dr. Chaai</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Brewing conversations over a cup of tea. Your friendly neighborhood tea café where 
              every cup is brewed with care, community spirit, and a dash of warmth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-orange-500 transition-colors">About</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-orange-500 transition-colors">Menu</a></li>
              <li><a href="#story" className="text-gray-300 hover:text-orange-500 transition-colors">Our Story</a></li>
              <li><a href="#growth" className="text-gray-300 hover:text-orange-500 transition-colors">Growth Plan</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">hello@drchaai.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Heart className="w-5 h-5 text-orange-500" />
              <span className="text-gray-300">Made with love for chai lovers everywhere</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Dr. Chaai. All rights reserved. | "Sip. Relax. Repeat."
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
