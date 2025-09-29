// src/components/CourseDetails.jsx
import React, { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { courses } from "../Data/coursesData";
import { motion, useScroll, useTransform } from "framer-motion";
import BackButton from "./BackButton";

// FadeUp Animation Variant
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  const ref = useRef(null);

  // Scroll Parallax Effect for Hero Image
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  if (!course) {
    return (
      <div className="p-10 text-center text-gray-500">❌ Course not found.</div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#F8FBFF] to-[#FFFDE7] py-20 px-6">
      <BackButton/>
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <motion.div
          ref={ref}
          style={{ scale, y }}
          className="relative overflow-hidden rounded-3xl shadow-2xl border border-gray-200"
        >
          <motion.img
            src={course.image}
            alt={course.title}
            className="w-full max-h-[420px] object-cover"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

          {/* Glass Text */}
          <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-md">
              {course.title}
            </h1>
          </div>

          <span className="absolute top-4 right-4 bg-[#00BCD4] text-white px-4 py-1 text-sm font-semibold rounded-full shadow-md">
            {course.duration}
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={2}
          variants={fadeUp}
          className="mt-8 text-gray-700 text-lg leading-relaxed"
        >
          {course.description}
        </motion.p>

        {/* Info Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={3}
          variants={fadeUp}
          className="grid md:grid-cols-2 gap-6 mt-10"
        >
          <div className="p-6 rounded-2xl border bg-white shadow hover:shadow-xl transition">
            <p className="font-bold text-[#0D1B2A]">📅 Duration:</p>
            <p className="text-gray-600">{course.duration}</p>
          </div>
          <div className="p-6 rounded-2xl border bg-white shadow hover:shadow-xl transition">
            <p className="font-bold text-[#0D1B2A]">💼 Projects:</p>
            <p className="text-gray-600">{course.projects} Real-world projects</p>
          </div>
          <div className="p-6 rounded-2xl border bg-white shadow hover:shadow-xl transition">
            <p className="font-bold text-[#0D1B2A]">🎓 Certificate:</p>
            <p className="text-gray-600">
              {course.certificate ? "Yes, provided" : "No"}
            </p>
          </div>
          <div className="p-6 rounded-2xl border bg-white shadow hover:shadow-xl transition">
            <p className="font-bold text-[#0D1B2A]">🚀 Job Support:</p>
            <p className="text-gray-600">
              {course.jobSupport ? "Yes, with guidance" : "No"}
            </p>
          </div>
        </motion.div>

        {/* Outline with Stepper */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={4}
          variants={fadeUp}
          className="mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-[#0D1B2A]">
            📚 Course Outline
          </h2>
          <div className="relative">
            <div className="absolute left-6 top-0 h-full w-[3px] bg-[#00BCD4]/40 rounded-full"></div>
            <ul className="space-y-8">
              {course.outline.map((topic, i) => (
                <motion.li
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="relative pl-16 pr-6 py-5 bg-white rounded-2xl shadow hover:shadow-lg transition border"
                >
                  {/* Stepper Circle */}
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#00BCD4] text-white flex items-center justify-center font-bold shadow-lg">
                    {i + 1}
                  </span>
                  <p className="text-gray-700">{topic}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Trust / Testimonials Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={5}
          variants={fadeUp}
          className="mt-20 bg-gradient-to-r from-[#00BCD4] to-[#0097A7] p-10 rounded-3xl shadow-xl text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            🌟 Trusted by 15,000+ Students Worldwide
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Our students have successfully landed jobs at top companies after
            completing these courses. Join them and kickstart your journey!
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={6}
          variants={fadeUp}
          className="mt-16 p-8 rounded-3xl bg-white border border-[#00BCD4]/30 shadow-xl flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <h3 className="font-bold text-xl text-[#0D1B2A]">
            🔥 Ready to start your journey?
          </h3>
          <Link
            to="/contact"
            className="px-8 py-3 bg-[#00BCD4] hover:scale-105 text-white rounded-xl font-semibold shadow transition-all duration-300"
          >
            Enroll Now →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseDetails;
