import Header from "../../components/Header";

export default function About() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900 p-8">
      
      {/* 🔹 Navigation Header */}
      <Header />

      {/* 🔹 Main Content */}
      <section className="w-full max-w-5xl mt-20 px-6 flex flex-col items-center text-center">
        
        {/* 🔹 Profile Image & Header Text (Centered) */}
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-md overflow-hidden">
            <img src="/profile.jpg" alt="Ishita Vasishtha" className="w-full h-full object-cover" />
          </div>

          {/* Header Text */}
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight font-mono mt-4">
            Hello there!
          </h1>

          {/* Introduction Paragraph */}
          <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-2xl">
            Hi! I'm <strong className="text-gray-800">Ishita Vasishtha</strong>, an 
            <strong className="text-blue-600"> Electrical & Computer Engineering </strong> 
            student at USC. My work focuses on 
            <strong className="text-blue-700"> hardware design, machine learning, and wireless systems</strong>.  
          </p>
        </div>

        {/* 🔹 Education Section (Centered) */}
        <div className="mt-10 flex flex-col items-center">
          {/* USC Logo */}
          <div className="w-24 h-24 rounded-full border-2 border-gray-400 shadow-md overflow-hidden mb-4">
            <img src="/usc-logo.png" alt="USC Logo" className="w-full h-full object-cover" />
          </div>

          {/* Education Details */}
          <h2 className="text-2xl font-semibold text-gray-800 font-mono">Education</h2>
          <p className="mt-2 text-lg text-gray-700">
            <strong>B.S. Electrical & Computer Engineering</strong> <br />
            <span className="text-gray-600">University of Southern California, May 2026</span> <br />
            <span className="text-gray-500 text-sm">Minor: Entrepreneurship</span>
          </p>
        </div>

        {/* 🔹 Quick Info Section (Location | Fun Fact | Interest) */}
        <div className="mt-8 border-t border-gray-400 pt-6 text-lg text-gray-700 w-full max-w-md">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <span className="font-semibold text-gray-800"> Location</span> <br />
              Los Angeles, CA
            </div>
            <div>
              <span className="font-semibold text-gray-800"> Fun Fact</span> <br />
              I love solving chess puzzles & strategy games!
            </div>
            <div>
              <span className="font-semibold text-gray-800">⚡ Current Interest</span> <br />
              Exploring hardware for AI & biotech applications.
            </div>
          </div>
        </div>

        {/* 🔹 Opportunity Section */}
        <p className="mt-8 text-lg text-gray-700 leading-relaxed max-w-2xl">
          I'm always open to new opportunities! If you think I’d be a great fit for a project, research, or collaboration, feel free to reach out—I’d love to connect.
        </p>

      </section>
    </main>
  );
}