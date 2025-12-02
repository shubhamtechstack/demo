import React from "react";

const ContactHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-blue-900 overflow-hidden px-6">

      {/* Floating gradient orbs for 3D depth */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl "></div>
      <div className="absolute top-40 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl "></div>

      {/* Main Glass Card */}
      <div className="relative z-10 max-w-5xl w-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-10 md:p-16 text-center">

        {/* Website Name */}
        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-cyan-300 to-blue-200 ">
          Contact LearnHub
        </h1>

        {/* Tagline */}
        <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Have questions, feedback, collaboration ideas, or need support with your learning journey?
          <span className="text-cyan-300 font-semibold"> LearnHub </span>
          is always here to help you grow.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:scale-110 transition duration-300">
            Get in Touch
          </button>

          <button className="px-8 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition duration-300">
            Explore Courses
          </button>
        </div>

        {/* Floating Info Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: "Students", value: "10,000+" },
            { title: "Courses", value: "150+" },
            { title: "Mentors", value: "50+" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20 shadow-lg transform transition duration-500 hover:-translate-y-2 hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-white">{item.value}</h3>
              <p className="text-gray-300 text-sm mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 flex flex-col items-center text-gray-300 animate-bounce">
        <span className="text-sm">Scroll Down</span>
        <div className="w-1 h-10 bg-gradient-to-b from-cyan-300 to-transparent mt-2 rounded-full"></div>
      </div>
    </section>
  );
};

export default ContactHero;
