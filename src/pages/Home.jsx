import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CNNs from "./pages/CNNs";
import Vision from "./pages/Vision";
import OCR from "./pages/OCR";
import Demos from "./pages/Demos";
import Journey from "./pages/Journey";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-black dark:bg-gray-900 dark:text-white">
        {/* ====== Navbar ====== */}
        <header className="bg-gray-100 dark:bg-gray-800 shadow">
          <nav className="container mx-auto flex justify-between items-center px-6 py-4">
            <h1 className="text-2xl font-extrabold">
              <Link to="/">Project VISTA</Link>
            </h1>
            <ul className="flex space-x-6 text-lg font-medium">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cnns">CNNs</Link></li>
              <li><Link to="/vision">Vision</Link></li>
              <li><Link to="/ocr">OCR</Link></li>
              <li><Link to="/demos">Demos</Link></li>
              <li><Link to="/journey">The Journey</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </header>

        {/* ====== Page Content ====== */}
        <main className="flex-grow container mx-auto px-6 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cnns" element={<CNNs />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/ocr" element={<OCR />} />
            <Route path="/demos" element={<Demos />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* ====== Footer ====== */}
        <footer className="bg-gray-100 dark:bg-gray-800 text-center py-4 text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Project VISTA — Built for the IB Personal Project
        </footer>
      </div>
    </Router>
  );
}
