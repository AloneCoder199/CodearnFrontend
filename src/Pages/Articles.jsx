// src/components/BlogList.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blogs } from "../Data/blogsData.js";
import { Link } from "react-router-dom";
import BackButton from "../Components/BackButton.jsx";

const BlogList = () => {
  const [search, setSearch] = useState("");

 const filteredBlogs = blogs.filter((b) => {
  const title = b.title?.toLowerCase() || "";
  const excerpt = b.excerpt?.toLowerCase() || "";
  const author = b.author?.toLowerCase() || "";
  const query = search.toLowerCase();

  return (
    title.includes(query) ||
    excerpt.includes(query) ||
    author.includes(query)
  );
});

  // Featured aur Trending
  const featured = filteredBlogs[0];
  const trending = filteredBlogs.slice(1, 4);
  const others = filteredBlogs.slice(4);

  return (
    <section className="min-h-screen bg-white text-[#0D1B2A] py-16 px-6">
      <BackButton/>
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16 relative md:top-10 top-15">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif font-bold text-gray-900"
        >
          CodEarn Tech Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Explore in-depth guides, case studies, and insights from our creative
          team to help you stay ahead in the digital era.
        </motion.p>
      </div>

      {/* ✅ Ad 1 */}
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <div className="border border-gray-200 rounded-md p-4 bg-gray-50 text-gray-500 text-sm">
          🔸 Sponsored Content (Header Bottom)
        </div>
      </div>

      
     {/* Search */}
{/* Search */}
<div className="max-w-6xl mx-auto mb-14">
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="🔍 Search blogs by title, author or keyword..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-5 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#00BCD4] outline-none transition duration-300"
      />
    </form>
  </motion.div>
</div>



      {/* Featured Post */}
      {featured && (
        <div className="max-w-6xl mx-auto mb-16">
          <Link to={`/blog/${featured.id}`}>
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-lg overflow-hidden shadow-lg border border-gray-200"
            >
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {featured.title}
                </h2>
                <p className="text-sm max-w-2xl">{featured.excerpt}</p>
                <div className="mt-4 text-xs opacity-80">
                  ✍️ {featured.author} • 📅 {featured.date}
                </div>
              </div>
            </motion.article>
          </Link>
        </div>
      )}

      {/* Trending Section */}
      {trending.length > 0 && (
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-xl font-semibold mb-6">🔥 Trending Posts</h3>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {trending.map((t, i) => (
              <Link
                to={`/blog/${t.id}`}
                key={i}
                className="min-w-[280px] flex-1 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all bg-white"
              >
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 leading-snug mb-2">
                    {t.title}
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {t.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Blog Grid */}
      <motion.div
        layout
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <AnimatePresence>
          {others.map((b, i) => (
            <motion.div
              key={b.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <Link to={`/blog/${b.id}`}>
                <motion.article
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col h-full">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 leading-snug">
                      {b.title}
                    </h2>
                    <p className="text-gray-600 text-sm flex-grow leading-relaxed">
                      {b.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between text-sm">
                      <span className="font-medium text-[#FF9800]">
                        {b.author}
                      </span>
                      <span className="text-gray-500">{b.date}</span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ✅ Ad 2 - Mid Page */}
      <div className="max-w-5xl mx-auto my-20 text-center">
        <div className="border border-gray-200 rounded-md p-4 bg-gray-50 text-gray-500 text-sm">
          🔸 Sponsored Content (Mid Page)
        </div>
      </div>

      {/* ✅ Ad 3 - Footer Top */}
      <div className="max-w-5xl mx-auto mt-20 text-center">
        <div className="border border-gray-200 rounded-md p-4 bg-gray-50 text-gray-500 text-sm">
          🔸 Sponsored Content (Footer Top)
        </div>
      </div>

      {filteredBlogs.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-12 text-gray-500 italic"
        >
          😢 No blogs found. Try another keyword.
        </motion.p>
      )}
    </section>
  );
};

export default BlogList;
