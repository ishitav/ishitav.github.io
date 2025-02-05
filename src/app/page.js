import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900 font-sans">
      
      {/* 🔹 Navigation Bar */}
      <nav className="w-full fixed top-0 left-0 bg-white shadow-md py-3 z-50">
        <div className="max-w-5xl mx-auto flex justify-between px-8">
          {/* Left - Name */}
          <h2 className="text-xl font-bold text-gray-800 font-mono">Ishita Vasishtha</h2>
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
        
        {/* Profile & Title Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          
          {/* Profile Image */}
          <div className="w-36 h-36 rounded-full border-4 border-gray-200 shadow-lg overflow-hidden">
            <img src="/profile.jpg" alt="Ishita" className="w-full h-full object-cover" />
          </div>

          {/* Text Content */}
          <div style={{ textAlign: 'center' }}>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-800 tracking-tight font-mono">
              Welcome! I'm Ishita.
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-gray-600 mt-2">
              Student | Researcher | Engineer
            </h2>
            <h5 className="mt-4 text-lg text-gray-700 leading-relaxed font-serif max-w-lg" >
              Hi there! I'm so glad you're here. I’m an <span className="text-blue-600 font-medium">Electrical & Computer Engineering</span> student passionate about  
              <span className="text-gray-700 font-medium"> research, technology, and innovation</span>.  
              I love <span className="text-gray-800 font-medium">building, learning, and sharing my journey</span> through meaningful projects and discoveries.
            </h5>
          </div>
        </div>

        {/* 🔹 Social Links */}
        <div className="mt-6 flex justify-center space-x-6 text-2xl" style={{ textAlign: 'center' }}>
          <a href="https://github.com/ishitav" target="_blank" className="text-gray-700 hover:text-gray-500 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/ishitav" target="_blank" className="text-blue-700 hover:text-blue-500 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:ishitavas@gmail.com" className="text-gray-700 hover:text-gray-500 transition">
            <FaEnvelope />
          </a>
        </div>
      </section>

    </main>
  );
}