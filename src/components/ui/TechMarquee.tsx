"use client";

import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";

const technologies = [
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Kubernetes", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
  { name: "GraphQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Go", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
  { name: "Rust", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg" },
  { name: "Vue.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
  { name: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "Supabase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" }
];

export default function TechMarquee() {
  // Duplicate array three times to ensure a smooth, seamless infinite scroll without blank spaces
  const items = [...technologies, ...technologies, ...technologies];

  return (
    <section className="w-full py-16 bg-white border-y border-gray-100 overflow-hidden relative z-10 flex flex-col items-center shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]">
      <div className="mb-10 text-center relative z-30">
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Technologies We Use</h2>
      </div>

      <div className="relative w-full flex items-center">
        {/* Fading edges */}
        <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
        
        <motion.div
          className="flex gap-20 min-w-max items-center"
          animate={{ x: ["0%", "-33.33333333333333%"] }}
          transition={{
            duration: 40, // Adjust speed here
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {items.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300 transform hover:scale-110"
              title={tech.name}
            >
              <img
                src={tech.src}
                alt={tech.name}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
                fetchPriority="auto"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
