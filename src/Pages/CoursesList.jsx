// src/components/CoursesList.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../Data/coursesData.js";
import { motion } from "framer-motion";
import BackButton from "../Components/BackButton.jsx";

const CoursesList = () => {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#F0F9FF] via-white to-[#FFFDE7] py-20 px-6 overflow-hidden top-10">
      <BackButton/>
      {/* Hero Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-[#0D1B2A] tracking-tight leading-tight"
        >
          Explore <span className="text-[#00BCD4]">Top Courses</span>
        </motion.h1>
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg md:text-xl">
          Upgrade your skills with hands-on learning, real projects, and
          certifications that matter in your career.
        </p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center gap-8 mt-10"
        >
          <div className="bg-white rounded-xl shadow px-6 py-4">
            <h3 className="text-2xl font-bold text-[#00BCD4]">
              {courses.length}+
            </h3>
            <p className="text-gray-600 text-sm">Courses</p>
          </div>
          <div className="bg-white rounded-xl shadow px-6 py-4">
            <h3 className="text-2xl font-bold text-[#00BCD4]">15k+</h3>
            <p className="text-gray-600 text-sm">Students Enrolled</p>
          </div>
        </motion.div>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-14">
        <input
          type="text"
          placeholder="🔍 Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 rounded-2xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00BCD4] transition"
        />
      </div>

      {/* Courses Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#00BCD4] text-white text-xs px-3 py-1 rounded-full shadow">
                  {course.duration}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#0D1B2A] group-hover:text-[#00BCD4] transition">
                  {course.title}
                </h2>
                <p className="text-gray-600 text-sm mt-3 mb-6 leading-relaxed">
                  {course.description.slice(0, 100)}...
                </p>
                <Link
                  to={`/courses/${course.id}`}
                  className="inline-block px-6 py-2 bg-[#00BCD4] text-white rounded-xl font-semibold shadow hover:scale-105 transition"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            No courses found for{" "}
            <span className="font-semibold">"{search}"</span>
          </p>
        )}
      </div>
    </section>
  );
};

export default CoursesList;
