import React from "react";
import { motion } from "framer-motion";

const stacks = [
  {
    title: "Frontend Stack",
    tech: ["React", "Tailwind CSS", "Vite", "Next.js"],
    color: "from-pink-500 to-purple-600",
    desc: "Build fast, responsive and interactive user interfaces.",
  },
  {
    title: "Backend Stack",
    tech: ["Node.js", "Express", "Spring Boot"],
    color: "from-emerald-500 to-teal-600",
    desc: "Handle business logic, APIs, authentication & security.",
  },
  {
    title: "Database Stack",
    tech: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    color: "from-yellow-500 to-orange-600",
    desc: "Store, manage and scale millions of user records.",
  },
  {
    title: "DevOps Stack",
    tech: ["Docker", "GitHub Actions", "AWS", "Nginx"],
    color: "from-cyan-500 to-blue-600",
    desc: "Deploy, automate and scale production systems.",
  },
  {
    title: "AI & Data Stack",
    tech: ["Python", "TensorFlow", "Power BI", "OpenAI API"],
    color: "from-purple-500 to-fuchsia-600",
    desc: "Build intelligent systems & data-driven products.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 60, rotateX: -15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      type: "spring",
    },
  }),
};

const TechStackExplorer = () => {
  return (
    <section className="relative py-28 px-6 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden">

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-cyan-300 to-blue-200">
          Explore Industry Tech Stacks
        </h2>
        <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
          LearnHub doesn’t just teach languages — we teach how real companies
          build scalable products using modern technology stacks.
        </p>
      </motion.div>

      {/* Stack Cards */}
      <div className="relative z-10 max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 perspective-[1200px]">

        {stacks.map((stack, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              rotateY: 12,
              rotateX: -6,
              scale: 1.05,
            }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8 cursor-pointer transform-gpu"
          >
            {/* Gradient Badge */}
            <div
              className={`inline-block px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${stack.color}`}
            >
              {stack.title}
            </div>

            {/* Description */}
            <p className="mt-5 text-gray-300 leading-relaxed">
              {stack.desc}
            </p>

            {/* Tech Pills */}
            <div className="mt-6 flex flex-wrap gap-3">
              {stack.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1 rounded-full text-sm bg-white/15 border border-white/20 text-white hover:bg-white/25 transition"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 hover:opacity-100 transition"></div>
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
            Want to Master These Stacks?
          </h3>
          <p className="text-gray-300 mt-3 max-w-md">
            LearnHub provides structured roadmaps, real-world projects and
            interview preparation for each tech stack.
          </p>
          <button className="mt-6 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold hover:scale-110 transition">
            Start Learning Now 🚀
          </button>
        </div>
      </motion.div>

    </section>
  );
};

export default TechStackExplorer;
