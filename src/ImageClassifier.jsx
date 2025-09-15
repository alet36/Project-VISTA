import React, { useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";

export default function ImageClassifier({ isDarkMode }) {
  const [image, setImage] = useState(null);
  const [predictions, setPredictions] = useState([]);

  const loadAndPredict = async (file) => {
    const model = await mobilenet.load();
    const imgElement = document.getElementById("preview");
    const preds = await model.classify(imgElement);
    setPredictions(preds);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setImage(imgUrl);
      loadAndPredict(file);
    }
  };

  return (
    <div
      className={`p-6 rounded-lg shadow-md ${
        isDarkMode ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      <h2
        className={`text-2xl font-semibold mb-4 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        🖼️ Image Classifier
      </h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="mb-4"
      />
      {image && (
        <img
          id="preview"
          src={image}
          alt="Uploaded"
          className="w-64 h-64 object-contain border mb-4"
        />
      )}
      {predictions.length > 0 && (
        <div
          className={`p-4 rounded ${
            isDarkMode ? "bg-gray-700" : "bg-green-50"
          }`}
        >
          <h3
            className={`text-lg font-bold mb-2 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Predictions:
          </h3>
          <ul>
            {predictions.map((p, i) => (
              <li
                key={i}
                className={isDarkMode ? "text-gray-300" : "text-gray-700"}
              >
                {p.className} — {(p.probability * 100).toFixed(2)}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
