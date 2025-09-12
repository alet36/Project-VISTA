import React, { useRef, useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';

const MODEL_URL = 'https://storage.googleapis.com/tfjs-models/tfjs/mnist/model.json';

const DigitClassifier = () => {
  const canvasRef = useRef(null);
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState(null);

  // Load model on mount
  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await tf.loadLayersModel(MODEL_URL);
      setModel(loadedModel);
    };
    loadModel();
  }, []);

  // Draw on canvas
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
      ctx.lineWidth = 10;
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
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, 28, 28);

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
      <h2>MNIST Digit Classifier</h2>
      <canvas
        ref={canvasRef}
        width={28}
        height={28}
        style={{ border: '1px solid #ccc', imageRendering: 'pixelated', cursor: 'crosshair' }}
      />
      <div style={{ marginTop: '10px' }}>
        <button onClick={handlePredict}>Predict</button>
        <button onClick={handleClear} style={{ marginLeft: '10px' }}>Clear</button>
      </div>
      {prediction !== null && (
        <h3>Predicted Digit: {prediction}</h3>
      )}
    </div>
  );
};

export default DigitClassifier;
