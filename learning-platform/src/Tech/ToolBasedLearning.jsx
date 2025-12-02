import React from "react";
import { motion } from "framer-motion";

const tools = [
  {
    name: "VS Code",
    icon: "💻",
    desc: "Industry-standard code editor for fast development.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "Git & GitHub",
    icon: "🐙",
    desc: "Version control, collaboration & open-source workflow.",
    color: "from-gray-600 to-gray-900",
  },
  {
    name: "Postman",
    icon: "📡",
    desc: "API testing, request automation & response validation.",
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Docker",
    icon: "🐳",
    desc: "Containerize applications for production deployment.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Figma",
    icon: "🎨",
    desc: "UI/UX design & developer handoff tool.",
    color: "from-pink-500 to-purple-600",
  },
  {
    name: "AWS Console",
    icon: "☁️",
    desc: "Cloud deployment, databases, storage & security.",
    color: "from-yellow-500 to-orange-600",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 80, rotateX: -20, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      type: "spring",
    },
  }),
};

const ToolBasedLearning = () => {
  return (
    <section className="relative py-28 px-6 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden">

      {/* Floating Orbs */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-pink-300 to-purple-200">
          Tool-Based Learning
        </h2>
        <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
          LearnHub doesn’t just teach theory — we train you on real-world industry
          tools used daily by professional developers.
        </p>
      </motion.div>

      {/* Tool Cards */}
      <div className="relative z-10 max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 perspective-[1400px]">

        {tools.map((tool, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              rotateY: 14,
              rotateX: -6,
              scale: 1.07,
            }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8 cursor-pointer transform-gpu"
          >
            {/* Tool Icon */}
            <div className="text-5xl">{tool.icon}</div>

            {/* Tool Name */}
            <h3 className="mt-4 text-2xl font-bold text-white">
              {tool.name}
            </h3>

            {/* Tool Description */}
            <p className="mt-3 text-gray-300 leading-relaxed">
              {tool.desc}
            </p>

            {/* Gradient Footer Bar */}
            <div
              className={`mt-6 h-1 w-full rounded-full bg-gradient-to-r ${tool.color}`}
            ></div>

            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 hover:opacity-100 transition"></div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative z-10 mt-24 flex justify-center"
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 text-center shadow-2xl hover:scale-105 transition duration-500">
          <h3 className="text-2xl font-bold text-white">
            Master Industry Tools with LearnHub
          </h3>
          <p className="text-gray-300 mt-3 max-w-md">
            From GitHub to AWS — LearnHub trains you with real workflows and
            hands-on practice.
          </p>
          <button className="mt-6 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold hover:scale-110 transition">
            Start Tool Training ⚙️
          </button>
        </div>
      </motion.div>

    </section>
  );
};

export default ToolBasedLearning;
