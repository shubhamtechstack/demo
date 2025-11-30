import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const socialIcons = [
    { icon: <FaFacebook />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaLinkedin />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
  ];

  return (
    <footer className="bg-purple-900 text-white py-14 px-6 md:px-16 mt-20">
      
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold">EduPro</h2>
          <p className="mt-4 text-purple-200">
            Learn anything, anytime, anywhere. Upgrade your skills with top instructors.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-purple-200">
            <li className="hover:text-white cursor-pointer transition">Home</li>
            <li className="hover:text-white cursor-pointer transition">Courses</li>
            <li className="hover:text-white cursor-pointer transition">Teach</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
          </ul>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <ul className="space-y-3 text-purple-200">
            <li className="hover:text-white cursor-pointer transition">Frontend</li>
            <li className="hover:text-white cursor-pointer transition">Backend</li>
            <li className="hover:text-white cursor-pointer transition">Data Science</li>
            <li className="hover:text-white cursor-pointer transition">Java & DSA</li>
          </ul>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>

          <div className="flex space-x-4 mt-3">
            {socialIcons.map((s, i) => (
              <motion.a
                key={i}
                href={s.link}
                className="text-2xl p-3 rounded-full bg-purple-800 hover:bg-purple-600 transition"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                whileHover={{ scale: 1.2 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Bottom Divider */}
      <motion.div
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="h-[1px] bg-purple-400 mt-10"
      />

      {/* Copyright */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center text-purple-200 mt-6"
      >
        © {new Date().getFullYear()} EduPro. All Rights Reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
