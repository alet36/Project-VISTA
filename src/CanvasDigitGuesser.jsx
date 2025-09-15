import React, { useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";

export default function CanvasDigitGuesser({ isDarkMode }) {
  const canvasRef = useRef(null);
  const [prediction, setPrediction] = useState(null);

  // Load MNIST model from tfjs
  const loadModel = async () => {
    const model = await tf.loadLayersModel(
      "https://storage.googleapis.com/tfjs-models/tfjs/mnist/model.json"
    );
    return model;
  };

  const handlePredict = async () => {
    const model = await loadModel();
    const ctx = canvasRef.current.getContext("2d");

    // Preprocess
    const imageData = ctx.getImageData(0, 0, 280, 280);
    let img = tf.browser.fromPixels(imageData, 1);
    img = tf.image.resizeBilinear(img, [28, 28]);
    img = img.reshape([1, 28, 28, 1]);
    img = tf.cast(img, "float32").div(255.0);

    const output = model.predict(img);
    const predictions = output.argMax(1).dataSync();
    setPrediction(predictions[0]);
  };

  const clearCanvas = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 280, 280);
    setPrediction(null);
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
        ✍️ Handwritten Digit Guesser
      </h2>
      <canvas
        ref={canvasRef}
        width={280}
        height={280}
        style={{ border: "2px solid gray", background: "black" }}
        onMouseDown={(e) => {
          const ctx = canvasRef.current.getContext("2d");
          ctx.lineWidth = 20;
          ctx.lineCap = "round";
          ctx.strokeStyle = "white";
          ctx.beginPath();
          canvasRef.current.isDrawing = true;
          ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        }}
        onMouseMove={(e) => {
          if (!canvasRef.current.isDrawing) return;
          const ctx = canvasRef.current.getContext("2d");
          ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          ctx.stroke();
        }}
        onMouseUp={() => {
          canvasRef.current.isDrawing = false;
        }}
      />
      <div className="mt-4 flex space-x-4">
        <button
          onClick={handlePredict}
          className={`px-4 py-2 rounded ${
            isDarkMode
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Predict
        </button>
        <button
          onClick={clearCanvas}
          className={`px-4 py-2 rounded ${
            isDarkMode
              ? "bg-gray-600 hover:bg-gray-700 text-white"
              : "bg-gray-400 hover:bg-gray-500 text-white"
          }`}
        >
          Clear
        </button>
      </div>
      {prediction !== null && (
        <p
          className={`mt-4 text-lg font-bold ${
            isDarkMode ? "text-green-400" : "text-green-600"
          }`}
        >
          Prediction: {prediction}
        </p>
      )}
    </div>
  );
}
