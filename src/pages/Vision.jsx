// pages/Vision.jsx
import React, { useState } from "react";

export default function Vision() {
  const [activeSection, setActiveSection] = useState("intro");

  const sections = [
    { id: "intro", label: "Intro" },
    { id: "steps", label: "Steps" },
    { id: "demo", label: "Demo" },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "intro":
        return (
          <p>
            Computer vision with CNNs allows systems to process and interpret 
            images. Tasks like classification, detection, and recognition are 
            core applications of machine vision.
          </p>
        );
      case "steps":
        return (
          <ol className="list-decimal list-inside space-y-2">
            <li>Collect and label a dataset of images.</li>
            <li>Preprocess images (resize, normalize, augment).</li>
            <li>Train CNN models for classification or detection.</li>
            <li>Deploy the model to make predictions on new images.</li>
          </ol>
        );
      case "demo":
        return (
          <div className="p-6 bg-gray-200 dark:bg-gray-700 rounded-2xl">
            [Vision demo placeholder — e.g., object detection live demo]
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-4 gap-8">
      {/* Sidebar */}
      <aside className="col-span-1 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 h-fit sticky top-24">
        <ul className="space-y-4 text-lg font-medium">
          {sections.map((s) => (
            <li
              key={s.id}
              className={`cursor-pointer px-2 py-1 rounded-xl transition ${
                activeSection === s.id
                  ? "bg-cyan-500 text-white shadow"
                  : "text-gray-700 dark:text-gray-300 hover:bg-cyan-100 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveSection(s.id)}
            >
              {s.label}
            </li>
          ))}
        </ul>

      </aside>

      {/* Main content */}
      <section className="col-span-3">
        <h1 className="text-3xl font-bold mb-6">Machine Vision</h1>
        {renderSection()}
      </section>
    </div>
  );
}
