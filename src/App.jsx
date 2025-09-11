import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Hand, Type, Cpu, Accessibility, Sun, Moon } from "lucide-react";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={
        dark
          ? "bg-gray-900 text-white transition-colors duration-500"
          : "bg-white text-gray-900 transition-colors duration-500"
      }
    >
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 shadow-md bg-opacity-80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2 font-bold text-xl"
        >
          <Eye className="w-6 h-6 text-cyan-500" />
          <span>Project VISTA</span>
        </motion.div>
        <nav className="hidden md:flex space-x-6 font-medium">
          {["Home", "Features", "Demo", "About", "Contact"].map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1, color: "#06b6d4" }}
              className="cursor-pointer"
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <motion.button whileHover={{ rotate: 15 }} onClick={() => setDark(!dark)}>
          {dark ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-cyan-500" />
          )}
        </motion.button>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden" id="home">
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
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition">
                Try the Demo
              </button>
              <button className="px-6 py-3 rounded-xl border border-cyan-500 text-cyan-500 font-semibold hover:bg-cyan-50 dark:hover:bg-gray-800 transition">
                Learn More
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-80 h-56 bg-gray-200 dark:bg-gray-700 rounded-2xl shadow-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-300">
                [Mockup / Animation]
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-10 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: <Hand className="w-10 h-10 text-cyan-500" />,
              title: "Gesture Control",
              desc: "Navigate with intuitive hand movements.",
            },
            {
              icon: <Type className="w-10 h-10 text-cyan-500" />,
              title: "OCR",
              desc: "Read text instantly from any surface.",
            },
            {
              icon: <Cpu className="w-10 h-10 text-cyan-500" />,
              title: "AI-Powered",
              desc: "Smart recognition that adapts to you.",
            },
            {
              icon: <Accessibility className="w-10 h-10 text-cyan-500" />,
              title: "Accessibility",
              desc: "Designed for inclusivity and ease of use.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl shadow-md p-6 bg-white dark:bg-gray-800 transition-colors duration-500"
            >
              <div className="flex flex-col items-center space-y-4 text-center">
                {f.icon}
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="px-10 py-20 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-8">Live Demo</h2>
        <div className="flex justify-center">
          <div className="w-full md:w-3/4 h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl shadow-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-300">[Demo Video / Iframe]</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-10 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-2xl shadow-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-300">[Graphic / Illustration]</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">About Project VISTA</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Project VISTA started with a simple mission: to empower people with
            accessible, AI-powered tools that enhance vision and interaction.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            We believe in clarity, inclusivity, and technology that adapts to
            humans—not the other way around.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <footer
        id="contact"
        className="px-10 py-12 bg-gray-100 dark:bg-gray-800 text-center"
      >
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <form className="max-w-xl mx-auto grid gap-4 text-left">
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-900"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-900"
          />
          <textarea
            placeholder="Message"
            className="p-3 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-900 h-32"
          />
          <button className="px-6 py-3 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition">
            Send
          </button>
        </form>
        <div className="mt-8 space-x-4 text-gray-600 dark:text-gray-400">
          <a href="https://github.com" className="hover:text-cyan-500">
            GitHub
          </a>
          <a href="https://linkedin.com" className="hover:text-cyan-500">
            LinkedIn
          </a>
          <a href="#" className="hover:text-cyan-500">
            Docs
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Project VISTA. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
