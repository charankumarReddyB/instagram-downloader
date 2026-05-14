/**
 * Main App Component
 */

import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import ReelPreview from "./pages/ReelPreview";
import Features from "./pages/Features";
import SupportedPlatforms from "./pages/SupportedPlatforms";
import HowItWorks from "./pages/HowItWorks";
import FAQ from "./pages/FAQ";
import { toast } from "./components/Toast";
import { mockDownloadVideo } from "./services/mockApi";

function App() {
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleDownload = async (url: string) => {
    setLoading(true);
    toast.info("Processing your video...");

    try {
      // Using mock API for demonstration
      // In production, this would call the real backend API
      const response = await mockDownloadVideo(url) as any;

      if (response?.success) {
        setSelectedVideo(response?.data);
        toast.success("Video processed successfully!");

        // Scroll to preview section
        setTimeout(() => {
          document.querySelector("#preview")?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        toast.error("Failed to process video. Please try again.");
      }
    } catch (error) {
      console.error("Download error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark">
      <Toaster position="bottom-right" />
      <Navbar />

      <main>
        <Hero onDownload={handleDownload} loading={loading} />
        {selectedVideo && <ReelPreview video={selectedVideo} />}
        <Features />
        <SupportedPlatforms />
        <HowItWorks />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;
