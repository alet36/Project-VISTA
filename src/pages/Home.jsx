// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-5xl font-extrabold mb-6">
        Welcome to <span className="text-blue-500">Project VISTA</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        An assistive vision system powered by Computer Vision, OCR, and AI.  
        Explore demos, learn about CNNs, or dive into the tech stack.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Link
          to="/demos"
          className="p-6 rounded-2xl shadow-md bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Try Demos
        </Link>
        <Link
          to="/cnns"
          className="p-6 rounded-2xl shadow-md bg-purple-500 text-white hover:bg-purple-600 transition"
        >
          Learn CNNs
        </Link>
        <Link
          to="/about"
          className="p-6 rounded-2xl shadow-md bg-gray-800 text-white hover:bg-gray-900 transition"
        >
          About Project
        </Link>
      </div>
    </div>
  );
}
