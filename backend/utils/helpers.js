/**
 * Backend Helper Utilities
 */

import crypto from "crypto";
import path from "path";
import fs from "fs";

/**
 * Generate unique ID
 */
export const generateUniqueId = () => {
  return crypto.randomBytes(16).toString("hex");
};

/**
 * Generate video filename
 */
export const generateVideoFilename = (videoId, extension = "mp4") => {
  return `${videoId}.${extension}`;
};

/**
 * Get safe file path
 */
export const getSafeFilePath = (fileName) => {
  // Prevent path traversal attacks
  const safeName = path.basename(fileName);
  return path.join("./downloads", safeName);
};

/**
 * Check if downloads directory exists, create if not
 */
export const ensureDownloadsDir = () => {
  const downloadsDir = path.join("./downloads");
  if (!fs.existsSync(downloadsDir)) {
    fs.mkdirSync(downloadsDir, { recursive: true });
  }
  return downloadsDir;
};

/**
 * Format file size for display
 */
export const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
};

/**
 * Format duration (seconds to HH:MM:SS)
 */
export const formatDuration = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

/**
 * Delete file safely
 */
export const deleteFileSafely = async (filePath) => {
  try {
    const safePath = getSafeFilePath(filePath);
    if (fs.existsSync(safePath)) {
      fs.unlinkSync(safePath);
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error deleting file:", error);
    return false;
  }
};

/**
 * Get file size
 */
export const getFileSize = (filePath) => {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (error) {
    console.error("Error getting file size:", error);
    return 0;
  }
};
