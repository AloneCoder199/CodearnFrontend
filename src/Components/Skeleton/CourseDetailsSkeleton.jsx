// src/Components/Skeleton/CourseDetailsSkeleton.jsx
import React from "react";
import { motion } from "framer-motion";

const CourseDetailsSkeleton = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#F8FBFF] to-[#FFFDE7] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero Image Skeleton */}
        <motion.div
          className="relative overflow-hidden rounded-3xl shadow-2xl border border-gray-200"
        >
          <div className="w-full max-h-[420px] bg-gray-200 animate-pulse"></div>

          {/* Overlay Text Skeleton */}
          <div className="absolute bottom-6 left-6 bg-white/30 backdrop-blur-md px-6 py-3 rounded-2xl">
            <div className="h-8 w-48 bg-gray-300 rounded animate-pulse"></div>
          </div>

          <span className="absolute top-4 right-4 h-6 w-20 bg-gray-300 rounded-full animate-pulse"></span>
        </motion.div>

        {/* Description Skeleton */}
        <div className="mt-8 space-y-3">
          <div className="h-5 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-5 w-5/6 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-5 w-2/3 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Info Cards Skeleton */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border bg-white shadow"
            >
              <div className="h-4 w-28 bg-gray-200 rounded mb-3 animate-pulse"></div>
              <div className="h-5 w-1/2 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Outline Skeleton */}
        <div className="mt-16">
          <div className="h-6 w-56 bg-gray-300 rounded mb-8 animate-pulse"></div>
          <ul className="space-y-8">
            {[...Array(4)].map((_, i) => (
              <li
                key={i}
                className="relative pl-16 pr-6 py-5 bg-white rounded-2xl shadow border"
              >
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-300 animate-pulse"></span>
                <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
              </li>
            ))}
          </ul>
        </div>

        {/* Testimonials Section Skeleton */}
        <div className="mt-20 bg-gradient-to-r from-[#00BCD4]/40 to-[#0097A7]/40 p-10 rounded-3xl shadow-xl text-center">
          <div className="h-6 w-80 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="h-4 w-2/3 bg-gray-200 rounded mx-auto animate-pulse"></div>
        </div>

        {/* CTA Skeleton */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-[#00BCD4]/30 shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="h-6 w-56 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-10 w-32 bg-gray-300 rounded-xl animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsSkeleton;
