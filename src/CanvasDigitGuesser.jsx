import React, { useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";

export default function CanvasDigitGuesser({ isDarkMode }) {
  const canvasRef = useRef(null);
  const [prediction, setPrediction] = useState(null);

  // Example: load a pretrained model
  const loadModel = async () => {
    const model = await tf.loadLayersModel("/model.json"); 
    return model;
  };

  const predictDigit = async () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // get image data from canvas and preprocess
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let tensor = tf.browser.fromPixels(imageData, 1) // grayscale
      .resizeNearestNeighbor([28, 28]) // MNIST size
      .toFloat()
      .div(255.0)
      .expandDims(0);

    const model = await loadModel();
    const predictionTensor = model.predict(tensor);
    const predictionArray = predictionTensor.arraySync()[0];
    const predictedDigit = predictionArray.indexOf(Math.max(...predictionArray));

    setPrediction(predictedDigit);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <canvas
        ref={canvasRef}
        width={200}
        height={200}
        className="border border-gray-400 bg-white dark:bg-gray-800"
      />
      <button
        onClick={predictDigit}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Predict Digit
      </button>
      {prediction !== null && (
        <p className="text-lg font-bold">
          Prediction: <span className="text-green-500">{prediction}</span>
        </p>
      )}
    </div>
  );
}
