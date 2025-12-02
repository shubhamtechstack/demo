import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How can I enroll in LearnHub courses?",
    a: "You can easily enroll by visiting the Courses page, selecting your desired course, and completing the payment or free signup."
  },
  {
    q: "Do I get certificates after course completion?",
    a: "Yes! LearnHub provides verified certificates for all professional courses after successful completion."
  },
  {
    q: "Is LearnHub beginner-friendly?",
    a: "Absolutely! We have beginner to advanced level courses with step-by-step guidance."
  },
  {
    q: "How can I contact mentors directly?",
    a: "You can access mentor support through your dashboard after enrolling in any premium course."
  },
  {
    q: "Is there any refund policy?",
    a: "Yes, we provide a 7-day refund policy if you're not satisfied with the course content."
  }
];

const SupportSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-28 px-6 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden">

      {/* Floating Orbs */}
      <div className="absolute top-10 left-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-cyan-300 to-blue-200">
          LearnHub Support & Help
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Find quick answers to the most common questions from our students.
        </p>
      </motion.div>

      {/* FAQ Wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-6">

        {faqs.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-5 text-left flex items-center justify-between text-white font-semibold text-lg hover:bg-white/10 transition"
            >
              <span>{item.q}</span>
              <span className={`transform transition ${activeIndex === index ? "rotate-180" : ""}`}>
                ⌄
              </span>
            </button>

            {/* Answer with AnimatePresence */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-6 pb-5 text-gray-300 text-sm leading-relaxed"
                >
                  {item.a}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Bottom Support CTA */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative z-10 mt-20 flex justify-center"
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 text-center shadow-2xl hover:scale-105 transition duration-500">
          <h3 className="text-2xl font-bold text-white">
            Still Need Help? 💡
          </h3>
          <p className="text-gray-300 mt-3 max-w-md">
            Our dedicated LearnHub support team is available 24/7 to assist you with any issue.
          </p>
          <button className="mt-6 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:scale-110 transition duration-300">
            Contact Support
          </button>
        </div>
      </motion.div>

    </section>
  );
};

export default SupportSection;
