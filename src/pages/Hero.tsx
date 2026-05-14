/**
 * Hero Section Component
 * Main landing section with URL input
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Zap } from "lucide-react";
import Button from "../components/Button";
import Input from "../components/Input";
import AnimatedBlobs from "../components/AnimatedBlobs";
import { getPlatformFromUrl, cleanUrl } from "../utils/validation";
import { toast } from "../components/Toast";

interface HeroProps {
  onDownload?: (url: string) => void;
  loading?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onDownload, loading = false }) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
      setError("");
    } catch (err) {
      toast.error("Failed to paste from clipboard");
    }
  };

  const handleDownload = () => {
    const cleanedUrl = cleanUrl(url);
    if (!cleanedUrl) {
      setError("Please enter a URL");
      return;
    }

    const platform = getPlatformFromUrl(cleanedUrl);
    if (platform === "unknown") {
      setError(
        "Please enter a valid Instagram, TikTok, YouTube Shorts, Facebook, or Twitter/X video URL"
      );
      return;
    }

    setError("");
    onDownload?.(cleanedUrl);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0 pb-16"
    >
      <AnimatedBlobs />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-8"
        >
          <div className="glassmorphic px-6 py-3 rounded-full flex items-center gap-3">
            <Zap size={18} className="text-yellow-400" />
            <span className="text-base text-gray-300 font-medium">Fast & Easy Download</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
        >
          Download Instagram Reels
          <span className="gradient-text block mt-4 text-4xl sm:text-5xl lg:text-6xl">in HD, No Watermark</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl sm:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          Paste your Instagram Reel link and download it instantly in the highest quality. No
          sign-up required, completely free.
        </motion.p>

        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          id="hero-input"
          className="space-y-6 max-w-2xl mx-auto"
        >
          <div className="space-y-4">
            <Input
              placeholder="Paste Instagram Reel URL here..."
              value={url}
              onChange={setUrl}
              type="url"
              className="w-full text-lg py-4 px-6"
              error={error}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={handlePaste}
              className="flex-1 sm:flex-none px-8 py-4 text-lg"
            >
              📋 Paste URL
            </Button>
            <Button
              variant="primary"
              size="lg"
              onClick={handleDownload}
              loading={loading}
              disabled={loading}
              icon={<Download size={22} />}
              className="flex-1 px-8 py-4 text-lg"
            >
              {loading ? "Processing..." : "Download Video"}
            </Button>
          </div>
        </motion.div>

        {/* Features Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto"
        >
          {[
            { icon: "⚡", text: "Lightning Fast", desc: "Download in seconds" },
            { icon: "🔒", text: "100% Secure", desc: "No data stored" },
            { icon: "♾️", text: "Unlimited", desc: "Download as many as you want" },
          ].map((feature, idx) => (
            <div key={idx} className="glassmorphic px-6 py-6 rounded-xl hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-3">{feature.icon}</div>
              <div className="font-semibold text-lg mb-1">{feature.text}</div>
              <div className="text-gray-400 text-sm">{feature.desc}</div>
            </div>
          ))}
        </motion.div>
              <div className="text-2xl mb-2">{feature.icon}</div>
              <p className="text-sm text-gray-300">{feature.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
