export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Project VISTA</h1>
        <ul className="flex gap-6 font-medium">
          <li><a href="#features" className="hover:text-blue-500">Features</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-20">
        <h2 className="text-4xl font-extrabold mb-6">
          Welcome to <span className="text-blue-600">Project VISTA</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-xl">
          A wearable assistive system combining computer vision and OCR, built with React + Tailwind.
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </header>
    </div>
  );
}
