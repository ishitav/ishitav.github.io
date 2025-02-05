export default function About() {
    return (
      <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 text-gray-900 p-8">
        <div className="max-w-3xl w-full bg-white p-8 rounded-2xl shadow-xl transition hover:shadow-2xl">
          
          {/* Title */}
          <h1 className="text-5xl font-extrabold text-center text-pink-600 tracking-tight">About Me</h1>
  
          {/* Introduction */}
          <p className="mt-4 text-center text-lg text-gray-700 leading-relaxed">
            Hi, I'm <strong className="text-pink-700">Ishita Vasishtha</strong>, an Electrical & Computer Engineering student at USC. 
            I’m passionate about <span className="text-pink-500 font-medium">research, technology, and solving complex problems</span>. 
            My work spans <span className="text-purple-600 font-medium">machine learning, signal processing, and embedded systems</span>. 
            I'm excited to make an impact through innovation. ✨
          </p>
  
          {/* Education Section */}
          <div className="mt-8 p-6 bg-pink-50 border-l-4 border-pink-500 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-pink-700">🎓 Education</h2>
            <p className="mt-2 text-lg">
              <strong>B.S. Electrical & Computer Engineering</strong> <br />
              <span className="text-gray-600">University of Southern California, May 2026</span> <br />
              <span className="text-gray-500 text-sm">Minor: Entrepreneurship</span>
            </p>
          </div>
  
          {/* Publications Section */}
          <div className="mt-8 p-6 bg-purple-50 border-l-4 border-purple-500 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-purple-700">📜 Publications</h2>
            <p className="mt-2 text-lg flex items-center">
              <a
                href="https://doi.org/10.48550/arXiv.2405.20617"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 transition flex items-center"
              >
                Large-scale Outdoor Cell-free mMIMO Channel Measurement at 3.5 GHz
              </a>
            </p>
          </div>
  
          {/* Back to Home Link */}
          <div className="mt-8 flex justify-center">
            <a href="/" className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-pink-600 transition text-lg">
              Back to Home →
            </a>
          </div>
        </div>
      </main>
    );
  }