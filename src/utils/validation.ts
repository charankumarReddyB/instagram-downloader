/**
 * URL Validation Utilities
 * Validate and parse social media URLs
 */

/**
 * Validate Instagram Reel URL
 * @param url - URL to validate
 * @returns boolean indicating if URL is valid Instagram Reel link
 */
export const isValidInstagramUrl = (url: string): boolean => {
  const normalizedUrl = url.trim().toLowerCase();
  const patterns = [
    /^https:\/\/(www\.)?instagram\.com\/reels?\/[\w-]+(?:[/?].*)?$/,
    /^https:\/\/(www\.)?instagram\.com\/p\/[\w-]+(?:[/?].*)?$/,
    /^https:\/\/(www\.)?ig\.me\/[\w-]+(?:[/?].*)?$/,
  ];
  return patterns.some((pattern) => pattern.test(normalizedUrl));
};

/**
 * Extract video ID from Instagram URL
 * @param url - Instagram URL
 * @returns video ID or null
 */
export const extractInstagramId = (url: string): string | null => {
  const match = url.match(/\/(?:reels|p)\/([^/?]+)/);
  return match ? match[1] : null;
};

/**
 * Validate TikTok URL (for future use)
 */
export const isValidTikTokUrl = (url: string): boolean => {
  const normalizedUrl = url.trim().toLowerCase();
  const patterns = [
    /^https:\/\/(www\.)?tiktok\.com\/@[\w.-]+\/video\/\d+(?:[/?].*)?$/,
    /^https:\/\/(vm|vt)\.tiktok\.com\/\w+(?:[/?].*)?$/,
  ];
  return patterns.some((pattern) => pattern.test(normalizedUrl));
};

/**
 * Validate YouTube URL (for future use)
 */
export const isValidYouTubeUrl = (url: string): boolean => {
  const normalizedUrl = url.trim().toLowerCase();
  const patterns = [
    /^https:\/\/(www\.)?youtube\.com\/shorts\/[\w-]+(?:[/?].*)?$/,
    /^https:\/\/youtu\.be\/[\w-]+(?:[/?].*)?$/,
  ];
  return patterns.some((pattern) => pattern.test(normalizedUrl));
};

/**
 * Validate Facebook Video URL (for future use)
 */
export const isValidFacebookUrl = (url: string): boolean => {
  const normalizedUrl = url.trim().toLowerCase();
  return /^https:\/\/(www\.)?facebook\.com\/[\w.-]+\/videos\/[\d]+(?:[/?].*)?$/.test(normalizedUrl);
};

/**
 * Validate Twitter/X Video URL (for future use)
 */
export const isValidTwitterUrl = (url: string): boolean => {
  const normalizedUrl = url.trim().toLowerCase();
  return /^https:\/\/(twitter\.com|x\.com)\/[\w]+\/status\/[\d]+(?:[/?].*)?$/.test(normalizedUrl);
};

/**
 * Get platform type from URL
 */
export type Platform = "instagram" | "tiktok" | "youtube" | "facebook" | "twitter" | "unknown";

export const getPlatformFromUrl = (url: string): Platform => {
  if (isValidInstagramUrl(url)) return "instagram";
  if (isValidTikTokUrl(url)) return "tiktok";
  if (isValidYouTubeUrl(url)) return "youtube";
  if (isValidFacebookUrl(url)) return "facebook";
  if (isValidTwitterUrl(url)) return "twitter";
  return "unknown";
};

/**
 * Format URL for display (truncate long URLs)
 */
export const formatUrlForDisplay = (url: string, maxLength: number = 50): string => {
  if (url.length <= maxLength) return url;
  return url.substring(0, maxLength) + "...";
};

/**
 * Clean URL input (trim whitespace)
 */
export const cleanUrl = (url: string): string => {
  return url.trim();
};

/**
 * Copy text to clipboard
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
    return false;
  }
};

/**
 * Format file size for display
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
};

/**
 * Format duration for display (seconds to HH:MM:SS)
 */
export const formatDuration = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};
