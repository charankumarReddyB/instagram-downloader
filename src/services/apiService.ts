/**
 * API Service
 * Handles all API requests to the backend
 */

import axios from "axios";
import type { AxiosInstance } from "axios";

interface VideoData {
  id: string;
  title: string;
  duration: number;
  thumbnail: string;
  platform: string;
  quality: string;
  size: number;
}

interface DownloadResponse {
  success: boolean;
  data?: VideoData;
  message?: string;
  error?: string;
}

class ApiService {
  private api: AxiosInstance;

  constructor() {
    const baseURL = import.meta.env.VITE_API_URL || "http://localhost:5001/api";

    this.api = axios.create({
      baseURL,
      timeout: 30000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Add request interceptor for error handling
    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error("API Error:", error);
        return Promise.reject(error);
      }
    );
  }

  /**
   * Download video from URL
   * @param url - Video URL
   * @returns Promise with video data
   */
  async downloadVideo(url: string): Promise<DownloadResponse> {
    try {
      const response = await this.api.post<DownloadResponse>("/download", {
        url,
      });
      return response.data;
    } catch (error) {
      console.error("Download error:", error);
      return {
        success: false,
        error: "Failed to download video. Please try again.",
      };
    }
  }

  /**
   * Get video information without downloading
   * @param url - Video URL
   * @returns Promise with video metadata
   */
  async getVideoInfo(url: string): Promise<DownloadResponse> {
    try {
      const response = await this.api.post<DownloadResponse>("/video-info", {
        url,
      });
      return response.data;
    } catch (error) {
      console.error("Video info error:", error);
      return {
        success: false,
        error: "Failed to fetch video information.",
      };
    }
  }

  /**
   * Get supported platforms
   */
  async getSupportedPlatforms() {
    try {
      const response = await this.api.get("/platforms");
      return response.data;
    } catch (error) {
      console.error("Platforms error:", error);
      return { platforms: [] };
    }
  }

  /**
   * Health check endpoint
   */
  async healthCheck(): Promise<boolean> {
    try {
      const response = await this.api.get("/health");
      return response.status === 200;
    } catch (error) {
      return false;
    }
  }
}

export default new ApiService();
