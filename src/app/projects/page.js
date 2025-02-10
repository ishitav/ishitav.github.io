import Header from "../../../components/Header";

const projects = [
  {
    title: "QB7  - Cublical version of BB-8",
    description:
      "Designed and built a self-balancing cubic robot with flip functionality, integrating motor control, embedded software, and hardware components. Developed motion algorithms on a Raspberry Pi, optimized power management, and created CAD models for mechanical stability.",
    techStack: ["Python", "Raspberry Pi", "Embedded Systems", "CAD", "Motor Control"],
   //image: "/usc-logo.png", // Placeholder
    github: "#",
  },
  {
    title: "BioBotanic - Self Automated Greenhouse",
    description:
      "Developed an autonomous greenhouse system that optimizes plant growth using IoT sensors for moisture, lighting, and temperature control. Implemented real-time monitoring and automation for over 30+ plant types, leveraging PWM for precision control.",
    techStack: ["Arduino", "C++", "IoT Sensors", "Automation", "PWM"],
    //image: "/usc-logo.png", // Placeholder
    github: "#",
  },
  {
    title: "Film Club Web Scraper",
    description:
      "Engineered a Python-based web scraper to classify and aggregate film club information across U.S. states and cities. Integrated machine learning algorithms for classification, utilizing Scikit-learn for pattern recognition and BeautifulSoup for efficient data extraction.",
    techStack: ["Python", "BeautifulSoup", "Scikit-learn", "Data Scraping", "Machine Learning"],
   // image: "/usc-logo.png", // Placeholder
    github: "#",
  },

  ,
  {
    title: "FPGA Flappy Bird",
    description:
      "Developed a Verilog-based game inspired by Flappy Bird on the Nexys-4 FPGA with real-time VGA rendering, state machine logic, and collision detection. Designed modular components, including a top-level state controller, block controller for player movement, and VGA display controller for dynamic rendering. Implemented one-hot state machines, hardware-based timing constraints, and level progression with adaptive difficulty.",
    techStack: ["Verilog", "Vivado", "FPGA (Nexys-4)","VGA Rendering","State Machine Logic", "Digital Design"],
   // image: "/usc-logo.png", // Placeholder
    github: "#",
  },


];

export default function Projects() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900 p-8">
      {/* 🔹 Navigation Header */}
      <Header />

      {/* 🔹 Main Content */}
      <section className="w-full max-w-5xl mt-24 px-6">
        
        {/* 🔹 Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight font-mono">
            Projects
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            A collection of projects I've worked on (: 
          </p>
        </div>

        {/* 🔹 Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-xl shadow-md transition-transform transform hover:scale-105"
            >
              {/* Project Image
              <div className="w-full h-48 rounded-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div> */}

              {/* Project Title */}
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{project.title}</h3>

              {/* Project Description */}
              <p className="text-gray-600 mt-2">{project.description}</p>

              {/* Tech Stack */}
              <div className="mt-4">
                <h4 className="text-lg font-medium text-gray-700">Tech Stack:</h4>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech, i) => (
                    <li key={i} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* GitHub Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 hover:underline text-lg font-medium"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}