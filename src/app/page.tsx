"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  MessageCircle,
  Calendar,
  Briefcase,
  Users,
  Truck,
  BookOpen,
  FileText,
  ArrowRight,
  Send,
  User,
  Layers,
  Globe,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// Framer‑motion helper variants
// ─────────────────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: i } }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 + i * 0.1 },
  }),
};


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center bg-fancy-gradient px-4 pt-32 pb-24 min-h-screen">
       {/* ──────────────────  Hero Section  ────────────────── */}
       <section className="relative flex flex-col items-center justify-center w-full min-h-[80vh] overflow-hidden">
          {/* Background texture */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-navy/40 via-navy/10 to-transparent pointer-events-none" />

          {/* Decorative blobs */}
          <div className="absolute -top-40 -left-40 w-[820px] h-[820px] bg-gradient-to-br from-cyan/30 to-teal/30 rounded-full filter blur-3xl" />
          <div className="absolute top-1/3 -right-52 w-[620px] h-[620px] bg-gradient-to-br from-navy-light/20 to-navy/5 rounded-full filter blur-2xl" />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <Image src="/AgentBridge.png" alt="AgentBridge logo" width={140} height={66} priority />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-extrabold text-center mt-8 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan to-teal text-5xl sm:text-6xl xl:text-7xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
          >
            Your <span className="text-white">Processes</span>,<br className="hidden sm:block" /> Powered by <span className="text-white">AI Agents</span>.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="max-w-xl text-center text-lg sm:text-xl text-slate mt-6"
          >
            Custom agents built on demand to automate the workflows that matter most.
          </motion.p>

         {/* Call-to-Action buttons — premium look */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.75 }}
  className="flex flex-wrap items-center justify-center gap-4 mt-10"
>
  {/* Primary: radiant gradient pill */}
  <a
    href="#contact"
    className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-accent to-accent-light px-10 py-3 font-semibold text-surface shadow-[0_6px_24px_-6px_rgba(164,99,255,0.45)] transition-transform duration-200 hover:scale-[1.04] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
  >
    <span className="relative z-10">Request a Demo</span>
    <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-accent/30 to-accent-light/20 p-1 shadow">
  <ArrowRight className="ml-2 h-5 w-5 text-accent" strokeWidth={2.4} />
</span>

    {/* subtle inner glow */}
    <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,.2),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
  </a>

  {/* Secondary: glass-outline pill */}
  <a
    href="#solutions"
    className="inline-flex items-center rounded-full border border-accent px-8 py-3 font-semibold text-accent transition-all duration-200 hover:bg-accent-light/10 hover:shadow-[0_0_0_3px_rgba(164,99,255,0.25)] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
  >
    Try Samples
  </a>
</motion.div>


          {/* Mock dashboard illustration */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative w-full max-w-5xl mt-16"
          >
            <Image
              src="/hero-dashboard3.png"
              alt="AgentBridge dashboard preview"
              width={1920}
              height={1080}
              className="w-full rounded-3xl shadow-2xl ring-1 ring-white/10"
            />
          </motion.div>

          {/* Scroll Cue */}
          <div className="absolute bottom-8 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-cyan mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </section>

{/* ──────────────────  Solutions Section  ────────────────── */}
<section id="solutions" className="relative w-full py-24">
  <motion.h2
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="mb-14 text-center font-bold text-3xl sm:text-4xl text-primary"
  >
    Solutions
  </motion.h2>

  {/* fluid grid: 1-col (xs) → 2-col (sm) → 3-col (lg) */}
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 px-5 sm:px-6"
  >
    {[
      {
        title: "Customer Support",
        desc: "Automate inquiries, ticketing, and FAQ responses — 24/7, in local languages.",
        icon: (
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 2.137.67 4.112 1.81 5.73-.062.34-.305 1.26-.79 2.27a1 1 0 0 0 1.26 1.36c1.13-.32 2.01-.67 2.43-.85C8.77 21.55 10.33 22 12 22Z" />
        ),
      },
      {
        title: "Finance & Accounting",
        desc: "From invoice processing to reconciliation — let smart agents handle the busywork.",
        icon: (
          <>
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M16 3v4M8 3v4" />
          </>
        ),
      },
      {
        title: "Sales & Marketing",
        desc: "Qualify leads, send campaigns, and track engagement — automatically.",
        icon: <path d="M3 10.5V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4.5M12 16v2m-4 0h8" />,
      },
      {
        title: "HR & Onboarding",
        desc: "Streamline recruitment, onboarding, and employee support with intelligent workflows.",
        icon: (
          <>
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20v-1a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v1" />
          </>
        ),
      },
      {
        title: "Supply Chain & Ops",
        desc: "Monitor inventory, automate orders, and optimise logistics in real time.",
        icon: (
          <>
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M7 7V5a5 5 0 0 1 10 0v2" />
          </>
        ),
      },
    ].map((item, i) => (
      <motion.div
        key={item.title}
        variants={cardVariants}
        custom={i}
        className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-2"
      >
        {/* decorative glow */}
        <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-light/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* icon */}
        <span className="relative z-10 mb-6 text-accent">
          {item.title === "Customer Support" && (
  <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent-light/10 p-3 shadow-lg">
    <MessageCircle className="h-8 w-8 text-accent drop-shadow" strokeWidth={2.4} />
  </span>
)}
{item.title === "Finance & Accounting" && (
  <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent-light/10 p-3 shadow-lg">
    <Calendar className="h-8 w-8 text-accent drop-shadow" strokeWidth={2.4} />
  </span>
)}
{item.title === "Sales & Marketing" && (
  <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent-light/10 p-3 shadow-lg">
    <Briefcase className="h-8 w-8 text-accent drop-shadow" strokeWidth={2.4} />
  </span>
)}
{item.title === "HR & Onboarding" && (
  <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent-light/10 p-3 shadow-lg">
    <Users className="h-8 w-8 text-accent drop-shadow" strokeWidth={2.4} />
  </span>
)}
{item.title === "Supply Chain & Ops" && (
  <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent-light/10 p-3 shadow-lg">
    <Truck className="h-8 w-8 text-accent drop-shadow" strokeWidth={2.4} />
  </span>
)}
        </span>

        {/* title */}
        <h3 className="relative z-10 mb-2 text-center text-xl font-bold text-primary sm:text-2xl">
          {item.title}
        </h3>

        {/* description */}
        <p className="relative z-10 text-center text-sm text-muted sm:text-base leading-relaxed">
          {item.desc}
        </p>
      </motion.div>
    ))}
  </motion.div>

  {/* faint backdrop for depth */}
  <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-accent/10 to-accent-light/5 blur-3xl opacity-40" />
</section>

     {/* ──────────────────  How It Works Section  ────────────────── */}
<section id="how-it-works" className="relative w-full py-24">
  {/* heading */}
  <motion.h2
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="mb-14 text-center font-bold text-3xl sm:text-4xl text-primary"
  >
    How&nbsp;It&nbsp;Works
  </motion.h2>

  {/* mobile-first grid → 1 / 2 / 3 columns */}
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 px-5 sm:px-6"
  >
    {[
      {
        title: "Discovery & Design",
        desc: "We map your workflow, uncover agentic opportunities, and design a custom AI-agent blueprint.",
        icon: (
          <>
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5-2 4-2 4 2 4 2" />
            <circle cx="12" cy="10" r="2" />
          </>
        ),
      },
      {
        title: "Build & Integrate",
        desc: "Our engineers develop the agent and connect it to your existing systems — securely and seamlessly.",
        icon: (
          <>
            <rect x="5" y="5" width="14" height="14" rx="2" />
            <path d="M9 9h6v6H9z" />
          </>
        ),
      },
      {
        title: "Pilot & Scale",
        desc: "Test in a safe environment, gather feedback, then scale automation across your organisation.",
        icon: (
          <>
            <path d="M12 2v20M2 12h20" />
            <circle cx="12" cy="12" r="10" />
          </>
        ),
      },
    ].map((s, i) => (
      <motion.div
        key={s.title}
        variants={cardVariants}
        custom={i}
        className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-2"
      >
        {/* glow */}
        <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/25 to-accent-light/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* icon */}
        <span className="relative z-10 mb-6 text-accent">
          {s.title === "Discovery & Design" && (
  <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent-light/10 p-3 shadow-lg">
    <Layers className="h-8 w-8 text-accent drop-shadow" strokeWidth={2.4} />
  </span>
)}
{s.title === "Build & Integrate" && (
  <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent-light/10 p-3 shadow-lg">
    <User className="h-8 w-8 text-accent drop-shadow" strokeWidth={2.4} />
  </span>
)}
{s.title === "Pilot & Scale" && (
  <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent-light/10 p-3 shadow-lg">
    <Globe className="h-8 w-8 text-accent drop-shadow" strokeWidth={2.4} />
  </span>
)}
        </span>

        {/* title */}
        <h3 className="relative z-10 mb-2 text-center text-xl sm:text-2xl font-bold text-primary">
          {s.title}
        </h3>

        {/* description */}
        <p className="relative z-10 text-center text-sm sm:text-base leading-relaxed text-muted">
          {s.desc}
        </p>
      </motion.div>
    ))}
  </motion.div>

  {/* connector line (desktop only) */}
  <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden lg:block h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
</section>



    {/* ──────────────────  Pricing Section  ────────────────── */}
<section id="pricing" className="relative w-full py-24">
  {/* heading */}
  <motion.h2
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="mb-14 text-center font-bold text-3xl sm:text-4xl text-primary"
  >
    Pricing
  </motion.h2>

  {/* responsive grid: 1-col xs • 2-col md */}
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 px-5 sm:px-6"
  >
    {[
      {
        name: "Pilot Package",
        price: "₦299,000",
        cta: "Start Pilot",
        link: "#contact",
        bg: "bg-gradient-to-br from-accent/15 to-accent-light/10",
        bullets: [
          "1 custom AI agent",
          "Up to 2 integrations",
          "2-week pilot deployment",
          "Email & chat support",
          "Basic onboarding & training",
        ],
      },
      {
        name: "Enterprise Plan",
        price: "Custom",
        cta: "Request Quote",
        link: "#contact",
        bg: "bg-gradient-to-br from-accent-light/15 to-accent/10",
        bullets: [
          "Multiple AI agents",
          "Unlimited integrations",
          "Full-scale deployment",
          "Dedicated account manager",
          "Advanced training & analytics",
        ],
      },
    ].map((p, i) => (
      <motion.div
        key={p.name}
        variants={cardVariants}
        custom={i}
        className={`relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-2 ${p.bg}`}
      >
        {/* inner ring */}
        <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />

        {/* title */}
        <h3 className="relative z-10 mb-3 text-center text-xl sm:text-2xl font-bold text-primary">
          {p.name}
        </h3>

        {/* price */}
        <div className="relative z-10 mb-6 text-3xl sm:text-4xl font-extrabold text-accent">
          {p.price}
        </div>

        {/* features */}
        <ul className="relative z-10 mb-8 list-disc list-inside space-y-1 text-sm sm:text-base text-muted">
          {p.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={p.link}
          className={
            p.name === "Pilot Package"
              ? "group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-accent to-accent-light px-7 sm:px-8 py-3 font-semibold text-surface shadow-[0_6px_18px_-4px_rgba(164,99,255,0.45)] transition-transform duration-200 hover:scale-[1.04] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
              : "group relative inline-flex items-center justify-center rounded-full border border-accent px-7 sm:px-8 py-3 font-semibold text-accent transition-all duration-200 hover:bg-accent-light/10 hover:shadow-[0_0_0_3px_rgba(164,99,255,0.25)] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
          }
        >
          <span className="relative z-10">{p.cta}</span>
          <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-accent/30 to-accent-light/20 p-1 shadow">
  <ArrowRight className="ml-2 h-4 w-4 text-accent" strokeWidth={2.4} />
</span>

          {/* glow for filled button */}
          {p.name === "Pilot Package" && (
            <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,.18),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          )}
        </a>
      </motion.div>
    ))}
  </motion.div>

  {/* blurred wash behind cards */}
  <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-accent/10 to-accent-light/5 blur-3xl opacity-40" />
</section>



    {/* ──────────────────  About Us Section  ────────────────── */}
<section id="about" className="relative w-full py-24">
  {/* heading */}
  <motion.h2
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="mb-14 text-center font-bold text-3xl sm:text-4xl text-primary"
  >
    About&nbsp;Us
  </motion.h2>

  {/* responsive card */}
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="mx-auto flex max-w-6xl flex-col items-center gap-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 md:flex-row md:p-14 backdrop-blur-xl shadow-[0_10px_45px_-10px_rgba(0,0,0,0.45)]"
  >
    {/* gradient frame (hidden on small to save paint) */}
    <span className="pointer-events-none absolute -inset-1 hidden md:block rounded-[inherit] bg-gradient-to-br from-accent/25 to-accent-light/10" />

    {/* content block */}
    <div className="relative z-10 flex-1">
      <h3 className="mb-4 text-2xl sm:text-3xl font-bold text-primary">Our Mission</h3>
      <p className="mb-8 leading-relaxed text-muted">
        To empower Nigerian businesses with bespoke AI agents that streamline workflows, reduce manual overhead,
        and deliver measurable efficiency gains.
      </p>

      <h4 className="mb-3 text-xl sm:text-2xl font-bold text-primary">Meet the Team</h4>
      <p className="mb-8 leading-relaxed text-muted">
        AgentBridge unites technologists, AI experts, and local business specialists. We blend deep regional insight
        with world-class engineering to deliver automation perfectly tuned to Nigeria’s unique needs.
      </p>

      <a
        href="#"
        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-light px-8 py-3 font-semibold text-surface shadow-lg transition-transform duration-200 hover:scale-[1.03] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
      >
        Join Our Team
        <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-accent/30 to-accent-light/20 p-1 shadow">
  <ArrowRight className="ml-2 h-4 w-4 text-accent" strokeWidth={2.4} />
</span>
      </a>
    </div>

    {/* graphic */}
    <div className="relative z-10 flex-1 flex justify-center md:justify-end">
      <Image
        src="/about-orb.png"
        alt="AgentBridge abstract orb"
        width={240}
        height={240}
        priority
        className="h-52 w-52 object-contain drop-shadow-[0_4px_16px_rgba(164,99,255,0.35)] sm:h-60 sm:w-60 md:h-72 md:w-72"
      />
    </div>
  </motion.div>

  {/* background wash */}
  <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-accent/10 to-accent-light/5 blur-3xl opacity-40" />
</section>

       {/* ──────────────────  Resources Section  ────────────────── */}
<section id="resources" className="relative w-full py-24">
  {/* heading */}
  <motion.h2
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="mb-14 text-center font-bold text-3xl sm:text-4xl text-primary"
  >
    Resources
  </motion.h2>

  {/* mobile-first grid: 1-col xs → 2-col md */}
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 px-5 sm:px-6"
  >
    {[
      {
        title: "Blog / Case Studies",
        desc: "Insights, success stories, and practical tips on AI automation for Nigerian businesses.",
        icon: (
          <>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M8 8h8M8 12h8M8 16h4" />
          </>
        ),
        cta: "Read Articles",
        link: "#",
        bg: "from-accent/20 to-accent-light/10",
      },
      {
        title: "Documentation",
        desc: "Technical docs and guides to help you integrate and use AgentBridge solutions.",
        icon: (
          <>
            <rect x="5" y="3" width="14" height="18" rx="2" />
            <path d="M9 7h6M9 11h6M9 15h2" />
          </>
        ),
        cta: "View Docs",
        link: "#",
        bg: "from-accent-light/20 to-accent/10",
      },
    ].map((r, i) => (
      <motion.div
        key={r.title}
        variants={cardVariants}
        custom={i}
        className={`group relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-2 bg-gradient-to-br ${r.bg}`}
      >
        {/* glow */}
        <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/25 to-accent-light/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* icon */}
        <span className="relative z-10 mb-6 text-accent">
          {r.title === "Blog / Case Studies" && (
  <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent-light/10 p-3 shadow-lg">
    <BookOpen className="h-8 w-8 text-accent drop-shadow" strokeWidth={2.4} />
  </span>
)}
{r.title === "Documentation" && (
  <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent-light/10 p-3 shadow-lg">
    <FileText className="h-8 w-8 text-accent drop-shadow" strokeWidth={2.4} />
  </span>
)}
        </span>

        {/* title */}
        <h3 className="relative z-10 mb-3 text-center text-xl sm:text-2xl font-bold text-primary">
          {r.title}
        </h3>

        {/* description */}
        <p className="relative z-10 mb-6 text-center text-sm sm:text-base leading-relaxed text-muted">
          {r.desc}
        </p>

        {/* CTA */}
        <a
          href={r.link}
          className="relative z-10 mt-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-light px-8 py-3 font-semibold text-surface shadow-lg transition-transform duration-200 hover:scale-[1.03] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
        >
          {r.cta}
          <svg
            className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </motion.div>
    ))}
  </motion.div>

  {/* background wash */}
  <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-accent/10 to-accent-light/5 blur-3xl opacity-40" />
</section>

     {/* ──────────────────  Contact Section  ────────────────── */}
<section id="contact" className="relative w-full py-24">
  {/* heading */}
  <motion.h2
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="mb-14 text-center font-bold text-3xl sm:text-4xl text-primary"
  >
    Contact
  </motion.h2>

  {/* responsive form card */}
  <motion.form
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="mx-auto flex max-w-3xl flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 md:p-14 backdrop-blur-xl shadow-[0_10px_50px_-10px_rgba(0,0,0,0.45)]"
  >
    {/* gradient frame (hidden on xs) */}
    <span className="pointer-events-none absolute -inset-1 hidden sm:block rounded-[inherit] bg-gradient-to-br from-accent/25 to-accent-light/10" />

    {/* honeypot */}
    <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />

    {/* Name */}
    <div className="relative z-10">
      <label htmlFor="name" className="mb-2 block font-semibold text-primary">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your Name"
        required
        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/60"
      />
    </div>

    {/* Email */}
    <div className="relative z-10">
      <label htmlFor="email" className="mb-2 block font-semibold text-primary">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="you@email.com"
        required
        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/60"
      />
    </div>

    {/* Message */}
    <div className="relative z-10">
      <label htmlFor="message" className="mb-2 block font-semibold text-primary">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={5}
        placeholder="How can we help you?"
        required
        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/60"
      />
    </div>

    {/* CTA */}
    <motion.button
      whileTap={{ scale: 0.95 }}
      type="submit"
      className="relative z-10 mt-2 self-center inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-light px-10 py-3 text-lg font-semibold text-surface shadow-xl transition-transform duration-200 hover:scale-[1.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
    >
      Send&nbsp;Message
      <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-accent/30 to-accent-light/20 p-1 shadow">
  <Send className="ml-2 h-5 w-5 text-accent" strokeWidth={2.4} />
</span>
    </motion.button>
  </motion.form>

  {/* success notice (toggle via JS) */}
  <p id="contact-success" className="mt-10 hidden text-center font-semibold text-accent-light">
    Thank you! Your message has been sent.
  </p>

  {/* background wash */}
  <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-accent/10 to-accent-light/5 blur-3xl opacity-40" />
</section>

      </main>
      <Footer />
    </>
  );
}
