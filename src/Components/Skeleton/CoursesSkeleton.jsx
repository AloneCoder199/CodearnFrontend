// src/Components/Skeleton/CoursesListSkeleton.jsx
import React from "react";
import { motion } from "framer-motion";

const CoursesListSkeleton = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#F0F9FF] via-white to-[#FFFDE7] py-20 px-6">
      {/* Hero Heading Skeleton */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <div className="h-12 w-72 mx-auto bg-gray-200 rounded-lg animate-pulse"></div>
        <div className="h-4 w-2/3 mx-auto mt-6 bg-gray-200 rounded animate-pulse"></div>
      </div>

      {/* Stats Skeleton */}
      <div className="flex justify-center gap-8 mb-14">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow px-10 py-6 flex flex-col items-center"
          >
            <div className="h-8 w-16 bg-gray-200 rounded mb-3 animate-pulse"></div>
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Search Bar Skeleton */}
      <div className="max-w-md mx-auto mb-14">
        <div className="h-12 w-full bg-gray-200 rounded-2xl animate-pulse"></div>
      </div>

      {/* Courses Grid Skeleton */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/80 backdrop-blur-lg border border-gray-100 rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Image Skeleton */}
            <div className="h-56 w-full bg-gray-200 animate-pulse"></div>

            {/* Content Skeleton */}
            <div className="p-6">
              <div className="h-5 w-3/4 bg-gray-200 rounded mb-3 animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 rounded mb-2 animate-pulse"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded mb-6 animate-pulse"></div>
              <div className="h-10 w-28 bg-gray-200 rounded-xl animate-pulse"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoursesListSkeleton;
