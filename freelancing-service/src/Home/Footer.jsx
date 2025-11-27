export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* ✅ BRAND SECTION */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400">
            Zeal<span className="text-white">Dev</span>
          </h2>
          <p className="mt-4 text-sm text-gray-400">
            I build fast, secure and modern web applications using React,
            Tailwind & Backend integration.
          </p>
        </div>

        {/* ✅ QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
            <li><a href="#services" className="hover:text-cyan-400">Services</a></li>
            <li><a href="#portfolio" className="hover:text-cyan-400">Portfolio</a></li>
            <li><a href="#clients" className="hover:text-cyan-400">Clients</a></li>
            <li><a href="/contact" className="hover:text-cyan-400">Contact</a></li>
          </ul>
        </div>

        {/* ✅ SERVICES */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Web Development</li>
            <li>React Applications</li>
            <li>Backend Integration</li>
            <li>Portfolio Websites</li>
            <li>Deployment</li>
          </ul>
        </div>

        {/* ✅ CONTACT INFO */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>📧 zealdev@gmail.com</li>
            <li>📞 +91 98XXXXXX12</li>
            <li>📍 India</li>
          </ul>

          {/* ✅ SOCIAL ICONS */}
          <div className="flex gap-4 mt-5 text-xl">
            <a href="#" className="hover:text-cyan-400">🌐</a>
            <a href="#" className="hover:text-cyan-400">🐙</a>
            <a href="#" className="hover:text-cyan-400">💼</a>
          </div>
        </div>

      </div>

      {/* ✅ BOTTOM SECTION */}
      <div className="border-t border-gray-800 mt-12 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ZealDev. All rights reserved.
      </div>
    </footer>
  );
}
