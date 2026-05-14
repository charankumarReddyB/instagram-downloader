/**
 * Reel Preview Section
 * Displays the video preview after download
 */

import React from "react";
import { motion } from "framer-motion";
import { Download, Copy } from "lucide-react";
import Card from "../components/Card";
import Button from "../components/Button";
import { VideoPreviewSkeleton } from "../components/Skeleton";
import { formatFileSize, formatDuration, copyToClipboard } from "../utils/validation";
import { toast } from "../components/Toast";

interface VideoData {
  id: string;
  title: string;
  duration: number;
  thumbnail: string;
  platform: string;
  quality: string;
  size: number;
  downloadUrl?: string;
}

interface ReelPreviewProps {
  video?: VideoData;
  loading?: boolean;
  onDownload?: () => void;
}

export const ReelPreview: React.FC<ReelPreviewProps> = ({
  video,
  loading = false,
  onDownload,
}) => {
  const handleCopyLink = async () => {
    if (video?.downloadUrl) {
      const success = await copyToClipboard(video.downloadUrl);
      if (success) {
        toast.success("Download link copied!");
      }
    }
  };

  const handleDownload = () => {
    if (onDownload) {
      onDownload();
      return;
    }

    if (video?.downloadUrl) {
      window.open(video.downloadUrl, "_blank");
    }
  };

  return (
    <section id="preview" className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-center"
        >
          <span className="gradient-text">Your Video</span>
        </motion.h2>

        {loading ? (
          <Card>
            <VideoPreviewSkeleton />
          </Card>
        ) : video ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <Card gradient hover>
              {/* Thumbnail */}
              <motion.div
                layoutId="video-preview"
                className="relative mb-6 overflow-hidden rounded-xl"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full aspect-square sm:aspect-video object-cover"
                />
                {/* Quality Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-cyan-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {video.quality}
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur px-2 py-1 rounded text-xs font-medium">
                  {formatDuration(video.duration)}
                </div>
              </motion.div>

              {/* Video Info */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  File size: {formatFileSize(video.size)} • Platform: {video.platform}
                </p>
              </motion.div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleDownload}
                  icon={<Download size={18} />}
                  className="sm:col-span-2"
                >
                  Download Video
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  onClick={handleCopyLink}
                  icon={<Copy size={18} />}
                >
                  Copy
                </Button>
              </div>
            </Card>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
};

export default ReelPreview;
