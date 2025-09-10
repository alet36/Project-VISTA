import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [theme, setTheme] = useState("minimal");

  const themes = {
    minimal: {
      bg: "bg-gradient-to-br from-minimal-bg to-white",
      text: "text-minimal-primary",
      accent: "text-minimal-accent",
      button: "bg-minimal-accent text-white hover:opacity-90",
      card: "bg-white shadow-xl border border-gray-200",
      font: "font-futuristic",
      label: "Futuristic Minimal",
    },
    friendly: {
      bg: "bg-gradient-to-br from-orange-100 to-fuchsia-50",
      text: "text-friendly-primary",
      accent: "text-friendly-accent",
      button: "bg-friendly-accent text-white hover:brightness-110",
      card: "bg-orange-50 shadow-lg border border-orange-200",
      font: "font-friendly",
      label: "Friendly & Accessible",
    },
    hacker: {
      bg: "bg-gradient-to-br from-black to-hacker-bg",
      text: "text-hacker-primary",
      accent: "text-hacker-accent",
      button: "bg-hacker-accent text-black hover:scale-105",
      card: "bg-hacker-bg shadow-lg border border-green-400/20",
      font: "font-hacker",
      label: "Dark Pro / Hacker",
    },
  };

  const active = themes[theme];

  return (
    <div className={`${active.bg} min-h-screen transition-all duration-700`}>
      <header className="flex justify-between items-center p-6">
        <h1 className={`${active.font} ${active.text} text-2xl font-bold`}>
          Project VISTA
        </h1>
        <div className="flex gap-2">
          {Object.keys(themes).map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className="px-3 py-1 text-sm rounded-lg border hover:scale-105 transition"
            >
              {themes[t].label}
            </button>
          ))}
        </div>
      </header>

      <main className="flex flex-col items-center justify-center px-6 text-center">
        {/* Hero */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${active.font} ${active.text} text-5xl font-extrabold mt-16`}
        >
          See the World Differently
        </motion.h2>
        <p className={`${active.text} max-w-xl mt-6`}>
          A wearable assistive system powered by computer vision and OCR,
          designed to empower accessibility.
        </p>
        <div className="mt-8 flex gap-4">
          <button className={`${active.button} px-6 py-3 rounded-xl font-semibold`}>
            Get Started
          </button>
          <button className={`px-6 py-3 rounded-xl border ${active.accent}`}>
            Learn More
          </button>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 w-full max-w-5xl">
          {["Vision", "OCR", "Gesture Control"].map((feat, i) => (
            <motion.div
              key={feat}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`${active.card} rounded-2xl p-6`}
            >
              <h3 className={`${active.accent} text-xl font-bold mb-2`}>
                {feat}
              </h3>
              <p className={active.text}>
                {feat} is seamlessly integrated into Project VISTA to ensure
                usability, speed, and innovation.
              </p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
