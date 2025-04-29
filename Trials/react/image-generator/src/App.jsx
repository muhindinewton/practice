import React, { useState } from "react";
import ImageGenerator from "./components/ImageGenerator";
import Gallery from "./components/Gallery";

export default function App() {
  const [galleryImages, setGalleryImages] = useState(
    JSON.parse(localStorage.getItem("gallery")) || []
  );

  const handleDelete = (index) => {
    const updated = [...galleryImages];
    updated.splice(index, 1); // Remove the image at that index
    setGalleryImages(updated);
    localStorage.setItem("gallery", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 text-center">
      <h1 className="text-3xl font-bold mb-6">Text-to-Image Generator</h1>
      <ImageGenerator setGalleryImages={setGalleryImages} />
      <Gallery images={galleryImages} onDelete={handleDelete} />
    </div>
  );
}
