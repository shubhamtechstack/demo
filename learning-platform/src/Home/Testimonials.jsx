import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Frontend Developer",
    text: "This platform helped me land my first job! The courses are well-structured and easy to follow.",
  },
  {
    name: "Aditi Verma",
    role: "Java Backend Engineer",
    text: "The instructors are amazing. The hands-on projects helped me master Java and Spring Boot.",
  },
  {
    name: "Kunal Singh",
    role: "DSA Learner",
    text: "I finally cracked my interviews after learning DSA here. Highly recommended!",
  },
  {
    name: "Priya Mehta",
    role: "UI/UX Enthusiast",
    text: "The UI/UX course blew my mind. Simple explanations with beautiful examples.",
  },
  {
    name: "Sarthak Gupta",
    role: "Full Stack Developer",
    text: "This is the best platform. MERN stack course quality is unbeatable.",
  },
  {
    name: "Simran Kaur",
    role: "SQL Developer",
    text: "SQL was confusing for me, but the instructor made everything crystal clear!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 md:px-16 bg-purple-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700">
        What Our Students Say
      </h2>

      <p className="text-center mt-3 text-gray-600">
        Hear from learners who transformed their careers with us
      </p>

      {/* Testimonials Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 max-w-7xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-white/90 backdrop-blur-lg shadow-xl p-8 rounded-2xl border border-purple-200 hover:shadow-2xl transition relative"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.04 }}
          >
            {/* Quote Icon */}
            <FaQuoteLeft className="text-purple-400 text-3xl absolute -top-4 -left-3" />

            {/* Rating Stars */}
            <div className="flex gap-1 mt-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <FaStar key={s} className="text-yellow-400" />
              ))}
            </div>

            {/* Text */}
            <p className="mt-4 text-gray-700 leading-relaxed">“{t.text}”</p>

            {/* User Info */}
            <div className="mt-6">
              <h3 className="font-semibold text-lg text-purple-700">{t.name}</h3>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
