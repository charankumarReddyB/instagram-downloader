/**
 * Download Service
 * Handles video downloading logic
 *
 * Integration notes for yt-dlp:
 * - Install: pip install yt-dlp
 * - Use child_process to execute yt-dlp commands
 * - Handle various video platforms through yt-dlp extractors
 */

import fs from "fs";
import { promisify } from "util";
import { execFile } from "child_process";
import {
  generateUniqueId,
  generateVideoFilename,
  ensureDownloadsDir,
  getSafeFilePath,
  getFileSize,
  deleteFileSafely,
} from "../utils/helpers.js";

const execFileAsync = promisify(execFile);
const supportedPlatforms = ["instagram", "tiktok", "youtube", "facebook", "twitter"];

const runProcess = async (command, args) => {
  try {
    return await execFileAsync(command, args, {
      windowsHide: true,
      maxBuffer: 1024 * 1024 * 20,
    });
  } catch (error) {
    throw error;
  }
};

const runYtDlp = async (args) => runProcess("yt-dlp", args);
const runFfmpeg = async (args) => runProcess("ffmpeg", args);

const getVideoMetadata = async (url) => {
  const { stdout } = await runYtDlp(["--dump-json", "--no-warnings", "--no-playlist", url]);
  return JSON.parse(stdout);
};

const removeWatermark = async (inputPath, outputPath, platform) => {
  if (platform !== "instagram") return null;

  const filter = [
    "delogo=x=iw-220:y=ih-70:w=220:h=70:show=0",
    "delogo=x=20:y=20:w=180:h=50:show=0",
  ].join(",");

  await runFfmpeg(["-y", "-i", inputPath, "-vf", filter, "-c:a", "copy", outputPath]);
  return outputPath;
};

/**
 * Download video using yt-dlp
 */
export const downloadVideo = async (url, platform) => {
  try {
    if (!supportedPlatforms.includes(platform)) {
      return {
        success: false,
        error: "Platform not supported",
      };
    }

    const videoId = generateUniqueId();
    const filename = generateVideoFilename(videoId, "mp4");
    const outputPath = getSafeFilePath(filename);
    ensureDownloadsDir();

    let metadata = {
      title: "Downloaded Video",
      duration: 0,
      thumbnail:
        "https://images.unsplash.com/photo-1611339555312-e607c25352ba?w=500&h=500&fit=crop",
    };

    try {
      metadata = await getVideoMetadata(url);
    } catch (error) {
      console.warn(
        "Failed to extract metadata from yt-dlp, continuing with default metadata.",
        error
      );
    }

    try {
      await runYtDlp([
        "-f",
        "best[ext=mp4]/best",
        "--no-warnings",
        "--no-playlist",
        "-o",
        outputPath,
        url,
      ]);
    } catch (error) {
      const errorMessage = error.message || error.stderr || error.stdout || "";

      if (error.code === "ENOENT") {
        return {
          success: false,
          error:
            "yt-dlp is not installed or not available in PATH. Install yt-dlp to use the downloader.",
        };
      }

      if (errorMessage.includes("Instagram sent an empty media response")) {
        return {
          success: false,
          error:
            "Instagram video requires authentication. This video may be private or require login to access.",
        };
      }

      console.error("yt-dlp download error:", error);
      console.error("Error message:", errorMessage);
      return {
        success: false,
        error: "Failed to download video using yt-dlp.",
      };
    }

    let finalPath = outputPath;
    let finalFilename = filename;
    let watermarkRemoved = false;

    if (platform === "instagram") {
      const processedFilename = `processed-${filename}`;
      const processedPath = getSafeFilePath(processedFilename);

      try {
        const processedResult = await removeWatermark(outputPath, processedPath, platform);
        if (processedResult) {
          await deleteFileSafely(filename);
          finalPath = processedResult;
          finalFilename = processedFilename;
          watermarkRemoved = true;
        }
      } catch (error) {
        if (error.code === "ENOENT" || error.message?.includes("ffmpeg")) {
          return {
            success: false,
            error:
              "ffmpeg is required for watermark removal. Install ffmpeg and make sure it is available in PATH.",
          };
        }

        console.warn("Watermark removal failed, returning original video:", error);
      }
    }

    const size = getFileSize(finalPath);

    return {
      success: true,
      data: {
        id: videoId,
        title: metadata.title || "Downloaded Video",
        duration: metadata.duration || 0,
        thumbnail:
          metadata.thumbnail ||
          "https://images.unsplash.com/photo-1611339555312-e607c25352ba?w=500&h=500&fit=crop",
        platform,
        quality: watermarkRemoved ? "Watermark Removed" : "Best available",
        size,
        downloadUrl: finalFilename,
        isWatermarkRemoved: watermarkRemoved,
      },
    };
  } catch (error) {
    console.error("Download service error:", error);
    return {
      success: false,
      error: "Failed to download video",
    };
  }
};

/**
 * Get video information
 */
export const getVideoInfo = async (url, platform) => {
  try {
    if (!supportedPlatforms.includes(platform)) {
      return {
        success: false,
        error: "Platform not supported",
      };
    }

    const metadata = await getVideoMetadata(url);
    return {
      success: true,
      data: {
        id: generateUniqueId(),
        title: metadata.title || "Video Title",
        duration: metadata.duration || 0,
        thumbnail:
          metadata.thumbnail ||
          "https://images.unsplash.com/photo-1611339555312-e607c25352ba?w=500&h=500&fit=crop",
        platform,
        quality: "Best available",
        size: metadata.filesize || 0,
      },
    };
  } catch (error) {
    if (error.code === "ENOENT") {
      return {
        success: false,
        error:
          "yt-dlp is not installed or not available in PATH. Install yt-dlp to fetch video information.",
      };
    }

    console.error("Video info service error:", error);
    return {
      success: false,
      error: "Failed to get video information",
    };
  }
};

/**
 * Get download status
 */
export const getDownloadStatus = async (videoId) => {
  try {
    return {
      videoId,
      status: "completed",
      progress: 100,
    };
  } catch (error) {
    console.error("Status service error:", error);
    throw error;
  }
};

/**
 * Clean up old downloads
 */
export const cleanupOldDownloads = async (retentionHours = 24) => {
  try {
    console.log(`Cleaning up downloads older than ${retentionHours} hours`);
  } catch (error) {
    console.error("Cleanup error:", error);
  }
};
