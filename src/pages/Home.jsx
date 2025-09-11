import React from "react";
import { motion } from "framer-motion";
import { Eye, Hand, Type, Cpu } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Hand className="w-8 h-8 text-cyan-500" />,
      title: "Gesture Recognition",
      description: "Control systems naturally with your hands."
    },
    {
      icon: <Type className="w-8 h-8 text-purple-500" />,
      title: "OCR & Text",
      description: "Read and extract text from the world around you."
    },
    {
      icon: <Cpu className="w-8 h-8 text-pink-500" />,
      title: "AI Powered",
      description: "Smart CNN models process vision in real time."
    },
    {
      icon: <Eye className="w-8 h-8 text-green-500" />,
      title: "Accessibility",
      description: "Designed to empower and include everyone."
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-transparent blur-3xl" />
        <div className="relative grid md:grid-cols-2 gap-8 px-10 py-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              See the world differently.
            </h1>
            <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
              An assistive system powered by AI, gestures, and vision.
            </p>
            <div className="space-x-4">
              <button className="px-6 py-3 bg-cyan-500 text-white rounded-xl shadow-md hover:bg-cyan-600">
                Try the Demo
              </button>
              <button className="px-6 py-3 border border-cyan-500 text-cyan-500 rounded-xl hover:bg-cyan-50 dark:hover:bg-gray-800">
                Learn More
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="w-80 h-52 md:w-[400px] md:h-[250px] rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">[ Demo Mockup ]</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-10 py-20 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 hover:shadow-lg hover:scale-105 transition"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
