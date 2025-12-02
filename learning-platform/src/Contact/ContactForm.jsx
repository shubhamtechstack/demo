import React, { useState } from "react";

const ContactForm = () => {
  const [focused, setFocused] = useState(null);

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-purple-900 via-blue-900 to-blue-900 overflow-hidden">

      {/* Animated Background Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl "></div>

      {/* Section Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT INFO */}
        <div className="text-white space-y-6">
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-cyan-300 to-blue-200">
            Let’s Talk With LearnHub
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Have doubts, feedback, course-related questions or partnership ideas?
            Our LearnHub support team is always ready to help you.
          </p>

          <div className="space-y-4 text-gray-200">
            <div className="flex items-center gap-4">
              <span className="text-cyan-300 text-xl">📧</span>
              <span>support@learnhub.com</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-cyan-300 text-xl">📞</span>
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-cyan-300 text-xl">📍</span>
              <span>India · Online Learning Platform</span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-10">

          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Send Your Message 🚀
          </h3>

          <form className="space-y-6">

            {/* NAME */}
            <div className="relative">
              <input
                type="text"
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                required
                className="w-full bg-transparent border border-white/30 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400 transition"
              />
              <label
                className={`absolute left-4 text-gray-300 pointer-events-none transition-all 
                ${focused === "name" ? "-top-3 text-sm text-cyan-300 bg-indigo-900 px-2" : "top-3"}`}
              >
                Your Name
              </label>
            </div>

            {/* EMAIL */}
            <div className="relative">
              <input
                type="email"
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                required
                className="w-full bg-transparent border border-white/30 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400 transition"
              />
              <label
                className={`absolute left-4 text-gray-300 pointer-events-none transition-all 
                ${focused === "email" ? "-top-3 text-sm text-cyan-300 bg-indigo-900 px-2" : "top-3"}`}
              >
                Your Email
              </label>
            </div>

            {/* MESSAGE */}
            <div className="relative">
              <textarea
                rows="4"
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                required
                className="w-full bg-transparent border border-white/30 rounded-xl px-4 py-3 text-white outline-none resize-none focus:border-cyan-400 transition"
              ></textarea>
              <label
                className={`absolute left-4 text-gray-300 pointer-events-none transition-all 
                ${focused === "message" ? "-top-3 text-sm text-cyan-300 bg-indigo-900 px-2" : "top-3"}`}
              >
                Your Message
              </label>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="relative w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 font-bold text-white overflow-hidden transition hover:scale-105 group"
            >
              <span className="relative z-10">Send Message</span>
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition"></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
