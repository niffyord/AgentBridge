"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  /* close on Esc */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /* lock scroll */
  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", open);
    return () => document.documentElement.classList.remove("overflow-hidden");
  }, [open]);

  const links = [
    { href: "/", label: "Home" },
    { href: "#solutions", label: "Solutions" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#pricing", label: "Pricing" },
    { href: "#about", label: "About Us" },
    { href: "#resources", label: "Resources" },
  ];

  const LinkItem = ({ href, label }: { href: string; label: string }) => (
    <li>
      <Link
        href={href}
        onClick={() => setOpen(false)}
        className="nav-link-underline block py-2 text-center transition-colors hover:text-accent"
      >
        {label}
      </Link>
    </li>
  );

  return (
    <nav className="fixed inset-x-0 top-0 z-50 w-full bg-surface-2/80 backdrop-blur-md shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4">
        {/* logo */}
        <Link href="/" className="flex items-center gap-3 z-60">
          <Image src="/AgentBridge.png" alt="AgentBridge" width={42} height={20} priority />
          <span className="hidden text-lg font-extrabold tracking-tight text-primary sm:inline">
            AgentBridge
          </span>
        </Link>

        {/* desktop nav */}
        <ul className="hidden items-center gap-8 font-heading text-sm md:flex">
          {links.map((l) => (
            <LinkItem key={l.label} {...l} />
          ))}
          <li>
            <Link
              href="#contact"
              className="inline-flex items-center rounded-full bg-accent px-5 py-2 font-semibold text-surface transition-transform duration-200 hover:scale-105 hover:bg-accent-light active:scale-95"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* mobile toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="relative z-60 flex h-12 w-12 items-center justify-center md:hidden focus:outline-none "
        >
          {open ? (
            <X className="h-8 w-8 text-accent transition-all duration-200" strokeWidth={2.4} />
          ) : (
            <Menu className="h-8 w-8 text-accent transition-all duration-200" strokeWidth={2.4} />
          )}
        </button>
      </div>

      {/* backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 md:hidden"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}

      {/* slide-down panel */}
      <nav
        id="mobile-navigation"
        aria-label="Mobile"
        className={`fixed inset-x-0 top-[64px] z-55 h-[calc(100dvh-64px)] overflow-y-auto bg-surface-2 shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-y-0 animate-slide-down" : "-translate-y-full pointer-events-none"
        } md:hidden`}
        style={{ backgroundColor: 'var(--bg-surface-2)' }}
      >
        <ul className="flex flex-col gap-6 px-8 py-8 font-heading text-base">
          {links.map((l) => (
            <LinkItem key={l.label} {...l} />
          ))}
          <li>
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 font-semibold text-surface transition-colors duration-200 hover:bg-accent-light focus:outline-none "
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
}
