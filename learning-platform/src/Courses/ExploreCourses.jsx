import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const courses = [
  {
    title: "Java Full Course",
    teacher: "Arjun Mehta",
    teacherImg: "https://i.pravatar.cc/150?img=1",
    courseImg: "https://source.unsplash.com/600x400/?java,code",
    rating: 4.8,
  },
  {
    title: "DSA Mastery",
    teacher: "Priya Sharma",
    teacherImg: "https://i.pravatar.cc/150?img=2",
    courseImg: "https://source.unsplash.com/600x400/?data,structure",
    rating: 4.9,
  },
  {
    title: "Frontend Development",
    teacher: "Rohan Kapoor",
    teacherImg: "https://i.pravatar.cc/150?img=3",
    courseImg: "https://source.unsplash.com/600x400/?frontend,web",
    rating: 4.7,
  },
  {
    title: "Backend with NodeJS",
    teacher: "Sanya Verma",
    teacherImg: "https://i.pravatar.cc/150?img=4",
    courseImg: "https://source.unsplash.com/600x400/?backend,nodejs",
    rating: 4.6,
  },
  {
    title: "SQL & Database",
    teacher: "Kunal Singh",
    teacherImg: "https://i.pravatar.cc/150?img=5",
    courseImg: "https://source.unsplash.com/600x400/?database,sql",
    rating: 4.8,
  },
  {
    title: "ReactJS Bootcamp",
    teacher: "Aditi Rao",
    teacherImg: "https://i.pravatar.cc/150?img=6",
    courseImg: "https://source.unsplash.com/600x400/?reactjs,webdev",
    rating: 4.9,
  },
  {
    title: "Python Zero to Hero",
    teacher: "Mihir Patel",
    // teacherImg: "https://i.pravatar.cc/150?swimg=7zz",
    // courseImg: "https://i.pravatar.cc/150?img=8a",
    rating: 4.8,
  },
  {
    title: "Machine Learning",
    teacher: "Aarohi Jain",
    teacherImg: "https://i.pravatar.cc/150?img=8",
    courseImg: "https://source.unsplash.com/600x400/?machinelearning,ai",
    rating: 4.9,
  },
];

export default function ExploreCourses() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", ""); // # hata diya
      const element = document.getElementById(sectionId);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // ✅ thoda delay — animation/layout ke baad
      }
    }
  }, [location]);

  return (
    <section id="BrowseCourses" className="py-20 px-6 md:px-16 bg-purple-50">
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

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="rounded-xl shadow-lg bg-white overflow-hidden hover:shadow-2xl transition"
          >
            {/* Course Image */}
            <div className="h-40 w- overflow-hidden">
              <img
                src={course.courseImg}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-5">
              {/* Teacher Info */}
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={course.teacherImg}
                  className="w-10 h-10 rounded-full"
                />
                <p className="font-semibold text-gray-700">{course.teacher}</p>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800">
                {course.title}
              </h3>

              {/* Ratings */}
              <div className="flex items-center gap-2 mt-2">
                <FaStar className="text-yellow-400" />
                <span className="font-bold">{course.rating}</span>
              </div>

              {/* CTA */}
              <button className="mt-4 w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
                Enroll Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
