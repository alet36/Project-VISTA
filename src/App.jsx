import React, { useState } from "react";
import { motion } from "framer-motion";

// Ripple button component
const RippleButton = ({ children, className }) => {
  const [ripples, setRipples] = useState([]);

  const createRipple = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };

    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <button
      onClick={createRipple}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute bg-white/40 rounded-full animate-ripple"
          style={{
            left: r.x,
            top: r.y,
            transform: "translate(-50%, -50%)",
            width: "200px",
            height: "200px",
          }}
        />
      ))}
    </button>
  );
};

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
    <div
      className={`${active.bg} min-h-screen transition-all duration-700 relative overflow-hidden`}
    >
      {/* Floating orbs background */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-pink-400/30 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-60 h-60 bg-blue-400/30 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      {/* Header */}
      <header className="flex justify-between items-center p-6 relative z-10">
        <h1 className={`${active.font} ${active.text} text-2xl font-bold`}>
          Project VISTA
        </h1>
        <div className="flex gap-2">
          {Object.keys(themes).map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className="px-3 py-1 text-sm rounded-lg border hover:scale-105 transition bg-white/50 backdrop-blur"
            >
              {themes[t].label}
            </button>
          ))}
        </div>
      </header>

      {/* Hero */}
      <main className="flex flex-col items-center justify-center px-6 text-center relative z-10">
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
          <RippleButton
            className={`${active.button} px-6 py-3 rounded-xl font-semibold`}
          >
            Get Started
          </RippleButton>
          <RippleButton
            className={`px-6 py-3 rounded-xl border ${active.accent}`}
          >
            Learn More
          </RippleButton>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 w-full max-w-5xl">
          {["Vision", "OCR", "Gesture Control"].map((feat, i) => (
            <motion.div
              key={feat}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`${active.card} rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 relative`}
            >
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-white/10 opacity-0 hover:opacity-100 transition" />
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

