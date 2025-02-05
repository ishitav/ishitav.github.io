import Header from "../../../components/Header";

export default function About() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900 p-8">
      
      {/* 🔹 Navigation Header */}
      <Header />

      {/* 🔹 Main Content */}
      <section className="w-full max-w-5xl mt-24 px-6">
        
        {/* 🔹 Profile Image & Header Text (Side-by-Side, Left-Aligned) */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-left space-y-6 sm:space-y-0 sm:space-x-10">
          
          {/* Profile Image (Slightly Left) */}
          <div className="w-36 h-36 rounded-full border-4 border-gray-300 shadow-md overflow-hidden">
            <img src="/profile.jpg" alt="Ishita Vasishtha" className="w-full h-full object-cover" />
          </div>

          {/* Header Text & Introduction */}
          <div className="sm:w-3/4">
            <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight font-mono">
              Hello there!
            </h1>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Hi! I'm <strong className="text-gray-800">Ishita Vasishtha</strong>, an 
              <strong className="text-blue-600"> Electrical & Computer Engineering </strong> 
              student at USC. My work focuses on 
              <strong className="text-blue-700"> hardware design, machine learning, and wireless systems</strong>.  
            </p>
          </div>
        </div>

        {/* 🔹 Education Section (More Spread Out) */}
        <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start sm:justify-between text-left">
          
          {/* USC Logo */}
          <div className="w-24 h-24 rounded-full border-2 border-gray-400 shadow-md overflow-hidden">
            <img src="/usc-logo.png" alt="USC Logo" className="w-full h-full object-cover" />
          </div>

          {/* Education Details */}
          <div className="sm:w-3/4">
            <h2 className="text-2xl font-semibold text-gray-800 font-mono">Education</h2>
            <p className="mt-2 text-lg text-gray-700">
              <strong>B.S. Electrical & Computer Engineering</strong> <br />
              <span className="text-gray-600">University of Southern California, May 2026</span> <br />
              <span className="text-gray-500 text-sm">Minor: Entrepreneurship</span>
            </p>
          </div>
        </div>

        {/* 🔹 Quick Info Section (More Spread Out & Readable) */}
        <div className="mt-12 border-t border-gray-400 pt-6 text-lg text-gray-700">
          <div className="flex flex-col sm:flex-row justify-between sm:space-x-10">
            <div>
              <span className="font-semibold text-gray-800">📍 Location</span> <br />
              Los Angeles, CA
            </div>
            <div>
              <span className="font-semibold text-gray-800">🌟 Fun Fact</span> <br />
              I love solving chess puzzles & strategy games!
            </div>
            <div>
              <span className="font-semibold text-gray-800">⚡ Current Interest</span> <br />
              Exploring hardware for AI & biotech applications.
            </div>
          </div>
        </div>

        {/* 🔹 Opportunity Section */}
        <p className="mt-12 text-lg text-gray-700 leading-relaxed sm:w-3/4">
          I'm always open to new opportunities! If you think I’d be a great fit for a project, research, or collaboration, feel free to reach out—I’d love to connect.
        </p>

      </section>
    </main>
  );
}