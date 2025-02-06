import Header from "../../../components/Header";

export default function Resume() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900 p-8">
      
      {/* 🔹 Navigation Header */}
      <Header />

      {/* 🔹 Main Content */}
      <section className="w-full max-w-5xl mt-24 px-6">

        {/* 🔹 Page Title */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight font-mono">
            Resume
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            A summary of my education, work experience, and technical skills.
          </p>
        </div>

        {/* 🔹 Education Section */}
        <div className="mt-12 flex flex-col sm:flex-row items-center text-left">
          
          {/* University Logo */}
          <div className="w-24 h-24 rounded-full border-2 border-gray-400 shadow-md overflow-hidden">
            <img src="/usc-logo.png" alt="USC Logo" className="w-full h-full object-cover" />
          </div>

          {/* Education Details */}
          <div className="sm:ml-6 mt-4 sm:mt-0">
            <h2 className="text-2xl font-semibold text-gray-800 font-mono">Education</h2>
            <p className="mt-2 text-lg text-gray-700">
              <strong>B.S. Electrical & Computer Engineering</strong> <br />
              <span className="text-gray-600">University of Southern California, May 2026</span> <br />
              <span className="text-gray-500 text-sm">Minor: Entrepreneurship</span>
            </p>
          </div>
        </div>

        {/* 🔹 Work Experience Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 font-mono">Work Experience</h2>

          {/* 🏢 Position 1 */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">Research Assistant - Wireless Systems & Devices Group</h3>
            <p className="text-gray-600">University of Southern California | 2023 - Present</p>
            <ul className="mt-2 text-lg text-gray-700 list-disc list-inside">
              <li>Developing signal processing algorithms for large-scale **mMIMO networks**.</li>
              <li>Working on **RF system optimization** and spectral analysis.</li>
              <li>Leveraging **machine learning models** for wireless communications.</li>
            </ul>
          </div>

          {/* 🏢 Position 2 */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">Research Assistant - Autonomous Research Network Group</h3>
            <p className="text-gray-600">University of Southern California | 2023 - Present</p>
            <ul className="mt-2 text-lg text-gray-700 list-disc list-inside">
              <li>Designing and deploying **edge computing systems** for real-time data processing.</li>
              <li>Integrating **hardware-software solutions** for autonomous research networks.</li>
              <li>Collaborating with a team on **sensor fusion and AI-driven automation**.</li>
            </ul>
          </div>
        </div>

        {/* 🔹 Technical Skills Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 font-mono">Technical Skills</h2>
          <ul className="mt-4 text-lg text-gray-700 list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li><strong>Programming:</strong> Python, C/C++, Verilog, MATLAB, JavaScript, Git</li>
            <li><strong>Embedded Systems:</strong> FPGA (Xilinx, Intel), Raspberry Pi, STM32</li>
            <li><strong>Hardware Design:</strong> PCB Design (KiCad, Altium), SPICE Simulations</li>
            <li><strong>Wireless Systems:</strong> RF Signal Processing, mMIMO, Spectral Analysis</li>
            <li><strong>Machine Learning:</strong> TensorFlow, PyTorch, Model Optimization</li>
            <li><strong>System Design:</strong> Low-level computing, real-time embedded processing</li>
          </ul>
        </div>

        {/* 🔹 Relevant Projects & Research */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 font-mono">Relevant Projects & Research</h2>

          {/* 📌 Project 1 */}
          <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start text-left space-x-6">
            <div className="w-36 h-36 rounded-lg border border-gray-400 overflow-hidden">
              <img src="/usc-logo.png" alt="Project Image" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">QB7 Makers - Robotics & Embedded Systems</h3>
              <p className="text-gray-600">Developed a cubic-shaped **robot with flip functionality**, integrating electrical components and software using Raspberry Pi.</p>
              <a href="#" className="text-blue-600 hover:underline text-lg">GitHub Repo</a>
            </div>
          </div>

          {/* 📌 Project 2 */}
          <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start text-left space-x-6">
            <div className="w-36 h-36 rounded-lg border border-gray-400 overflow-hidden">
              <img src="/usc-logo.png" alt="Project Image" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">BioBotanic - Self Automated Greenhouse</h3>
              <p className="text-gray-600">Designed an **automated greenhouse system** with optimal moisture and lighting control, supporting **30+ plant types**.</p>
              <a href="#" className="text-blue-600 hover:underline text-lg">GitHub Repo</a>
            </div>
          </div>

          {/* 📌 Project 3 */}
          <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start text-left space-x-6">
            <div className="w-36 h-36 rounded-lg border border-gray-400 overflow-hidden">
              <img src="/usc-logo.png" alt="Project Image" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Film Club Web Scraper</h3>
              <p className="text-gray-600">Built a **Python-based web scraper** using machine learning for film club classification.</p>
              <a href="#" className="text-blue-600 hover:underline text-lg">GitHub Repo</a>
            </div>
          </div>
        </div>

        {/* 🔹 Download Resume Button */}
        <div className="mt-12 text-center">
          <a href="/resume.pdf" download className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition text-lg">
            Download Resume
          </a>
        </div>

      </section>
    </main>
  );
}