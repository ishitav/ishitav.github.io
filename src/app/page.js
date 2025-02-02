export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 text-gray-900 p-8">
      <div className="max-w-3xl w-full bg-white p-10 rounded-2xl shadow-xl text-center transition hover:shadow-2xl">
        
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-pink-600 tracking-tight">
          🌸 Welcome! I'm Ishita! 🌸
        </h1>

        {/* Intro Text */}
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          I'm an <span className="text-pink-600 font-medium">Electrical & Computer Engineering</span> student passionate about  
          <span className="text-purple-600 font-medium"> research, technology, and innovation</span>.  
          I love <span className="text-pink-500 font-medium">building, learning, and sharing my journey</span> through meaningful projects and discoveries.
        </p>

        {/* Call-to-Action Button */}
        <div className="mt-6">
          <a
            href="/about"
            className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg hover:bg-pink-600 transition transform hover:scale-105"
          >
            Learn More About Me →
          </a>
        </div>
      </div>
    </main>
  );
}