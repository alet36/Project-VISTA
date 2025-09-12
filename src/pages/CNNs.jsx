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

      {/
