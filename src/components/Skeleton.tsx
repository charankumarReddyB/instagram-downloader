/**
 * Loading Skeleton Component
 * Animated skeleton loader for content
 */

import React from "react";
import { motion } from "framer-motion";

interface SkeletonProps {
  width?: string;
  height?: string;
  count?: number;
  circle?: boolean;
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "20px",
  count = 1,
  circle = false,
  className = "",
}) => {
  return (
    <div className={className}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            width,
            height,
            borderRadius: circle ? "50%" : "8px",
          }}
          className="bg-gradient-to-r from-gray-700 to-gray-600 mb-4"
        />
      ))}
    </div>
  );
};

export const VideoPreviewSkeleton: React.FC = () => {
  return (
    <div className="space-y-4">
      <Skeleton width="100%" height="300px" circle={false} />
      <Skeleton width="80%" height="24px" />
      <Skeleton width="60%" height="16px" />
      <div className="flex gap-2">
        <Skeleton width="45%" height="40px" />
        <Skeleton width="45%" height="40px" />
      </div>
    </div>
  );
};

export default Skeleton;
