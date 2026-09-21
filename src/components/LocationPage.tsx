"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react";

export default function LocationPage() {
  const address = "123 Wellness Lane, Green Park, New Delhi 110016";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen w-full bg-[#F7F5F0] text-[#1A221E] font-sans antialiased selection:bg-[#1C2826] selection:text-[#E2D8C3] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');
        
        .font-serif-luxury {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        
        .font-sans-clean {
          font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
        }
      `}</style>

      {/* Header / Navbar */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#F7F5F0]/90 backdrop-blur-md border-b border-[#E3DEC3]/40"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
          <Link href="/" className="group flex flex-col">
            <span className="font-serif-luxury text-2xl font-normal tracking-[0.25em] text-[#1C2826] uppercase group-hover:text-[#3B4E47] transition-colors">
              Botanica
            </span>
            <span className="text-[9px] font-sans-clean tracking-[0.3em] uppercase text-[#6E7B74] -mt-1">
              Wellness
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-9 text-xs font-sans-clean tracking-[0.18em] uppercase text-[#3D4842]">
            <Link
              href="/"
              className="hover:text-[#0D1612] transition-colors py-1 border-b border-transparent hover:border-[#1C2826]"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="hover:text-[#0D1612] transition-colors py-1 border-b border-transparent hover:border-[#1C2826]"
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="hover:text-[#0D1612] transition-colors py-1 border-b border-transparent hover:border-[#1C2826]"
            >
              Gallery
            </Link>
            <Link
              href="/#philosophy"
              className="hover:text-[#0D1612] transition-colors py-1 border-b border-transparent hover:border-[#1C2826]"
            >
              About
            </Link>
            <Link
              href="/location"
              className="text-[#0D1612] py-1 border-b border-[#1C2826]"
            >
              Location
            </Link>
          </nav>

          <div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/book-demo"
                className="inline-block px-6 py-2.5 text-xs font-sans-clean tracking-[0.15em] uppercase text-[#F7F5F0] bg-[#1C2826] hover:bg-[#2C3E3A] border border-[#1C2826] rounded-sm transition-all duration-300 shadow-sm"
              >
                Book a Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Location Section */}
      <main className="pt-28 pb-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto min-h-[calc(100vh-80px)] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="bg-[#EFECE6] border border-[#E0DBCF] p-6 sm:p-10 lg:p-12 rounded-sm shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Map Container */}
            <div className="lg:col-span-7 relative h-80 sm:h-96 rounded-sm overflow-hidden border border-[#DCD6C8]">
              <iframe
                title="Botanica Wellness Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.28613437146!2d77.199187!3d28.552835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26ef6b6d5f7%3A0x6b44dd92d3f23b7b!2sGreen%20Park%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale opacity-85 contrast-125"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Overlay Location Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F7F5F0]/95 backdrop-blur-md p-6 rounded-md border border-[#E0DBCF] shadow-lg max-w-xs w-[90%] text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-8 h-8 rounded-full bg-[#1C2826] text-white flex items-center justify-center mx-auto mb-3 shadow-sm"
                >
                  <MapPin className="w-4 h-4 text-[#C7B288]" />
                </motion.div>
                <h3 className="font-serif-luxury text-xl font-normal text-[#1C2826] mb-1">
                  Botanica Wellness
                </h3>
                <p className="text-xs font-sans-clean text-[#5B6660] leading-relaxed mb-4">
                  123 Wellness Lane, <br /> Green Park, New Delhi 110016
                </p>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1C2826] hover:bg-[#2C3E3A] text-[#F7F5F0] text-[11px] font-sans-clean tracking-[0.15em] uppercase rounded-full transition-colors w-full shadow-sm"
                >
                  <Navigation className="w-3 h-3 text-[#C7B288]" />
                  <span>Get Directions</span>
                </motion.a>
              </motion.div>
            </div>

            {/* Visit Us Info Sidebar */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="lg:col-span-5 flex flex-col justify-center space-y-8 lg:pl-6"
            >
              <motion.div variants={fadeInUp}>
                <span className="text-[11px] font-sans-clean tracking-[0.3em] uppercase text-[#737E77] font-medium block mb-2">
                  Our Sanctuary
                </span>
                <h2 className="font-serif-luxury text-4xl sm:text-5xl font-normal text-[#1A2320]">
                  Visit Us
                </h2>
              </motion.div>

              <div className="space-y-6 text-xs font-sans-clean text-[#4A5550]">
                <motion.div variants={fadeInUp} className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-full bg-[#E3DEC3]/40 group-hover:bg-[#1C2826] group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#1C2826] group-hover:text-[#C7B288] transition-colors" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans-clean tracking-[0.2em] uppercase text-[#717E77] block mb-0.5">
                      Address
                    </span>
                    <p className="text-sm text-[#1C2826] leading-relaxed font-light">
                      123 Wellness Lane, <br /> Green Park, New Delhi 110016
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-full bg-[#E3DEC3]/40 group-hover:bg-[#1C2826] group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#1C2826] group-hover:text-[#C7B288] transition-colors" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans-clean tracking-[0.2em] uppercase text-[#717E77] block mb-0.5">
                      Phone
                    </span>
                    <p className="text-sm text-[#1C2826] font-light">
                      +91 98765 43210
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-full bg-[#E3DEC3]/40 group-hover:bg-[#1C2826] group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#1C2826] group-hover:text-[#C7B288] transition-colors" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans-clean tracking-[0.2em] uppercase text-[#717E77] block mb-0.5">
                      Email
                    </span>
                    <p className="text-sm text-[#1C2826] font-light">
                      hello@botanica.com
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-full bg-[#E3DEC3]/40 group-hover:bg-[#1C2826] group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#1C2826] group-hover:text-[#C7B288] transition-colors" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans-clean tracking-[0.2em] uppercase text-[#717E77] block mb-0.5">
                      Hours
                    </span>
                    <p className="text-sm text-[#1C2826] font-light">
                      Mon – Sun: 9:00 AM – 9:00 PM
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0B100F] text-[#D8E0DC] pt-16 pb-12 border-t border-[#1C2724]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans-clean text-[#62736B] gap-4">
            <p>© 2026 Botanica Wellness. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-[#A0B0A8] transition-colors">
                Home
              </Link>
              <Link href="/services" className="hover:text-[#A0B0A8] transition-colors">
                Services
              </Link>
              <Link href="/gallery" className="hover:text-[#A0B0A8] transition-colors">
                Gallery
              </Link>
              <Link href="/location" className="hover:text-[#A0B0A8] transition-colors">
                Location
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}