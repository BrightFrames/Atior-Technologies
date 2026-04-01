"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import AtiorLogo from "@/components/ui/AtiorLogo";
import Preloader from "@/components/ui/Preloader";
import { SplineScene } from "@/components/ui/splite";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState<"all" | "saas" | "ai" | "custom">("all");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileNavOpen(false);
      }
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>(".reveal");
    const pendingTimeouts = new Set<number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const siblings = Array.from(
            entry.target.parentElement?.querySelectorAll<HTMLElement>(".reveal:not(.visible)") ?? [],
          );
          const index = siblings.indexOf(entry.target as HTMLElement);
          const timeoutId = window.setTimeout(() => {
            (entry.target as HTMLElement).classList.add("visible");
          }, Math.max(index, 0) * 80);

          pendingTimeouts.add(timeoutId);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      pendingTimeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
      observer.disconnect();
    };
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

  const projectBlocks = [
    {
      category: "saas",
      categoryLabel: "SaaS Platform",
      name: "Business Orbit",
      description:
        "A professional networking platform reimagined with structured connections, community features, and business growth tools for founders and professionals.",
      status: "Live",
      statusClass: "status-live",
      link: "https://www.businessorbit.org",
      linkLabel: "businessorbit.org ↗",
      icon: "🌐",
      thumbClass: "from-[#1a2a49] via-[#101a2f] to-[#060c18]",
    },
    {
      category: "saas",
      categoryLabel: "B2B Marketplace",
      name: "ZeeroStock",
      description:
        "A B2B excess inventory marketplace that lets businesses sell surplus stock efficiently with real-time tracking, automated listings, and seamless buyer-seller workflows.",
      status: "Live",
      statusClass: "status-live",
      link: "https://www.zeerostock.com",
      linkLabel: "zeerostock.com ↗",
      icon: "📦",
      thumbClass: "from-[#15263f] via-[#101a2f] to-[#060c18]",
    },
    {
      category: "saas",
      categoryLabel: "Travel Platform",
      name: "VillageStay",
      description:
        "A curated travel platform connecting urban explorers with authentic rural homestays across India, complete with host management, booking flows, and traveller profiles.",
      status: "Live",
      statusClass: "status-live",
      link: "https://www.villagestay.me",
      linkLabel: "villagestay.me ↗",
      icon: "🏡",
      thumbClass: "from-[#1a2f52] via-[#101a2f] to-[#060c18]",
    },
    {
      category: "saas",
      categoryLabel: "Event Platform",
      name: "Startup Mela",
      description:
        "An event discovery and management platform purpose-built for the startup ecosystem with speaker profiles, ticketing, RSVP flows, and networking tools.",
      status: "Live",
      statusClass: "status-live",
      link: "https://www.startupmela.com",
      linkLabel: "startupmela.com ↗",
      icon: "🎪",
      thumbClass: "from-[#1d2740] via-[#101a2f] to-[#060c18]",
    },
    {
      category: "ai",
      categoryLabel: "AI Automation",
      name: "AI Outreach Agent",
      description:
        "An intelligent lead identification and outreach automation system that scrapes intent signals, enriches prospect data, and manages personalized sequences at scale.",
      status: "Delivered",
      statusClass: "status-delivered",
      link: "#cta",
      linkLabel: "Request details ↗",
      icon: "🎯",
      thumbClass: "from-[#18263f] via-[#101a2f] to-[#060c18]",
    },
    {
      category: "ai",
      categoryLabel: "AI Application",
      name: "AI Hiring Management",
      description:
        "A recruitment platform with AI-assisted resume screening, candidate scoring, automated interview scheduling, and structured workflow management.",
      status: "Delivered",
      statusClass: "status-delivered",
      link: "#cta",
      linkLabel: "Request details ↗",
      icon: "🧠",
      thumbClass: "from-[#18263f] via-[#101a2f] to-[#060c18]",
    },
    {
      category: "custom",
      categoryLabel: "Custom Solution",
      name: "Restaurant Management",
      description:
        "An end-to-end digital operations platform for restaurant chains with table management, POS integration, kitchen display, inventory alerts, and staff scheduling.",
      status: "Delivered",
      statusClass: "status-delivered",
      link: "#cta",
      linkLabel: "Request details ↗",
      icon: "🍽️",
      thumbClass: "from-[#18263f] via-[#101a2f] to-[#060c18]",
    },
    {
      category: "custom",
      categoryLabel: "EdTech Platform",
      name: "Uniqus EduTech",
      description:
        "A digital classroom platform enabling live virtual sessions, resource libraries, assignment workflows, and student engagement analytics for coaching institutes.",
      status: "Live",
      statusClass: "status-live",
      link: "#cta",
      linkLabel: "Request details ↗",
      icon: "🎓",
      thumbClass: "from-[#18263f] via-[#101a2f] to-[#060c18]",
    },
  ];

  const visibleProjectBlocks =
    projectFilter === "all"
      ? projectBlocks
      : projectBlocks.filter((project) => project.category === projectFilter);

  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <Preloader key="preloader" />}</AnimatePresence>
      <main className="hero-surface relative min-h-screen overflow-x-hidden text-[#f5f5f5]">
      <section className="relative mx-auto flex min-h-svh w-full max-w-350 flex-col px-4 pb-8 pt-0 sm:px-8 md:min-h-screen md:px-12 md:pb-10 md:pt-0">
        <div className="pointer-events-none absolute left-0 top-0 h-px w-[58%] bg-[#c79f2a]/90" />

        <header className="relative z-20 flex flex-wrap items-center justify-between gap-3 pt-0 md:flex-nowrap md:gap-4">
          <div className="shrink-0">
            <p className="font-(family-name:--font-geist-sans) text-[18px] font-semibold uppercase tracking-[0.06em] text-[#f3f3f3] sm:text-[22px]">
              Atior Technologies
            </p>
          </div>

          <nav className="order-3 w-full bg-transparent md:order-2 md:w-auto" aria-label="Homepage sections">
            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-300 md:overflow-visible ${
                isMobileNavOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
              }`}
            >
              <ul
                id="mobile-top-nav"
                className="mt-2 flex flex-col gap-3 rounded-xl border border-[#2a2f39] bg-[#0f141d]/95 px-4 py-4 md:mt-0 md:flex-row md:items-center md:gap-4 md:overflow-x-auto md:whitespace-nowrap md:rounded-none md:border-0 md:bg-transparent md:px-2 md:py-2 lg:gap-7"
              >
                {topNavLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block py-1 font-(family-name:--font-geist-sans) text-[13px] font-semibold uppercase tracking-[0.06em] text-[#a8b1c4] transition-colors hover:text-[#e7ebf4] lg:text-[17px]"
                      onClick={() => setIsMobileNavOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="order-2 flex items-center gap-3 md:order-3">
            <button
              type="button"
              className="inline-flex items-center rounded-full border border-[#3c4350] px-3 py-1.5 font-(family-name:--font-geist-sans) text-[11px] font-semibold uppercase tracking-[0.08em] text-[#dce1eb] transition-colors hover:border-[#c79f2a] hover:text-[#f3f3f3] md:hidden"
              aria-expanded={isMobileNavOpen}
              aria-controls="mobile-top-nav"
              aria-label="Toggle navigation menu"
              onClick={() => setIsMobileNavOpen((prev) => !prev)}
            >
              {isMobileNavOpen ? "Close" : "Menu"}
            </button>
            <AtiorLogo className="h-14 w-16 sm:h-20 sm:w-22 md:h-32 md:w-34" />
          </div>
        </header>

        <div className="relative z-20 mt-9 max-w-167.5 sm:mt-14 md:mt-10 lg:mt-8">
          <h1 className="font-serif text-[clamp(2.6rem,8.8vw,5.6rem)] font-semibold leading-[0.92] text-[#f6f6f6]">
            Building <span className="text-[#cb9c27] italic">Scalable</span>
            <br />
            Digital Products
          </h1>

          <p className="mt-6 max-w-170 font-(family-name:--font-geist-sans) text-[11px] font-medium uppercase leading-[1.7] tracking-[0.07em] text-[#d7d7d7] sm:mt-8 sm:text-[13px] md:max-w-160 md:text-[14px]">
            We design and engineer SaaS platforms, automation systems, and AI-powered
            applications that help startups and growing businesses move faster and
            operate smarter.
          </p>
        </div>

        <div className="relative z-10 mt-8 h-88 w-full sm:h-96 md:h-112 lg:absolute lg:right-0 lg:top-[15%] lg:mt-0 lg:h-125 lg:w-[44vw] lg:min-w-70 lg:max-w-140">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
          />
        </div>

        <footer className="relative z-20 mt-7 flex flex-col gap-5 pt-1 sm:mt-9 md:mt-auto md:flex-row md:items-end md:justify-between md:pt-0">
          <p className="max-w-160 font-(family-name:--font-geist-sans) text-[13px] font-medium uppercase leading-tight tracking-[0.02em] text-[#ececec] sm:text-[17px] md:max-w-140">
            Trusted by 100+ startups and growing businesses.
            <br />
            More than 50+ products successfully delivered and still counting
          </p>

          <div className="font-(family-name:--font-geist-sans) text-left text-[13px] leading-[1.65] text-[#ededed] sm:text-[18px] md:text-right md:text-[18px]">
            <p>info@atiortechnologies.com</p>
            <p>www.atiortechnologies.com</p>
            <p>+91 7696834279, 7743096565</p>
          </div>
        </footer>

        <div className="relative z-20 mt-5 px-1 sm:px-3">
          <div className="h-px w-full bg-[#8a773e]/40" />
          <div className="grid grid-cols-2 gap-x-4 gap-y-4 pb-3 pt-4 sm:grid-cols-4 sm:gap-x-8 md:gap-x-10 md:pb-4 md:pt-5">
            {topStats.map((stat) => (
              <article key={stat.label}>
                <p className="font-serif text-[34px] leading-none text-[#d8b35d] sm:text-[38px] md:text-[42px]">
                  {stat.value}
                </p>
                <p className="mt-1.5 font-(family-name:--font-geist-sans) text-[11px] font-semibold leading-[1.05] text-[#a7afbf] sm:text-[12px] md:text-[17px]">
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

          <header className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-4">
            <div>
              <p className="text-center font-(family-name:--font-geist-sans) text-[14px] font-semibold uppercase tracking-[0.05em] text-[#efefef] md:text-[16px]">
                The Challenge
              </p>
              <h2 className="mt-2 font-serif text-[clamp(2rem,5vw,4rem)] font-semibold leading-[0.95] text-[#f3f3f3]">
                Why Most Tech Projects <span className="text-[#cb9c27] italic">Fail</span>
              </h2>
            </div>

            <AtiorLogo className="h-24 w-26 sm:h-28 sm:w-30 lg:h-32 lg:w-34" />
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

          <header className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-4">
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

            <AtiorLogo className="h-24 w-26 sm:h-28 sm:w-30 lg:h-32 lg:w-34" />
          </header>

          <div className="relative z-10 mt-7 grid gap-5 md:mt-8 lg:grid-cols-3 md:gap-6">
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
        <div className="relative overflow-hidden rounded-[28px] border border-[#474b53] bg-[#15181d]/88 p-6 text-[#f3f3f3] shadow-[0_16px_70px_rgba(0,0,0,0.4)] sm:p-8 md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_0%,rgba(212,168,67,0.12),transparent_26%),radial-gradient(circle_at_84%_12%,rgba(74,122,170,0.11),transparent_22%),linear-gradient(180deg,rgba(8,12,20,0.2),rgba(8,12,20,0.6))]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#8d9098]/40" />

          <div className="relative z-10 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-10">
            <div>
              <h2 className="font-serif text-[clamp(3.1rem,6vw,5.9rem)] font-semibold leading-[0.88] text-[#f4f0e7] md:text-[clamp(3.6rem,5vw,6.8rem)]">
                Products
                <br />
                We&apos;ve
                <br />
                <span className="text-[#d4a843] italic">Built</span>
              </h2>
            </div>

            <div className="lg:pt-2">
              <p className="max-w-270 font-(family-name:--font-geist-sans) text-[15px] leading-[1.42] text-[#c4ccda] sm:text-[17px] md:text-[21px]">
                A selection of platforms, tools, and systems we&apos;ve designed,
                engineered, and launched for clients and our own ventures.
              </p>

              <div className="projects-filter mt-8 flex flex-wrap gap-2.5">
                {[
                  { label: "All Projects", value: "all" as const },
                  { label: "SaaS Platforms", value: "saas" as const },
                  { label: "AI & Automation", value: "ai" as const },
                  { label: "Custom Solutions", value: "custom" as const },
                ].map((filter) => (
                  <button
                    key={filter.value}
                    type="button"
                    className={`filter-btn ${projectFilter === filter.value ? "active" : ""}`}
                    aria-pressed={projectFilter === filter.value}
                    onClick={() => setProjectFilter(filter.value)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="mt-2 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {visibleProjectBlocks.map((project) => (
                  <article
                    key={project.name}
                    className="overflow-hidden rounded-[20px] border border-[#2e3440] bg-[#161b24] shadow-[0_16px_50px_rgba(0,0,0,0.22)]"
                  >
                    <div className={`relative flex h-36 items-center justify-center bg-linear-to-b ${project.thumbClass} text-[#f7f8fb]`}>
                      <span className="pointer-events-none absolute inset-0 rounded-t-[20px] ring-1 ring-inset ring-[#f3f6ff]/12" />
                      <span className="text-[56px] leading-none">{project.icon}</span>
                    </div>

                    <div className="flex min-h-74 flex-col p-5">
                      <p className="font-(family-name:--font-geist-sans) text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d4a843]">
                        {project.categoryLabel}
                      </p>
                      <h3 className="mt-3 font-serif text-[24px] font-semibold leading-[1.02] text-[#f4f0e7]">
                        {project.name}
                      </h3>
                      <p className="mt-4 font-(family-name:--font-geist-sans) text-[14px] leading-[1.55] text-[#cbd2df]">
                        {project.description}
                      </p>

                      <div className="mt-auto flex items-end justify-between gap-3 pt-6">
                        <span className={`project-status ${project.statusClass}`}>
                          {project.status}
                        </span>
                        <a
                          href={project.link}
                          target={project.link.startsWith("http") ? "_blank" : undefined}
                          rel={project.link.startsWith("http") ? "noreferrer" : undefined}
                          className="project-link"
                        >
                          {project.linkLabel}
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-(family-name:--font-geist-sans) text-[10px] uppercase tracking-[0.02em] text-[#8e98a8] sm:text-[11px] md:text-[14px]">
                <span>30+ Projects Successfully Delivered</span>
                <span>Digital Product Development</span>
                <span>Custom Software Solutions</span>
                <span>Business Automation Systems</span>
                <span>Scalable Web and App Platforms</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="relative mx-auto w-full max-w-350 px-5 pb-14 pt-1 sm:px-8 md:px-12 md:pb-18 md:pt-1">
        <div className="relative overflow-hidden rounded-[28px] border border-[#474b53] bg-[#15181d]/88 p-6 shadow-[0_16px_70px_rgba(0,0,0,0.4)] sm:p-8 md:p-10 reveal">
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
        <div className="relative overflow-hidden rounded-[28px] border border-[#1f2734] bg-[#090f1a] p-6 text-[#f3f3f3] shadow-[0_16px_70px_rgba(0,0,0,0.4)] sm:p-8 md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(212,168,67,0.08),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(74,122,170,0.08),transparent_24%),linear-gradient(180deg,rgba(8,12,20,0.16),rgba(8,12,20,0.56))]" />

          <header className="relative z-10 border-b border-[#2f3747] pb-1 text-center">
            <p className="font-(family-name:--font-geist-sans) text-[14px] font-semibold uppercase tracking-[0.14em] text-[#d4a843] md:text-[16px]">
              How We Work
            </p>
          </header>

          <div className="relative z-10 mt-6 min-h-160 lg:min-h-175">
            <p className="pointer-events-none absolute left-1/2 top-[52%] hidden -translate-x-1/2 -translate-y-1/2 font-serif text-[170px] leading-none text-[#d4a843]/10 md:block">
              ATIOR
            </p>

            <div className="space-y-4 lg:hidden">
              {processSteps.map((step, index) => (
                <div key={step} className="relative">
                  <p className="mb-1 font-(family-name:--font-geist-sans) text-[12px] font-bold uppercase text-[#d4a843]">
                    Step {index + 1}
                  </p>
                  <div className="rounded-[14px] border border-[#2d3951] bg-[#101827] px-4 py-2.5 font-(family-name:--font-geist-sans) text-[14px] font-medium uppercase text-[#e7ebf2]">
                    {step}
                  </div>
                </div>
              ))}
              <p className="pt-2 text-right font-(family-name:--font-geist-sans) text-[28px] uppercase leading-[0.95] text-[#e7ebf2]">
                Clients trust companies with
                <span className="font-black italic"> structured processes.</span>
              </p>
            </div>

            <div className="relative hidden lg:block h-160">
              <p className="absolute right-0 top-2 text-right font-(family-name:--font-geist-sans) text-[58px] uppercase leading-[0.9] text-[#e7ebf2]">
                Clients trust
                <br />
                companies with
                <br />
                <span className="font-black italic">structured</span>
                <br />
                <span className="font-black italic">processes.</span>
              </p>

              {[
                { top: 34, left: 58, step: "Step 1", title: "Discovery & Planning" },
                { top: 104, left: 218, step: "Step 2", title: "Product Architecture" },
                { top: 174, left: 378, step: "Step 3", title: "Agile Development" },
                { top: 244, left: 538, step: "Step 4", title: "Testing & Optimization" },
                { top: 314, left: 698, step: "Step 5", title: "Deployment" },
                { top: 384, left: 858, step: "Step 6", title: "Long-Term Support" },
              ].map((item, index, arr) => (
                <div key={item.title} className="absolute" style={{ top: `${item.top}px`, left: `${item.left}px` }}>
                  <p className="mb-1 ml-2 font-(family-name:--font-geist-sans) text-[12px] font-bold uppercase text-[#d4a843]">
                    {item.step}
                  </p>
                  <div className="relative w-100 rounded-2xl border border-[#2d3951] bg-[#101827] px-5 py-2.5 text-center font-(family-name:--font-geist-sans) text-[17px] font-medium uppercase text-[#e7ebf2]">
                    {item.title}
                    {index < arr.length - 1 && (
                      <>
                        <span className="absolute -right-11 top-1/2 h-0.75 w-11 -translate-y-1/2 bg-[#d4a843]/60" />
                        <span className="absolute -right-11 top-1/2 h-11 w-0.75 bg-[#d4a843]/60" />
                      </>
                    )}
                  </div>
                </div>
              ))}

              <h3 className="absolute bottom-0 left-0 font-serif text-[108px] font-semibold uppercase leading-[0.84] text-[#d4a843]/10">
                Our
                <br />
                Process
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-350 px-5 pb-20 pt-1 sm:px-8 md:px-12 md:pb-28 md:pt-1">
        <div className="relative overflow-hidden rounded-[28px] border border-[#474b53] bg-[#15181d]/88 px-6 py-14 text-center shadow-[0_16px_70px_rgba(0,0,0,0.4)] sm:px-8 sm:py-16 md:px-10 md:py-18">
          <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-[#8d9098]/40" />
          <div className="pointer-events-none absolute left-1/2 top-10 h-px w-[43%] -translate-x-1/2 bg-[#c79f2a]/90" />

          <div className="relative z-10 mx-auto flex max-w-280 flex-col items-center">
            <p className="font-(family-name:--font-geist-sans) text-[13px] font-semibold uppercase tracking-[0.28em] text-[#d4a843] sm:text-[14px]">
              Ready to Build?
            </p>

            <h2 className="mt-5 font-serif text-[clamp(2.6rem,6vw,5.5rem)] font-semibold leading-[0.88] text-[#f3f3f3] sm:mt-6">
              Let&apos;s Build Something
              <br />
              <span className="text-[#d4a843] italic">Exceptional</span>
            </h2>

            <p className="mt-6 max-w-220 font-(family-name:--font-geist-sans) text-[14px] leading-[1.55] text-[#cfd4dc] sm:text-[16px] md:text-[18px]">
              If you&apos;re building a SaaS product, automation system, or want to bring an AI-powered idea to life — we&apos;d love to be your technology partner.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
              <a
                href="#cta"
                className="inline-flex min-w-62 items-center justify-center gap-3 rounded-full bg-[#f0cc75] px-7 py-4 font-(family-name:--font-geist-sans) text-[14px] font-semibold uppercase tracking-widest text-[#111217] transition-transform hover:-translate-y-0.5"
              >
                Start a Conversation
                <span aria-hidden="true" className="text-[18px] leading-none">
                  →
                </span>
              </a>

              <a
                href="tel:+917696834279"
                className="font-(family-name:--font-geist-sans) text-[14px] font-semibold uppercase tracking-[0.06em] text-[#aab1bf] transition-colors hover:text-[#f3f3f3]"
              >
                Call Us Directly
              </a>
            </div>

            <div className="mt-12 grid w-full gap-6 border-t border-[#8d9098]/25 pt-6 sm:grid-cols-3 sm:gap-4 md:mt-14 md:pt-7">
              {[
                { label: "Email", value: "info@atiortechnologies.com" },
                { label: "Phone", value: "+91 7696834279" },
                { label: "Website", value: "atiortechnologies.com" },
              ].map((item) => (
                <div key={item.label} className="space-y-2">
                  <p className="font-(family-name:--font-geist-sans) text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d4a843] sm:text-[12px]">
                    {item.label}
                  </p>
                  <p className="font-(family-name:--font-geist-sans) text-[14px] leading-none text-[#e7ebf2] sm:text-[16px] md:text-[18px]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
