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
            I'm Ishita Vasishtha, a junior at the University of Southern California studying Electrical and Computer Engineering. My work focuses primarily on hardware design, machine learning and wireless systems. I've had the amazing oppurtunity to be a part of the Wireless Systems and Devices Group and the Autonomous Research Netowork Group during my time here. My research focuses primarily on machine learning and wireless systems. I'm particularly interested in hardware design, edge computing and how hardware can be used for biotech applications! Outside of engineering, I enjoy chess puzzles, jewelry making, and exploring new LA cafes.
            </p>
          </div>
        </div>

        {/* 🔹 Quick Info Section (More Spread Out & Readable) */}
        <div className="mt-12 border-t border-gray-400 pt-6 text-lg text-gray-700">
          <div className="flex flex-col sm:flex-row justify-between sm:space-x-10">
            <div>
            I'm always open to new opportunities! 
            <br />
              If you think I’d be a great fit for a project, research, or collaboration, feel free to reach out—I’d love to connect.
            </div>
           
          
          </div>
        </div>

      

      </section>
    </main>
  );
}