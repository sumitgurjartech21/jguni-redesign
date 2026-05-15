"use client";

import {
  Brain,
  Code,
  Briefcase,
  ShieldCheck,
  Palette,
  Database,
} from "lucide-react";

const programs = [
  {
    title: "Artificial Intelligence",
    description: "Learn AI, ML, and future-ready technologies.",
    icon: Brain,
  },
  {
    title: "Full Stack Development",
    description: "Master frontend and backend web technologies.",
    icon: Code,
  },
  {
    title: "Business Management",
    description: "Develop leadership and entrepreneurial skills.",
    icon: Briefcase,
  },
  {
    title: "Cyber Security",
    description: "Protect systems with modern security practices.",
    icon: ShieldCheck,
  },
  {
    title: "UI/UX Design",
    description: "Create modern and user-friendly digital products.",
    icon: Palette,
  },
  {
    title: "Data Science",
    description: "Analyze data and build intelligent systems.",
    icon: Database,
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-blue-400 font-medium mb-3">
            Our Programs
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Future-Ready Courses
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Industry-focused programs designed to prepare students
            for tomorrow’s opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6">
                  <Icon className="text-blue-400 w-7 h-7" />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {program.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {program.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}