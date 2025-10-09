import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, X } from "lucide-react";

export default function Alert() {
  const [show, setShow] = useState(false);
  const [showCert, setShowCert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Main Alert */}
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 flex items-center justify-center z-[1000] bg-black/40 backdrop-blur-sm"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 w-[90%] max-w-[500px] text-center relative"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <X size={22} />
            </button>

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              👋 Welcome to CodEarn Tech!
            </h2>

            {/* Info */}
            <p className="text-gray-600 text-[15px] leading-relaxed mb-5">
              We are a <strong>Professional and Certified Development Team</strong> dedicated to
              building high-quality, fully functional projects — designed with precision and care.
              <br />
              <br />
              Every project we deliver comes with an <strong>Official Work Proof Certificate</strong> and a
              <strong> 100% Satisfaction Guarantee</strong> ✅
              <br />
              <br />
              <em>Your project is our responsibility — from start to success!</em> 💪
            </p>

            {/* Project Type Section */}
            <div className="bg-gray-50 rounded-2xl p-4 mb-5 border border-gray-200">
              <h3 className="text-gray-800 font-medium mb-3">
                We proudly offer the following development services:
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-[14px] leading-relaxed text-left">
                <li>🌍 Website Development</li>
                <li>🛒 Ecommerce Solutions</li>
                <li>📂 Portfolio Websites</li>
                <li>💭 Custom Web Applications</li>
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-3">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setShowCert(true)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-medium shadow-md bg-blue-600 hover:bg-blue-700 transition"
              >
                <ShieldCheck size={18} /> View Certificate
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setShow(false)}
                className="px-6 py-2.5 rounded-full text-white font-medium shadow-md bg-gray-700 hover:bg-gray-800 transition"
              >
                OK
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Certificate Popup */}
      {showCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 flex items-center justify-center z-[2000] bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-3xl shadow-2xl p-6 w-[95%] max-w-[720px]"
          >
            <button
              onClick={() => setShowCert(false)}
              className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-gray-700 transition"
            >
              ×
            </button>

            <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
              CodEarn Tech Official Certificate 🏅
            </h3>

            {/* PDF Preview */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-2xl border border-gray-200 shadow-md"
            >
              <iframe
                src="/OFFICIAL WP PROJECT CERTIFICATE.pdf" // <-- public folder PDF path
                title="CodEarn Tech Certificate"
                className="w-full h-[420px]"
              ></iframe>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
