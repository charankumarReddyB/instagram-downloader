/**
 * Backend Validation Utilities
 */

/**
 * Validate URL format
 */
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Validate Instagram URL
 */
export const isValidInstagramUrl = (url) => {
  const patterns = [
    /^https:\/\/(www\.)?instagram\.com\/reels\/[\w-]+/,
    /^https:\/\/(www\.)?instagram\.com\/p\/[\w-]+/,
    /^https:\/\/(www\.)?ig\.me\/[\w-]+/,
  ];
  return patterns.some((pattern) => pattern.test(url.trim()));
};

/**
 * Validate TikTok URL
 */
export const isValidTikTokUrl = (url) => {
  const patterns = [
    /^https:\/\/(www\.)?tiktok\.com\/@[\w.-]+\/video\/\d+/,
    /^https:\/\/(vm|vt)\.tiktok\.com\/\w+/,
  ];
  return patterns.some((pattern) => pattern.test(url.trim()));
};

/**
 * Validate YouTube URL
 */
export const isValidYouTubeUrl = (url) => {
  const patterns = [
    /^https:\/\/(www\.)?youtube\.com\/shorts\/[\w-]+/,
    /^https:\/\/youtu\.be\/[\w-]+/,
  ];
  return patterns.some((pattern) => pattern.test(url.trim()));
};

/**
 * Get platform from URL
 */
export const getPlatformFromUrl = (url) => {
  if (isValidInstagramUrl(url)) return "instagram";
  if (isValidTikTokUrl(url)) return "tiktok";
  if (isValidYouTubeUrl(url)) return "youtube";
  return "unknown";
};

/**
 * Validation middleware
 */
export const validateUrl = (req, res, next) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({
      success: false,
      error: "URL is required",
    });
  }

  if (!isValidUrl(url)) {
    return res.status(400).json({
      success: false,
      error: "Invalid URL format",
    });
  }

  const platform = getPlatformFromUrl(url);
  if (platform === "unknown") {
    return res.status(400).json({
      success: false,
      error: "Unsupported platform or invalid URL",
    });
  }

  // Attach validated data to request
  req.videoUrl = url;
  req.platform = platform;

  next();
};
