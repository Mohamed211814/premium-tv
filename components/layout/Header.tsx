"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Setup Guide", href: "/setup" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md"
          : "bg-white/90 backdrop-blur-sm border-b border-slate-100"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[4.5rem] py-3">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg"
            aria-label="Premium IPTV Home"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-white border-2 border-brand-500/30 p-1 shadow-md group-hover:shadow-lg group-hover:border-brand-500 transition-all duration-300">
              <Image
                src="/images/logo.png"
                alt="Premium IPTV Official Logo"
                width={40}
                height={40}
                priority
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-950 flex items-center gap-2">
              <span>Premium</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500">
                IPTV
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 border border-slate-200/80 rounded-full px-4 py-1.5 backdrop-blur-md" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                    isActive
                      ? "bg-brand-500 text-white shadow-md shadow-brand-500/30"
                      : "text-slate-700 hover:text-brand-600 hover:bg-white"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/#pricing"
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-sm text-white bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500 hover:from-brand-700 hover:via-ruby-700 hover:to-amber-600 shadow-md shadow-brand-500/25 hover:shadow-lg hover:scale-105 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-brand-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              {isOpen ? <X className="w-6 h-6 text-brand-600" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-xl" id="mobile-menu">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 rounded-xl text-base font-bold transition-colors",
                    isActive
                      ? "bg-brand-500 text-white"
                      : "text-slate-800 hover:bg-slate-100"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <Link
              href="/setup"
              className="w-full text-center py-2.5 px-4 rounded-xl text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200"
            >
              View Setup Guide
            </Link>
            <Link
              href="/#pricing"
              className="w-full text-center py-3 px-4 rounded-xl font-black text-sm text-white bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500 shadow-md"
            >
              Choose a Plan
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
