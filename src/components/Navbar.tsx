/**
 * Navbar Component
 * Sticky responsive navigation bar
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import Button from "./Button";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Platforms", href: "#platforms" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 glassmorphic border-b border-purple-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-2 rounded-lg">
              <Download className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold gradient-text">
              MediaDrop
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                whileHover={{ y: -2 }}
                onClick={() => handleScroll(item.href)}
                className="text-gray-300 hover:text-white transition-smooth font-medium"
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
              onClick={() => document.querySelector("#hero-input")?.scrollIntoView({ behavior: "smooth" })}
            >
              Download Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-purple-500/20 bg-dark-card/50"
            >
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <motion.button
                    key={item.label}
                    whileHover={{ x: 5 }}
                    onClick={() => handleScroll(item.href)}
                    className="block w-full text-left text-gray-300 hover:text-white py-2 transition-smooth"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    document.querySelector("#hero-input")?.scrollIntoView({ behavior: "smooth" });
                    setIsOpen(false);
                  }}
                >
                  Download Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
