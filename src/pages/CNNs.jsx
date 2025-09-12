import { useState } from "react";

export default function CNNs() {
  const [activeTab, setActiveTab] = useState("definition");

  const tabs = {
    definition: "Convolutional Neural Networks (CNNs) are a class of deep neural networks commonly used for analyzing visual imagery...",
    vision: "CNNs are the backbone of machine vision. They allow computers to identify patterns and features in images...",
    prediction: "By training CNNs on large datasets, we can predict and classify objects in real time...",
    demo: "This section will eventually host an interactive CNN demo (coming soon!)."
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Convolutional Neural Networks</h2>

      {/* Tabs */}
      <div className="flex space-x-4 border-b border-gray-300 dark:border-gray-700 mb-6">
        {Object.keys(tabs).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`pb-2 capitalize ${
              activeTab === key
                ? "border-b-2 border-blue-600 font-semibold"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <p className="text-lg leading-relaxed">{tabs[activeTab]}</p>
    </div>
  );
}
