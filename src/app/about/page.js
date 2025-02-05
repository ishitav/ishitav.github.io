import Header from "../../components/Header";

export default function About() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900 p-8">
      
      {/* 🔹 Navigation Header */}
      <Header />

      {/* 🔹 Main Content */}
      <section className="w-full max-w-5xl mt-20 px-6">
        
        {/* 🔹 Profile Image & Header Text */}
        <div className="flex flex-col items-center text-center">
          <div className="w-40 h-40 rounded-full border-4 border-gray-300 shadow-md overflow-hidden">
            <img src="/profile.jpg" alt="Ishita Vasishtha" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight font-mono mt-4">
            Hello there!
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-2xl">
            Hi! I'm <strong className="text-gray-800">Ishita Vasishtha</strong>, an 
            <strong className="text-blue-600"> Electrical & Computer Engineering </strong> 
            student at USC. My work focuses on 
            <strong className="text-blue-700"> hardware design, machine learning, and wireless systems</strong>.  
          </p>
        </div>

        {/* 🔹 Education Section (Centered with School Logo) */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center text-center space-y-6 sm:space-y-0 sm:space-x-8">
          
          {/* USC Logo */}
          <div className="w-24 h-24 rounded-full border-2 border-gray-400 shadow-md overflow-hidden">
            <img src="/usc-logo.png" alt="USC Logo" className="w-full h-full object-cover" />
          </div>

          {/* Education Details */}
          <div className="text-lg text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-800 font-mono">Education</h2>
            <p className="mt-2">
              <strong>B.S. Electrical & Computer Engineering</strong> <br />
              <span className="text-gray-600">University of Southern California, May 2026</span> <br />
              <span className="text-gray-500 text-sm">Minor: Entrepreneurship</span> <br />
              <span className="text-gray-500 text-sm">📍 Los Angeles, CA</span>
            </p>
          </div>
        </div>

      </section>
    </main>
  );
}