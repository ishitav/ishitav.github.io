import Header from "../../components/Header";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900 font-sans">
      
      <Header />
     
      {/* 🔹 Hero Section */}
      <section className="w-full flex flex-col items-center justify-center min-h-screen text-center px-6">
        
        {/* Profile & Title Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          
          {/* Profile Image */}
          <div className="w-28 h-28 rounded-full border-4 border-gray-200 shadow-lg overflow-hidden">
            <img src="/profile.jpg" alt="Ishita" className="w-full h-full object-cover" />
          </div>

          {/* Text Content */}
          <div  class = "flex flex-col items-center text-center">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-800 tracking-tight font-mono">
              Welcome! I'm Ishita.
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-gray-600 mt-2">
              Student | Researcher | Engineer
            </h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed font-serif max-w-lg" >
              Hi there! I'm so glad you're here. I’m an <span className="text-blue-600 font-medium">Electrical & Computer Engineering</span> student passionate about  
              <span className="text-gray-700 font-medium"> research, technology, and innovation</span>.  
              I love <span className="text-gray-800 font-medium">building, learning, and sharing my journey</span> through meaningful projects and discoveries.
            </p>

            {/* 🔹 Social Links */}
            <div className="mt-6 flex justify-center space-x-6 text-2xl">
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
          </div>
        </div>

        
      </section>

    </main>
  );
}