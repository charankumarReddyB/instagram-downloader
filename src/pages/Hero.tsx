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
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-16"
    >
      <AnimatedBlobs />

      <div className="relative z-10 w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-2xl shadow-slate-950/40 backdrop-blur-3xl p-8 sm:p-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-purple-500/20 bg-white/5 px-5 py-3 text-sm text-purple-100 shadow-sm">
              <Zap size={18} className="text-yellow-300" />
              <span>Fast, secure Instagram Reel downloads</span>
            </div>

            <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Download Instagram Reels
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base text-slate-300 sm:text-lg">
              Get your Instagram reels in HD with no extra watermark added by the app. Some videos may still keep the watermark embedded in the original source.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-12"
          >
            <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-6 shadow-xl shadow-slate-950/30">
              <div className="space-y-4">
                <Input
                  placeholder="Paste Instagram Reel URL here..."
                  value={url}
                  onChange={setUrl}
                  type="url"
                  className="w-full text-lg py-4 px-6"
                  error={error}
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={handlePaste}
                    className="w-full"
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
                    className="w-full"
                  >
                    {loading ? "Processing..." : "Download Video"}
                  </Button>
                </div>
                <p className="text-sm text-slate-400">
                  Note: the downloader saves the original Instagram video. If the source already includes a watermark, it may remain visible.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-14 grid gap-4 sm:grid-cols-3"
          >
            {[
              {
                icon: "⚡",
                text: "Super Fast",
                desc: "Download reels in seconds with optimized processing.",
              },
              {
                icon: "🛡️",
                text: "Private & Secure",
                desc: "No login required and no user data stored.",
              },
              {
                icon: "📁",
                text: "Original Quality",
                desc: "Get the best available mp4 file from the source.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/10 bg-slate-900/90 p-6 text-left shadow-lg shadow-slate-950/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-2xl">
                  {feature.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{feature.text}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
