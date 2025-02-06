import Header from "../../../components/Header";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900 p-8">
      
      {/* 🔹 Navigation Header (Now Consistent) */}
      <Header />

      {/* 🔹 Main Content */}
      <section className="w-full max-w-5xl mt-20 px-6 text-center">
        
        {/* 🔹 Page Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight font-mono">
          Contact Me
        </h1>

        {/* 🔹 Introduction */}
        <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Feel free to reach out! Whether it's for a collaboration, a project idea, or just to connect—I’d love to hear from you.
        </p>

       
        {/* 🔹 Social Links */}
        <div className="mt-6 flex justify-center space-x-6 text-3xl">
          <a href="https://github.com/ishitav" target="_blank" className="text-gray-800 hover:text-gray-600 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/ishitavas" target="_blank" className="text-blue-700 hover:text-blue-500 transition">
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