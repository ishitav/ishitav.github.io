export default function Header() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md py-3 z-50 min-h-[80px]">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-8">
        
        {/* 🔹 Left - Name (Clickable Home Button) */}
        <a href="/" className="text-xl font-bold text-gray-800 font-mono mr-12px hover:text-blue-500 transition">
          Ishita Vasishtha
        </a>

        {/* 🔹 Right - Navigation Links */}
        <div className="flex space-x-6 ml-4px">
          {[
            { name: "About", href: "/about" },
            { name: "Resume", href: "/resume" },
            { name: "Publications", href: "/publications" },
           
            { name: "Contact", href: "/contact" }
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-600 hover:text-blue-500 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}