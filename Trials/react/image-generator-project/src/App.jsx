import React from 'react';
import ImageGenerator from './components/ImageGenerator';
import './components/styles/ImageGenerator.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>AI Image Generator</h1>
        <p>Generate images using AI</p>
      </header>
      <main className="app-main">
        <ImageGenerator />
      </main>
    </div>
  );
}

export default App;