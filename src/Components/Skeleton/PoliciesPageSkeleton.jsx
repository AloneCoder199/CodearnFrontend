// src/components/PoliciesPageSkeleton.jsx
import { motion } from "framer-motion";


const skeletonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const PoliciesPageSkeleton = () => {
  return (
    <div className="min-h-screen bg-white text-[#0D1B2A] relative overflow-hidden">
        
      {/* Hero Skeleton */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-48 h-10 bg-gray-200 rounded-md mb-4 animate-pulse"
        />
        <div className="w-72 h-5 bg-gray-200 rounded-md animate-pulse" />
      </section>

      {/* Accordion Skeleton */}
      <motion.section
        variants={skeletonVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm"
          >
            {/* Header Skeleton */}
            <div className="px-6 py-4 bg-gray-50">
              <div className="w-40 h-5 bg-gray-200 rounded-md animate-pulse" />
            </div>

            {/* Content Skeleton */}
            <div className="px-6 py-5 space-y-3">
              <div className="w-full h-3 bg-gray-200 rounded-md animate-pulse" />
              <div className="w-5/6 h-3 bg-gray-200 rounded-md animate-pulse" />
              <div className="w-3/4 h-3 bg-gray-200 rounded-md animate-pulse" />
              <div className="w-2/3 h-3 bg-gray-200 rounded-md animate-pulse" />
            </div>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

export default PoliciesPageSkeleton;
