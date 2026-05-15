"use client";
import { motion } from "framer-motion";
import { image } from "framer-motion/client";

const testimonials = [
  {
    name: "Sumit Gurjar",
    role: "Computer Science Student",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    text:
      "The learning environment and mentorship helped me improve my technical and professional skills.",
  },
  {
    name: "Priya Patel",
    role: "UI/UX Design Student",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "The university provided hands-on experience and real-world exposure through amazing projects.",
  },
  {
    name: "Rohan Mehta",
    role: "Business Management Student",
    image:
      "https://randomuser.me/api/portraits/men/75.jpg",
    text:
      "I gained confidence, communication skills, and valuable industry insights during my journey.",
  },
   
{
    name:"Yuvraj Rathoad",
    role:"Data Science Student",
    image:      "https://randomuser.me/api/portraits/men/79.jpg",
    text:
       "The practical learning approach and supportive mentors helped me grow professionally."
},

    {name:"Sweta Pal",
    role:"UI/UX designer",
    image:"https://randomuser.me/api/portraits/women/79.jpg",
    text:
       "The practical learning approach and supportive mentors helped me grow professionally."
},
{name:"Janhavi Kashyap",
    role:"web designer",
    image:"https://randomuser.me/api/portraits/women/76.jpg",
    text:
       "The practical learning approach and supportive mentors helped me grow professionally."
},

];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="text-blue-400 font-medium mb-3">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Students Say
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from students who transformed their learning experience
            with our modern education approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
               initial={{opacity:0,y:50}}
               whileInView={{opacity:1,y:0}}
               transition={{
                duration:0.6,
                delay:index*0.2,
               }}
               viewport={{once:true}}
               className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            >

              <div className="flex items-center gap-4 mb-6">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold text-lg">
                    {item.name}
                  </h4>

                  <p className="text-gray-400 text-sm">
                    {item.role}
                  </p>
                </div>

              </div>

              <p className="text-gray-300 leading-relaxed">
                "{item.text}"
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}