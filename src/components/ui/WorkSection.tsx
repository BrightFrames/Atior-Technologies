"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AntigravityBackground from "./AntigravityBackground";
import { Badge } from "./badge";
import { Card } from "./card";
import Image from "next/image";

const projects = [
  {
    title: "Business Orbit",
    description: "A professional networking platform reimagined with structured connections. We architected a scalable graph database backend capable of handling millions of nodes while keeping query times under 50ms, wrapped in an ultra-modern React interface.",
    status: "Live",
    metrics: ["Graph Database", "Real-time Chat", "Matching Algorithm"],
    color: "blue",
    domain: "businessorbit.org",
    initials: "BO",
    bgClass: "bg-blue-50 text-blue-600",
  },
  {
    title: "ZeeroStock",
    description: "B2B excess inventory marketplace with real-time tracking workflows. By digitizing complex supply-chain liquidation processes, this platform connects enterprise sellers directly with bulk buyers using advanced matching, reducing liquidation time by 40%.",
    status: "Live",
    metrics: ["Supply Chain", "B2B Marketplace", "Payment Escrow"],
    color: "orange",
    domain: "zeerostock.com",
    initials: "ZS",
    bgClass: "bg-orange-50 text-orange-600",
  },
  {
    title: "FlowAI Agents",
    description: "Custom autonomous agent infrastructure for enterprise workflows. We deployed intelligent, multi-step LLM pipelines that integrate directly into existing CRMs to handle triage, scheduling, and repetitive data entry autonomously.",
    status: "In Production",
    metrics: ["LLM Pipelines", "CRM Integration", "Task Automation"],
    color: "purple",
    domain: "flowai.com",
    initials: "FA",
    bgClass: "bg-purple-50 text-purple-600",
  }
];

export default function WorkSection() {
  return (
    <section id="work" className="w-full mx-auto px-6 py-32 relative z-10 scroll-mt-24 overflow-hidden">
      <AntigravityBackground />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900"
          >
            Featured Deployments
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-xl font-medium max-w-2xl mx-auto"
          >
            A selection of highly scalable platforms, custom AI architectures, and marketplaces we've brought to life.
          </motion.p>
        </div>

        <div className="flex flex-col gap-16">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Card className="group relative overflow-hidden rounded-[2rem] border-slate-200 bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                {/* Decorative glowing orb behind the card */}
                <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[100px] opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-40 ${
                  project.color === 'blue' ? 'bg-blue-500' : project.color === 'orange' ? 'bg-orange-500' : 'bg-purple-500'
                }`} />

                <div className="flex flex-col md:flex-row p-8 md:p-12 gap-8 md:gap-12 items-center">
                  {/* Left Icon/Initials/Favicon Block */}
                  <div className={`w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-[2rem] ${project.bgClass} flex items-center justify-center shadow-sm relative overflow-hidden group-hover:scale-105 group-hover:rotate-3 transition-transform duration-500`}>
                    {project.domain ? (
                      <div className="relative w-16 h-16 md:w-24 md:h-24">
                        <img 
                          src={`https://www.google.com/s2/favicons?domain=${project.domain}&sz=128`}
                          alt={`${project.title} logo`}
                          className="w-full h-full object-contain drop-shadow-sm" 
                        />
                      </div>
                    ) : (
                      <span className="font-black text-4xl md:text-6xl">{project.initials}</span>
                    )}
                  </div>

                  {/* Right Content Block */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 font-bold px-4 py-1.5 text-sm self-center md:self-auto uppercase tracking-wider">
                        {project.status}
                      </Badge>
                    </div>
                    
                    <p className="text-slate-500 text-lg leading-relaxed font-medium mb-8">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 pt-6 border-t border-slate-100">
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                        {project.metrics.map((metric, i) => (
                          <Badge key={i} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold px-4 py-2 text-[13px]">
                            {metric}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="text-slate-400 group-hover:text-slate-900 transition-colors flex items-center gap-2 font-bold text-sm uppercase tracking-wider">
                        View Case Study <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
