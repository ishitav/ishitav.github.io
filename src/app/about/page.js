"use client"; // Required for interactivity in Next.js App Router

import { useState } from "react";
import { FaDownload, FaChevronDown, FaChevronUp, FaExternalLinkAlt } from "react-icons/fa";

export default function About() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-pink-100 text-gray-900 p-6">
      <div className="max-w-3xl w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-pink-600">💖 About Me 💖</h1>
        <p className="mt-2 text-center text-lg">Hi, I'm <strong>Ishita Vasishtha</strong>, an Electrical & Computer Engineering student at USC. I love research, technology, and creating impactful projects. ✨</p>


        {/* Collapsible Sections */}
        <div className="mt-6">
          {[
            {
              title: "🎓 Education",
              content: (
                <p><strong>B.S. Electrical & Computer Engineering</strong> <br /> University of Southern California, May 2026 <br /> Minor: Entrepreneurship</p>
              ),
            },
            {
              title: "💼 Work Experience",
              content: (
                <ul className="list-disc ml-6">
                  <li><strong>Wireless Devices & Systems Lab (May 2023 – Present)</strong> <br /> Developed signal processing algorithms in C++, Python, and MATLAB for phased discrepancy analysis.</li>
                  <li><strong>Autonomous Networks Research Group (June 2024 – Present)</strong> <br /> Enhanced KAN architecture using PyTorch, improving efficiency of modeling complex functions.</li>
                  <li><strong>Teradyne (June 2024 – Dec 2024)</strong> <br /> Developed Python-based GUI tools for data visualization and conducted PLL tests.</li>
                </ul>
              ),
            },
            {
              title: "📂 Projects",
              content: (
                <p>Film Club Web Scraper - Built a Python pipeline using BeautifulSoup & machine learning to classify film clubs across U.S. states.</p>
              ),
            },
            {
              title: "⚡ Skills",
              content: (
                <ul className="list-disc ml-6">
                  <li><strong>Languages:</strong> Python, MATLAB, C++, Java, JavaScript, Verilog</li>
                  <li><strong>Machine Learning:</strong> Scikit-learn, TensorFlow, Data Visualization</li>
                  <li><strong>Electronics:</strong> Microcontrollers, FPGAs, Embedded Systems</li>
                </ul>
              ),
            },
            {
              title: "📜 Publications",
              content: (
                <p>
                  <a href="https://doi.org/10.48550/arXiv.2405.20617" target="_blank" className="text-blue-600 hover:underline flex items-center">
                    Large-scale Outdoor Cell-free mMIMO Channel Measurement at 3.5 GHz <FaExternalLinkAlt className="ml-2" />
                  </a>
                </p>
              ),
            },
          ].map((section, index) => (
            <div key={index} className="mt-4">
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full text-left bg-pink-300 px-4 py-2 rounded-lg flex justify-between items-center hover:bg-pink-400 transition"
              >
                <span className="font-semibold">{section.title}</span>
                {openSections[section.title] ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openSections[section.title] && <div className="p-4 bg-pink-200 rounded-lg mt-2">{section.content}</div>}
            </div>
          ))}
        </div>

        {/* Back to Home Link */}
        <div className="mt-6 flex justify-center">
          <a href="/" className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-pink-600 transition">
            Back to Home →
          </a>
        </div>
      </div>
    </main>
  );
}