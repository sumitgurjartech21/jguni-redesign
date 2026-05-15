"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 bg-black text-white overflow-hidden flex items-center">

      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/30 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/30 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 font-medium mb-4">
            Future Ready Education
          </p>

           <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6 break-words">
            Build Your Career With
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Modern Learning
            </span>
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-xl">
            Experience next-generation education with industry-focused programs,
            expert mentors, and real-world learning.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 transition px-7 py-3 rounded-full font-medium">
              Explore Programs
            </button>

            <button className="border border-white/20 hover:border-white/50 transition px-7 py-3 rounded-full font-medium">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Students"
              className="rounded-2xl"
            />

            <div className="grid grid-cols-3 gap-4 mt-6">

              <div className="bg-black/40 rounded-2xl p-4 text-center">
                <h3 className="text-2xl font-bold text-blue-400">10K+</h3>
                <p className="text-sm text-gray-400">Students</p>
              </div>

              <div className="bg-black/40 rounded-2xl p-4 text-center">
                <h3 className="text-2xl font-bold text-purple-400">50+</h3>
                <p className="text-sm text-gray-400">Programs</p>
              </div>

              <div className="bg-black/40 rounded-2xl p-4 text-center">
                <h3 className="text-2xl font-bold text-pink-400">95%</h3>
                <p className="text-sm text-gray-400">Placement</p>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}