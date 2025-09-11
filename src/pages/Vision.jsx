// pages/Vision.jsx
import { useState } from "react";

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
        return <p>Intro to machine vision and CNNs goes here.</p>;
      case "steps":
        return <p>Breakdown of the model pipeline and implementation steps.</p>;
      case "demo":
        return <div>[Interactive Vision Demo Placeholder]</div>;
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
              className={`cursor-pointer px-2 py-1 rounded-xl ${
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
        <h1 className="text-3xl font-bold mb-6">Machine Vision</h1>
        {renderSection()}
      </section>
    </div>
  );
}
