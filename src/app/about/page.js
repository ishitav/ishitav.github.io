export default function About() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900 p-8">
      
      {/* 🔹 Main Content Container */}
      <div className="max-w-5xl w-full bg-white p-12 shadow-lg transition hover:shadow-xl">
        
        {/* 🔹 Header Section */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight font-mono">
            About Me
          </h1>
          <p className="mt-3 text-lg text-gray-700 leading-relaxed font-serif max-w-2xl mx-auto">
            Hi! I'm <strong className="text-gray-800">Ishita Vasishtha</strong>, an **Electrical & Computer Engineering** student at USC.  
            I work at the intersection of **hardware, machine learning, and wireless systems**, bridging software and electronics  
            to build efficient, high-performance solutions. My research spans **signal processing, system design, and embedded computing**.  
          </p>
        </div>

        {/* 🔹 Education Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 font-mono">🎓 Education</h2>
          <p className="mt-2 text-lg text-gray-700">
            <strong>B.S. Electrical & Computer Engineering</strong> <br />
            <span className="text-gray-600">University of Southern California, May 2026</span> <br />
            <span className="text-gray-500 text-sm">Minor: Entrepreneurship</span>
          </p>
        </div>

        {/* 🔹 Skills Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 font-mono">🛠 Skills</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg text-gray-700">
            <p>💻 <strong>Programming:</strong> Python, MATLAB, C/C++, Verilog, JavaScript, Git</p>
            <p>🔌 <strong>Embedded Systems:</strong> Raspberry Pi, Arduino, STM32, ESP32, FPGA (Vivado, Quartus)</p>
            <p>⚡ <strong>Hardware Design:</strong> PCB Design (KiCad, Altium), SPICE Simulations</p>
            <p>📡 <strong>Wireless & Signal Processing:</strong> mMIMO, RF Analysis, Spectral Analysis</p>
            <p>🤖 <strong>Machine Learning:</strong> TensorFlow, PyTorch, Scikit-learn, Model Optimization</p>
            <p>🔬 <strong>System Design:</strong> Real-time computing, hardware-software integration</p>
          </div>
        </div>

        {/* 🔹 Research & Publications */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 font-mono">📜 Research & Publications</h2>
          <p className="mt-2 text-lg text-gray-700">
            <a href="https://doi.org/10.48550/arXiv.2405.20617" target="_blank" rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800 transition">
              Large-scale Outdoor Cell-free mMIMO Channel Measurement at 3.5 GHz
            </a>
          </p>
        </div>

        {/* 🔹 Back to Home Button */}
        <div className="mt-12 flex justify-center">
          <a href="/" className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 transition text-lg">
            ← Back to Home
          </a>
        </div>

      </div>
    </main>
  );
}