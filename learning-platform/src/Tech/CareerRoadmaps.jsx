import React from "react";
import { motion } from "framer-motion";

const roadmaps = [
  {
    title: "Frontend Developer",
    icon: "🎨",
    desc: "HTML, CSS, JavaScript, React, UI/UX & Performance Optimization",
    steps: ["HTML", "CSS", "JS", "React", "Projects", "Internship"],
    color: "from-pink-500 to-purple-600",
  },
  {
    title: "Backend Developer",
    icon: "⚙️",
    desc: "Java, Node.js, APIs, Databases, Auth & System Design",
    steps: ["Core Lang", "APIs", "DB", "Auth", "Cloud", "Job Prep"],
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Data Analyst",
    icon: "📊",
    desc: "Excel, SQL, Python, Power BI, Data Cleaning & Visualization",
    steps: ["Excel", "SQL", "Python", "Power BI", "Projects", "Interviews"],
    color: "from-yellow-500 to-orange-600",
  },
  {
    title: "Full Stack Developer",
    icon: "🌐",
    desc: "Frontend + Backend + Databases + Deployment",
    steps: ["Frontend", "Backend", "DB", "Auth", "Deploy", "Startup Ready"],
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "AI / Data Scientist",
    icon: "🤖",
    desc: "Python, ML, Deep Learning, NLP & Real AI Products",
    steps: ["Python", "Maths", "ML", "DL", "NLP", "AI Projects"],
    color: "from-red-500 to-pink-600",
  },
  {
    title: "Cyber Security",
    icon: "🛡️",
    desc: "Networking, Linux, Ethical Hacking & Security Audits",
    steps: ["Networks", "Linux", "Ethical Hacking", "Pentesting", "Bug Bounty"],
    color: "from-gray-600 to-gray-900",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 100, rotateX: -25, scale: 0.85 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      type: "spring",
    },
  }),
};

const CareerRoadmaps = () => {
  return (
    <section className="relative py-28 px-6 bg-gradient-to-br from-black via-slate-900 to-black overflow-hidden">

      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-cyan-400 to-green-400">
          Career Roadmaps
        </h2>
        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
          Choose your dream career path and follow a step-by-step learning roadmap
          crafted by industry experts.
        </p>
      </motion.div>

      {/* Roadmap Cards */}
      <div className="relative z-10 max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 perspective-[1500px]">

        {roadmaps.map((roadmap, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              rotateY: 18,
              rotateX: -8,
              scale: 1.08,
            }}
            transition={{ type: "spring", stiffness: 130 }}
            className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl cursor-pointer transform-gpu"
          >
            {/* Icon */}
            <div className="text-5xl">{roadmap.icon}</div>

            {/* Title */}
            <h3 className="mt-4 text-2xl font-bold text-white">
              {roadmap.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-gray-400 leading-relaxed">
              {roadmap.desc}
            </p>

            {/* Steps */}
            <div className="mt-6 flex flex-wrap gap-2">
              {roadmap.steps.map((step, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/20"
                >
                  {step}
                </span>
              ))}
            </div>

            {/* Gradient Line */}
            <div
              className={`mt-6 h-1 w-full rounded-full bg-gradient-to-r ${roadmap.color}`}
            ></div>

            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 opacity-0 hover:opacity-100 transition"></div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative z-10 mt-24 flex justify-center"
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 text-center shadow-2xl hover:scale-105 transition duration-500">
          <h3 className="text-2xl font-bold text-white">
            Confused About Your Career?
          </h3>
          <p className="text-gray-400 mt-3 max-w-md">
            Follow our guided roadmaps and become industry-ready with zero confusion.
          </p>
          <button className="mt-6 px-8 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-cyan-600 text-white font-bold hover:scale-110 transition">
            Get My Roadmap 🚀
          </button>
        </div>
      </motion.div>

    </section>
  );
};

export default CareerRoadmaps;
