import React from "react";
import { FaPlayCircle, FaStar, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Landingimg from "../assets/Landingimg.png"
import Typewriter from "typewriter-effect";

export default function LandingPage() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <section className=" w-full bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20 px-1 md:px-16">
        
        <div className=" flex max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center justify-between">

          {/* LEFT TEXT */}
          <motion.div 
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
  className="text-4xl md:text-6xl font-bold leading-tight h-30"
  initial={{ scale: 0.8 }}
  animate={{ scale: 1 }}
  transition={{ duration: 0.6 }}
>
  <Typewriter
    options={{
      strings: [
        "Learn New Skills Anytime, Anywhere.",
        "Upgrade Your Career.",
        "Start Learning Today!",
      ],
      autoStart: true,
      loop: true,
      delay: 50,
      deleteSpeed: 40,
    }}
  />
</motion.h1>


            <motion.p 
              className="mt-4 text-lg md:text-xl opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Join thousands of students improving their careers with expert-led courses.
            </motion.p>

            <motion.div 
              className="mt-6 flex gap-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <button className="bg-gray-300 text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition">
                Explore Courses
              </button>

              <button className="flex items-center gap-2 border px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition">
                <FaPlayCircle /> Watch Demo
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE (3D Hover + Float Animation) */}
          <motion.div 
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Tilt glareEnable={true} glareColor="pink">
              <motion.img
                src={Landingimg}
                className="rounded-2xl shadow-2xl h-[66vh] "
                alt="Learning"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
            </Tilt>
          </motion.div>

        </div>
      </section>

      {/* FEATURES SECTION */}
   <section className="max-w-6xl mx-auto py-20 px-6 md:px-16">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center text-purple-900 drop-shadow-lg">
    Why Choose Our Platform?
  </h2>

  <p className="text-center text-purple-900 mt-4 text-lg">
    Learn, grow and build your career with modern learning tools.
  </p>

  <div className="grid md:grid-cols-3 gap-10 mt-16">

    {[
      { title: "Expert Instructors", text: "Learn from top industry experts with years of experience." },
      { title: "Flexible Learning", text: "Study anytime with easy access on all your devices." },
      { title: "Earn Certificates", text: "Receive professional certificates to boost your resume." },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
        whileHover={{ scale: 1.08, rotate: 1 }}
        className="relative bg-gradient-to-br from-blue-900 to-purple-900
                   backdrop-blur-xl border border-purple-900 shadow-xl 
                   hover:border-purple-300/80 hover:shadow-purple-500/40 
                   rounded-2xl p-8 transition-all duration-300"
      >
        {/* Glow Border */}
        <div className="absolute inset-0 rounded-2xl opacity-40 
                        bg-gradient-to-r from-blue-900 to-purple-900 blur-xl -z-10"></div>

        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
        <p className="mt-3 text-purple-100 leading-relaxed">{item.text}</p>

        <motion.div
          className="mt-6 bg-purple-500/30 border border-purple-300/30 
                     rounded-xl p-3 text-purple-100 text-sm w-max"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1, scale: 1.05 }}
        >
          Learn More →
        </motion.div>
      </motion.div>
    ))}

  </div>
</section>

    </div>
  );
}
