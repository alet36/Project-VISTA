import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Eye, Hand, Type, Cpu, Accessibility } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={
        dark
          ? "bg-gray-950 text-white transition-colors duration-500"
          : "bg-gray-50 text-gray-900 transition-colors duration-500"
      }
    >
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 shadow-md bg-opacity-80 backdrop-blur-md">
        <div className="flex items-center space-x-2 font-bold text-xl">
          <Eye className="w-6 h-6 text-cyan-500" />
          <span>VISTA</span>
        </div>
        <nav className="hidden md:flex space-x-6 font-medium">
          {["Home", "Features", "Demo", "About", "Contact"].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              className="cursor-pointer hover:text-cyan-500"
            >
              {item}
            </a>
          ))}
        </nav>
        <button onClick={() => setDark(!dark)}>
          {dark ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-cyan-500" />
          )}
        </button>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-transparent blur-3xl" />
        <div className="relative grid md:grid-cols-2 gap-8 px-10 py-24 items-center">
          {/* Left column */}
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
            <div className="flex space-x-4">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl px-6 py-3 shadow-lg">
                Try the Demo
              </Button>
              <Button
                variant="outline"
                className="rounded-xl border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-50 dark:hover:bg-gray-800"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Right column (mockup placeholder) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="w-80 h-56 rounded-2xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center shadow-2xl">
              <span className="text-gray-500 dark:text-gray-400">
                [ Demo Mockup ]
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-10 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: <Hand className="w-10 h-10 text-cyan-500" />, title: "Gesture Control", desc: "Navigate with intuitive hand movements." },
            { icon: <Type className="w-10 h-10 text-cyan-500" />, title: "OCR", desc: "Read text instantly from any surface." },
            { icon: <Cpu className="w-10 h-10 text-cyan-500" />, title: "AI-Powered", desc: "Smart recognition that adapts to you." },
            { icon: <Accessibility className="w-10 h-10 text-cyan-500" />, title: "Accessibility", desc: "Designed for inclusivity and ease of use." }
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl shadow-md p-6 bg-white dark:bg-gray-800 transition-colors duration-500"
            >
              <div className="flex flex-col items-center space-y-4 text-center">
                {f.icon}
                <h3 className="font-semibold text-lg">{f.title}</h3>
