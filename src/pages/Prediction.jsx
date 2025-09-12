import React from "react";

export default function CNNs() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
        Convolutional Neural Networks (CNNs)
      </h1>

      {/* Intro */}
      <p className="text-lg text-gray-900 dark:text-gray-200">
        Convolutional Neural Networks (CNNs) are a class of deep learning models
        primarily used for analyzing visual data. They use convolutional layers
        to automatically learn spatial hierarchies of features from input images.
      </p>

      {/* Steps */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Steps to Build a CNN
        </h2>
        <ul className="list-disc pl-6 text-gray-900 dark:text-gray-200">
          <li>Understand the structure of CNNs (layers, filters, pooling).</li>
          <li>Prepare a dataset for training.</li>
          <li>Build and train the model.</li>
          <li>Evaluate accuracy and optimize parameters.</li>
        </ul>
      </div>

      {/* Demo Section */}
      <section className="p-6 rounded-xl shadow-md bg-gray-100 dark:bg-gray-800">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Interactive Demo
        </h2>
        <p className="text-gray-900 dark:text-gray-200 mb-4">
          Explore how CNNs classify images with a simplified interactive tool.
        </p>
        <button className="px-6 py-3 bg-cyan-500 text-white rounded-xl shadow-md hover:bg-cyan-600">
          Try CNN Demo
        </button>
      </section>
    </div>
  );
}
