"use client";

import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div className="relative">

          <div className="absolute -top-6 -left-6 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full"></div>

          <img
            src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a"
            alt="University"
            className="relative z-10 rounded-3xl border border-white/10"
          />

        </div>

        <div>

          <p className="text-blue-400 font-medium mb-4">
            About JG University
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Empowering Students With Future Skills
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8">
            Our mission is to create a modern learning environment
            where students gain practical knowledge, industry exposure,
            and the confidence to build successful careers.
          </p>

          <div className="space-y-4">

            <div className="flex items-start gap-4">
              <CheckCircle className="text-blue-400 mt-1" />

              <div>
                <h4 className="font-semibold text-lg">
                  Industry-Oriented Learning
                </h4>

                <p className="text-gray-400">
                  Learn with practical projects and real-world experience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-purple-400 mt-1" />

              <div>
                <h4 className="font-semibold text-lg">
                  Smart Campus Environment
                </h4>

                <p className="text-gray-400">
                  Experience technology-enabled education and innovation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-pink-400 mt-1" />

              <div>
                <h4 className="font-semibold text-lg">
                  Career Growth Support
                </h4>

                <p className="text-gray-400">
                  Build skills that prepare you for future opportunities.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}