"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, ChevronDown, XCircle, Layout, Layers, Terminal, PhoneCall, Mail, Globe, Star } from "lucide-react";

import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import AtiorLogo from "../components/ui/AtiorLogo";
import { SplineScene } from "../components/ui/splite";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const LazyAntigravityBackground = dynamic(() => import("../components/ui/AntigravityBackground"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 -z-30 pointer-events-none flex items-center justify-center">
      <div className="w-48 h-48 rounded-full bg-gradient-to-br from-white/60 to-slate-100/40 blur-xl" />
    </div>
  ),
});

const LazySplineScene = dynamic(() => import("../components/ui/splite").then(mod => mod.SplineScene), {
  ssr: false,
  loading: () => (
    <div className="w-[360px] h-[360px] bg-gradient-to-br from-white/60 to-slate-100/40 rounded-xl" />
  ),
});

const LazyWorkSection = dynamic(() => import("../components/ui/WorkSection"), {
  loading: () => <div className="h-screen w-full flex items-center justify-center bg-slate-50"><div className="animate-pulse flex flex-col items-center gap-4"><div className="w-12 h-12 rounded-full border-4 border-blue-600/30 border-t-blue-600 animate-spin"></div><p className="text-slate-500 font-medium">Loading Work Showcase...</p></div></div>,
  ssr: false
});

const LazyProcessSection = dynamic(() => import("../components/ui/ProcessSection"), {
  loading: () => <div className="min-h-[50vh] w-full flex items-center justify-center bg-white"><div className="animate-pulse flex flex-col items-center gap-4"><div className="w-12 h-12 rounded-full border-4 border-blue-600/30 border-t-blue-600 animate-spin"></div><p className="text-slate-500 font-medium">Loading Processes...</p></div></div>,
  ssr: false
});

const LazyTechMarquee = dynamic(() => import("../components/ui/TechMarquee"), { ssr: false });
const LazyClientTestimonialsSection = dynamic(() => import("../components/ui/ClientTestimonialsSection"), { ssr: false });

const Stars = () => {
  // Static array of stars to prevent hydration mismatch, or we can just use fixed positions
  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    top: `${(i * 13) % 100}%`,
    left: `${(i * 29) % 100}%`,
    size: (i % 3) + 1,
    delay: (i % 5) * 0.5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 -z-20">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-foreground"
          style={{ top: star.top, left: star.left, width: star.size, height: star.size }}
          animate={{ opacity: [0.1, 1, 0.1] }}
          transition={{ duration: 3 + (star.id % 2), repeat: Infinity, delay: star.delay }}
        />
      ))}
    </div>
  );
};

const SwingingCircle = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-visible">
      {/* Primary swinging/rotating shape */}
      <motion.div
        className="absolute inset-0 origin-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[300px] bg-foreground/10 rounded-[40%_60%_70%_30%] blur-[80px]" />
        <div className="absolute bottom-[20%] right-[20%] w-[350px] h-[400px] bg-foreground/5 rounded-[60%_40%_30%_70%] blur-[100px]" />
      </motion.div>
      
      {/* Secondary reverse rotating ring */}
      <motion.div
        className="absolute inset-0 origin-center"
        animate={{ rotate: -360, scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-[40px] border-foreground/5 rounded-full blur-[40px]" />
      </motion.div>
    </div>
  );
};

export default function AtiorPage() {
  const [phase, setPhase] = useState<"words" | "brand" | "background">("words");
  const heroWords = ["New-Generation", "Products"];

  useEffect(() => {
    if (phase === "words") {
      const total = heroWords.length * 700 + 300; // allow word animation to finish
      const t = setTimeout(() => setPhase("brand"), total);
      return () => clearTimeout(t);
    }

    if (phase === "brand") {
      const t2 = setTimeout(() => setPhase("background"), 900);
      return () => clearTimeout(t2);
    }
  }, [phase]);
  const problemPoints = [
    "Unreliable development teams that miss deadlines",
    "Poorly designed systems that need a complete rebuild",
    "Expensive, bloated development cycles",
    "Architecture that collapses under scale",
    "High maintenance costs due to poor optimization",
  ];

  const differencePoints = [
    "Product-first thinking: designing for business outcomes",
    "Scalable architecture from day one",
    "Fast, focused development cycles",
    "Long-term technology partner",
    "Low maintenance costs",
  ];

  const processSteps = [
    { title: "Discovery & Planning", desc: "Understanding your business goals and technical requirements." },
    { title: "Product Architecture", desc: "Designing scalable, secure systems built for the future." },
    { title: "Agile Development", desc: "Iterative building with transparent progress and communication." },
    { title: "Testing & Optimization", desc: "Rigorous QA to ensure flawless performance under load." },
    { title: "Deployment", desc: "Smooth launch with zero downtime." },
    { title: "Long-Term Support", desc: "Ongoing maintenance, scaling, and feature updates." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden bg-white">
      {/* Antigravity background glowing blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[128px] -z-30 pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] -z-30 pointer-events-none mix-blend-multiply" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[128px] -z-30 pointer-events-none mix-blend-multiply" />

      {/* Navbar */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="w-full px-6 md:px-8 h-20 flex items-center justify-start max-w-[1400px] mx-auto">
          <div className="flex items-center justify-start gap-2 mr-14">
            <AtiorLogo className="w-20 h-40 dark:invert-0 invert" />
            <span className="font-medium text-2xl hidden sm:block tracking-tight text-[#202124]">Atior Technologies</span>
          </div>
          <div className="hidden md:flex items-center justify-start gap-8 text-[15px] font-medium text-[#5e6368]">
            <a href="#services" className="hover:text-[#202124] transition-colors">Services</a>
            <a href="#process" className="hover:text-[#202124] transition-colors flex items-center gap-1">Process <ChevronDown className="w-4 h-4 text-gray-400" /></a>
            <a href="#work" className="hover:text-[#202124] transition-colors">Work</a>
            <a href="#clients" className="hover:text-[#202124] transition-colors flex items-center gap-1">Clients <ChevronDown className="w-4 h-4 text-gray-400" /></a>
          </div>
          <div className="ml-auto flex items-center justify-end">
            <Button className="rounded-full shadow-none font-medium px-6 bg-[#202124] text-white hover:bg-[#3c4043]">Contact Us</Button>
          </div>
        </div>
      </nav>

      <main className="pb-24">
        {/* Exact Hero Layout Match */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20">
          {phase === "background" ? (
            <>
              <LazyAntigravityBackground />
              <Stars />
              <SwingingCircle />
              <div className="absolute inset-0 flex items-center justify-center -z-20 opacity-50 pointer-events-none">
                <div className="w-[800px] h-[800px]">
                  <LazySplineScene 
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </>
          ) : null}
          
          <div className="absolute inset-0 flex items-center justify-center -z-20 opacity-50 pointer-events-none">
            <div className="w-[800px] h-[800px]">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 p-1 pr-5 rounded-full bg-muted border border-border text-sm font-medium mb-12 shadow-sm"
          >
            <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-widest">NEW</span>
            <span className="text-foreground font-semibold">Automated Scale Generation</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bold tracking-tight mb-6 leading-[1.1] text-foreground"
          >
            {/* Phase 1: reveal words one-by-one and show brand inline */}
            <div className="flex items-center justify-center gap-6">
              {phase === "brand" || phase === "background" ? (
                <div className="flex items-center gap-3">
                  <AtiorLogo className="w-14 h-14" />
                  <span className="text-3xl md:text-[3.6rem]">Atior Technologies</span>
                </div>
              ) : null}

              <div className="flex items-center gap-4">
                {heroWords.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: phase === "words" ? 1 : 0, y: 0 }}
                    transition={{ delay: i * 0.7, duration: 0.45 }}
                    className={`inline-block text-4xl md:text-8xl font-extrabold ${i > 0 ? "ml-3" : ""}`}
                    style={{ visibility: phase === "words" ? "visible" : "hidden" }}
                  >
                    {w}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium"
          >
            Atior.Tech : Scalable Digital Products for Modern Businesses, Architecture That Converts.
          </motion.p>
        </section>

        {/* Technologies Marquee Slider */}
        <LazyTechMarquee />

        <LazyWorkSection />

        {/* Features / Differences Section */}
        <section id="benefits" className="max-w-7xl mx-auto px-6 py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">Why Most Tech Projects <span className="text-muted-foreground italic font-serif">Fail</span></h2>
              <p className="text-muted-foreground text-lg mb-10 font-medium">The difference between a stalled project and a successful launch comes down to architecture, focus, and a product-first mindset.</p>
              
              <div className="space-y-8">
                <Card className="bg-red-50/50 border-red-100 shadow-none">
                  <CardHeader>
                    <CardTitle className="text-red-900 flex items-center gap-2 text-lg">
                      <XCircle className="w-5 h-5 text-red-500" />
                      The Problem
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {problemPoints.slice(0, 3).map((point, i) => (
                        <li key={i} className="text-red-800/80 text-sm font-medium flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-muted blur-3xl rounded-full opacity-50"></div>
              <Card className="relative rounded-3xl shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    The Atior Difference
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  {differencePoints.map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs shadow-md">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-foreground">{item}</h4>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <Separator className="relative z-10" />

        {/* Core Services Section */}
        <section id="services" className="bg-muted/30 py-32 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-4 block">What We Build</span>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Our Core Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium">Building powerful digital solutions for businesses that want to grow faster and operate smarter.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Automation Systems */}
                <motion.div whileHover={{ y: -5 }}>
                  <Card className="rounded-[2rem] shadow-xl flex flex-col h-full border-border/50">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-4">
                        <Terminal className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">Automation Systems</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <CardDescription className="text-base font-medium leading-relaxed mb-8">
                        Intelligent automation that eliminates manual work and keeps your operations running at scale. CRM pipelines, outreach sequences.
                      </CardDescription>
                      <div className="space-y-3 mt-auto">
                        {['CRM Automation', 'Outreach Systems', 'Workflow Automation'].map((f, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm font-bold text-foreground bg-muted/50 p-3 rounded-xl">
                            <CheckCircle2 className="w-4 h-4 text-primary" /> {f}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
  
                {/* SaaS Platform */}
                <motion.div whileHover={{ y: -5 }} className="relative transform md:-translate-y-4">
                  <div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2 z-10">
                    <Badge className="px-4 py-1.5 uppercase tracking-widest shadow-lg">Our Focus</Badge>
                  </div>
                  <Card className="rounded-[2rem] border-2 border-primary shadow-2xl flex flex-col h-full">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-4 shadow-md">
                        <Layout className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-2xl">SaaS Platform Development</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <CardDescription className="text-base font-medium leading-relaxed mb-8">
                        We build multi-tenant platforms that are ready to scale from day one. Marketplaces, communities, dashboards, and subscription products.
                      </CardDescription>
                      <div className="space-y-3 mt-auto">
                        {['Marketplaces', 'Dashboards', 'Subscriptions'].map((f, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm font-bold text-foreground bg-muted/50 p-3 rounded-xl border">
                            <CheckCircle2 className="w-4 h-4 text-primary" /> {f}
                          </div>
                        ))}
                      </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* AI-Powered */}
              <motion.div whileHover={{ y: -5 }}>
                <Card className="rounded-[2rem] shadow-xl flex flex-col h-full border-border/50">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-4">
                      <Layers className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">AI-Powered Applications</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <CardDescription className="text-base font-medium leading-relaxed mb-8">
                      Integrate large language models and machine learning into products that actually move the needle.
                    </CardDescription>
                    <div className="space-y-3 mt-auto">
                      {['AI Agents', 'Hiring Automation', 'Recommendations'].map((f, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm font-bold text-foreground bg-muted/50 p-3 rounded-xl">
                          <CheckCircle2 className="w-4 h-4 text-primary" /> {f}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <Separator className="relative z-10" />

        {/* Process Section */}
        <LazyProcessSection />

        {/* Client Testimonials */}
        <LazyClientTestimonialsSection />

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-6 py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center bg-muted/20 border rounded-[3rem] p-10 md:p-16 shadow-2xl">
            <div className="text-left">
              <p className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-4">Ready to Build?</p>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-foreground">Let's Build Something<br/><span className="text-muted-foreground italic font-serif">Exceptional</span></h2>
              <p className="text-muted-foreground mb-12 max-w-xl text-lg font-medium">If you're building a SaaS product, automation system, or want to bring an AI-powered idea to life — we'd love to be your technology partner.</p>
              <Button size="lg" className="rounded-full font-bold px-10 h-16 text-lg shadow-2xl gap-3">
                Start a Conversation <ArrowRight className="w-5 h-5" />
              </Button>
              <div className="mt-12 flex flex-col sm:flex-row items-start gap-6 text-sm font-bold text-muted-foreground">
                <span className="flex items-center gap-2 hover:text-foreground cursor-pointer transition-colors"><Mail className="w-4 h-4"/> info@atiortechnologies.com</span>
                <span className="flex items-center gap-2 hover:text-foreground cursor-pointer transition-colors"><PhoneCall className="w-4 h-4"/> +91 7696834279</span>
              </div>
            </div>
            
            <div className="h-[400px] md:h-[500px] w-full relative rounded-[2rem] overflow-hidden border bg-background/50 backdrop-blur-sm shadow-xl">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="h-full w-full"
              />
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <AtiorLogo className="w-40 h-10 dark:invert-0 invert" />
            </div>
            <p className="text-sm text-muted-foreground mb-8 max-w-sm font-medium leading-relaxed">
              Trusted by 100+ startups and growing businesses. More than 50+ products successfully delivered.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full shadow-sm">
                in
              </Button>
              <Button variant="outline" size="icon" className="rounded-full shadow-sm">
                ig
              </Button>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-foreground">Links</h4>
            <ul className="space-y-4 text-sm font-semibold text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-foreground transition-colors">Process</a></li>
              <li><a href="#work" className="hover:text-foreground transition-colors">Work</a></li>
              <li><a href="#clients" className="hover:text-foreground transition-colors">Clients</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-foreground">Contact</h4>
            <ul className="space-y-4 text-sm font-semibold text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4"/> info@atiortechnologies.com</li>
              <li className="flex items-center gap-2"><Globe className="w-4 h-4"/> atiortechnologies.com</li>
              <li className="flex items-center gap-2"><PhoneCall className="w-4 h-4"/> +91 7696834279</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
