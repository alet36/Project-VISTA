export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-indigo-600">Project VISTA</h1>
        <ul className="flex gap-6">
          <li><a href="#features" className="hover:text-indigo-600">Features</a></li>
          <li><a href="#about" className="hover:text-indigo-600">About</a></li>
          <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
        </ul>
        <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center flex-1 text-center px-6 py-16">
        <h2 className="text-5xl font-extrabold mb-6">Your Assistive Vision Companion</h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Project VISTA helps users with real-time OCR and gesture recognition, powered by computer vision and AI.
        </p>
        <button className="px-6 py-3 rounded-xl bg-indigo-600 text-white text-lg font-semibold shadow hover:bg-indigo-700 transition">
          Try it Now
        </button>
      </header>

      {/* Features Section */}
      <section id="features" className="px-8 py-16 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">Real-Time OCR</h4>
            <p className="text-gray-600">Capture and read text instantly with high accuracy using built-in OCR technology.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">Gesture Control</h4>
            <p className="text-gray-600">Intuitive hand gestures to trigger actions — no need to touch your device.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">Lightweight UI</h4>
            <p className="text-gray-600">Clean and responsive design that works across devices seamlessly.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-16 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-8">About Project VISTA</h3>
        <p className="max-w-3xl mx-auto text-center text-gray-600">
          Project VISTA was built with the vision of providing accessibility tools that merge modern AI with intuitive human-centered design. Whether for education, assistance, or research, it bridges the gap between technology and daily use.
        </p>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-10 px-8 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-xl font-bold text-white">Project VISTA</h1>
          <ul className="flex gap-6 mt-4 md:mt-0">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <p className="text-center text-gray-500 mt-6">© {new Date().getFullYear()} Project VISTA. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
