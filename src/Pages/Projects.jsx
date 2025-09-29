// src/components/ProjectPage.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img from "../assets/projects/project-1.png"; // fallback image
import BackButton from "../Components/BackButton";

/**
 * Project Page - CodEarn Tech
 * Color scheme:
 * Primary: #00BCD4
 * Secondary: #FF9800
 * Text: #0D1B2A
 * Background: #FFFFFF
 */

const ProjectPage = () => {
  const [repos, setRepos] = useState([]);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [error, setError] = useState("");
  const intervalRef = useRef(null);

  const skeletonProjects = [
    { id: "sk1", name: "Loading Project 1", description: "Fetching data...", html_url: "#", homepage: "" },
    { id: "sk2", name: "Loading Project 2", description: "Fetching data...", html_url: "#", homepage: "" },
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/repos");
        if (!res.ok) throw new Error(`API Error: ${res.status}`);
        const data = await res.json();
        const filtered = data.filter((r) => !r.fork);
        setRepos(filtered.length > 0 ? filtered : skeletonProjects);
      } catch (err) {
        console.error("Failed:", err);
        setError("⚠️ Projects unavailable. Showing fallback.");
        setRepos(skeletonProjects);
      }
    };
    fetchRepos();
  }, []);

  useEffect(() => {
    if (!paused && repos.length > 0) {
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % repos.length);
      }, 8000);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused, repos]);

  return (
    <section className="bg-white text-[#0D1B2A] min-h-screen relative overflow-hidden top-15">
      <BackButton/>
      {/* Floating Blob Background */}
      <motion.div
        aria-hidden
        className="absolute top-[-100px] right-[-100px] w-96 h-96 rounded-full bg-[#00BCD4]/10"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Banner */}
      <div className="relative w-full min-h-[65vh] flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          🚀 <span className="text-[#00BCD4]">CodEarn Tech</span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-3xl text-lg md:text-xl text-gray-600"
        >
          We build modern, scalable & creative digital solutions for your business.
        </motion.p>

        {/* Project Loop Animation */}
        <AnimatePresence mode="wait">
          {repos.length > 0 && (
            <motion.div
              key={repos[active].id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="md:mt-6 relative top-20 bg-white/80 backdrop-blur-md border border-[#00BCD4]/20 px-8 py-6 rounded-2xl shadow-2xl"
            >
              <h2 className="text-2xl font-bold text-[#0D1B2A]">
                {repos[active]?.name || "Project"}
              </h2>
              <p className="mt-2 text-gray-600">
                {repos[active]?.description || "Project description goes here..."}
              </p>

              <a
                href={
                  repos[active]?.homepage && repos[active]?.homepage.trim() !== ""
                    ? repos[active].homepage
                    : repos[active]?.html_url || "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-6 py-2 bg-[#FF9800] text-white rounded-xl shadow hover:bg-[#F57C00] transition"
              >
                Live View
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Project Details Section */}
      <div
        className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Project Image */}
        <motion.div
          key={repos[active]?.id + "-image"}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <motion.img
            src={img}
            alt={repos[active]?.name}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover"
          />
          <motion.div
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute inset-0 bg-[#00BCD4]/10 pointer-events-none"
          />
        </motion.div>

        {/* Project Info */}
        <motion.div
          key={repos[active]?.id + "-info"}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">{repos[active]?.name}</h2>
          <p className="text-gray-700 leading-relaxed">
            {repos[active]?.description || "No description provided."}
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 text-gray-600">
            {["⚡ Fully responsive design", "🚀 Optimized performance", "🔒 Secure backend integrations"].map(
              (point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-center gap-2"
                >
                  <span>{point}</span>
                </motion.li>
              )
            )}
          </ul>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-3 mt-4">
            {["React", "Tailwind", "Node.js", "MongoDB"].map((tech, i) => (
              <motion.span
                key={tech}
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.3 }}
                className="px-4 py-2 bg-[#00BCD4]/10 text-[#0D1B2A] rounded-full text-sm font-medium shadow-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            {repos[active]?.homepage && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={repos[active].homepage}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-[#FF9800] hover:bg-[#F57C00] text-white font-semibold shadow-lg transition"
              >
                Live Demo 🚀
              </motion.a>
            )}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={repos[active]?.html_url}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-[#00BCD4] hover:bg-[#0097A7] text-white font-semibold shadow-lg transition"
            >
              GitHub Repo
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Stats / Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center py-16"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-[#0D1B2A]">
          🌟 Trusted by Startups & Enterprises
        </h3>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Our projects are powering businesses in multiple industries, helping them scale with confidence.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { label: "Projects Delivered", value: "50+" },
            { label: "Active Clients", value: "25+" },
            { label: "Technologies Used", value: "10+" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition"
            >
              <p className="text-3xl font-extrabold text-[#00BCD4]">{stat.value}</p>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Glowing Divider */}
      <motion.div
        animate={{ width: ["20%", "100%", "20%"], opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="h-[5px] bg-[#00BCD4] mx-auto rounded-full mb-12 shadow-lg"
      />

      {error && (
        <div className="text-center text-red-600 font-medium mt-6">
          {error}
        </div>
      )}
    </section>
  );
};

export default ProjectPage;
