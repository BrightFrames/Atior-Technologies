"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const clientVoices = [
  { 
    brand: "ZeeroStock", 
    role: "Founder",
    quote: "Made inventory tracking effortless for our business. Real-time updates improved efficiency greatly and streamlined our entire operational workflow.", 
    author: "Devyani",
    avatar: "https://randomuser.me/api/portraits/women/24.jpg"
  },
  { 
    brand: "Business Orbit", 
    role: "CEO",
    quote: "Helped connect with professionals and opened new opportunities through structured networking. The graph database backend is incredibly fast.", 
    author: "Tanu Sethi",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    brand: "FlowAI Agents",
    role: "Operations Head",
    quote: "The autonomous outreach agents revolutionized our lead generation process, identifying intent signals and drastically reducing our manual workload.",
    author: "Rohan K.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  }
];

export default function ClientTestimonialsSection() {
  return (
    <section id="clients" className="max-w-7xl mx-auto px-6 py-20 relative z-10">
      <div className="rounded-[3rem] bg-white border border-gray-100 p-10 md:p-20 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_60%)] pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-12 lg:gap-16">
          <motion.div 
            className="md:w-1/3 md:sticky md:top-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-foreground">Client Voice</h2>
            <p className="text-muted-foreground font-medium text-lg leading-relaxed">
              What our partners say about scaling platforms and building exceptional digital solutions with Atior.
            </p>
          </motion.div>
          
          <div className="md:w-2/3 space-y-6 w-full">
            {clientVoices.map((testimonial, i) => (
              <motion.div 
                key={i} 
                className="bg-gray-50 border border-gray-100 p-8 md:p-10 rounded-4xl hover:bg-gray-100 transition-colors group shadow-sm"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current drop-shadow-sm" />)}
                  </div>
                  <div className="text-6xl font-serif text-gray-200 leading-none h-10 select-none group-hover:text-gray-300 transition-colors">"</div>
                </div>
                
                <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed text-gray-800">
                  {testimonial.quote}
                </p>
                
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md relative">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-foreground">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-1">
                      <span className="text-blue-600 font-bold">{testimonial.brand}</span> • {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
