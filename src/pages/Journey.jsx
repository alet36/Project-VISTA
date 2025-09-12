import { useState } from "react";

export default function Journey() {
  const [open, setOpen] = useState(null);

  const sections = [
    { title: "Topic", content: "This section will outline how the project topic was chosen..." },
    { title: "Design", content: "Here we’ll explore the planning, sketches, and design decisions..." },
    { title: "Website", content: "This part documents how the website was developed..." }
  ];

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">The Journey</h2>

      <div className="space-y-4">
        {sections.map((section, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-lg"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-4 py-3 font-semibold text-lg flex justify-between items-center"
            >
              {section.title}
              <span>{open === index ? "−" : "+"}</span>
            </button>
            {open === index && (
              <div className="px-4 pb-4 text-gray-700 dark:text-gray-300">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
