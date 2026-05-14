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
  const normalizedUrl = url.trim().toLowerCase();
  const patterns = [
    /^https:\/\/(www\.)?instagram\.com\/reels?\/[\w-]+(?:[/?].*)?$/,
    /^https:\/\/(www\.)?instagram\.com\/p\/[\w-]+(?:[/?].*)?$/,
    /^https:\/\/(www\.)?ig\.me\/[\w-]+(?:[/?].*)?$/,
  ];
  return patterns.some((pattern) => pattern.test(normalizedUrl));
};

/**
 * Validate TikTok URL
 */
export const isValidTikTokUrl = (url) => {
  const normalizedUrl = url.trim().toLowerCase();
  const patterns = [
    /^https:\/\/(www\.)?tiktok\.com\/@[\w.-]+\/video\/\d+(?:[/?].*)?$/,
    /^https:\/\/(vm|vt)\.tiktok\.com\/\w+(?:[/?].*)?$/,
  ];
  return patterns.some((pattern) => pattern.test(normalizedUrl));
};

/**
 * Validate YouTube URL
 */
export const isValidYouTubeUrl = (url) => {
  const normalizedUrl = url.trim().toLowerCase();
  const patterns = [
    /^https:\/\/(www\.)?youtube\.com\/shorts\/[\w-]+(?:[/?].*)?$/,
    /^https:\/\/youtu\.be\/[\w-]+(?:[/?].*)?$/,
  ];
  return patterns.some((pattern) => pattern.test(normalizedUrl));
};

/**
 * Validate Facebook URL
 */
export const isValidFacebookUrl = (url) => {
  const normalizedUrl = url.trim().toLowerCase();
  const pattern = /^https:\/\/(www\.)?facebook\.com\/[\w.-]+\/videos\/[\d]+(?:[/?].*)?$/;
  return pattern.test(normalizedUrl);
};

/**
 * Validate Twitter URL
 */
export const isValidTwitterUrl = (url) => {
  const normalizedUrl = url.trim().toLowerCase();
  const pattern = /^https:\/\/(twitter\.com|x\.com)\/[\w]+\/status\/[\d]+(?:[/?].*)?$/;
  return pattern.test(normalizedUrl);
};

/**
 * Get platform from URL
 */
export const getPlatformFromUrl = (url) => {
  if (isValidInstagramUrl(url)) return "instagram";
  if (isValidTikTokUrl(url)) return "tiktok";
  if (isValidYouTubeUrl(url)) return "youtube";
  if (isValidFacebookUrl(url)) return "facebook";
  if (isValidTwitterUrl(url)) return "twitter";
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
