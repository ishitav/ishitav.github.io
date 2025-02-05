export default function Projects() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 text-gray-900 p-8">
      
      <div className="max-w-3xl w-full bg-white p-10 rounded-2xl shadow-xl transition hover:shadow-2xl text-center">
        
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-blue-700 tracking-tight font-mono">
          🛠 My Projects
        </h1>

        {/* Projects List */}
        <div className="mt-6 p-6 bg-gray-100 border-l-4 border-blue-500 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700">📌 Featured Projects</h2>
          <ul className="mt-2 text-lg text-gray-700 list-disc list-inside">
            <li><strong>Film Club Web Scraper</strong> - Python + ML project for classifying film clubs.</li>
            <li><strong>IoT Sensor System</strong> - Embedded system for real-time data collection.</li>
            <li><strong>Data Visualization Dashboard</strong> - React + D3.js interactive data tool.</li>
            <li><strong>Details coming soon!</strong> Stay tuned (: </li>
          </ul>
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