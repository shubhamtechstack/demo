import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import courses from "./courseData"; // 🔥 Main data file yahi use hoga!

export default function ExploreCourses() {
  const location = useLocation();

  // Smooth scroll for #BrowseCourses link
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const element = document.getElementById(sectionId);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <section id="BrowseCourses" className="py-20 px-6 md:px-16 bg-purple-50">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-purple-700"
      >
        Explore Our Courses
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-gray-600 max-w-xl mx-auto mt-3 mb-12"
      >
        Upgrade your skills with top instructors and well-structured courses.
      </motion.p>

      {/* Courses Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <motion.div
            key={course.slug}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="rounded-xl shadow-lg bg-white overflow-hidden hover:shadow-2xl transition"
          >
            {/* Course Image */}
            <div className="h-40 w-full overflow-hidden">
              <img
                src={course.courseImg}
                alt={course.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-5">
              {/* Teacher Info */}
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={course.teacherImg}
                  alt={course.teacher}
                  className="w-10 h-10 rounded-full"
                />
                <p className="font-semibold text-gray-700">{course.teacher}</p>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <FaStar className="text-yellow-400" />
                <span className="font-bold">{course.rating}</span>
              </div>

              {/* View Course Button */}
              <Link to={`/courses/${course.slug}`}>
                <button className="mt-4 w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
                  View Course
                </button>
              </Link>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
