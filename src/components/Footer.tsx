/**
 * Footer Component
 */

import React from "react";
import { motion } from "framer-motion";
import { Code2, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: Code2, label: "GitHub", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:support@mediadrop.com" },
  ];

  return (
    <footer className="border-t border-purple-500/20 glassmorphic py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="col-span-1 md:col-span-1"
          >
            <h3 className="text-xl font-bold gradient-text mb-3">MediaDrop</h3>
            <p className="text-gray-400 text-sm">
              Download your favorite videos from social media in HD quality.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#features" className="hover:text-white transition-smooth">
                  Features
                </a>
              </li>
              <li>
                <a href="#platforms" className="hover:text-white transition-smooth">
                  Platforms
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-smooth">
                  How It Works
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-smooth">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-smooth">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-smooth">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-gray-400 hover:text-purple-400 transition-smooth"
                  title={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-500/20 my-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm"
        >
          <p>&copy; {currentYear} MediaDrop. All rights reserved.</p>
          <p className="text-center mt-4 sm:mt-0">
            Built with ❤️ for content creators
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
