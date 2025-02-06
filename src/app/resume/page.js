import Header from "../../../components/Header";

export default function Resume() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900 p-8">
      
      {/* 🔹 Navigation Header */}
      <Header />

      {/* 🔹 Main Content */}
      <section className="w-full max-w-5xl mt-24 px-6">

        {/* 🔹 Page Title */}
        <div className="text-left">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight font-mono">
            Resume
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            A comprehensive overview of my education, work experience, technical expertise, and projects.
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
              B.S. Electrical & Computer Engineering <br />
              <span className="text-gray-600">University of Southern California, May 2026</span> <br />
              <span className="text-gray-500 text-sm">Minor: Entrepreneurship</span>
            </p>
            <p className="mt-2 text-lg text-gray-700">
              Relevant Coursework: Embedded Systems, Software Design, Machine Learning, Digital Circuits, IoT Systems, 3D Modeling & Animation.
            </p>
          </div>
        </div>

        {/* 🔹 Work Experience Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 font-mono">Work Experience</h2>
          <div className="mt-4 space-y-8">
            
            {/* Wireless Lab */}
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 rounded-full border-2 border-gray-400 shadow-md overflow-hidden">
                <img src="/usc-logo.png" alt="USC Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Wireless Systems & Devices Group</h3>
                <p className="text-gray-600 text-sm">Research Assistant | May 2023 – Present</p>
                <p className="mt-2 text-lg text-gray-700">
                  Developed signal processing algorithms for large-scale **mMIMO networks**, refined **OTA calibration techniques**, and conducted **wireless system evaluations** in urban environments.
                </p>
              </div>
            </div>

            {/* ANRG Research */}
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 rounded-full border-2 border-gray-400 shadow-md overflow-hidden">
                <img src="/usc-logo.png" alt="USC Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Autonomous Networks Research Group</h3>
                <p className="text-gray-600 text-sm">Research Assistant | June 2024 – Present</p>
                <p className="mt-2 text-lg text-gray-700">
                  Worked on **Kolmogorov-Arnold Network (KAN) architecture** in PyTorch, integrating product operations and node aggregation. Conducted **model evaluations** using performance metrics and data visualization.
                </p>
              </div>
            </div>

            {/* Teradyne Internship */}
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 rounded-full border-2 border-gray-400 shadow-md overflow-hidden">
                <img src="/teradyne-logo.png" alt="Teradyne Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Teradyne</h3>
                <p className="text-gray-600 text-sm">Intern & Contractor | June 2024 – Dec 2024</p>
                <p className="mt-2 text-lg text-gray-700">
                  Developed a **Python-based GUI tool** for large dataset visualization and **executed PLL tests** for phase noise, jitter, and lock-time verification.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 🔹 Technical Skills Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 font-mono">Technical Skills</h2>
          <ul className="mt-4 text-lg text-gray-700 list-disc list-inside">
            <li>Programming: Python, C/C++, Verilog, MATLAB, JavaScript, Git</li>
            <li>Embedded Systems: FPGA (Xilinx, Intel), Raspberry Pi, STM32, Arduino</li>
            <li>Hardware Design: PCB Design (KiCad, Altium), SPICE Simulations</li>
            <li>Wireless Systems: RF Signal Processing, mMIMO, Spectral Analysis</li>
            <li>Machine Learning: TensorFlow, PyTorch, Model Optimization</li>
            <li>System Design: Low-level computing, real-time embedded processing</li>
          </ul>
        </div>

        {/* 🔹 Relevant Projects */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 font-mono">Relevant Projects</h2>

          {/* Project 1 */}
          <div className="mt-6 flex items-center space-x-6">
            <div className="w-36 h-36 rounded-lg border border-gray-400 overflow-hidden">
              <img src="/qb7-project.png" alt="QB7 Project" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">QB7 Makers - Robotics & Embedded Systems</h3>
              <p className="text-gray-600">Developed a **cubic-shaped robot with flip functionality**, integrating **electrical components and software** using Raspberry Pi.</p>
              <a href="#" className="text-blue-600 hover:underline text-lg">GitHub Repo</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="mt-6 flex items-center space-x-6">
            <div className="w-36 h-36 rounded-lg border border-gray-400 overflow-hidden">
              <img src="/biobotanic.png" alt="BioBotanic Project" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">BioBotanic - Self Automated Greenhouse</h3>
              <p className="text-gray-600">Designed an **automated greenhouse system** with optimal moisture and lighting control, supporting **30+ plant types**.</p>
              <a href="#" className="text-blue-600 hover:underline text-lg">GitHub Repo</a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="mt-6 flex items-center space-x-6">
            <div className="w-36 h-36 rounded-lg border border-gray-400 overflow-hidden">
              <img src="/filmclub-scraper.png" alt="Film Club Scraper" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Film Club Web Scraper</h3>
              <p className="text-gray-600">Built a **Python-based web scraper** using machine learning for film club classification.</p>
              <a href="#" className="text-blue-600 hover:underline text-lg">GitHub Repo</a>
            </div>
          </div>

        </div>

      </section>
    </main>
  );
}