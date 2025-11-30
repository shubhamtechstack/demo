import React from "react";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Java Programming",
    description: "Master OOP, data structures, and backend development.",
    color: "from-orange-400 to-red-500",
  },
  {
    title: "DSA (Data Structures & Algorithms)",
    description: "Crack coding interviews with top-notch DSA concepts.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Frontend Development",
    description: "Learn HTML, CSS, JavaScript, React and build UI apps.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend Development",
    description: "Node.js, Express, MongoDB — complete server-side mastery.",
    color: "from-green-500 to-teal-500",
  },
  {
    title: "SQL & Database",
    description: "Database design, MySQL, PostgreSQL, queries & joins.",
    color: "from-yellow-500 to-amber-500",
  },
  {
    title: "Python Full Course",
    description: "Python basics to advanced: projects, automation, AI.",
    color: "from-pink-500 to-rose-500",
  },
];

export default function PopularCourses() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-900 to-purple-900 py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          ⭐ Popular Courses
        </motion.h2>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
              className={`p-6 rounded-2xl shadow-xl bg-gradient-to-br ${course.color} cursor-pointer`}
            >
              <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
              <p className="text-sm opacity-80">{course.description}</p>

              <button className="mt-4 py-2 px-4 bg-black/40 text-white rounded-xl backdrop-blur-md hover:bg-black/60 transition">
                Explore
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
