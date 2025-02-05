export default function Resume() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 text-gray-900 p-8">
      
      {/* Main Content Box */}
      <div className="max-w-4xl w-full bg-white p-10 rounded-2xl shadow-xl transition hover:shadow-2xl">
        
        {/* Title & Download Button */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-blue-700 tracking-tight font-mono">
            📄 My Resume
          </h1>
          <p className="mt-2 text-lg text-gray-700">Here's a quick overview of my experience & skills.</p>
          <div className="mt-6">
            <a href="/resume.pdf" download className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-600 transition text-lg">
              📥 Download Resume
            </a>
          </div>
        </div>

        {/* 🔹 Education Section */}
        <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700">🎓 Education</h2>
          <p className="mt-2 text-lg">
            <strong>B.S. Electrical & Computer Engineering</strong> <br />
            <span className="text-gray-600">University of Southern California, May 2026</span> <br />
            <span className="text-gray-500 text-sm">Minor: Entrepreneurship</span>
          </p>
        </div>

        {/* 🔹 Work Experience Section */}
        <div className="mt-8 p-6 bg-gray-100 border-l-4 border-gray-500 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">💼 Work Experience</h2>

          {/* Experience #1 */}
          <div className="mt-4">
            <h3 className="text-xl font-bold text-blue-600">Wireless Devices & Systems Lab</h3>
            <p className="text-gray-600 text-sm">Researcher | May 2023 – Present</p>
            <ul className="mt-2 text-lg text-gray-700 list-disc list-inside">
              <li>Developed low-level signal processing algorithms in C++, Python, and MATLAB.</li>
              <li>Conducted large-scale outdoor cell-free mMIMO channel measurements.</li>
            </ul>
          </div>

          {/* Experience #2 */}
          <div className="mt-4">
            <h3 className="text-xl font-bold text-blue-600">Autonomous Networks Research Group</h3>
            <p className="text-gray-600 text-sm">Researcher | June 2024 – Present</p>
            <ul className="mt-2 text-lg text-gray-700 list-disc list-inside">
              <li>Enhanced Kolmogorov-Arnold Network (KAN) architecture in Python using PyTorch.</li>
              <li>Optimized models using performance metrics such as MAE & SDE.</li>
            </ul>
          </div>

          {/* Experience #3 */}
          <div className="mt-4">
            <h3 className="text-xl font-bold text-blue-600">Teradyne</h3>
            <p className="text-gray-600 text-sm">Intern | June 2024 – December 2024</p>
            <ul className="mt-2 text-lg text-gray-700 list-disc list-inside">
              <li>Developed a Python-based GUI tool for processing large datasets.</li>
              <li>Executed precise PLL tests to evaluate phase noise, jitter, and lock time.</li>
            </ul>
          </div>

          {/* Experience #4 */}
          <div className="mt-4">
            <h3 className="text-xl font-bold text-blue-600">Multimedia & Wireless Networks Research Group</h3>
            <p className="text-gray-600 text-sm">Research Intern | May 2022 - Aug 2022</p>
            <ul className="mt-2 text-lg text-gray-700 list-disc list-inside">
              <li>Implemented an OLSR (Optimized Link State Routing) algorithm in C++.</li>
              <li>Conducted performance evaluations for data transfer efficiency.</li>
            </ul>
          </div>
        </div>

       
    {/* Skills Section */}
    <div className="mt-8 p-6 bg-gray-100 border-l-4 border-gray-500 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800">🛠 Skills</h2>
      <ul className="mt-2 text-lg text-gray-700 list-disc list-inside">
        <li> <strong>Programming:</strong> Python, MATLAB, C/C++, Verilog, VHDL, Java, JavaScript, Bash, Git</li>
        <li> <strong>Embedded Systems:</strong> Microcontrollers (ATMega32, STM32, ESP32, Raspberry Pi, Arduino), FPGAs (Xilinx Vivado, Intel Quartus)</li>
        <li> <strong>Hardware & Circuit Design:</strong> PCB design (KiCad, Altium), SPICE simulation (LTspice, Multisim), hardware debugging</li>
        <li> <strong>Wireless & Signal Processing:</strong> mMIMO, RF signal processing, channel modeling, spectral analysis</li>
        <li> <strong>Machine Learning & AI:</strong> TensorFlow, PyTorch, Scikit-learn, Regression Analysis, SVM, Model Optimization</li>
        <li> <strong>System Design & Optimization:</strong> Real-time computing, low-level programming, hardware-software integration</li>
        <li> <strong>Tools & Technologies:</strong> Simulink, Vivado, QuestaSim, MySQL, Flask, Express, Fusion 360, Jupyter Notebook</li>
        <li> <strong>Certifications & Training:</strong> Oracle Certified Associate (Java SE 8), FPGA Design Flow Training</li>
      </ul>
    </div>

        {/* 🔹 Back to Home Button */}
        <div className="mt-8 flex justify-center">
          <a href="/" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition text-lg">
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}