import React, { useState } from "react";

export default function Vision() {
  const [detected, setDetected] = useState("No input detected");

  const handleDetect = () => {
    // Placeholder: randomly picks a gesture
    const gestures = ["Thumbs Up 👍", "Peace ✌️", "Wave 👋"];
    setDetected(`Detected: ${gestures[Math.floor(Math.random() * gestures.length)]}`);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">👁️ Vision Demo</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Simulated gesture recognition using a live camera feed.
        </p>

        <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <span className="text-gray-600 dark:text-gray-300">[ Webcam Placeholder ]</span>
        </div>

        <button
          onClick={handleDetect}
          className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded-lg shadow hover:bg-cyan-600"
        >
          Run Detection
        </button>

        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          {detected}
        </div>
      </div>
    </div>
  );
}
