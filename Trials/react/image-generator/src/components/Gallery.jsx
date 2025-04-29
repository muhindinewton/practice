import React from "react";
import { DownloadIcon, Trash2Icon } from "lucide-react";

export default function Gallery({ images, onDelete }) {
  if (images.length === 0) return null;

  const downloadImage = async (imageUrl, index) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `gallery_image_${index}.png`;
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
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md space-y-4">
            <img
              src={img}
              alt={`Generated ${index}`}
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="flex justify-center gap-6">
              <button
                onClick={() => downloadImage(img, index)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                <DownloadIcon size={18} /> Download
              </button>
              <button
                onClick={() => onDelete(index)}
                className="flex items-center gap-2 text-red-600 hover:text-red-800"
              >
                <Trash2Icon size={18} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
