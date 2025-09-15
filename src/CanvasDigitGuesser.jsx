import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";

export default function CanvasDigitGuesser({ isDarkMode }) {
  const canvasRef = useRef(null);
  const [prediction, setPrediction] = useState(null);
  const [drawing, setDrawing] = useState(false);
  const [model, setModel] = useState(null);

  // Load MNIST model once
  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await tf.loadLayersModel(
        "https://storage.googleapis.com/tfjs-models/tfjs/mnist/model.json"
      );
      setModel(loadedModel);
    };
    loadModel();
  }, []);

  const startDrawing = (e) => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineWidth = 20;
    ctx.lineCap = "round";
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setDrawing(true);
  };

  const draw = (e) => {
    if (!drawing) return;
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const stopDrawing = () => {
    setDrawing(false);
  };

  const clearCanvas = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setPrediction(null);
  };

  const predictDigit = async () => {
    if (!model) return;
    const ctx = canvasRef.current.getContext("2d");
    let imageData = ctx.getImageData(0, 0, 280, 280);

    let img = tf.browser.fromPixels(imageData, 1)
      .resizeNearestNeighbor([28, 28])
      .toFloat()
      .div(255.0)
      .expandDims(0);

    const predictions = model.predict(img);
    const predictedValue = predictions.argMax(1).dataSync()[0];
    setPrediction(predictedValue);
  };

  return (
    <div className="p-6">
      <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
        ✍️ Handwritten Digit Guesser
      </h2>
      <canvas
        ref={canvasRef}
        width={280}
        height={280}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        className={`border ${isDarkMode ? "border-gray-600 bg-black" : "border-gray-300 bg-black"}`}
      />
      <div className="mt-4 flex gap-2">
        <button
          onClick={predictDigit}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        >
          Predict
        </button>
        <button
          onClick={clearCanvas}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
        >
          Clear
        </button>
      </div>
      {prediction !== null && (
        <p className={`mt-4 text-xl font-semibold ${isDarkMode ? "text-green-400" : "text-green-700"}`}>
          Prediction: {prediction}
        </p>
      )}
    </div>
  );
}
