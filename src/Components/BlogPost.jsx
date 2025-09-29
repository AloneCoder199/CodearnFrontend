// src/components/BlogPost.jsx
import React, { useEffect, useState, Suspense } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import BackButton from "./BackButton.jsx";

// Lazy load Blog skeleton
const BlogPostSkeleton = React.lazy(() => import("../Components/Skeleton/BlogListSkeleton.jsx"));

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);

  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    // Lazy load the blogsData.js file
    import("../Data/blogsData.js").then((module) => {
      setAllBlogs(module.blogs); // save all blogs
      const found = module.blogs.find((b) => b.id === id);
      setPost(found || null);
    });
  }, [id]);

  if (!post) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BlogPostSkeleton />
      </Suspense>
    );
  }

  const recommended = allBlogs.filter((b) => b.id !== id).slice(0, 3);

  return (
    <article className="relative min-h-screen bg-[#FAFAFA] text-[#0D1B2A] py-12 px-6 overflow-hidden mb-10 font-serif leading-relaxed">
      <BackButton/>
      {/* Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-[#00BCD4] z-50"
      />

      <div className="relative max-w-4xl mx-auto z-10 top-10">
        {/* Hero Section */}
        <div className="border-b border-gray-200 bg-white">
          <motion.img
            src={post.image}
            alt={post.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-[260px] object-cover"
          />

          <div className="max-w-4xl mx-auto px-4 py-6 text-center">
            <motion.h1
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug"
            >
              {post.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-3 mt-3 text-gray-600 text-sm italic"
            >
              <span>📅 {post.date}</span>
              <span>•</span>
              <span>✍️ {post.author}</span>
            </motion.div>
          </div>
        </div>

        {/* --- Ad Placeholder 1 --- */}
        <div className="my-8 text-center">
          <div className="border border-gray-300 rounded-md p-3 bg-gray-50 text-gray-600 text-sm font-light">
            🔸 Sponsored Content (Hero Bottom)
          </div>
        </div>

        {/* Content */}
        <div className="mt-10 space-y-8">
          {post.content.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-md border border-gray-200"
            >
              <p className="text-lg text-gray-800">{p}</p>
            </motion.div>
          ))}
        </div>

        {/* --- Ad Placeholder 2 --- */}
        <div className="my-12 text-center">
          <div className="border rounded-md p-3 bg-white text-gray-500 text-sm">
            🔸 Sponsored Content (Mid Article)
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 rounded-md bg-white border border-gray-200 text-center"
        >
          <h3 className="font-bold text-xl">🚀 Enjoyed this article?</h3>
          <p className="text-gray-700 mt-2">
            Book a free consultation with{" "}
            <span className="font-semibold">CodEarn Tech</span> and let’s turn
            your vision into reality.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-4 px-6 py-2 bg-[#00BCD4] text-white rounded-md font-medium hover:bg-[#FF9800] transition"
          >
            Book a Call
          </Link>
        </motion.div>

        {/* Recommended Section */}
        <div className="mt-20">
          <h4 className="font-bold text-2xl mb-6">✨ Recommended Reads</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {recommended.map((r) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-md border border-gray-200 overflow-hidden"
              >
                <Link to={`/blog/${r.id}`}>
                  <motion.img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-36 object-cover"
                  />
                  <div className="p-4">
                    <h5 className="font-semibold">{r.title}</h5>
                    <p className="text-gray-500 text-sm mt-1">{r.date}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
