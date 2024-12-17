"use client"

import { useState } from "react";

const items = [
  {
    title: "What is Next.js?",
    content:
      "Next.js is a React framework that enables server-side rendering and static site generation.",
  },
  {
    title: "What is Tailwind CSS?",
    content:
      "Tailwind CSS is a utility-first CSS framework for creating custom designs without writing much CSS.",
  },
  {
    title: "How to use this accordion?",
    content: "Click on any title to toggle the corresponding content.",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 bg-white">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-200"
          >
            <span className="text-lg font-medium">{item.title}</span>
            <span
              className={`transform transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-white text-gray-700">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;