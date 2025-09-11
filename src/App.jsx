import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Moon, Eye, Hand, Type, Cpu } from "lucide-react";
import { useState } from "react";

export default function LandingPage() {
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
          {["Features", "Demo", "About", "Contact"].map((item, i) => (
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
        <motion.button
          whileHover={{ rotate: 15 }}
          onClick={() => setDark(!dark)}
        >
          {dark ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-cyan-500" />
          )}
        </motion.button>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-purple-500/20 to-transparent blur-3xl" />
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
              Project VISTA is your futuristic companion, blending vision,
              accessibility, and AI into one seamless experience.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl px-6 py-3 shadow-lg">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="rounded-xl border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-50 dark:hover:bg-gray-800"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <Card className="w-80 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-2xl rounded-2xl">
              <CardContent className="p-6 flex flex-col items-center space-y-4">
                <Cpu className="w-12 h-12 text-cyan-500" />
                <h3 className="text-xl font-semibold">AI-Powered Vision</h3>
                <p className="text-sm text-center text-gray-600 dark:text-gray-300">
                  Experience real-time OCR and gesture recognition with cutting-edge AI.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

