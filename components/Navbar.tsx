 "use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          href="/"
          className="text-2xl font-bold text-white"
        >
          JG<span className="text-blue-500">Uni</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">

          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#programs" className="hover:text-white transition">
            Programs
          </a>

          <a href="#features" className="hover:text-white transition">
            Features
          </a>

          <a href="#testimonials" className="hover:text-white transition">
            Testimonials
          </a>

        </nav>

        <div className="hidden md:block">
          <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-full text-sm font-medium text-white">
            Apply Now
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 border-t border-white/10"
          >

            <div className="flex flex-col px-6 py-6 space-y-6 text-gray-300">

              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition"
              >
                About
              </a>

              <a
                href="#programs"
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition"
              >
                Programs
              </a>

              <a
                href="#features"
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition"
              >
                Features
              </a>

              <a
                href="#testimonials"
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition"
              >
                Testimonials
              </a>

              <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-full text-sm font-medium text-white">
                Apply Now
              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}