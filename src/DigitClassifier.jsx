import React, { useRef, useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';

const MODEL_URL = 'https://storage.googleapis.com/tfjs-models/tfjs/mnist/model.json';

const DigitClassifier = () => {
  const canvasRef = useRef(null);
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load model
  useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedModel = await tf.loadLayersModel(MODEL_URL);
        setModel(loadedModel);
      } catch (error) {
        console.error("Error loading model:", error);
      } finally {
        setLoading(false);
      }
    };
    loadModel();
  }, []);

  // Canvas drawing setup
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let drawing = false;

    const startDraw = (e) => {
      drawing = true;
      draw(e);
    };

    const endDraw = () => {
      drawing = false;
      ctx.beginPath();
    };

    const draw = (e) => {
      if (!drawing) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ctx.lineWidth = 20;
      ctx.lineCap = 'round';
      ctx.strokeStyle = 'white';
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);
    };

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mouseup', endDraw);
    canvas.addEventListener('mousemove', draw);

    return () => {
      canvas.removeEventListener('mousedown', startDraw);
      canvas.removeEventListener('mouseup', endDraw);
      canvas.removeEventListener('mousemove', draw);
    };
  }, []);

  const handlePredict = async () => {
    if (!model) return;

    const canvas = canvasRef.current;

    // Resize to 28x28
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = 28;
    tempCanvas.height = 28;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.drawImage(canvas, 0, 0, 28, 28);

    const imageData = tempCtx.getImageData(0, 0, 28, 28);
    const input = tf.browser.fromPixels(imageData, 1)
      .toFloat()
      .div(tf.scalar(255.0))
      .reshape([1, 28, 28, 1]);

    const output = model.predict(input);
    const result = await output.data();

    const predictedDigit = result.indexOf(Math.max(...result));
    const confidenceScore = Math.max(...result) * 100;

    setPrediction(predictedDigit);
    setConfidence(confidenceScore.toFixed(2));
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setPrediction(null);
    setConfidence(null);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h4 className="text-lg font-semibold mb-2">Draw a digit below</h4>

      <canvas
        ref={canvasRef}
        width={280}
        height={280}
        style={{
          border: '2px solid #ccc',
          backgroundColor: 'black',
          cursor: 'crosshair',
          imageRendering: 'pixelated',
        }}
      />

      <div style={{ marginTop: '10px' }}>
        <button
          onClick={handlePredict}
          disabled={loading}
          className={`px-4 py-2 rounded ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          } text-white`}
        >
          {loading ? 'Loading Model...' : 'Predict'}
        </button>
        <button
          onClick={handleClear}
          className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Clear
        </button>
      </div>

      {prediction !== null && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded shadow-md inline-block">
          <strong>Predicted Digit:</strong>{' '}
          <span className="text-2xl font-bold">{prediction}</span>
          <br />
          <strong>Confidence:</strong> {confidence}%
        </div>
      )}
    </div>
  );
};

export default DigitClassifier;
