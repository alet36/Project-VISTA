import React from "react";

export default function Home() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-extrabold mb-4">See the world differently.</h1>
      <p className="text-lg mb-6">An assistive system powered by AI, gestures, and vision.</p>
      <div className="space-x-4">
        <button className="px-6 py-3 bg-cyan-500 text-white rounded-xl shadow-md hover:bg-cyan-600">
          Try the Demo
        </button>
        <button className="px-6 py-3 border border-cyan-500 text-cyan-500 rounded-xl hover:bg-cyan-50">
          Learn More
        </button>
      </div>
    </section>
  );
}
