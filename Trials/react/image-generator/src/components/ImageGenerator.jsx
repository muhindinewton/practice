import React, { useState } from "react";
import { DownloadIcon, ImageIcon, Loader2 } from "lucide-react";

export default function ImageGenerator({ setGalleryImages }) {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [orientation, setOrientation] = useState("landscape");

  const generateImage = async () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt first");
      return;
    }

    setLoading(true);
    setImage(null);
    setShowSaveButton(false);

    try {
      const response = await fetch(`http://localhost:5000/api/unsplash?query=${encodeURIComponent(prompt)}&orientation=${orientation}`);
      if (!response.ok) throw new Error('Failed to fetch image');
      const data = await response.json();
      
      setImage(data.urls.regular);
      setShowSaveButton(true);
    } catch (error) {
      console.error('Error generating image:', error);
      alert('Failed to generate image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const saveToGallery = () => {
    const gallery = JSON.parse(localStorage.getItem("gallery")) || [];
    gallery.unshift(image);
    localStorage.setItem("gallery", JSON.stringify(gallery));
    setGalleryImages(gallery);
    setShowSaveButton(false); // hide the button after saving
  };

  const downloadImage = async () => {
    try {
      const response = await fetch(image);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${prompt.replace(/\s+/g, "_") || "generated_image"}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download image:", error);
      alert("Could not download image. Please try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex gap-2 mb-4 flex-col">
        <div className="flex gap-2">
          <select
            value={orientation}
            onChange={(e) => setOrientation(e.target.value)}
            className="p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="landscape">Landscape</option>
            <option value="portrait">Portrait</option>
          </select>
        <input
          type="text"
          placeholder="Enter image description..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="flex-1 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={generateImage}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
          disabled={!prompt.trim() || loading}
        >
          {loading ? "Generating..." : "Generate"}
        </button>
        </div>
      </div>

      {loading && (
        <Loader2 className="animate-spin mx-auto mt-4 text-blue-600" size={32} />
      )}

      {image && (
        <div className="mt-6 space-y-4 text-center">
          <img
            src={image}
            alt="Generated"
            className={`w-full rounded-lg shadow-lg ${orientation === 'portrait' ? 'max-h-[80vh] object-contain mx-auto' : ''}`}
          />
          <div className="flex justify-center gap-6">
            <button
              onClick={downloadImage}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              <DownloadIcon size={18} /> Download
            </button>
            {showSaveButton && (
              <button
                onClick={saveToGallery}
                className="flex items-center gap-2 text-green-600 hover:text-green-800"
              >
                <ImageIcon size={18} /> Save to Gallery
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
