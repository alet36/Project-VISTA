import React, { useState } from "react";

export default function CNNs() {
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
            Convolutional Neural Networks (CNNs) are a class of deep learning
            models primarily used for analyzing visual data. They use
            convolutional layers to automatically learn spatial hierarchies of
            features from input images.
          </p>
        );
      case "steps":
        return (
          <ol className="list-decimal list-inside space-y-2 text-gray-900 dark:text-gray-200">
            <li>Understand the structure of CNNs (layers, filters, pooling).</li>
            <li>Prepare a dataset for training.</li>
            <li>Build and train the model.</li>
            <li>Evaluate accuracy and optimize parameters.</li>
          </ol>
        );
      case "demo":
        return (
          <div className="p-6 rounded-2xl bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            [CNNs demo placeholder — e.g., simple image classification]
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
          Convolutional Neural Networks (CNNs)
        </h1>
        {renderSection()}
      </section>
    </div>
  );
}
