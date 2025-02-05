export default function Publications() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 text-gray-900 p-8">
      
      <div className="max-w-3xl w-full bg-white p-10 rounded-2xl shadow-xl transition hover:shadow-2xl text-center">
        
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-blue-700 tracking-tight font-mono">
          📜 Publications
        </h1>

        {/* Publications List */}
        <div className="mt-6 p-6 bg-gray-100 border-l-4 border-blue-500 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700">📖 Research Paper</h2>
          <p className="mt-2 text-lg">
            <a href="https://doi.org/10.48550/arXiv.2405.20617" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Large-scale Outdoor Cell-free mMIMO Channel Measurement at 3.5 GHz
            </a>
          </p>
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