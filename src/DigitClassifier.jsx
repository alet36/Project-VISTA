import React, { useRef, useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';

const MODEL_URL = 'https://storage.googleapis.com/tfjs-models/tfjs/mnist/model.json';

const DigitClassifier = () => {
  const canvasRef = useRef(null);
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await tf.loadLayersModel(MODEL_URL);
      setModel(loadedModel);
    };
    loadModel();
  }, []);

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
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = 28;
    tempCanvas.height = 28;
    const tempCtx = tempCanvas.getContext('2d');

    // Resize and get image data
    tempCtx.drawImage(canvas, 0, 0, 28, 28);
    const imageData = tempCtx.getImageData(0, 0, 28, 28);

    const input = tf.browser.fromPixels(imageData, 1)
      .reshape([1, 28, 28, 1])
      .div(255.0);

    const output = model.predict(input);
    const result = output.argMax(1);
    const digit = (await result.data())[0];

    setPrediction(digit);
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setPrediction(null);
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
        <button onClick={handlePredict} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Predict
        </button>
        <button onClick={handleClear} className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
          Clear
        </button>
      </div>
      {prediction !== null && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded shadow-md inline-block">
          <strong>Predicted Digit:</strong> {prediction}
        </div>
      )}
    </div>
  );
};

export default DigitClassifier;
