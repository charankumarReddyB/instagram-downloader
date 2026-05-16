/**
 * How It Works Section
 * Shows the 3-step process
 */

import React from "react";
import { motion } from "framer-motion";
import { Copy, Link2, Download } from "lucide-react";

interface Step {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      number: 1,
      icon: <Copy className="w-12 h-12 text-purple-400" />,
      title: "Copy Link",
      description: "Copy the link of any public Instagram Reel or post you want to download",
    },
    {
      number: 2,
      icon: <Link2 className="w-12 h-12 text-cyan-400" />,
      title: "Paste URL",
      description: "Paste the URL in our tool and click download button",
    },
    {
      number: 3,
      icon: <Download className="w-12 h-12 text-pink-400" />,
      title: "Download Video",
      description: "Get your Instagram reel in HD with watermark removal processing applied",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-gray-400">Simple and straightforward process</p>
        </motion.div>

        {/* Steps Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-32 left-1/3 right-1/3 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-30" />

          {steps.map((step, idx) => (
            <motion.div key={idx} variants={stepVariants} className="relative">
              {/* Step Container */}
              <div className="flex flex-col items-center text-center">
                {/* Circle with number and icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative mb-8 w-24 h-24 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-full flex items-center justify-center border border-purple-500/50"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: idx * 0.3 }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Step number */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 max-w-xs">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 text-lg">
            Ready to get started? <span className="gradient-text font-semibold">Scroll up</span> to download your first video!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
