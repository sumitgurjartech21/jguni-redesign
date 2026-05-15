 "use client";

import Link from "next/link";


export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-30 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white font-bold text-2xl">
  


  <span>
    JG<span className="text-blue-500">Uni</span>
  </span>

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

        <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-full text-sm font-medium text-white">
          Apply Now
        </button>
      </div>
    </header>
  );
}