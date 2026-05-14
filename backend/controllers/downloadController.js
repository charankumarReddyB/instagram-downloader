/**
 * Download Controller
 * Handles video download logic
 */

import * as downloadService from "../services/downloadService.js";
import { getPlatformFromUrl } from "../utils/validation.js";

const buildDownloadUrl = (req, fileName) => {
  if (!fileName) return null;
  const protocol = req.protocol;
  const host = req.get("host");
  return `${protocol}://${host}/downloads/${fileName}`;
};

/**
 * Download video from URL
 */
export const downloadVideo = async (req, res) => {
  try {
    const url = req.videoUrl || req.body.url;
    const platform = req.platform || getPlatformFromUrl(url);

    const result = await downloadService.downloadVideo(url, platform);

    if (result.success) {
      const downloadUrl = buildDownloadUrl(req, result.data?.downloadUrl);
      res.status(200).json({
        success: true,
        data: {
          ...result.data,
          downloadUrl: downloadUrl || result.data?.downloadUrl,
        },
        message: "Video downloaded successfully",
      });
    } else {
      res.status(400).json({
        success: false,
        error: result.error || "Failed to download video",
      });
    }
  } catch (error) {
    console.error("Download error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to process download request",
    });
  }
};

/**
 * Get video information
 */
export const getVideoInfo = async (req, res) => {
  try {
    const url = req.videoUrl || req.body.url;
    const platform = req.platform || getPlatformFromUrl(url);

    const result = await downloadService.getVideoInfo(url, platform);

    if (result.success) {
      res.status(200).json({
        success: true,
        data: result.data,
      });
    } else {
      res.status(400).json({
        success: false,
        error: result.error || "Failed to get video info",
      });
    }
  } catch (error) {
    console.error("Video info error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to process video info request",
    });
  }
};

/**
 * Get supported platforms
 */
export const getSupportedPlatforms = async (req, res) => {
  try {
    const platforms = [
      {
        name: "Instagram",
        status: "available",
        formats: ["reel", "post"],
      },
      {
        name: "TikTok",
        status: "available",
        formats: ["video"],
      },
      {
        name: "YouTube Shorts",
        status: "available",
        formats: ["short"],
      },
      {
        name: "Facebook",
        status: "available",
        formats: ["video"],
      },
      {
        name: "Twitter/X",
        status: "available",
        formats: ["video"],
      },
    ];

    res.status(200).json({
      success: true,
      platforms,
    });
  } catch (error) {
    console.error("Platforms error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch platforms",
    });
  }
};

/**
 * Get download status
 */
export const getDownloadStatus = async (req, res) => {
  try {
    const { videoId } = req.params;
    const status = await downloadService.getDownloadStatus(videoId);

    res.status(200).json({
      success: true,
      status,
    });
  } catch (error) {
    console.error("Status error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to get download status",
    });
  }
};
