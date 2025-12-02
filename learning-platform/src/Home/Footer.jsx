import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-cyan-400">
            LearnHub
          </h2>
          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            LearnHub is a modern learning platform helping students master tech
            skills with structured roadmaps, live projects & real-world guidance.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            {["Home", "Courses", "Tech", "Contact"].map((item, i) => (
              <li
                key={i}
                className="hover:text-white hover:translate-x-1 transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-5">Popular Tracks</h3>
          <ul className="space-y-3 text-gray-300">
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Full Stack</li>
            <li>Data Science</li>
            <li>Cyber Security</li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-5">Stay Updated</h3>
          <p className="text-gray-300 text-sm mb-4">
            Get free learning tips & updates directly in your inbox.
          </p>

          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-pink-600 to-cyan-600 hover:scale-110 transition font-semibold">
              Join
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/20 py-6 text-center text-gray-300 text-sm">
        © {year} LearnHub. All Rights Reserved. | Made with ❤️ for Developers
      </div>
    </footer>
  );
};

export default Footer;
