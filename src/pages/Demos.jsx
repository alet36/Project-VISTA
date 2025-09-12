import { useState } from "react";

export default function Demos() {
  // State for OCR
  const [ocrResult, setOcrResult] = useState("");

  const handleOcrUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setOcrResult(`Scanned text from "${file.name}" (placeholder)`);
    }
  };

  // State for Prediction
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handlePredict = () => {
    // Mock prediction logic
    setOutput(`Prediction result for "${input}": Class A ✅`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Interactive Demos</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* OCR Demo */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-2">🔤 OCR Demo</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Upload an image to extract text.
          </p>
          <input
            type="file"
            accept="image/*"
            onChange={handleOcrUpload}
            className="mb-4"
          />
          {ocrResult && (
            <div className="mt-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
              {ocrResult}
            </div>
          )}
        </div>

        {/* Vision Demo */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-2">🖐️ Vision Demo</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Live gesture recognition demo (placeholder).
          </p>
          <div className="w-full h-40 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
            [ Webcam Feed Placeholder ]
          </div>
        </div>

        {/* Prediction Demo */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-2">📈 Prediction Demo</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Enter a value to see the model’s prediction.
          </p>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter data..."
            className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          />

          <button
            onClick={handlePredict}
            className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded-lg shadow hover:bg-cyan-600"
          >
            Run Prediction
          </button>

          {output && (
            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              {output}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
