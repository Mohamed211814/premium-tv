import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Zap, Clock, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-700 text-sm relative overflow-hidden">
      {/* Top trust badges section */}
      <div className="border-b border-slate-200 py-8 bg-gradient-to-r from-purple-50/80 via-pink-50/80 to-amber-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-gold-300 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-gold-400 to-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-sm">
                <Zap className="w-6 h-6 fill-slate-950 text-slate-950" />
              </div>
              <div>
                <p className="font-black text-slate-950 text-sm">Instant Activation</p>
                <p className="text-xs text-slate-600">Delivered in minutes</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-ruby-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-ruby-600 to-ruby-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-black text-slate-950 text-sm">99.9% Uptime SLA</p>
                <p className="text-xs text-slate-600">High stability clusters</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-brand-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-600 to-brand-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="font-black text-slate-950 text-sm">24/7 Dedicated Support</p>
                <p className="text-xs text-slate-600">Fast ticket response</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-slate-950 text-white flex items-center justify-center shrink-0 shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 font-black" />
              </div>
              <div>
                <p className="font-black text-slate-950 text-sm">Universal Devices</p>
                <p className="text-xs text-slate-600">TV, mobile, tablet & PC</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg"
              aria-label="Premium IPTV Home"
            >
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-white border-2 border-brand-300 p-1 shadow-sm group-hover:border-brand-500 transition-all duration-300">
                <Image
                  src="/images/logo.png"
                  alt="Premium IPTV Official Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-xl font-black tracking-tight text-slate-950">
                Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500 ml-1">IPTV</span>
              </span>
            </Link>

            <p className="text-slate-600 text-sm leading-relaxed max-w-md">
              Premium IPTV is built to provide reliable, high definition entertainment across modern screens. We focus on bufferless performance, instant setup, and dedicated 24/7 technical customer support for all Premium IPTV subscribers.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                All Premium IPTV Servers Operational
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-bold text-slate-950 mb-4 text-sm tracking-wider uppercase">Navigation</p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-slate-600 hover:text-brand-600 font-medium transition-colors focus:outline-none focus-visible:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-600 hover:text-brand-600 font-medium transition-colors focus:outline-none focus-visible:underline">
                  About Premium IPTV
                </Link>
              </li>
              <li>
                <Link href="/setup" className="text-slate-600 hover:text-brand-600 font-medium transition-colors focus:outline-none focus-visible:underline">
                  Setup Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-brand-600 font-medium transition-colors focus:outline-none focus-visible:underline">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-slate-600 hover:text-brand-600 font-medium transition-colors focus:outline-none focus-visible:underline">
                  Subscription Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Setup Guides */}
          <div>
            <p className="font-bold text-slate-950 mb-4 text-sm tracking-wider uppercase">Device Guides</p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/setup#smart-tv" className="text-slate-600 hover:text-brand-600 font-medium transition-colors focus:outline-none focus-visible:underline">
                  Smart TV Setup
                </Link>
              </li>
              <li>
                <Link href="/setup#streaming-devices" className="text-slate-600 hover:text-brand-600 font-medium transition-colors focus:outline-none focus-visible:underline">
                  Firestick & Apple TV
                </Link>
              </li>
              <li>
                <Link href="/setup#mobile-devices" className="text-slate-600 hover:text-brand-600 font-medium transition-colors focus:outline-none focus-visible:underline">
                  iOS & Android Setup
                </Link>
              </li>
              <li>
                <Link href="/setup#computer" className="text-slate-600 hover:text-brand-600 font-medium transition-colors focus:outline-none focus-visible:underline">
                  PC & Mac Setup
                </Link>
              </li>
              <li>
                <Link href="/setup#troubleshooting" className="text-slate-600 hover:text-brand-600 font-medium transition-colors focus:outline-none focus-visible:underline">
                  Troubleshooting FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <p className="font-bold text-slate-950 mb-4 text-sm tracking-wider uppercase">Support & Legal</p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-brand-600 font-medium transition-colors focus:outline-none focus-visible:underline">
                  Submit Support Ticket
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-600 hover:text-brand-600 font-medium transition-colors focus:outline-none focus-visible:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-600 hover:text-brand-600 font-medium transition-colors focus:outline-none focus-visible:underline">
                  Terms of Service
                </Link>
              </li>
              <li className="pt-2 text-xs text-slate-500">
                Support response: {siteConfig.support.responseHours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-brand-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-brand-600 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
