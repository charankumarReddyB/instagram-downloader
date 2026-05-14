/**
 * Mock API Service
 * Provides mock responses for development and testing
 */

export const getMockVideoData = () => {
  const mockData = {
    id: "mock-" + Math.random().toString(36).substr(2, 9),
    title: "Amazing Instagram Reel",
    duration: 15,
    thumbnail:
      "https://images.unsplash.com/photo-1611339555312-e607c25352ba?w=500&h=500&fit=crop",
    platform: "instagram",
    quality: "1080p",
    size: 25482240, // ~24 MB
    downloadUrl: "#",
  };

  return mockData;
};

export const mockDownloadVideo = async (_url: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: getMockVideoData(),
        message: "Video processed successfully",
      });
    }, 2000);
  });
};

export const mockGetVideoInfo = async (_url: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: getMockVideoData(),
      });
    }, 1000);
  });
};

export const mockPlatforms = [
  {
    name: "Instagram Reels",
    icon: "Instagram",
    status: "available",
    description: "Download Instagram Reels in HD",
  },
  {
    name: "TikTok",
    icon: "Music",
    status: "coming",
    description: "TikTok videos (Coming Soon)",
  },
  {
    name: "YouTube Shorts",
    icon: "Video",
    status: "coming",
    description: "YouTube Shorts (Coming Soon)",
  },
  {
    name: "Facebook Videos",
    icon: "Facebook",
    status: "coming",
    description: "Facebook Videos (Coming Soon)",
  },
  {
    name: "Twitter/X Videos",
    icon: "Twitter",
    status: "coming",
    description: "Twitter/X Videos (Coming Soon)",
  },
];
