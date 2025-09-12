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
          <p className="text-gray-900 dark:text-gray-200">
            Computer vision uses CNNs to process and understand images,
            enabling tasks like object detection, segmentation, and
            classification.
          </p>
        );
      case "steps":
        return (
          <ol className="list-decimal list-inside space-y-2 text-gray-900 dark:text-gray-200">
            <li>Acquire and label image data.</li>
            <li>Preprocess inputs (resize, normalize, augment).</li>
            <li>Train CNNs to detect patterns and objects.</li>
            <li>Deploy the model for real-world applications.</li>
          </ol>
        );
      case "demo":
        return (
          <div className="p-6 rounded-2xl bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            [Vision demo placeholder — e.g., object detection]
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
        <ul className="space-y-4 text-lg font-medium text-gray-900 dark:text-white">
          {sections.map((s) => (
            <li
              key={s.id}
              className={`cursor-pointer px-2 py-1 rounded-xl transition ${
                activeSection === s.id
                  ? "bg-cyan-500 text-white shadow"
                  : "hover:bg-cyan-100 dark:hover:bg-gray-700"
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
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Vision
        </h1>
        {renderSection()}
      </section>
    </div>
  );
}
