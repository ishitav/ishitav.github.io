import Header from "../../../components/Header";

export default function About() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900 p-8">
      
      {/* 🔹 Header */}
      <Header />

      {/* 🔹 Main Content */}
      <section className="w-full max-w-5xl mt-20 px-6">
        
        {/* 🔹 Header Text */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight font-mono">
            About Me
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Hi! I'm <strong className="text-gray-800">Ishita Vasishtha</strong>, an **Electrical & Computer Engineering** student at USC.  
            My work focuses on **hardware design, machine learning, and wireless systems**.  
            I specialize in **signal processing, system optimization, and embedded computing**, bridging software and electronics.
          </p>
        </div>

        {/* 🔹 Education */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 font-mono">Education</h2>
          <p className="mt-2 text-lg text-gray-700">
            <strong>B.S. Electrical & Computer Engineering</strong> <br />
            <span className="text-gray-600">University of Southern California, May 2026</span> <br />
            <span className="text-gray-500 text-sm">Minor: Entrepreneurship</span>
          </p>
        </div>

        {/* 🔹 Skills */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 font-mono">Skills</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg text-gray-700">
            <p>Programming: Python, MATLAB, C/C++, Verilog, JavaScript, Git</p>
            <p>Embedded Systems: Raspberry Pi, Arduino, STM32, ESP32, FPGA (Vivado, Quartus)</p>
            <p>Hardware Design: PCB Design (KiCad, Altium), SPICE Simulations</p>
            <p>Wireless & Signal Processing: mMIMO, RF Analysis, Spectral Analysis</p>
            <p>Machine Learning: TensorFlow, PyTorch, Scikit-learn, Model Optimization</p>
            <p>System Design: Real-time computing, hardware-software integration</p>
          </div>
        </div>

        {/* 🔹 Research & Publications */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 font-mono">Research & Publications</h2>
          <p className="mt-2 text-lg text-gray-700">
            <a href="https://doi.org/10.48550/arXiv.2405.20617" target="_blank" rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800 transition">
              Large-scale Outdoor Cell-free mMIMO Channel Measurement at 3.5 GHz
            </a>
          </p>
        </div>

      </section>

    </main>
  );
}