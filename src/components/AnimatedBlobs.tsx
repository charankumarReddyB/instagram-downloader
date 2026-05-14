/**
 * Animated Blobs Component
 * Floating animated blobs for hero section background
 */

import React from "react";
import { motion } from "framer-motion";

export const AnimatedBlobs: React.FC = () => {
  const blobVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      scale: [1, 1.1, 1],
    },
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blob 1 - Purple */}
      <motion.div
        variants={blobVariants}
        animate="animate"
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"
      />

      {/* Blob 2 - Cyan */}
      <motion.div
        variants={blobVariants}
        animate="animate"
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"
      />

      {/* Blob 3 - Pink */}
      <motion.div
        variants={blobVariants}
        animate="animate"
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/0 to-dark pointer-events-none" />
    </div>
  );
};

export default AnimatedBlobs;
