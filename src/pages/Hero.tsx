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
import { isValidInstagramUrl, cleanUrl } from "../utils/validation";
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

    if (!isValidInstagramUrl(cleanedUrl)) {
      setError("Please enter a valid Instagram Reel or post URL");
      return;
    }

    setError("");
    onDownload?.(cleanedUrl);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0"
    >
      <AnimatedBlobs />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6"
        >
          <div className="glassmorphic px-4 py-2 rounded-full flex items-center gap-2">
            <Zap size={16} className="text-yellow-400" />
            <span className="text-sm text-gray-300">Fast & Easy Download</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          Download Instagram Reels
          <span className="gradient-text block mt-2">in HD, No Watermark</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
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
          className="space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              placeholder="Paste Instagram Reel URL here..."
              value={url}
              onChange={setUrl}
              type="url"
              className="flex-1"
              error={error}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="secondary"
              size="md"
              onClick={handlePaste}
              className="flex-1 sm:flex-none"
            >
              📋 Paste
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={handleDownload}
              loading={loading}
              disabled={loading}
              icon={<Download size={20} />}
              className="flex-1"
            >
              {loading ? "Processing..." : "Download"}
            </Button>
          </div>
        </motion.div>

        {/* Features Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto"
        >
          {[
            { icon: "⚡", text: "Lightning Fast" },
            { icon: "🔒", text: "100% Secure" },
            { icon: "♾️", text: "Unlimited" },
          ].map((feature, idx) => (
            <div key={idx} className="glassmorphic px-4 py-3 rounded-lg">
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
