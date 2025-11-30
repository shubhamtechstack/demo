import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ onLoginClick }) {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  function handleCourses() {
    navigate("/courses");
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
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setCategoryOpen(true)}
            onMouseLeave={() => setCategoryOpen(false)}
          >
            <div className="flex items-center gap-1 hover:text-purple-600">
              Categories <ChevronDown size={16} />
            </div>

            {categoryOpen && (
              <div className="absolute top-8 bg-white border shadow-md rounded-md w-40 p-3 space-y-2">
                <Link className="block hover:text-purple-600">Development</Link>
                <Link className="block hover:text-purple-600">Business</Link>
                <Link className="block hover:text-purple-600">Design</Link>
                <Link className="block hover:text-purple-600">Marketing</Link>
              </div>
            )}
          </div>

          {/* Courses */}
          <button
            onClick={handleCourses}
            className="hover:text-purple-600 transition"
          >
            Courses
          </button>

          <Link className="hover:text-purple-600 transition">
            Teach
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
          <div>
            <div
              className="flex justify-between items-center cursor-pointer hover:text-purple-600"
              onClick={() => setCategoryOpen(!categoryOpen)}
            >
              Categories <ChevronDown size={18} />
            </div>
            {categoryOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <Link className="block">Development</Link>
                <Link className="block">Business</Link>
                <Link className="block">Design</Link>
                <Link className="block">Marketing</Link>
              </div>
            )}
          </div>

          <button
            onClick={handleCourses}
            className="block hover:text-purple-600"
          >
            Courses
          </button>

          <Link className="block hover:text-purple-600">Teach</Link>

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
