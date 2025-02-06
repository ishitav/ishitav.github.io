import Header from "../../../components/Header";

export default function Publications() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900 p-8">
      
      {/* 🔹 Navigation Header */}
      <Header />

      {/* 🔹 Main Content */}
      <section className="w-full max-w-5xl mt-24 px-6">
        
        {/* 🔹 Page Title */}
        <div className="text-left">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight font-mono">
            Research & Publications
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-2xl">
            My research focuses on **wireless systems, signal processing, and hardware for AI**. Below is a selection of my **published work** in the field.
          </p>
        </div>

        {/* 🔹 Research Papers */}
        <div className="mt-12 space-y-8">
          
          {/* 🔹 First Paper */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <h2 className="text-2xl font-semibold text-blue-700 font-mono">
              Large-scale Outdoor Cell-free mMIMO Channel Measurement at 3.5 GHz
            </h2>
            <p className="mt-2 text-lg text-gray-700">
              This paper presents a large-scale outdoor **cell-free massive MIMO** channel measurement study at **3.5 GHz**, analyzing propagation characteristics, performance, and real-world deployment challenges.
            </p>
            <a 
              href="https://doi.org/10.48550/arXiv.2405.20617" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block mt-3 text-blue-600 hover:underline text-lg font-medium"
            >
              Read Full Paper →
            </a>
          </div>

          {/* 🔹 Future Research Placeholder */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-gray-400 opacity-80">
            <h2 className="text-2xl font-semibold text-gray-700 font-mono">
              Upcoming Research
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              More publications in progress—stay tuned for upcoming work on **hardware-driven AI processing, edge computing, and wireless network optimization**.
            </p>
          </div>

        </div>

        {/* 🔹 Back to Home Button */}
        <div className="mt-12">
          <a href="/" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition text-lg">
            ← Back to Home
          </a>
        </div>

      </section>
    </main>
  );
}