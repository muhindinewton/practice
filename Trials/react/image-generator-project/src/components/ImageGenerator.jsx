// src/components/ImageGenerator.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './styles/ImageGenerator.css';

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [orientation, setOrientation] = useState('landscape');

  // Preload image function
  const preloadImage = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(url);
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = url;
    });
  };

  const generateImage = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
      const response = await axios.post(`${apiUrl}/api/generate`, {
        prompt,
        orientation
      });
      
      // Start loading thumbnail immediately
      setImageData({
        ...response.data,
        currentUrl: response.data.thumb_url
      });

      try {
        // Preload the larger image
        await preloadImage(response.data.image_url);
        // Once loaded, switch to the larger image
        setImageData({
          ...response.data,
          currentUrl: response.data.image_url
        });
      } catch (loadError) {
        console.error('Failed to load full image:', loadError);
        // Keep showing thumbnail if full image fails
      }
    } catch (err) {
      console.error('Image generation error:', err);
      setError(
        err.response?.data?.detail || 
        err.message || 
        'Failed to generate image. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="image-generator">
      <div className="input-container">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter what kind of image you're looking for..."
          className="prompt-input"
        />
        <div className="options-container">
          <select
            value={orientation}
            onChange={(e) => setOrientation(e.target.value)}
            className="orientation-select"
          >
            <option value="landscape">Landscape</option>
            <option value="portrait">Portrait</option>
            <option value="squarish">Square</option>
          </select>
          <button 
            onClick={generateImage}
            disabled={loading}
            className="generate-button"
          >
            {loading ? 'Searching...' : 'Search Image'}
          </button>
        </div>
      </div>
      
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
      
      {imageData && (
        <div className="image-container">
          <img 
            src={imageData.currentUrl} 
            alt={`Photo by ${imageData.photographer}`} 
            className="generated-image"
          />
          <div className="image-credit">
            Photo by <a href={imageData.photo_link} target="_blank" rel="noopener noreferrer">
              {imageData.photographer}
            </a> on Unsplash
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;