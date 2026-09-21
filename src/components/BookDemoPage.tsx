"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Compass } from "lucide-react";

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent("Book a Demo / Session Request");
    const mailtoBody = encodeURIComponent(
      `Full Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Date: ${formData.date}\nMessage: ${formData.message}`
    );
    window.location.href = `mailto:hello@botanica.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

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
        staggerChildren: 0.1,
        delayChildren: 0.1,
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

      {/* Navbar */}
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
              className="hover:text-[#0D1612] transition-colors py-1 border-b border-transparent hover:border-[#1C2826]"
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

      {/* Main Content Area */}
      <main className="pt-28 pb-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative overflow-hidden">
        
        {/* Decorative Top-Right Sanctuary Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.2 }}
          className="hidden lg:block absolute top-24 right-0 w-[42%] h-72 rounded-sm overflow-hidden z-0 shadow-sm"
        >
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200"
            alt="Botanica Sanctuary Ambiance"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#F7F5F0]/20 to-[#F7F5F0]/80"></div>
        </motion.div>

        {/* Hero Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-xl mb-12 pt-4"
        >
          <motion.span
            variants={fadeInUp}
            className="text-[11px] font-sans-clean tracking-[0.3em] uppercase text-[#6B756E] font-medium block mb-3"
          >
            BOOK A SESSION
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#141C1A] mb-4"
          >
            Let's Begin Your <br />
            Wellness Journey
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xs sm:text-sm font-sans-clean font-light text-[#5B6660] leading-relaxed max-w-md"
          >
            Fill in the details below and our team will get in touch with you to confirm your appointment.
          </motion.p>
        </motion.div>

        {/* Main Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="relative z-10 bg-[#EFECE6]/90 backdrop-blur-md border border-[#E0DBCF] rounded-sm shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12"
        >
          
          {/* Left Form Column */}
          <div className="lg:col-span-7 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-[#E0DBCF]">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-[#1C2826] mb-8">
              Book Your Session
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-5"
              >
                <motion.div variants={fadeInUp}>
                  <label className="block text-[11px] font-sans-clean tracking-[0.15em] uppercase text-[#4A5550] mb-2 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F7F5F0] border border-[#DCD6C8] text-xs font-sans-clean text-[#1C2826] focus:outline-none focus:border-[#1C2826] rounded-sm transition-colors placeholder:text-[#9EA8A2]"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-[11px] font-sans-clean tracking-[0.15em] uppercase text-[#4A5550] mb-2 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F7F5F0] border border-[#DCD6C8] text-xs font-sans-clean text-[#1C2826] focus:outline-none focus:border-[#1C2826] rounded-sm transition-colors placeholder:text-[#9EA8A2]"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-[11px] font-sans-clean tracking-[0.15em] uppercase text-[#4A5550] mb-2 font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F7F5F0] border border-[#DCD6C8] text-xs font-sans-clean text-[#1C2826] focus:outline-none focus:border-[#1C2826] rounded-sm transition-colors placeholder:text-[#9EA8A2]"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-[11px] font-sans-clean tracking-[0.15em] uppercase text-[#4A5550] mb-2 font-medium">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F7F5F0] border border-[#DCD6C8] text-xs font-sans-clean text-[#1C2826] focus:outline-none focus:border-[#1C2826] rounded-sm transition-colors"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-[11px] font-sans-clean tracking-[0.15em] uppercase text-[#4A5550] mb-2 font-medium">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Any specific request or preference?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F7F5F0] border border-[#DCD6C8] text-xs font-sans-clean text-[#1C2826] focus:outline-none focus:border-[#1C2826] rounded-sm transition-colors placeholder:text-[#9EA8A2] resize-none"
                  ></textarea>
                </motion.div>

                <motion.div variants={fadeInUp} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#1C2826] hover:bg-[#2C3E3A] text-[#F7F5F0] text-xs font-sans-clean tracking-[0.2em] uppercase rounded-sm transition-all duration-300 shadow-md font-medium mt-2"
                  >
                    Submit Request
                  </button>
                </motion.div>
              </motion.div>
            </form>
          </div>

          {/* Right Direct Contact Column */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-[#EFECE6]">
            <div>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-[#1C2826] mb-8">
                Or Contact Us Directly
              </h2>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-6 text-xs font-sans-clean text-[#4A5550]"
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-4 group">
                  <div className="w-9 h-9 rounded-full bg-[#E3DEC3]/40 group-hover:bg-[#1C2826] transition-colors duration-300 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#1C2826] group-hover:text-[#C7B288] transition-colors" />
                  </div>
                  <span className="text-xs text-[#1C2826] font-light">
                    +91 98765 43210
                  </span>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-center gap-4 group">
                  <div className="w-9 h-9 rounded-full bg-[#E3DEC3]/40 group-hover:bg-[#1C2826] transition-colors duration-300 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#1C2826] group-hover:text-[#C7B288] transition-colors" />
                  </div>
                  <span className="text-xs text-[#1C2826] font-light">
                    hello@botanica.com
                  </span>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-full bg-[#E3DEC3]/40 group-hover:bg-[#1C2826] transition-colors duration-300 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#1C2826] group-hover:text-[#C7B288] transition-colors" />
                  </div>
                  <span className="text-xs text-[#1C2826] font-light leading-relaxed">
                    123 Wellness Lane, <br /> Green Park, New Delhi 110016
                  </span>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-full bg-[#E3DEC3]/40 group-hover:bg-[#1C2826] transition-colors duration-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#1C2826] group-hover:text-[#C7B288] transition-colors" />
                  </div>
                  <span className="text-xs text-[#1C2826] font-light">
                    Mon – Sun: 9:00 AM – 9:00 PM
                  </span>
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom Emblem Note */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-12 text-center border-t border-[#E0DBCF]/60 mt-8"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 rounded-full bg-[#1C2826]/10 text-[#1C2826] flex items-center justify-center mx-auto mb-3"
              >
                <Compass className="w-4 h-4 text-[#1C2826]" />
              </motion.div>
              <p className="font-serif-luxury text-lg italic text-[#1C2826] leading-relaxed">
                We look forward to <br />
                being a part of your wellness journey.
              </p>
            </motion.div>
          </div>

        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0B100F] text-[#D8E0DC] pt-16 pb-12 border-t border-[#1C2724]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
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