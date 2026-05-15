"use client";

import {
  GraduationCap,
  Users,
  Laptop,
  Globe,
  Briefcase,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "Expert Mentors",
    description:
      "Learn directly from experienced industry professionals.",
    icon: GraduationCap,
  },
  {
    title: "Collaborative Learning",
    description:
      "Work with peers on real-world projects and activities.",
    icon: Users,
  },
  {
    title: "Modern Technology",
    description:
      "Access the latest tools, platforms, and digital resources.",
    icon: Laptop,
  },
  {
    title: "Global Opportunities",
    description:
      "Gain exposure through international programs and events.",
    icon: Globe,
  },
  {
    title: "Career Support",
    description:
      "Get placement assistance and internship opportunities.",
    icon: Briefcase,
  },
  {
    title: "Innovation First",
    description:
      "Develop creativity and problem-solving with future-ready learning.",
    icon: Sparkles,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative bg-black text-white py-24 px-6 overflow-hidden"
    >

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-16">

          <p className="text-purple-400 font-medium mb-3">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience Smarter Education
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            We combine innovation, mentorship, and real-world learning
            to prepare students for successful careers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6">
                  <Icon className="text-purple-400 w-7 h-7" />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}