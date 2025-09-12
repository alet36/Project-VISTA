import React, { useState } from "react";

export default function OCR() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");

  const handleUpload = (e) => {
    const uploaded = e.target.files[0];
    setFile(URL.createObjectURL(uploaded));
    // Placeholder text result
    setText("Extracted text will appear here...");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">📝 OCR Demo</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Upload an image to extract text using Optical Character Recognition.
        </p>

        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="mb-4"
        />

        {file && (
          <div className="mt-4">
            <img src={file} alt="Uploaded" className="max-h-64 rounded-lg" />
            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              {text}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
