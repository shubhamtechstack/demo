import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-cyan-400">
          Zeal<span className="text-white">Dev</span>
        </h1>

        {/* ✅ DESKTOP MENU */}
        <nav className="flex items-center justify-center hidden md:flex gap-8 text-lg">
          <Link to="/" className="hover:text-cyan-400">Home</Link>
          <a href="#services" className="hover:text-cyan-400">Services</a>
          <a href="#portfolio" className="hover:text-cyan-400">Portfolio</a>
          {/* <a href="#clients" className="hover:text-cyan-400">Clients</a> */}

          {/* ✅ CONTACT ROUTE */}
          <Link
            to="/contact"
            className="bg-cyan-400 text-black px-4 py-2 rounded-lg hover:bg-cyan-500 transition"
          >
            Contact
          </Link>
        </nav>

        {/* ✅ MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>
      </div>

      {/* ✅ MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-gray-900 px-6 py-6 space-y-4 text-lg">
          <Link to="/" className="block">Home</Link>
          <a href="#services" className="block">Services</a>
          <a href="#portfolio" className="block">Portfolio</a>
          {/* <a href="#clients" className="block">Clients</a> */}
          <Link to="/contact" className="block text-cyan-400">Contact</Link>
        </div>
      )}
    </header>
  );
}
