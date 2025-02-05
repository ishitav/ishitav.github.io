export default function Header() {
    return (
      <nav className="w-full fixed top-0 left-0 bg-white shadow-md py-3 z-50">
        <div className="max-w-5xl mx-auto flex justify-between px-8">
          {/* Left - Name */}
          <h2 className="text-xl font-bold text-gray-800 font-mono">Ishita Vasishtha</h2>
  
          {/* Right - Navigation Links */}
          <div className="space-x-6">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Resume", href: "/resume" },
              { name: "Projects", href: "/projects" },
              { name: "Publications", href: "/publications" },
              { name: "Involvements", href: "/involvements" },
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