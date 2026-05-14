/**
 * Download Controller
 * Handles video download logic
 */

import * as downloadService from "../services/downloadService.js";
import { getPlatformFromUrl } from "../utils/validation.js";

/**
 * Download video from URL
 */
export const downloadVideo = async (req, res) => {
  try {
    const { url } = req.body;

    // Get platform type
    const platform = getPlatformFromUrl(url);

    // Call appropriate service based on platform
    const result = await downloadService.downloadVideo(url, platform);

    if (result.success) {
      res.status(200).json({
        success: true,
        data: result.data,
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
    const { url } = req.body;
    const platform = getPlatformFromUrl(url);

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
        status: "coming",
        formats: ["video"],
      },
      {
        name: "YouTube Shorts",
        status: "coming",
        formats: ["short"],
      },
      {
        name: "Facebook",
        status: "coming",
        formats: ["video"],
      },
      {
        name: "Twitter/X",
        status: "coming",
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

    // In a real implementation, this would check a database
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
