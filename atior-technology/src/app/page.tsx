"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import AtiorLogo from "@/components/ui/AtiorLogo";
import Preloader from "@/components/ui/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  const problemPoints = [
    "Unreliable development teams that disappear mid-project or miss deadlines consistently",
    "Poorly designed systems that need a complete rebuild after 6 months of growth",
    "Expensive, bloated development cycles that drain runway without shipping features",
    "Architecture that works for 100 users but collapses under 10,000",
    "Agencies that code without thinking about the product or business outcome",
    "High maintenance costs due to poorly optimized code and inefficient system architecture.",
  ];

  const differencePoints = [
    "Product-first thinking: we design for your business outcome, not just the ticket list",
    "Scalable architecture from day one, built to grow from launch to Series A and beyond",
    "Fast, focused development cycles that ship real features every sprint",
    "We have built and launched our own platforms, so we think like founders, not vendors",
    "Long-term technology partner: we stay engaged after launch to grow with you",
    "Low maintenance costs due to highly optimized code and efficient system architecture.",
  ];

  const coreServices = [
    {
      title: "SaaS Platform Development",
      description:
        "We build multi-tenant platforms that are ready to scale from day one. Marketplaces, communities, dashboards, and subscription products built with clean architecture.",
      proof: "Partnered with 40+ industries to build their scalable SaaS products.",
      tags: ["Marketplaces", "Dashboard, Communities", "Subscriptions"],
    },
    {
      title: "Automation Systems",
      description:
        "We build intelligent automation that eliminates manual work and keeps your operations running at scale. CRM pipelines, outreach sequences, workflow orchestration.",
      proof: "Partnered with 10+ industries to build their automations",
      tags: ["CRM Automation", "Outreach Systems", "Workflow Automation"],
    },
    {
      title: "AI-Powered Applications",
      description:
        "We integrate large language models and machine learning into products that actually move the needle. From autonomous outreach agents to intelligent hiring pipelines.",
      proof: "Partnered with 10+ industries to automate their existing solutions",
      tags: ["AI Agents", "Hiring Automation", "Recommendations"],
    },
  ];

  const productBuilds = [
    {
      name: "Business Orbit",
      subtitle: "Professional networking platform",
      url: "www.businessorbit.org",
    },
    {
      name: "Zeerostock",
      subtitle: "B2B excess inventory selling platform",
      url: "www.zeerostock.com",
    },
    {
      name: "Villagestay",
      subtitle: "A travel platform",
      url: "www.villagestay.me",
    },
    {
      name: "Orangecharger",
      subtitle: "A platform focused on infrastructure",
      url: "www.orangecharger.com",
    },
    {
      name: "Startup Mela",
      subtitle: "An event platform",
      url: "www.startupmela.com",
    },
    {
      name: "The Poppy Pie",
      subtitle: "A creative business initiative",
      url: "www.thepoppypie.com",
    },
  ];

  const aiProjects = [
    {
      title: "Project: \"Customer Journey Mapping\"",
      description:
        "A customer mapping and fitness tracking platform for gyms to monitor member progress and engagement.",
      proof: "Implemented in 3+ gym",
      chip: "Gyms",
    },
    {
      title: "Project: \"Outreach Agent\"",
      description:
        "An intelligent automation system that identifies potential leads and manages personalized outreach.",
      proof: "Implemented in 10+ industries",
      chip: "Teleperformance",
    },
    {
      title: "Project: \"Hiring Management\"",
      description:
        "A recruitment platform designed to simplify the hiring process and manage candidate workflows.",
      proof: "Implemented in 3+ HR firms",
      chip: "HR, Hiring",
    },
    {
      title: "Project: \"Restaurant Management\"",
      description:
        "Building a digital community that supports each other for a healthy lifestyle.",
      proof: "Implemented in 4+ restaurants",
      chip: "Restaurants",
    },
  ];

  const clientVoices = [
    {
      brand: "ZEERO STOCK",
      subtitle: "B2B excess inventory selling platform",
      quote:
        "Zeerostock made inventory tracking effortless for our business. Real-time updates improved efficiency and stock management greatly.",
      author: "Devyani",
      phone: "+91 9172023368",
      tileClass: "from-[#2f6fae] via-[#f46a16] to-[#1a1730]",
      tileTextColor: "text-[#f7f8fb]",
      tileText: "ZS",
    },
    {
      brand: "Business Orbit",
      subtitle: "Professional networking platform",
      quote:
        "Business Orbit helped me connect with professionals and opened new opportunities through structured networking.",
      author: "Tanu Sethi",
      phone: "+91 7988080907",
      tileClass: "from-[#f2f0ea] via-[#e8e3d7] to-[#cbc7bf]",
      tileTextColor: "text-[#111826]",
      tileText: "BO",
    },
    {
      brand: "Uniqus Edutech",
      subtitle: "A digital classroom platform",
      quote:
        "Uniqus transformed our online classes with smooth virtual sessions, easy resource sharing, and better student engagement.",
      author: "Abhay Kumar",
      phone: "+91 9041143830",
      tileClass: "from-[#180b1e] via-[#4d154a] to-[#dd6fa2]",
      tileTextColor: "text-[#f7f8fb]",
      tileText: "US",
    },
  ];

  const processSteps = [
    "Discovery & Planning",
    "Product Architecture",
    "Agile Development",
    "Testing & Optimization",
    "Deployment",
    "Long-Term Support",
  ];

  const topStats = [
    { value: "100+", label: "Startups Trusted Us" },
    { value: "50+", label: "Products Delivered" },
    { value: "6", label: "Live Platforms" },
    { value: "3+", label: "Years Building" },
  ];

  const topNavLinks = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Clients", href: "#clients" },
    { label: "Projects", href: "#work" },
  ];

  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <Preloader key="preloader" />}</AnimatePresence>
      <main className="hero-surface relative min-h-screen overflow-x-hidden text-[#f5f5f5]">
      <section className="relative mx-auto flex min-h-screen w-full max-w-350 flex-col px-5 pb-8 pt-0 sm:px-8 md:px-12 md:pb-10 md:pt-0">
        <div className="pointer-events-none absolute left-0 top-0 h-px w-[58%] bg-[#c79f2a]/90" />

        <header className="relative z-20 flex items-center justify-between gap-4 pt-0">
          <div className="shrink-0">
            <p className="font-(family-name:--font-geist-sans) text-[18px] font-semibold uppercase tracking-[0.06em] text-[#f3f3f3] sm:text-[22px]">
              Atior Technologies
            </p>
          </div>

          <nav
            className="hidden bg-transparent px-2 py-2 md:block"
            aria-label="Homepage sections"
          >
            <ul className="flex flex-nowrap items-center gap-4 overflow-x-auto whitespace-nowrap lg:gap-7">
              {topNavLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-(family-name:--font-geist-sans) text-[13px] font-semibold uppercase tracking-[0.06em] text-[#a8b1c4] transition-colors hover:text-[#e7ebf4] lg:text-[17px]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <AtiorLogo className="h-32 w-34" />
        </header>

        <div className="relative z-20 mt-10 max-w-167.5 sm:mt-14 md:mt-10 lg:mt-8">
          <h1 className="font-serif text-[clamp(2.6rem,8.8vw,5.6rem)] font-semibold leading-[0.92] text-[#f6f6f6]">
            Building <span className="text-[#cb9c27] italic">Scalable</span>
            <br />
            Digital Products
          </h1>

          <p className="mt-8 max-w-160 font-(family-name:--font-geist-sans) text-[12px] font-medium uppercase leading-[1.7] tracking-[0.07em] text-[#d7d7d7] sm:text-[13px] md:text-[14px]">
            We design and engineer SaaS platforms, automation systems, and AI-powered
            applications that help startups and growing businesses move faster and
            operate smarter.
          </p>
        </div>

        <div className="pointer-events-none absolute right-0 top-[20%] z-10 h-105 w-[44vw] min-w-70 max-w-140 md:right-4 md:top-[18%] lg:right-0 lg:top-[16%] lg:h-125">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
            priority={true}
          />
        </div>

        <footer className="relative z-20 mt-auto flex flex-col gap-5 pt-6 md:flex-row md:items-end md:justify-between md:pt-0">
          <p className="max-w-140 font-(family-name:--font-geist-sans) text-[14px] font-medium uppercase leading-tight tracking-[0.02em] text-[#ececec] sm:text-[17px]">
            Trusted by 100+ startups and growing businesses.
            <br />
            More than 50+ products successfully delivered and still counting
          </p>

          <div className="font-(family-name:--font-geist-sans) text-right text-[14px] leading-[1.65] text-[#ededed] sm:text-[20px] md:text-[18px]">
            <p>info@atiortechnologies.com</p>
            <p>www.atiortechnologies.com</p>
            <p>+91 7696834279, 7743096565</p>
          </div>
        </footer>

        <div className="relative z-20 mt-5 px-2 sm:px-3">
          <div className="h-px w-full bg-[#8a773e]/40" />
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 pb-3 pt-4 sm:grid-cols-4 md:gap-x-10 md:pb-4 md:pt-5">
            {topStats.map((stat) => (
              <article key={stat.label}>
                <p className="font-serif text-[38px] leading-none text-[#d8b35d] md:text-[42px]">
                  {stat.value}
                </p>
                <p className="mt-1.5 font-(family-name:--font-geist-sans) text-[12px] font-semibold leading-[1.05] text-[#a7afbf] md:text-[17px]">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-350 px-5 pb-14 pt-6 sm:px-8 md:px-12 md:pb-20 md:pt-8">
        <div className="relative overflow-hidden rounded-[28px] border border-[#474b53] bg-[#15181d]/88 p-6 shadow-[0_16px_70px_rgba(0,0,0,0.4)] sm:p-8 md:p-10">
          <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-[#8d9098]/40" />
          <div className="pointer-events-none absolute left-7 top-10 h-px w-[43%] bg-[#c79f2a]/90 md:left-10" />

          <header className="relative z-10 flex items-start justify-between gap-4">
            <div>
              <p className="text-center font-(family-name:--font-geist-sans) text-[14px] font-semibold uppercase tracking-[0.05em] text-[#efefef] md:text-[16px]">
                The Challenge
              </p>
              <h2 className="mt-2 font-serif text-[clamp(2rem,5vw,4rem)] font-semibold leading-[0.95] text-[#f3f3f3]">
                Why Most Tech Projects <span className="text-[#cb9c27] italic">Fail</span>
              </h2>
            </div>

            <AtiorLogo className="h-32 w-34" />
          </header>

          <div className="relative z-10 mt-8 grid gap-7 md:mt-10 md:grid-cols-2 md:gap-8">
            <article className="rounded-[22px] bg-[#d3a843] p-5 text-[#111216] sm:p-6 md:p-7">
              <h3 className="font-serif text-[clamp(1.7rem,2.5vw,2.4rem)] font-semibold leading-none">
                The Problem
              </h3>

              <ul className="mt-5 space-y-3.5 font-(family-name:--font-geist-sans) text-[13px] font-medium leading-[1.35] sm:text-[14px]">
                {problemPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#fb3a32]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="p-1 text-[#ececec] sm:p-2 md:p-0">
              <h3 className="font-serif text-[clamp(1.9rem,2.8vw,2.8rem)] font-semibold leading-none text-[#f0f0f0]">
                The Atior Difference
              </h3>

              <ul className="mt-6 space-y-3.5 font-(family-name:--font-geist-sans) text-[13px] font-medium leading-[1.35] text-[#d7d8dd] sm:text-[14px] md:pr-2">
                {differencePoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="mt-1.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#9ad44e] text-[10px] font-black leading-none text-[#14220a]">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="services" className="relative mx-auto w-full max-w-350 px-5 pb-16 pt-2 sm:px-8 md:px-12 md:pb-24 md:pt-2">
        <div className="relative overflow-hidden rounded-[28px] border border-[#474b53] bg-[#15181d]/88 p-6 shadow-[0_16px_70px_rgba(0,0,0,0.4)] sm:p-8 md:p-10">
          <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-[#8d9098]/40" />
          <div className="pointer-events-none absolute left-7 top-10 h-px w-[43%] bg-[#c79f2a]/90 md:left-10" />

          <header className="relative z-10 flex items-start justify-between gap-4">
            <div className="max-w-5xl">
              <p className="text-center font-(family-name:--font-geist-sans) text-[14px] font-semibold uppercase tracking-[0.05em] text-[#efefef] md:text-[16px]">
                What We Build
              </p>
              <h2 className="mt-1 font-serif text-[clamp(2.2rem,5.6vw,4.5rem)] font-semibold leading-[0.92] text-[#f3f3f3]">
                Our Core <span className="text-[#cb9c27] italic">Services</span>
              </h2>
              <p className="mt-2 max-w-280 font-(family-name:--font-geist-sans) text-[15px] leading-tight text-[#d5d8df] sm:text-[20px] md:text-[28px]">
                ATIOR is a company focused on building powerful digital solutions for
                businesses that want to grow faster and operate smarter.
              </p>
            </div>

            <AtiorLogo className="h-32 w-34" />
          </header>

          <div className="relative z-10 mt-7 grid gap-5 md:mt-8 md:grid-cols-3 md:gap-6">
            {coreServices.map((service) => (
              <article
                key={service.title}
                className="rounded-[8px] border border-[#1f2734] bg-[#09101d]/92 p-5"
              >
                <h3 className="font-(family-name:--font-geist-sans) text-[15px] font-semibold uppercase tracking-[0.02em] text-[#f2f2f2] sm:text-[17px] md:text-[20px]">
                  {service.title}
                </h3>

                <p className="mt-4 font-(family-name:--font-geist-sans) text-[14px] leading-[1.48] text-[#dce0e7] sm:text-[16px] md:text-[17px]">
                  {service.description}
                </p>

                <p className="mt-4 font-(family-name:--font-geist-sans) text-[14px] uppercase leading-[1.42] tracking-[0.02em] text-[#eceff5] sm:text-[16px] md:text-[17px]">
                  {service.proof}
                </p>

                <div className="mt-5 space-y-2.5">
                  {service.tags.map((tag) => (
                    <p
                      key={tag}
                      className="rounded-full bg-[#cfaa45] px-4 py-2 text-center font-(family-name:--font-geist-sans) text-[13px] font-semibold leading-none text-[#111217] sm:text-[14px] md:text-[17px]"
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="relative mx-auto w-full max-w-350 px-5 pb-14 pt-1 sm:px-8 md:px-12 md:pb-18 md:pt-1">
        <div className="relative overflow-hidden rounded-[28px] border border-[#d1cdc2] bg-[#efede8] p-6 text-[#131417] shadow-[0_16px_56px_rgba(0,0,0,0.28)] sm:p-8 md:p-10">
          <div className="pointer-events-none absolute inset-0 opacity-70 [background:repeating-linear-gradient(150deg,rgba(120,110,90,0.05)_0px,rgba(120,110,90,0.05)_2px,transparent_2px,transparent_10px)]" />
          <div className="pointer-events-none absolute left-6 top-11 h-px w-[43%] bg-[#c79f2a]/85 md:left-10" />

          <header className="relative z-10 flex justify-center">
            <p className="font-(family-name:--font-geist-sans) text-[14px] font-semibold uppercase tracking-[0.03em] text-[#1a1b1f] md:text-[16px]">
              Our Work
            </p>
          </header>

          <div className="relative z-10 mt-4 grid gap-8 md:mt-5 md:grid-cols-[0.95fr_1.45fr] md:gap-9">
            <div>
              <h2 className="font-serif text-[clamp(2.2rem,5vw,4.6rem)] font-semibold leading-[0.92] text-[#121316]">
                Products We&apos;ve
                <br />
                <span className="text-[#cb9c27] italic">Built</span>
              </h2>

              <div className="mt-5 h-62 w-58 md:mt-7 md:h-74 md:w-66">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="h-full w-full"
                />
              </div>
            </div>

            <div className="relative">
              <p className="max-w-230 font-(family-name:--font-geist-sans) text-[15px] leading-[1.18] text-[#17181b] sm:text-[17px] md:text-[21px]">
                We have an experience to design and build digital platforms that solve
                real-world problems and support growing businesses and communities.
              </p>

              <ul className="mt-4 space-y-2.5 md:mt-5 md:space-y-3">
                {productBuilds.map((item) => (
                  <li key={item.name} className="border-b border-[#15171b]/85 pb-1.5 md:pb-2">
                    <div className="flex flex-col gap-1.5 md:flex-row md:items-end md:justify-between md:gap-4">
                      <div>
                        <p className="font-(family-name:--font-geist-sans) text-[15px] font-semibold uppercase leading-none text-[#101216] sm:text-[17px] md:text-[21px]">
                          {item.name}
                        </p>
                        <p className="mt-1 font-(family-name:--font-geist-sans) text-[12px] uppercase leading-none tracking-[0.01em] text-[#393d45] sm:text-[13px] md:text-[16px]">
                          {item.subtitle}
                        </p>
                      </div>
                      <p className="font-(family-name:--font-geist-sans) text-[12px] uppercase leading-none text-[#23262c] sm:text-[13px] md:text-[17px]">
                        {item.url}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-(family-name:--font-geist-sans) text-[10px] uppercase tracking-[0.02em] text-[#202329] sm:text-[11px] md:text-[14px]">
                <span>30+ Projects Successfully Delivered</span>
                <span>Digital Product Development</span>
                <span>Custom Software Solutions</span>
                <span>Business Automation Systems</span>
                <span>Scalable Web and App Platforms</span>
              </p>

              <p className="pointer-events-none absolute bottom-2 left-8 hidden font-serif text-[96px] leading-none text-[#989084]/30 md:block md:text-[128px]">
                ATIOR
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-350 px-5 pb-20 pt-1 sm:px-8 md:px-12 md:pb-24 md:pt-1">
        <div className="relative overflow-hidden rounded-[28px] border border-[#474b53] bg-[#15181d]/88 p-6 shadow-[0_16px_70px_rgba(0,0,0,0.4)] sm:p-8 md:p-10">
          <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-[#8d9098]/40" />
          <div className="pointer-events-none absolute left-7 top-10 h-px w-[43%] bg-[#c79f2a]/90 md:left-10" />

          <header className="relative z-10 flex items-start justify-between gap-4">
            <div>
              <p className="text-center font-(family-name:--font-geist-sans) text-[14px] font-semibold uppercase tracking-[0.05em] text-[#efefef] md:text-[16px]">
                Our Work
              </p>
              <h2 className="mt-1 font-serif text-[clamp(2.3rem,5.8vw,4.7rem)] font-semibold leading-[0.9] text-[#f3f3f3]">
                Custom <span className="text-[#cb9c27] italic">AI</span>
                <br />
                Solutions
              </h2>
            </div>

            <AtiorLogo className="h-32 w-34" />
          </header>

          <div className="relative z-10 mt-7 grid gap-4 md:mt-8 md:grid-cols-4 md:gap-4">
            {aiProjects.map((item) => (
              <article key={item.title} className="rounded-[8px] border border-[#1f2734] bg-[#09101d]/92 p-4">
                <h3 className="font-(family-name:--font-geist-sans) text-[15px] font-semibold uppercase leading-[1.05] text-[#f2f2f2] sm:text-[16px] md:text-[20px]">
                  {item.title}
                </h3>

                <p className="mt-3 font-(family-name:--font-geist-sans) text-[13px] leading-[1.28] text-[#dce0e7] sm:text-[14px] md:text-[17px]">
                  {item.description}
                </p>

                <p className="mt-4 font-(family-name:--font-geist-sans) text-[12px] font-medium uppercase leading-[1.15] tracking-[0.01em] text-[#eceff5] sm:text-[13px] md:text-[17px]">
                  {item.proof}
                </p>

                <p className="mt-4 rounded-full bg-[#cfaa45] px-4 py-2 text-center font-(family-name:--font-geist-sans) text-[12px] font-semibold uppercase leading-none text-[#111217] sm:text-[13px] md:text-[17px]">
                  {item.chip}
                </p>
              </article>
            ))}
          </div>

          <div className="relative z-10 mt-6 flex flex-col gap-4 md:mt-7 md:flex-row md:items-end md:justify-between">
            <p className="max-w-300 font-(family-name:--font-geist-sans) text-[14px] leading-[1.35] text-[#d5d8df] sm:text-[16px] md:text-[30px]">
              Our team combines product thinking with technical expertise, allowing us
              to develop both independent digital platforms and customized business
              solutions. From startups launching new products to businesses seeking
              operational efficiency, we focus on building scalable, reliable, and
              user-focused technology systems.
            </p>

            <div className="h-24 w-20 self-end md:h-30 md:w-24">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="relative mx-auto w-full max-w-350 px-5 pb-14 pt-1 sm:px-8 md:px-12 md:pb-18 md:pt-1">
        <div className="relative overflow-hidden rounded-[28px] border border-[#474b53] bg-[#15181d]/88 p-6 shadow-[0_16px_70px_rgba(0,0,0,0.4)] sm:p-8 md:p-10">
          <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-[#8d9098]/40" />
          <div className="pointer-events-none absolute left-7 top-10 h-px w-[43%] bg-[#c79f2a]/90 md:left-10" />

          <header className="relative z-10 flex items-start justify-between gap-4">
            <div>
              <p className="text-center font-(family-name:--font-geist-sans) text-[14px] font-semibold uppercase tracking-[0.05em] text-[#efefef] md:text-[16px]">
                Client Voice
              </p>
              <h2 className="mt-1 font-serif text-[clamp(2.2rem,5.6vw,4.6rem)] font-semibold leading-[0.92] text-[#f3f3f3]">
                What Our <span className="text-[#cb9c27] italic">Clients</span> Say
              </h2>
            </div>

            <AtiorLogo className="h-32 w-34" />
          </header>

          <div className="relative z-10 mt-7 overflow-hidden rounded-[14px] border border-[#2e3440]">
            {clientVoices.map((item) => (
              <article
                key={item.brand}
                className="grid gap-4 border-b border-[#c79f2a]/70 bg-[#161b24] p-4 last:border-b-0 md:grid-cols-[220px_1fr_1.35fr] md:items-center md:px-5 md:py-4"
              >
                <div
                  className={`relative flex h-24 items-center justify-center rounded-[14px] bg-linear-to-br ${item.tileClass} font-(family-name:--font-geist-sans) text-[54px] font-black leading-none tracking-[0.02em] ${item.tileTextColor}`}
                >
                  <span className="pointer-events-none absolute inset-0 rounded-[14px] ring-1 ring-inset ring-[#f3f6ff]/16" />
                  {item.tileText}
                </div>

                <div>
                  <p className="font-(family-name:--font-geist-sans) text-[18px] font-bold uppercase leading-none text-[#f1f2f5] md:text-[30px]">
                    {item.brand}
                  </p>
                  <p className="mt-1 font-(family-name:--font-geist-sans) text-[12px] uppercase leading-none text-[#aab1bf] md:text-[16px]">
                    {item.subtitle}
                  </p>
                </div>

                <div className="text-left md:text-right">
                  <p className="font-(family-name:--font-geist-sans) text-[13px] leading-[1.22] text-[#e1e3e9] md:text-[21px]">
                    {item.quote}
                  </p>
                  <p className="mt-2 font-(family-name:--font-geist-sans) text-[12px] uppercase leading-none text-[#d2d6df] md:text-[17px]">
                    -{item.author} <span className="ml-2 font-semibold">{item.phone}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="relative mx-auto w-full max-w-350 px-5 pb-20 pt-1 sm:px-8 md:px-12 md:pb-24 md:pt-1">
        <div className="relative overflow-hidden rounded-[28px] border border-[#d1cdc2] bg-[#efede8] p-6 text-[#131417] shadow-[0_16px_56px_rgba(0,0,0,0.28)] sm:p-8 md:p-10">
          <div className="pointer-events-none absolute inset-0 opacity-70 [background:repeating-linear-gradient(150deg,rgba(120,110,90,0.05)_0px,rgba(120,110,90,0.05)_2px,transparent_2px,transparent_10px)]" />

          <header className="relative z-10 border-b border-[#1a1c21]/70 pb-1 text-center">
            <p className="font-(family-name:--font-geist-sans) text-[14px] font-semibold uppercase tracking-[0.05em] text-[#17191d] md:text-[16px]">
              How We Work
            </p>
          </header>

          <div className="relative z-10 mt-6 min-h-130 md:min-h-175">
            <p className="pointer-events-none absolute left-1/2 top-[52%] hidden -translate-x-1/2 -translate-y-1/2 font-serif text-[170px] leading-none text-[#979084]/20 md:block">
              ATIOR
            </p>

            <div className="space-y-4 md:hidden">
              {processSteps.map((step, index) => (
                <div key={step} className="relative">
                  <p className="mb-1 font-(family-name:--font-geist-sans) text-[12px] font-bold uppercase text-[#111318]">
                    Step {index + 1}
                  </p>
                  <div className="rounded-[14px] border-[3px] border-[#1e232d] bg-[#eceae4] px-4 py-2.5 font-(family-name:--font-geist-sans) text-[14px] font-medium uppercase text-[#20242c]">
                    {step}
                  </div>
                </div>
              ))}
              <p className="pt-2 text-right font-(family-name:--font-geist-sans) text-[28px] uppercase leading-[0.95] text-[#15181d]">
                Clients trust companies with
                <span className="font-black italic"> structured processes.</span>
              </p>
            </div>

            <div className="relative hidden md:block h-148">
              <p className="absolute right-0 top-2 text-right font-(family-name:--font-geist-sans) text-[58px] uppercase leading-[0.9] text-[#15181d]">
                Clients trust
                <br />
                companies with
                <br />
                <span className="font-black italic">structured</span>
                <br />
                <span className="font-black italic">processes.</span>
              </p>

              {[
                { top: 18, left: 58, step: "Step 1", title: "Discovery & Planning" },
                { top: 88, left: 218, step: "Step 2", title: "Product Architecture" },
                { top: 158, left: 378, step: "Step 3", title: "Agile Development" },
                { top: 228, left: 538, step: "Step 4", title: "Testing & Optimization" },
                { top: 298, left: 698, step: "Step 5", title: "Deployment" },
                { top: 368, left: 858, step: "Step 6", title: "Long-Term Support" },
              ].map((item, index, arr) => (
                <div key={item.title} className="absolute" style={{ top: `${item.top}px`, left: `${item.left}px` }}>
                  <p className="mb-1 ml-2 font-(family-name:--font-geist-sans) text-[12px] font-bold uppercase text-[#111318]">
                    {item.step}
                  </p>
                  <div className="relative w-100 rounded-2xl border-[3px] border-[#1e232d] bg-[#eceae4] px-5 py-2.5 text-center font-(family-name:--font-geist-sans) text-[17px] font-medium uppercase text-[#20242c]">
                    {item.title}
                    {index < arr.length - 1 && (
                      <>
                        <span className="absolute -right-11 top-1/2 h-0.75 w-11 -translate-y-1/2 bg-[#1e232d]" />
                        <span className="absolute -right-11 top-1/2 h-11 w-0.75 bg-[#1e232d]" />
                      </>
                    )}
                  </div>
                </div>
              ))}

              <h3 className="absolute bottom-0 left-0 font-serif text-[108px] font-semibold uppercase leading-[0.84] text-[#0e1117]">
                Our
                <br />
                Process
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-350 px-5 pb-20 pt-1 sm:px-8 md:px-12 md:pb-28 md:pt-1">
        <div className="relative overflow-hidden rounded-[28px] border border-[#474b53] bg-[#15181d]/88 p-6 shadow-[0_16px_70px_rgba(0,0,0,0.4)] sm:p-8 md:p-10">
          <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-[#8d9098]/40" />
          <div className="pointer-events-none absolute left-7 top-10 h-px w-[43%] bg-[#c79f2a]/90 md:left-10" />

          <header className="relative z-10 flex items-start justify-between gap-4">
            <div>
              <p className="text-center font-(family-name:--font-geist-sans) text-[14px] font-semibold uppercase tracking-[0.05em] text-[#efefef] md:text-[16px]">
                Ready to Build?
              </p>
              <h2 className="mt-1 font-serif text-[clamp(2.3rem,5.8vw,4.8rem)] font-semibold leading-[0.9] text-[#f3f3f3]">
                Let&apos;s Build Something <span className="text-[#cb9c27] italic">Exceptional</span>
              </h2>
              <p className="mt-4 max-w-270 font-(family-name:--font-geist-sans) text-[13px] uppercase leading-[1.45] text-[#dadce1] md:text-[17px]">
                If you&apos;re building a SaaS product, automation system, or digital
                platform, we would love to collaborate.
                <br />
                Our team of 15+ enthusiastic developers would very much happy to solve
                the problem with you.
              </p>
            </div>

            <AtiorLogo className="h-32 w-34" />
          </header>

          <div className="relative z-10 mt-8 grid items-end gap-6 md:mt-10 md:grid-cols-[0.9fr_1.1fr]">
            <div className="h-68 w-56 md:h-84 md:w-68">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="h-full w-full"
              />
            </div>

            <div className="pb-2 text-left md:text-right">
              <p className="font-(family-name:--font-geist-sans) text-[16px] leading-[1.45] text-[#e5e6ea] md:text-[30px]">
                info@atiortechnologies.com
                <br />
                www.atiortechnologies.com
              </p>
              <p className="mt-3 font-(family-name:--font-geist-sans) text-[18px] leading-none text-[#d7d9df] md:text-[34px]">
                +91 7696834279, 7743096565
              </p>
              <p className="mt-4 font-(family-name:--font-geist-sans) text-[32px] font-black uppercase leading-none text-[#f0f1f3] md:text-[58px]">
                Greetings.
              </p>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
