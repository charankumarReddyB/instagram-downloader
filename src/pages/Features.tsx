/**
 * Features Section
 * Showcase main features
 */

import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Lock, Smartphone, Download, Infinity } from "lucide-react";
import Card from "../components/Card";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <Download className="w-8 h-8 text-purple-400" />,
      title: "HD Downloads",
      description: "Download videos in the highest available quality up to 4K",
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: "Watermark Removal",
      description: "Automatically process Instagram reels to reduce visible watermark branding",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Fast Processing",
      description: "Download your videos in seconds, not minutes",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-400" />,
      title: "Mobile Friendly",
      description: "Works seamlessly on all devices and screen sizes",
    },
    {
      icon: <Lock className="w-8 h-8 text-green-400" />,
      title: "Secure & Private",
      description: "Your data is encrypted and never stored on our servers",
    },
    {
      icon: <Infinity className="w-8 h-8 text-orange-400" />,
      title: "Unlimited Downloads",
      description: "Download as many videos as you want, anytime",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="features" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to download and manage your favorite videos with ease
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card
                hover
                variant="bordered"
                className="h-full flex flex-col"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="mb-4 inline-block"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 flex-grow">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
