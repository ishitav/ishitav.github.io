export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 text-gray-900 p-8">
      
      {/* Navigation Bar */}
      <nav className="w-full max-w-4xl flex justify-between items-center bg-white shadow-md p-4 rounded-xl">
        <a
          href="/about"
          className="text-lg font-medium text-blue-600 hover:text-blue-800 transition"
        >
          About Me
        </a>
        <a
          href="/contact"
          className="text-lg font-medium text-blue-600 hover:text-blue-800 transition"
        >
          Contact
        </a>
      </nav>

      {/* Main Content Box */}
      <div className="max-w-3xl w-full bg-white p-10 rounded-2xl shadow-xl text-center transition hover:shadow-2xl mt-8">
        
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-blue-600 tracking-tight">
          Welcome! I'm Ishita.
        </h1>

        {/* Intro Text */}
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          I'm an <span className="text-blue-600 font-medium">Electrical & Computer Engineering</span> student passionate about  
          <span className="text-blue-700 font-medium"> research, technology, and innovation</span>.  
          I love <span className="text-blue-500 font-medium">building, learning, and sharing my journey</span> through meaningful projects and discoveries.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-6 flex space-x-4 justify-center">
          <a
            href="/about"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg hover:bg-blue-600 transition transform hover:scale-105"
          >
            Learn More About Me →
          </a>
          <a
            href="/contact"
            className="bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg text-lg hover:bg-gray-800 transition transform hover:scale-105"
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </main>
  );
}