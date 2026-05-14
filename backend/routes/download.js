/**
 * Download Routes
 * API endpoints for video downloading
 */

import express from "express";
import * as downloadController from "../controllers/downloadController.js";
import { validateUrl } from "../utils/validation.js";

const router = express.Router();

/**
 * POST /api/download
 * Download video from URL
 */
router.post("/download", validateUrl, downloadController.downloadVideo);

/**
 * POST /api/video-info
 * Get video information without downloading
 */
router.post("/video-info", validateUrl, downloadController.getVideoInfo);

/**
 * GET /api/platforms
 * Get list of supported platforms
 */
router.get("/platforms", downloadController.getSupportedPlatforms);

/**
 * GET /api/status/:videoId
 * Check download status
 */
router.get("/status/:videoId", downloadController.getDownloadStatus);

export default router;
