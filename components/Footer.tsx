 "use client";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            JG<span className="text-blue-500">Uni</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Empowering students with modern education, industry skills,
            and future-ready learning experiences.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3 text-gray-400">
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#programs" className="hover:text-white transition">Programs</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
        </div>

        {/* Social */}
        <div>
  <h3 className="text-white font-semibold mb-4">Follow Us</h3>

  <div className="flex gap-4">
    
    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-blue-500 transition"
    >
      <FaFacebookF />
    </a>

    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-pink-500 transition"
    >
      <FaInstagram />
    </a>

    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-sky-500 transition"
    >
      <FaTwitter />
    </a>

    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-blue-600 transition"
    >
      <FaLinkedinIn />
    </a>

  </div>
</div>

      </div>

      <div className="text-center text-gray-500 mt-12 text-sm">
        © {new Date().getFullYear()} JG University. All rights reserved.
      </div>
    </footer>
  );
}