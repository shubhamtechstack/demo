import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion"; 
import { FaStar, FaMapSigns, FaBook, FaDownload, FaRocket, FaClock, FaClipboardList, FaCode, FaQuestionCircle } from "react-icons/fa"; // Added new icons
import courseData from "./courseData"; // Assuming this path is correct

// --- Animation Variants ---

// Container animation for the entire section
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
};

// Animation for individual content blocks (Roadmap, Syllabus, Projects, etc.)
const sectionVariants = {
  hidden: { opacity: 0, x: -30, rotateY: -10 },
  visible: { 
    opacity: 1, 
    x: 0, 
    rotateY: 0,
    transition: { duration: 0.6 } 
  }
};

// Animation for lists (Syllabus, Projects, Skills)
const listItemVariants = {
  hidden: { x: -10, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.3 } }
};

export default function CourseDetails() {
  const { slug } = useParams();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const course = courseData.find((c) => c.slug === slug);

  if (!course) {
    return <h1 className="text-center py-20 text-3xl font-bold text-red-600">Course Not Found 😔</h1>;
  }

  // Define simple motion component for the FAQ accordion (if you use an accordion component)
  const MotionLi = motion.li;

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-16 px-6 md:px-20 bg-gray-50 min-h-screen max-w-7xl mx-auto"
    >
      {/* Course Title and Header Block */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-xl shadow-2xl border-l-4 border-purple-600 mb-10"
      >
        <h1 className="text-4xl font-extrabold text-purple-700">{course.title}</h1>

        {/* Teacher Info and Rating */}
        <div className="mt-6 flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src={course.teacherImg}
              className="w-14 h-14 rounded-full border-2 border-purple-400 object-cover"
              alt={course.teacher}
            />
            <p className="text-xl font-semibold text-gray-700">{course.teacher}</p>
          </div>
          
          <p className="text-2xl text-yellow-500 font-bold flex items-center gap-1">
            <FaStar className="w-5 h-5" /> {course.rating}
          </p>
        </div>
      </motion.div>

      {/* Main Course Image (3D Hover Effect) */}
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        whileHover={{ scale: 1.02, rotate: 0.5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)" }}
        src={course.courseImg}
        className=" w-full mt-6 rounded-2xl shadow-xl object-fit h-30 max-h-46"
        alt={`Cover image for ${course.title}`}
      />
      
      {/* --- Detailed Sections --- */}
      <div className="grid lg:grid-cols-3 gap-10 mt-10">
        
        {/* Main Content (Roadmap, Syllabus, Projects, Skills) */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* 1. Course Overview (New Section) */}
          <motion.div variants={sectionVariants} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-gray-500">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-4"><FaClipboardList className="text-gray-500" /> Course Overview</h2>
            <p className="mt-3 text-gray-700 leading-relaxed mb-4">{course.description}</p>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-lg font-medium">
                <div className="flex items-center gap-2 text-blue-600">
                    <FaRocket /> <span>**Level:** {course.level}</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                    <FaClock /> <span>**Duration:** {course.duration}</span>
                </div>
            </div>
            <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400">
                <p className="font-semibold text-blue-800">Prerequisites:</p>
                <p className="text-blue-700">{course.prerequisites.join(" | ")}</p>
            </div>
          </motion.div>


          {/* 2. Skills You Gain (New Section) */}
          <motion.div variants={sectionVariants} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-500">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-4"><FaCode className="text-orange-500" /> Skills You Gain</h2>
            <div className="flex flex-wrap gap-3">
                {course.skillsYouGain.map((skill, i) => (
                    <motion.span 
                        key={i} 
                        initial="hidden"
                        animate="visible"
                        variants={listItemVariants}
                        transition={{ delay: i * 0.08 }}
                        className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold shadow-sm"
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>
          </motion.div>

          
          {/* 3. Roadmap (Existing Section, improved data) */}
          <motion.div variants={sectionVariants} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3"><FaMapSigns className="text-blue-500" /> Course Roadmap</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">{course.roadmapDiagram}</p>
          </motion.div>

          {/* 4. Syllabus (Existing Section) */}
          <motion.div variants={sectionVariants} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-teal-500">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3"><FaBook className="text-teal-500" /> Syllabus</h2>
            <ul className="list-decimal list-inside ml-4 mt-3 space-y-2">
              {course.syllabus && course.syllabus.map((item, i) => (
                <motion.li 
                  key={i} 
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: i * 0.05 }}
                  className="text-gray-700 font-medium"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* 5. Projects (New Section) */}
          <motion.div variants={sectionVariants} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-pink-500">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-4"><FaCode className="text-pink-500" /> Major Projects</h2>
            <ul className="list-disc list-inside ml-4 mt-3 space-y-2">
              {course.projects && course.projects.map((project, i) => (
                <motion.li 
                  key={i} 
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: i * 0.05 }}
                  className="text-gray-700 font-medium p-2 bg-pink-50 rounded-lg hover:bg-pink-100 transition"
                >
                  {project}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        {/* Sidebar (Notes and FAQs) */}
        <div className="lg:col-span-1 space-y-8">
          
          {/* Download Notes */}
          <motion.div 
            variants={sectionVariants} 
            className="sticky top-10 bg-purple-100 p-6 rounded-xl shadow-lg text-center border-t-4 border-purple-600"
          >
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Download Notes</h2>
            <motion.a
              href={course.notes}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(147, 51, 234, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className={`py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition duration-300 
                ${course.notes ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-md' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`
              }
              onClick={(e) => !course.notes && e.preventDefault()}
            >
              <FaDownload />
              {course.notes ? 'Download Course Notes' : 'Notes Unavailable'}
            </motion.a>
          </motion.div>

          {/* FAQs (New Section) */}
          <motion.div 
            variants={sectionVariants} 
            className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-500"
          >
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-4"><FaQuestionCircle className="text-yellow-500" /> FAQs</h2>
            <ul className="space-y-4">
                {course.faqs && course.faqs.map((faq, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.4 }}
                        className="border-b pb-2"
                    >
                        <p className="font-bold text-gray-900">{faq.q}</p>
                        <p className="text-sm text-gray-600 mt-1">{faq.a}</p>
                    </motion.div>
                ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}