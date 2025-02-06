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
          <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-2xl">
            A summary of my education, work experience, projects, and technical skills.
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
              Relevant coursework includes Embedded Systems, Machine Learning Applications, Digital Circuits, Distributed IoT Systems, 3D Modeling & Visual Effects.
            </p>
          </div>
        </div>

        {/* 🔹 Work Experience Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 font-mono">Work Experience</h2>

          {[
            {
              title: "Wireless Devices & Systems Lab | Researcher",
              timeframe: "May 2023 – Present",
              details: [
                "Developed signal processing algorithms in C++, Python, and MATLAB for phase discrepancy analysis and noise filtering.",
                "Conducted large-scale outdoor cell-free mMIMO channel measurements at 3.5 GHz, refining OTA calibration techniques."
              ]
            },
            {
              title: "Autonomous Networks Research Group | Researcher",
              timeframe: "June 2024 – Present",
              details: [
                "Enhanced Kolmogorov-Arnold Network (KAN) architecture using PyTorch for efficient modeling of complex non-linear functions.",
                "Analyzed performance metrics (MAE, SDE) and visualized results using Matplotlib to optimize models."
              ]
            },
            {
              title: "Teradyne | Intern & Contractor",
              timeframe: "June 2024 – December 2024",
              details: [
                "Developed a Python-based GUI tool utilizing pandas, matplotlib, and numpy for efficient data processing and visualization.",
                "Executed PLL tests to evaluate phase noise, jitter, and lock time, ensuring alignment with design specifications."
              ]
            }
          ].map((job, index) => (
            <div key={index} className="mt-8 text-left">
              <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
              <p className="text-gray-600">{job.timeframe}</p>
              <ul className="mt-2 text-lg text-gray-700 list-disc list-inside">
                {job.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 🔹 Technical Skills */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 font-mono">Technical Skills</h2>
          <ul className="mt-4 text-lg text-gray-700 list-disc list-inside">
            <li>Programming: Python, MATLAB, C/C++, Verilog, Java, React, JavaScript, Git</li>
            <li>Embedded Systems: FPGA (Xilinx Vivado, Intel Quartus), Raspberry Pi, STM32, Arduino</li>
            <li>Hardware Design: PCB Design (KiCad, Altium), SPICE Simulations, Signal Processing</li>
            <li>Machine Learning: TensorFlow, PyTorch, Model Optimization, Regression Analysis</li>
            <li>Wireless Systems: RF Signal Processing, mMIMO, Spectral Analysis</li>
            <li>System Design: Low-level computing, real-time embedded processing</li>
            <li>Certifications: Oracle Certified Associate (Java SE 8)</li>
          </ul>
        </div>

        {/* 🔹 Projects */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 font-mono">Projects</h2>

          {[
            {
              title: "QB7 Makers - Robotics & Embedded Systems",
              description: "Developed a cubic-shaped robot with flip functionality, integrating electrical components and software using Raspberry Pi.",
              image: "/usc-logo.png",
              link: "#"
            },
            {
              title: "BioBotanic - Self Automated Greenhouse",
              description: "Designed an automated greenhouse system with optimal moisture and lighting control, supporting 30+ plant types.",
              image: "/usc-logo.png",
              link: "#"
            },
            {
              title: "Film Club Web Scraper",
              description: "Built a Python-based web scraper using machine learning for film club classification.",
              image: "/usc-logo.png",
              link: "#"
            }
          ].map((project, index) => (
            <div key={index} className="mt-6 flex flex-col sm:flex-row items-center sm:items-start text-left space-x-6">
              <div className="w-36 h-36 rounded-lg border border-gray-400 overflow-hidden">
                <img src={project.image} alt="Project Image" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <a href={project.link} className="text-blue-600 hover:underline text-lg">GitHub Repo</a>
              </div>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}