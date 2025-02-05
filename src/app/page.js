export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 text-gray-900">
      
      {/* 🔹 Navigation Bar */}
      <nav className="w-full fixed top-0 left-0 bg-white shadow-md py-3 z-50">
        <div className="max-w-5xl mx-auto flex justify-between px-8">
          {/* Left - Name */}
          <h2 className="text-xl font-bold text-blue-600">Ishita Vasishtha</h2>
          {/* Right - Nav Links */}
          <div className="space-x-6">
            {[
              { name: "About Me", href: "/about" },
              { name: "Resume", href: "/resume" },
              { name: "Projects", href: "/projects" },
              { name: "Publications", href: "/publications" },
              { name: "Involvements", href: "/involvements" },
              { name: "Contact", href: "/contact" }
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-600 hover:text-blue-500 transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* 🔹 Hero Section */}
      <section className="w-full flex flex-col items-center justify-center min-h-screen text-center px-6">
        
        {/* Profile Image */}
        <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden">
          <img src="/profile.jpg" alt="Ishita" className="w-full h-full object-cover" />
        </div>

        {/* Title */}
        <h1 className="mt-6 text-6xl font-extrabold text-blue-700 tracking-tight">
          Welcome! I'm Ishita.
        </h1>

        {/* Intro Text */}
        <p className="mt-4 max-w-3xl text-lg text-gray-700 leading-relaxed">
          I'm an <span className="text-blue-600 font-medium">Electrical & Computer Engineering</span> student passionate about  
          <span className="text-blue-700 font-medium"> research, technology, and innovation</span>.  
          I love <span className="text-blue-500 font-medium">building, learning, and sharing my journey</span> through meaningful projects and discoveries.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-6 flex space-x-4">
          <a
            href="/about"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg hover:bg-blue-600 transition transform hover:scale-105"
          >
            Learn More About Me →
          </a>
          <a
            href="/resume"
            className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg hover:bg-purple-600 transition transform hover:scale-105"
          >
            View My Resume →
          </a>
          <a
            href="/projects"
            className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg hover:bg-green-600 transition transform hover:scale-105"
          >
            Explore My Projects →
          </a>
          <a
            href="/contact"
            className="bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg text-lg hover:bg-gray-800 transition transform hover:scale-105"
          >
            Get in Touch →
          </a>
        </div>
      </section>

    </main>
  );
}