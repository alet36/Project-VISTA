import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Sun, Moon, Eye } from "lucide-react";

// Pages
import Home from "./pages/Home";
import CNNs from "./pages/CNNs";
import Vision from "./pages/Vision";
import Demos from "./pages/Demos";
import OCR from "./pages/OCR";
import Prediction from "./pages/Prediction";
import IB from "./pages/IB";
import About from "./pages/About";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "bg-gray-900 text-white min-h-screen" : "bg-white text-gray-900 min-h-screen"}>
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 shadow-md backdrop-blur-md bg-opacity-80">
        <div className="flex items-center space-x-2 font-bold text-xl">
          <Eye className="w-6 h-6 text-cyan-500" />
          <span>Project VISTA</span>
        </div>
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link to="/">Home</Link>
          <Link to="/cnns">CNNs</Link>
          <Link to="/vision">Vision</Link>
          <Link to="/ocr">OCR</Link>
          <Link to="/prediction">Prediction</Link>
          <Link to="/demos">Demos</Link>
          <Link to="/ib">IB</Link>
          <Link to="/about">About</Link>

        </nav>
        <button onClick={() => setDark(!dark)}>
          {dark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-cyan-500" />}
        </button>
      </header>

      {/* Routes */}
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cnns" element={<CNNs />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/ocr" element={<OCR />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/demos" element={<Demos />} />
          <Route path="/ib" element={<IB />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}
