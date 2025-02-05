export default function Involvements() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 text-gray-900 p-8">
      
      {/* Main Content Box */}
      <div className="max-w-4xl w-full bg-white p-10 rounded-2xl shadow-xl transition hover:shadow-2xl">
        
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-blue-700 tracking-tight font-mono text-center">
          🤖 My Involvements
        </h1>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed text-center font-serif">
          Here are some of the organizations and projects I have been actively involved in at USC.
        </p>

        {/* 🔹 USC Clubs Section */}
        <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700">🏛 USC Clubs</h2>
          <p className="mt-2 text-lg text-gray-700">
            Engaged in hands-on projects, consulting, and technical development through various USC student organizations.
          </p>
        </div>

        {/* 🔹 Makers Club - B-8 Robot */}
        <div className="mt-8 p-6 bg-gray-100 border-l-4 border-gray-500 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">🤖 Makers: B-8 Robot</h2>
          <p className="mt-2 text-lg text-gray-700">
            Developed a cubic-shaped robot with **flip functionality**, integrating **electrical components and software** using a **Raspberry Pi** for control.  
            Led the development of both **electrical systems** and **software infrastructure**, employing a **Raspberry Pi** as the central control unit.
          </p>
        </div>

        {/* 🔹 BioBotanic - Automated Greenhouse */}
        <div className="mt-8 p-6 bg-gray-50 border-l-4 border-green-500 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-700">🌱 Makers: BioBotanic - Automated Greenhouse</h2>
          <p className="mt-2 text-lg text-gray-700">
            Designed an **automated greenhouse** that adjusts **brightness and moisture levels** based on plant needs, ensuring **optimal growth conditions**.
          </p>
          <ul className="mt-2 text-lg text-gray-700 list-disc list-inside">
            <li>💡 Uses **plant-specific LED lights** with **PWM-controlled brightness**.</li>
            <li>📊 **Database supports 30 plant types** with **time-series logging**.</li>
            <li>💦 **Automated Irrigation System**:
              <ul className="list-disc ml-5">
                <li>Soil Moisture Sensor detects dryness.</li>
                <li>Mini Water Pump supplies water.</li>
                <li>Arduino microcontroller automates the process.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* 🔹 USC AIM Consulting - Letterboxd Project */}
        <div className="mt-8 p-6 bg-gray-100 border-l-4 border-gray-500 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">📊 USC AIM Consulting: Letterboxd</h2>
          <p className="mt-2 text-lg text-gray-700">
            Consulted **Letterboxd**, a film club, on strategies to **expand their headquarters**.  
            Conducted research and developed solutions to optimize their operations and outreach.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            💡 <strong>Related Project:</strong> <em>Film Club Web Scraper</em>  
            Built a **Python pipeline** using **BeautifulSoup & Machine Learning** to classify film clubs across the U.S.
          </p>
        </div>

        {/* 🔹 USC AIM Consulting - Nestlé Project */}
        <div className="mt-8 p-6 bg-gray-50 border-l-4 border-blue-500 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700">📊 USC AIM Consulting: Nestlé</h2>
          <p className="mt-2 text-lg text-gray-700">
            Worked on a **new brand creation project** for **Nestlé** focused on analyzing target demographics.  
            Led **data collection efforts** through **interviews & surveys**, ensuring valuable insights for product development.  
            (Due to **NDA restrictions**, project specifics cannot be shared.)
          </p>
        </div>

        {/* 🔹 Back to Home Button */}
        <div className="mt-8 flex justify-center">
          <a href="/" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition text-lg">
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}