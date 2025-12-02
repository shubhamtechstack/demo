import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ onLoginClick }) {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);


  function handleCourses() {
    navigate("/courses");
  }
function handletech(){
  navigate("/tech")
}
function handleContact(){
  navigate("/contact")
}
  return (
    <nav className="w-full shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-purple-600">
          LearnHub
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">

          {/* Home */}
          <Link to="/" className="hover:text-purple-600 transition">
            Home
          </Link>

          {/* Categories */}
          

          {/* Courses */}
          <button
            onClick={handleCourses}
            className="hover:text-purple-600 transition"
          >
            Courses
          </button>

          <Link  to="/tech" onClick={handletech} className="hover:text-purple-600 transition">
            Teach
          </Link>

<Link  to="/contact"  className="hover:text-purple-600 transition">
            Contact us
          </Link>



          {/* Login Signup */}
          <div className="flex gap-4">
            <button
              onClick={onLoginClick}
              className="px-4 py-1 border rounded-md hover:bg-gray-100"
            >
              Login
            </button>

            <button className="px-4 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700">
              Signup
            </button>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white p-4 space-y-3 shadow">

          <Link to="/" className="block hover:text-purple-600">
            Home
          </Link>

          {/* Mobile Categories */}
         
          <button
            onClick={handleCourses}
            className="block hover:text-purple-600"
          >
            Courses
          </button>

          <Link to="/tech" onClick={handletech} className="block hover:text-purple-600">Teach</Link>

<Link  to="/contact"  onClick={handleContact} className="hover:text-purple-600 transition">
            Contact us
          </Link>
          <button
            onClick={onLoginClick}
            className="w-full border py-2 rounded-md hover:bg-gray-100"
          >
            Login
          </button>

          <button className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
            Signup
          </button>
        </div>
      )}
    </nav>
  );
}
