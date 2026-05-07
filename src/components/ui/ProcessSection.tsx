"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const processSteps = [
  { title: "Discovery & Planning", desc: "Understanding your business goals and technical requirements." },
  { title: "Product Architecture", desc: "Designing scalable, secure systems built for the future." },
  { title: "Agile Development", desc: "Iterative building with transparent progress and communication." },
  { title: "Testing & Optimization", desc: "Rigorous QA to ensure flawless performance under load." },
  { title: "Deployment", desc: "Smooth launch with zero downtime." },
  { title: "Long-Term Support", desc: "Ongoing maintenance, scaling, and feature updates." },
];

export default function ProcessSection() {
  return (
    <section id="process" className="max-w-4xl mx-auto px-6 py-32 relative z-10 overflow-hidden">
      <div className="text-center mb-20">
        <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-4 block">How We Work</span>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Structured Processes</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium">Clients trust companies with clear, methodical execution.</p>
      </div>

      <div className="flex flex-col gap-10">
        {processSteps.map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card className="rounded-[2rem] shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-9xl font-black text-muted opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 -z-10 -translate-y-4 translate-x-4">
                {i+1}
              </div>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2 uppercase tracking-widest">Step {i+1}</Badge>
                <CardTitle className="text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base font-medium leading-relaxed">{item.desc}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
