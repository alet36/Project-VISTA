import React, { useState } from "react";

export default function OCR() {
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
            Optical Character Recognition (OCR) with CNNs lets systems detect
            and extract text from images, enabling accessibility and automation.
          </p>
        );
      case "steps":
        return (
          <ol className="list-decimal list-inside space-y-2 text-gray-900 dark:text-gray-200">
            <li>Collect labeled text-in-image datasets.</li>
            <li>Preprocess by normalizing and segmenting characters.</li>
            <li>Train CNNs to recognize letters and words.</li>
            <li>Evaluate performance and handle edge cases.</li>
          </ol>
        );
      case "demo":
        return (
          <div className="p-6 rounded-2xl bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            [OCR demo placeholder — upload image → text output]
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
          Optical Character Recognition (OCR)
        </h1>
        {renderSection()}
      </section>
    </div>
  );
}
