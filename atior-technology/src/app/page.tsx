'use client'

import { useState, useEffect } from 'react';
import { SplineScene } from "@/components/ui/splite";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import Preloader from '@/components/ui/Preloader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fallback to remove loader after max 10 seconds if 3D model takes too long
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#f8f8f8] text-black font-sans selection:bg-black selection:text-white overflow-x-hidden relative">
      
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {/* SECTION 1: PORTFOLIO */}
      <section className="relative w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden">
        
        {/* Top Branding */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-6 md:top-10 z-20 text-center w-full"
        >
            <h2 className="text-xl md:text-3xl font-bold uppercase tracking-widest text-black/90">
                Atior Technology
            </h2>
        </motion.div>

        {/* Main Content Container */}
        <div className="relative w-full max-w-screen-2xl mx-auto h-full flex flex-col md:flex-row items-center justify-center p-4">

            {/* Left Side Content */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute left-4 md:left-12 bottom-12 z-20 hidden md:block"
            >
                <ul className="space-y-4 text-sm md:text-base font-bold text-gray-800 uppercase tracking-widest text-left">
                    <li>• IT Products</li>
                    <li>• Custom Software</li>
                    <li>• Digital Infrastructure</li>
                    <li>• Technology Consulting</li>
                </ul>
            </motion.div>

            {/* Center Area with Big Text and Robot */}
            <div className="relative flex-shrink-0 w-full md:w-[60%] h-[60%] md:h-full flex items-center justify-center">
                 {/* "PORTFOLIO" Text Behind Robot */}
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute z-1 text-[18vw] md:text-[13vw] font-black leading-none tracking-tighter text-center uppercase text-black select-none top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                    PORTFOLIO
                </motion.h1>

                {/* The Robot (Center) */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }} // Start slightly lower but visible
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="relative z-10 w-full h-full scale-110 translate-y-10 md:translate-y-20"
                >
                     <SplineScene 
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full"
                        onLoad={() => setIsLoading(false)}
                        priority={true}
                      />
                </motion.div>
            </div>

            {/* Right Side Content */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute right-4 md:right-12 bottom-12 z-20 hidden md:block text-right"
            >
                 <div className="space-y-6">
                     <h3 className="font-bold text-lg md:text-xl max-w-[200px] ml-auto leading-tight">
                        Building <br/> Scalable Digital Solutions
                     </h3>
                     <div className="text-sm font-medium text-gray-700 space-y-1">
                         <p>+91 7696834279</p>
                         <p>7743096565</p>
                     </div>
                     <div className="text-sm font-bold uppercase tracking-wider text-gray-900">
                         <p>info@atiortechnology.com</p>
                         <p>www.atiortechnology.com</p>
                     </div>
                 </div>
            </motion.div>

        </div>
      </section>

      {/* SECTION 2: THE STORY */}
      <section className="relative w-full min-h-screen bg-transparent flex items-center justify-center overflow-hidden py-12 md:py-0">
         <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full relative">
            
            {/* Left Column: Title and Robot */}
            <div className="relative z-10 flex flex-col justify-center h-full">
                <motion.h2 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-[16vw] md:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase text-black text-center md:text-left"
                >
                    THE <br/> STORY
                </motion.h2>
                
                {/* Robot Below Title (Left Side) - Flipped to point right */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full h-[300px] md:h-[500px] relative z-30 hidden md:flex justify-center md:justify-start mt-4 ml-0"
                >
                     <div className="w-full h-full scale-x-[-1]">
                        <SplineScene 
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            className="w-full h-full scale-[0.9] origin-top md:origin-top-right"
                        />
                     </div>
                </motion.div>
            </div>
            
            {/* Right Column: Text Content */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative z-20 flex flex-col justify-center h-full space-y-8 md:pl-12"
            >
                <p className="text-lg md:text-xl lg:text-2xl font-bold uppercase text-gray-800 leading-tight max-w-lg text-right md:text-left self-end md:self-start">
                    Businesses today don&apos;t fail because of lack of ideas. 
                    <span className="text-gray-500"> They fail because of lack of the right technology partner.</span>
                </p>
                
                <ul className="space-y-3 text-right md:text-left self-end md:self-start">
                    {["Outdated Systems", "Inefficient Workflows", "Bad Tech Decisions", "Expensive Development"].map((item, index) => (
                         <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                            className="font-bold text-gray-600 uppercase text-sm md:text-base tracking-wide"
                        >
                            • {item}
                        </motion.li>
                    ))}
                </ul>

                <div className="text-right md:text-left pt-6 self-end md:self-start relative z-30">
                     <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-2xl md:text-3xl font-black uppercase text-black inline-block border-b-4 border-black pb-1"
                     >
                        That is where <br className="md:hidden"/> Atior comes in.
                     </motion.h3>
                     {/* The (1) annotation removed */}
                </div>
            </motion.div>

             {/* Mobile version of the robot for section 2 */}
             <div className="relative w-full h-[250px] md:hidden mt-0">
                 <SplineScene 
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full scale-75 origin-top"
                  />
             </div>
         </div>
      </section>

      {/* SECTION 3: WHO WE ARE */}
      <section className="relative w-full min-h-screen bg-transparent flex flex-col justify-center items-center overflow-hidden py-12 md:py-0 text-black">
          
          <div className="w-full max-w-7xl mx-auto px-4 relative h-full min-h-[80vh] flex flex-col justify-between">
              
              <div className="flex-grow flex items-center justify-center relative w-full">
                {/* Main Title */}
                <div className="relative z-10 text-center md:text-left w-full">
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-[20vw] md:text-[14vw] font-black leading-[0.8] tracking-tighter uppercase text-black"
                    >
                        WHO WE <br/> ARE
                    </motion.h2>
                </div>

                {/* Right List - Positioned absolutely on desktop */}
                <div className="relative md:absolute md:top-1/2 md:-translate-y-1/2 md:right-12 z-20 text-center md:text-right mt-8 md:mt-0">
                    <ul className="space-y-2 text-sm md:text-base font-bold text-gray-800 uppercase tracking-widest">
                        {["SOFTWARE", "PLATFORMS", "SAAS", "AUTOMATION", "TOOLS", "INFRASTRUCTURE", "CLOUD", "PRODUCTS"].map((item, i) => (
                             <motion.li 
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                            >
                                • {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>
              </div>

               {/* Bottom Content Container */}
               <div className="w-full flex flex-col md:flex-row justify-start items-end z-20 mt-12 md:mt-0 px-4 md:px-0">
                    {/* Bottom Left Text */}
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="max-w-xl text-sm md:text-base font-bold uppercase text-gray-700 leading-relaxed text-center md:text-left mx-auto md:mx-0"
                    >
                        ATIOR IS A TECHNOLOGY COMPANY FOCUSED ON BUILDING POWERFUL 
                        DIGITAL SOLUTIONS FOR BUSINESSES THAT WANT TO GROW FASTER AND 
                        OPERATE SMARTER.
                    </motion.p>
               </div>

          </div>
      </section>

      {/* SECTION 4: OUR VISION */}
      <section className="relative w-full min-h-screen bg-transparent flex items-center justify-center overflow-hidden py-12 md:py-0 text-black">
         <div className="w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row h-full relative min-h-[80vh]">

            {/* Left Content - Title & Robot */}
            <div className="relative z-10 flex flex-col justify-center w-full md:w-1/2 h-full min-h-[60vh] md:min-h-[80vh]">
                 <motion.h2 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-[20vw] md:text-[13vw] font-black leading-[0.8] tracking-tighter uppercase text-black text-center md:text-left relative z-20"
                >
                    OUR <br/> VISION
                </motion.h2>
                
                 {/* Robot - Small & Bottom Side */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative md:absolute bottom-0 left-0 md:left-4 w-[120px] h-[120px] md:w-[180px] md:h-[180px] z-10 mx-auto md:mx-0 mt-8 md:mt-0"
                >
                    <SplineScene 
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full"
                    />
                </motion.div>
            </div>

            {/* Right Content Area */}
            <div className="relative z-20 flex flex-col justify-between w-full md:w-1/2 h-full md:py-20">
                 {/* Top Right List */}
                 <div className="flex justify-end mt-8 md:mt-0">
                    <ul className="space-y-3 text-right text-gray-800 font-bold uppercase tracking-wider text-xs md:text-sm">
                          {["DELIVER RELIABLE", "DETAIL-ORIENTED STRATEGIST", "CLIENT-FIRST APPROACH", "FUTURE-READY DIGITAL PRODUCTS", "SCALABLE"].map((item, i) => (
                                <motion.li 
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                                >
                                    {item}
                                </motion.li>
                          ))}
                    </ul>
                 </div>
                 
                 {/* Bottom Text & Number */}
                 <div className="flex flex-col items-end mt-auto pt-10 md:pt-0">
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="w-full max-w-md text-xs md:text-sm font-bold uppercase text-gray-700 leading-relaxed text-right mb-0"
                      >
                        TO EMPOWER BUSINESSES THROUGH SMART TECHNOLOGY SOLUTIONS THAT SCALE WITH GROWTH. 
                        OUR VISION IS TO BECOME A TRUSTED TECHNOLOGY PARTNER FOR BUSINESSES THAT SEEK RELIABLE, 
                        FUTURE-READY SOLUTIONS THAT GROW ALONGSIDE THEIR AMBITIONS.
                      </motion.p>
                 </div>
            </div>

         </div>
      </section>

      {/* SECTION 5: OUR EXPERIENCE */}
      <section className="relative w-full min-h-screen bg-transparent flex flex-col items-center justify-center overflow-hidden py-12 text-black">
          <div className="w-full max-w-7xl mx-auto px-4 flex flex-col relative min-h-[80vh]">
               
               <div className="flex flex-col md:flex-row h-full">
                    {/* Left Column: Title & Robot */}
                    <div className="w-full md:w-[50%] flex flex-col relative z-20">
                        <motion.h2 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className="text-[15vw] md:text-[5vw] font-black leading-[0.9] tracking-tighter uppercase text-black mb-4 md:mb-0"
                        >
                            OUR <br/> EXPERIENCE
                        </motion.h2>

                        {/* Robot Pointing Right */}
                        <div className="w-full h-[300px] md:h-[500px] relative z-10 mt-8 md:mt-0">
                            <SplineScene 
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full md:w-[50%] flex flex-col z-20 pt-10 md:pt-0 md:pl-12">
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className="text-sm md:text-lg font-bold uppercase text-gray-800 mb-10 leading-relaxed"
                        >
                            WE HAVE AN EXPERIENCE TO DESIGN AND BUILD DIGITAL 
                            PLATFORMS THAT SOLVE REAL-WORLD PROBLEMS AND SUPPORT 
                            GROWING BUSINESSES AND COMMUNITIES.
                        </motion.p>

                        <div className="space-y-6">
                            {[
                                { title: "BUSINESS ORBIT", desc: "PROFESSIONAL NETWORKING PLATFORM", link: "WWW.BUSINESSORBIT.ORG" },
                                { title: "ZEEROSTOCK", desc: "B2B EXCESS INVENTORY SELLING PLATFORM", link: "WWW.ZEEROSTOCK.COM" },
                                { title: "VILLAGESTAY", desc: "A TRAVEL PLATFORM", link: "WWW.VILLAGESTAY.ME" },
                                { title: "ORANGECHARGER", desc: "A PLATFORM FOCUSED ON INFRASTRUCTURE", link: "WWW.ORANGECHARGER.COM" },
                                { title: "STARTUP MELA", desc: "AN EVENT PLATFORM", link: "WWW.STARTUPMELA.COM" },
                                { title: "THE POPPY PIE", desc: "A CREATIVE BUSINESS INITIATIVE", link: "WWW.THEPOPPYPIE.COM" },
                            ].map((project, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                                    className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-300 pb-2 text-xs md:text-sm font-bold uppercase tracking-wide gap-2 md:gap-0"
                                >
                                    <span className="text-black text-base md:text-lg">{project.title}</span>
                                    <span className="text-gray-500 md:text-center flex-1 md:px-4">{project.desc}</span>
                                    <a href={`https://${project.link.toLowerCase()}`} className="text-black underline decoration-1 underline-offset-4">{project.link}</a>
                                </motion.div>
                            ))}
                        </div>
                    </div>
               </div>

                {/* Bottom Ticker */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="w-full mt-12 pt-6 border-t-2 border-black"
                >
                    <div className="flex flex-wrap gap-4 text-[10px] md:text-xs font-bold uppercase text-gray-700 justify-between">
                         <span className="flex items-center gap-1">✓ 30+ PROJECTS SUCCESSFULLY DELIVERED</span>
                         <span className="flex items-center gap-1">✓ DIGITAL PRODUCT DEVELOPMENT</span>
                         <span className="flex items-center gap-1">✓ CUSTOM SOFTWARE SOLUTIONS</span>
                         <span className="flex items-center gap-1">✓ BUSINESS AUTOMATION SYSTEMS</span>
                         <span className="flex items-center gap-1">✓ SCALABLE WEB AND APP PLATFORMS</span>
                    </div>
                </motion.div>

          </div>
      </section>

      {/* SECTION 6: CUSTOM IT SOLUTIONS */}
      <section className="relative w-full min-h-screen bg-transparent flex flex-col justify-center py-12 md:py-24 text-black">
         <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 min-h-[80vh]">

            {/* Left Column */}
            <div className="flex flex-col justify-between h-full">
                <div>
                    <motion.h2 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-[12vw] md:text-[6vw] font-black leading-[0.9] tracking-tighter uppercase text-black mb-8"
                    >
                        CUSTOM IT <br/> SOLUTIONS
                    </motion.h2>

                     <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-base md:text-xl text-gray-700 leading-relaxed max-w-lg"
                    >
                        Our team combines product thinking with technical expertise, 
                        allowing us to develop both independent digital platforms and 
                        customized business solutions. From startups launching new 
                        products to businesses seeking operational efficiency, we focus 
                        on building scalable, reliable, and user-focused technology systems.
                    </motion.p>
                </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-between h-full space-y-12">
                 <div className="space-y-8">
                    {[
                        { title: 'PROJECT: "AI FITNESS TRACKER"', desc: "A CUSTOMER MAPPING AND FITNESS TRACKING PLATFORM FOR GYMS TO MONITOR MEMBER PROGRESS AND ENGAGEMENT." },
                        { title: 'PROJECT: "AI OUTREACH AGENT"', desc: "AN INTELLIGENT AUTOMATION SYSTEM THAT IDENTIFIES POTENTIAL LEADS AND MANAGES PERSONALIZED OUTREACH" },
                        { title: 'PROJECT: "RESTAURANT MANAGEMENT"', desc: "BUILDING A DIGITAL COMMUNITY THAT SUPPORTS EACH OTHER FOR A HEALTHY LIFESTYLE." },
                        { title: 'PROJECT: "AI HIRING MANAGEMENT"', desc: "A RECRUITMENT PLATFORM DESIGNED TO SIMPLIFY THE HIRING PROCESS AND MANAGE CANDIDATE WORKFLOWS." }
                    ].map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                            className="bg-transparent border-b border-gray-400 pb-4"
                        >
                            <h3 className="text-xl md:text-2xl font-black uppercase mb-2">{item.title}</h3>
                            <p className="text-xs md:text-sm font-bold text-gray-600 uppercase text-right md:text-right max-w-md ml-auto">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                 </div>

                 <div className="flex flex-row justify-between items-end mt-auto">
                      <div className="space-y-2 text-sm md:text-base font-bold uppercase text-gray-800">
                          <motion.p 
                            initial={{ opacity: 0, x: -20 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.6 }}>
                            WE BUILD OUR OWN PRODUCTS
                          </motion.p>
                          <motion.p 
                            initial={{ opacity: 0, x: -20 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.7 }}>
                            WE BUILD CUSTOM SOLUTIONS FOR CLIENTS
                          </motion.p>
                          <motion.p 
                            initial={{ opacity: 0, x: -20 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.8 }}>
                            WE HAVE STRONG EXECUTION EXPERIENCE
                          </motion.p>
                      </div>

                      {/* Small Robot Icon */}
                      <div className="w-24 h-24 md:w-32 md:h-32 relative flex-shrink-0">
                           <SplineScene 
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="w-full h-full"
                            />
                      </div>
                 </div>
            </div>

         </div>
      </section>

      {/* SECTION 7: OUR PROCESS */}
      <section className="relative w-full min-h-screen bg-transparent text-black overflow-hidden py-12 md:py-20">
           <div className="w-full max-w-7xl mx-auto px-4 relative h-full flex flex-col">
               
               {/* Top Right Text */}
               <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-0 right-4 text-right z-20 hidden md:block"
                >
                   <h3 className="text-xl md:text-3xl font-bold uppercase leading-tight">
                       CLIENTS TRUST <br/> COMPANIES WITH <br/> 
                       <span className="font-black text-black">STRUCTURED <br/> PROCESSES.</span>
                   </h3>
               </motion.div>

               {/* Process Steps Container */}
               <div className="relative w-full mt-10 md:mt-20 flex flex-col items-start space-y-8 md:space-y-0 h-auto md:h-[800px]">
                    {[
                        { step: "STEP 1", title: "UNDERSTANDING YOUR BUSINESS" },
                        { step: "STEP 2", title: "STRATEGY & PLANNING" },
                        { step: "STEP 3", title: "DEVELOPMENT" },
                        { step: "STEP 4", title: "TESTING" },
                        { step: "STEP 5", title: "DEPLOYMENT" },
                        { step: "STEP 6", title: "SUPPORT" },
                    ].map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -30, y: 20 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="relative flex flex-col md:flex-row items-center md:absolute group"
                            style={{ 
                                top: `${i * 120}px`, // Vertical spacing
                                left: `${i * 15}%`, // Horizontal step
                                zIndex: 10 + i
                            }}
                        >
                             {/* Box */}
                            <div className="border-2 border-black rounded-full px-6 py-3 bg-white shadow-lg min-w-[200px] md:min-w-[280px] text-center relative z-10 hover:scale-105 transition-transform">
                                <span className="block text-xs font-bold text-gray-500 uppercase mb-1">{item.step}</span>
                                <span className="block text-sm md:text-base font-black uppercase text-black">{item.title}</span>
                            </div>

                             {/* Connector Line Logic (Desktop Only) */}
                             {i < 5 && (
                                 <div className="hidden md:block absolute pointer-events-none" 
                                      style={{ 
                                          top: '50%', 
                                          left: '100%', 
                                          width: '15vw', // Distance to next step horizontal start approx (15%)
                                          height: '120px', // Distance to next step vertical center
                                          borderRight: '2px solid black', 
                                          borderTop: '2px solid black',
                                          zIndex: 0,
                                          transform: 'translateY(0)' 
                                      }}
                                 />
                             )}
                        </motion.div>
                    ))}
               </div>

               {/* "OUR PROCESS" Big Text - Bottom Left */}
               <div className="md:absolute bottom-10 left-0 z-0 mt-12 md:mt-0">
                    <motion.h2 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-[18vw] md:text-[8vw] font-black leading-[0.8] tracking-tighter uppercase text-black"
                    >
                        OUR <br/> PROCESS
                    </motion.h2>
               </div>

           </div>
      </section>

      {/* SECTION 8: TESTIMONIALS */}
      <section className="relative w-full bg-transparent text-black py-16 md:py-24 overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-4 flex flex-col items-center">
              
              <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="text-[12vw] md:text-[6vw] font-black leading-none tracking-tighter uppercase text-black mb-16 text-center"
              >
                  TESTIMONIALS
              </motion.h2>

              <div className="w-full flex flex-col space-y-12">
                   
                   {/* Testimonial 1 */}
                   <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col md:flex-row items-center justify-between border-t border-gray-400 py-8 gap-6 md:gap-4"
                   >
                        {/* Logo Area */}
                        <div className="w-full md:w-[25%] flex justify-center md:justify-start">
                             <div className="w-full max-w-[240px] h-32 md:h-40 bg-orange-200 rounded-lg flex items-center justify-center p-4 shadow-sm group hover:scale-105 transition-transform duration-300">
                                  <Image 
                                    src="https://www.google.com/s2/favicons?domain=www.zeerostock.com&sz=128"
                                    alt="Zeero Stock Logo" 
                                    width={128}
                                    height={128}
                                    unoptimized
                                    className="w-16 h-16 md:w-20 md:h-20 object-contain shadow-md rounded-full bg-white p-2"
                                  />
                             </div>
                        </div>
                        {/* Title Area */}
                        <div className="w-full md:w-[25%] flex flex-col justify-center text-center md:text-left">
                             <h4 className="text-2xl font-black uppercase">ZEERO STOCK</h4>
                             <p className="text-sm font-bold text-gray-600 uppercase mt-1">B2B EXCESS INVENTORY <br/> SELLING PLATFORM</p>
                        </div>
                        {/* Quote Area */}
                        <div className="w-full md:w-[50%] flex flex-col text-center md:text-right items-center md:items-end">
                             <p className="text-sm md:text-base font-medium uppercase text-gray-800 leading-relaxed max-w-lg mb-4">
                                ZEEROSTOCK MADE INVENTORY TRACKING EFFORTLESS FOR OUR BUSINESS. REAL-TIME UPDATES IMPROVED EFFICIENCY AND STOCK MANAGEMENT GREATLY.
                             </p>
                             <p className="font-bold text-sm uppercase text-black">- DEVYANI +91 9172023368</p>
                        </div>
                   </motion.div>

                   {/* Testimonial 2 */}
                   <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col md:flex-row items-center justify-between border-t border-gray-400 py-8 gap-6 md:gap-4"
                   >
                        {/* Logo Area */}
                        <div className="w-full md:w-[25%] flex justify-center md:justify-start">
                             <div className="w-full max-w-[240px] h-32 md:h-40 bg-white border border-gray-200 rounded-lg flex items-center justify-center p-4 shadow-sm group hover:scale-105 transition-transform duration-300">
                                   <Image 
                                    src="https://www.google.com/s2/favicons?domain=www.businessorbit.org&sz=128"
                                    alt="Business Orbit Logo" 
                                    width={128}
                                    height={128}
                                    unoptimized
                                    className="w-16 h-16 md:w-20 md:h-20 object-contain shadow-md rounded-full bg-white p-2"
                                  />
                             </div>
                        </div>
                         {/* Title Area */}
                        <div className="w-full md:w-[25%] flex flex-col justify-center text-center md:text-left">
                             <h4 className="text-2xl font-black uppercase">BUSINESS ORBIT</h4>
                             <p className="text-sm font-bold text-gray-600 uppercase mt-1">PROFESSIONAL <br/> NETWORKING PLATFORM</p>
                        </div>
                        {/* Quote Area */}
                        <div className="w-full md:w-[50%] flex flex-col text-center md:text-right items-center md:items-end">
                             <p className="text-sm md:text-base font-medium uppercase text-gray-800 leading-relaxed max-w-lg mb-4">
                                BUSINESS ORBIT HELPED ME CONNECT WITH PROFESSIONALS AND OPENED NEW OPPORTUNITIES THROUGH STRUCTURED NETWORKING.
                             </p>
                             <p className="font-bold text-sm uppercase text-black">- NITIN CHALANA +91 7743096565</p>
                        </div>
                   </motion.div>

                   {/* Testimonial 3 */}
                   <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col md:flex-row items-center justify-between border-t border-b border-gray-400 py-8 gap-6 md:gap-4"
                   >
                        {/* Logo Area */}
                        <div className="w-full md:w-[25%] flex justify-center md:justify-start">
                             <div className="w-full max-w-[240px] h-32 md:h-40 bg-black rounded-lg flex items-center justify-center p-4">
                                  <span className="font-black text-6xl uppercase text-pink-300">US</span>
                             </div>
                        </div>
                         {/* Title Area */}
                        <div className="w-full md:w-[25%] flex flex-col justify-center text-center md:text-left">
                             <h4 className="text-2xl font-black uppercase">UNIQUS EDUTECH</h4>
                             <p className="text-sm font-bold text-gray-600 uppercase mt-1">A DIGITAL CLASSROOM <br/> PLATFORM</p>
                        </div>
                        {/* Quote Area */}
                        <div className="w-full md:w-[50%] flex flex-col text-center md:text-right items-center md:items-end">
                             <p className="text-sm md:text-base font-medium uppercase text-gray-800 leading-relaxed max-w-lg mb-4">
                                UNIQUS TRANSFORMED OUR ONLINE CLASSES WITH SMOOTH VIRTUAL SESSIONS, EASY RESOURCE SHARING, AND BETTER STUDENT ENGAGEMENT.
                             </p>
                             <p className="font-bold text-sm uppercase text-black">- ABHAY KUMAR +91 9041143830</p>
                        </div>
                   </motion.div>

              </div>
          </div>
      </section>

      {/* SECTION 9: LET'S CONNECT (Footer) */}
      <section className="relative w-full min-h-screen bg-transparent text-black overflow-hidden py-12 md:py-20 flex flex-col justify-between">
           <div className="w-full max-w-7xl mx-auto px-4 relative h-full flex flex-col flex-grow">
               
               {/* Top Content Row */}
               <div className="flex flex-col md:flex-row justify-between w-full relative z-20">
                   {/* Left Title */}
                   <motion.h2 
                       initial={{ opacity: 0, scale: 0.9 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: false, amount: 0.3 }}
                       transition={{ duration: 0.8 }}
                       className="text-[15vw] md:text-[8vw] font-black leading-[0.8] tracking-tighter uppercase text-black mb-8 md:mb-0"
                   >
                       LET&apos;S <br/> CONNECT!
                   </motion.h2>

                    {/* Right Contact Info */}
                    <div className="text-right space-y-2 md:space-y-1">
                        <motion.p 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-sm md:text-base uppercase text-gray-800"
                        >
                            INFO@ATIORTECHNOLOGY.COM
                        </motion.p>
                        <motion.p 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.3 }}
                            className="font-bold text-sm md:text-base uppercase text-gray-800"
                        >
                            WWW.ATIORTECHNOLOGY.COM
                        </motion.p>
                        <motion.p 
                             initial={{ opacity: 0, x: 20 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             viewport={{ once: false, amount: 0.3 }}
                             transition={{ delay: 0.4 }}
                             className="font-bold text-sm md:text-base uppercase text-gray-800"
                        >
                            +91 7696834279, 7743096565
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.6 }}
                            className="pt-8 md:pt-12 text-xs md:text-sm font-bold uppercase text-gray-600 leading-relaxed max-w-xs ml-auto hidden md:block"
                        >
                            THANK YOU FOR SEEING <br/>
                            OUR PORTFOLIO! <br/>
                            HOPEFULLY IT CAN BE AN <br/>
                            INSPIRATION FOR YOU <br/>
                            TO BUILD A STRONG <br/>
                            TECHNOLOGY
                        </motion.div>
                    </div>
               </div>

               {/* Middle Robot Area */}
               <motion.div 
                   initial={{ y: 50, opacity: 0 }}
                   whileInView={{ y: 0, opacity: 1 }}
                   viewport={{ once: false, amount: 0.3 }}
                   transition={{ duration: 1 }}
                   className="flex-grow relative w-full h-[400px] md:h-[600px] -mt-10 md:-mt-20 z-10 flex justify-center items-end"
               >
                    <SplineScene 
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full scale-110 translate-y-20 origin-bottom"
                    />
               </motion.div>

               {/* Bottom Right Greetings */}
               <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute bottom-0 right-4 md:right-0 text-right z-20"
                >
                     <h3 className="text-[10vw] md:text-[5vw] font-black leading-[0.9] tracking-tighter uppercase text-black">
                        THANKYOU. <br/>
                        GREETINGS.
                     </h3>
                </motion.div>

           </div>
      </section>

    </main>
  )
}
