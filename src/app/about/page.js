export default function About() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 text-gray-900 p-8">
      
      {/* Main Content Container */}
      <div className="max-w-5xl w-full bg-white p-10 rounded-2xl shadow-xl transition hover:shadow-2xl">
        
        {/* Profile Picture & Name Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          
          {/* Profile Image
          <div className="w-36 h-36 rounded-full border-4 border-white shadow-lg overflow-hidden">
            <img src="/profile.jpg" alt="Ishita" className="w-full h-full object-cover" />
          </div> */}

          {/* Name & Intro */}
          <div>
            <h1 className="text-5xl font-extrabold text-blue-700 tracking-tight font-mono">
              About Me
            </h1>
            <p className="mt-2 text-lg text-gray-700 leading-relaxed font-serif">
            Hi! I'm <strong className="text-blue-700">Ishita Vasishtha</strong>, an Electrical & Computer Engineering student at USC.  
            My work focuses on <span className="text-blue-600 font-medium">hardware design, machine learning, and wireless systems</span>.  
            I’ve worked on <span className="text-blue-500 font-medium">developing signal processing algorithms for large-scale wireless networks, optimizing neural networks for performance and efficiency, and working with embedded systems for low-level computation and communication</span>.  
            My experience includes <span className="text-blue-600 font-medium">circuit design, FPGA programming, and system integration</span>, bridging hardware and software to build efficient, high-performance systems.  
            In the future, I’m interested in applying these skills to <span className="text-blue-500 font-medium">biotech and health tech innovations</span>.  
          </p>
          </div>
        </div>

          {/* 🔹 Education Section (Kept from Original) */}
          <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700">🎓 Education</h2>
          <p className="mt-2 text-lg">
            <strong>B.S. Electrical & Computer Engineering</strong> <br />
            <span className="text-gray-600">University of Southern California, May 2026</span> <br />
            <span className="text-gray-500 text-sm">Minor: Entrepreneurship</span>
          </p>
        </div>

        {/* 🔹 Paragraph Section (Write More Here)
        <div className="mt-8 p-6 bg-gray-100 border-l-4 border-blue-500 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700">📖 My Story</h2>
          <p className="mt-2 text-lg text-gray-700">
            (Placeholder: Write about what drives you, why you love tech, your goals, or your philosophy on engineering & research.)
          </p>
        </div>

       */}

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
    <li> <strong>Certifications & Training:</strong> Oracle Certified Associate (Java SE 8)</li>
  </ul>
</div>

        {/* 🔹 Publications Section */}
        <div className="mt-8 p-6 bg-gray-50 border-l-4 border-gray-500 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">📜 Publications</h2>
          <p className="mt-2 text-lg">
            <a
              href="https://doi.org/10.48550/arXiv.2405.20617"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition flex items-center"
            >
              Large-scale Outdoor Cell-free mMIMO Channel Measurement at 3.5 GHz
            </a>
          </p>
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