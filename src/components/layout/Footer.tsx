
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sinofi-darkPurple text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and contact */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold text-white">Sinofi</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Premium electronics from top brands. Experience innovation at its finest.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Products</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/products?category=smartphones" className="text-gray-300 hover:text-white text-sm">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link to="/products?category=laptops" className="text-gray-300 hover:text-white text-sm">
                  Laptops
                </Link>
              </li>
              <li>
                <Link to="/products?category=tvs" className="text-gray-300 hover:text-white text-sm">
                  TVs
                </Link>
              </li>
              <li>
                <Link to="/products?category=watches" className="text-gray-300 hover:text-white text-sm">
                  Smart Watches
                </Link>
              </li>
              <li>
                <Link to="/products?category=headphones" className="text-gray-300 hover:text-white text-sm">
                  Headphones
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Mail size={16} className="mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">support@sinofi.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (888) 123-4567</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-medium">Subscribe to our newsletter</h4>
              <div className="mt-2 flex rounded-md shadow-sm">
                <input
                  type="email"
                  className="focus:ring-purple-500 focus:border-purple-500 block w-full rounded-l-md sm:text-sm border-gray-600 bg-gray-800 text-white"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-sinofi-purple hover:bg-opacity-90 focus:outline-none"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Sinofi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
