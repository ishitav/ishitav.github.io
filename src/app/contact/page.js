import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 text-gray-900 p-8">
      
      {/* Main Content Container */}
      <div className="max-w-3xl w-full bg-white p-10 rounded-2xl shadow-xl transition hover:shadow-2xl text-center">
        
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-blue-700 tracking-tight font-mono">
          📬 Contact Me
        </h1>

        {/* Intro Text */}
        <p className="mt-4 text-lg text-gray-700 leading-relaxed font-serif">
          Feel free to reach out! Whether it's for collaboration, a project idea, or just to connect—I’d love to hear from you.
        </p>

        {/* Contact Info */}
        <div className="mt-6 flex flex-col space-y-4 text-lg">
          <p>📧 <strong>Email:</strong> <a href="mailto:ishitavas@gmail.com" className="text-blue-600 hover:underline">ishitavas@gmail.com</a></p>
          <p>🔗 <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/ishitav" target="_blank" className="text-blue-600 hover:underline">linkedin.com/in/ishitav</a></p>
          <p>💻 <strong>GitHub:</strong> <a href="https://github.com/ishitav" target="_blank" className="text-blue-600 hover:underline">github.com/ishitav</a></p>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex justify-center space-x-6 text-3xl">
          <a href="https://github.com/ishitav" target="_blank" className="text-gray-800 hover:text-gray-600 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/ishitavas" target="_blank" className="text-blue-700 hover:text-blue-500 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:ishitavas@gmail.com" className="text-red-600 hover:text-red-400 transition">
            <FaEnvelope />
          </a>
        </div>

        {/* Back to Home Button */}
        <div className="mt-8">
          <a href="/" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition text-lg">
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}