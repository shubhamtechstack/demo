import { motion } from "framer-motion";
import Coursesimg from "../assets/courses.png"
import { useNavigate } from "react-router-dom";
export default function CoursesHero() {
    const navigate = useNavigate();
  return (
    <section className="w-full h-[88vh] bg-gradient-to-r from-purple-900 to-purple-900 text-white py-10 px-6 md:px-20">
      <div className="max-w-6xl  grid md:grid-cols-2 gap-12 items-center">

        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Explore All Courses
          </h1>
          <p className="mt-4 text-lg text-purple-100">
            Learn from top instructors and boost your career with high-quality 
            courses designed for real-world skills.
          </p>

          <motion.button
          onClick={()=>navigate("/courses#BrowseCourses")}
            className="mt-8 px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow-md hover:scale-105 transition"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse Courses
          </motion.button>
        </motion.div>

        {/* Right Illustration / Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={Coursesimg}
            alt="Courses Illustration"
            className="w-full md:h-[540px] drop-shadow-lg rounded-xl"
          />
        </motion.div>

      </div>
    </section>
  );
}
