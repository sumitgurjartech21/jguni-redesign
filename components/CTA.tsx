"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-black text-white py-24 px-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-r from-blue-600 to-purple-600 p-12 md:p-20 text-center"
      >

        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/20 blur-3xl rounded-full"></div>

        <div className="relative z-10">

          <p className="text-white/80 font-medium mb-4">
            Start Your Journey Today
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Build Your Future With
            <span className="block">
              Smart Education
            </span>
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
            Join a new generation of learners and gain the skills,
            mentorship, and confidence to succeed in tomorrow’s world.
          </p>

          <button className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300">
            Apply Now
            <ArrowRight size={20} />
          </button>

        </div>

      </motion.div>

    </section>
  );
}