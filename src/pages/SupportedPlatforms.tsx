/**
 * Supported Platforms Section
 * Show available and upcoming platforms
 */

import React from "react";
import { motion } from "framer-motion";
import { Music, Video, Clock } from "lucide-react";
import Card from "../components/Card";

interface Platform {
  name: string;
  icon: React.ReactNode;
  status: "available" | "coming";
  description: string;
}

export const SupportedPlatforms: React.FC = () => {
  const platforms: Platform[] = [
    {
      name: "Instagram Reels",
      icon: <Music className="w-8 h-8" />,
      status: "available",
      description: "Download Instagram Reels and posts",
    },
    {
      name: "TikTok",
      icon: <Music className="w-8 h-8" />,
      status: "coming",
      description: "TikTok videos - Coming Soon",
    },
    {
      name: "YouTube Shorts",
      icon: <Video className="w-8 h-8" />,
      status: "coming",
      description: "YouTube Shorts - Coming Soon",
    },
    {
      name: "Facebook Videos",
      icon: <Video className="w-8 h-8" />,
      status: "coming",
      description: "Facebook Videos - Coming Soon",
    },
    {
      name: "Twitter/X Videos",
      icon: <Music className="w-8 h-8" />,
      status: "coming",
      description: "Twitter/X Videos - Coming Soon",
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="platforms" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Supported <span className="gradient-text">Platforms</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Download from your favorite social media platforms
          </p>
        </motion.div>

        {/* Platforms Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6"
        >
          {platforms.map((platform, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card
                hover={platform.status === "available"}
                variant={platform.status === "available" ? "bordered" : "filled"}
                className={`h-full flex flex-col items-center justify-center text-center py-8 ${
                  platform.status === "coming" ? "opacity-60" : ""
                }`}
              >
                <motion.div
                  whileHover={
                    platform.status === "available" ? { scale: 1.2, rotate: 15 } : {}
                  }
                  className={`mb-4 ${
                    platform.status === "available"
                      ? "text-purple-400"
                      : "text-gray-500"
                  }`}
                >
                  {platform.icon}
                </motion.div>

                <h3 className="text-lg font-bold text-white mb-2">{platform.name}</h3>

                {platform.status === "coming" ? (
                  <div className="flex items-center gap-2 text-yellow-400 text-sm">
                    <Clock size={16} />
                    <span>Coming Soon</span>
                  </div>
                ) : (
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                )}

                <p className="text-gray-400 text-xs mt-3">{platform.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 glassmorphic p-6 rounded-2xl text-center"
        >
          <p className="text-gray-300">
            More platforms coming soon! Follow us for updates on new video download support.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportedPlatforms;
