"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const treatments = [
    {
      title: "Deep Tissue Massage",
      duration: "60 mins",
      price: "₹3,500",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
      desc: "Targeted deep muscle relief relieving tension & chronic stress.",
    },
    {
      title: "Detox Ritual",
      duration: "75 mins",
      price: "₹4,200",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
      desc: "Exfoliating botanical wrap with lymphatic drainage treatment.",
    },
    {
      title: "Radiance Facial",
      duration: "60 mins",
      price: "₹3,200",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
      desc: "Organic active enzymes restoring vibrant natural skin glow.",
    },
    {
      title: "Herbal Bath Therapy",
      duration: "45 mins",
      price: "₹2,800",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      desc: "Custom steep of restorative essential oils & wild botanical flora.",
    },
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
      alt: "Botanical Detail",
    },
    {
      src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800",
      alt: "Candlelit Massage Suite",
    },
    {
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
      alt: "Courtyard Serenity Pool",
    },
    {
      src: "https://images.unsplash.com/photo-1512290900673-0498703e2e81?auto=format&fit=crop&q=80&w=800",
      alt: "Zen Lotus Tea Ritual",
    },
  ];

  const testimonials = [
    {
      quote:
        "An unforgettable experience! The ambiance, the treatments and the staff were all beyond exceptional.",
      name: "Sarah M.",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    },
    {
      quote:
        "Botanica is my happy place. Every visit leaves me feeling refreshed, balanced and completely at peace.",
      name: "Priya S.",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
    },
    {
      quote:
        "A truly luxurious and rejuvenating experience. The attention to detail is remarkable.",
      name: "Neha K.",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200",
    },
  ];

  // Motion animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#1A221E] font-sans antialiased selection:bg-[#1C2826] selection:text-[#E2D8C3] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');
        
        .font-serif-luxury {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        
        .font-sans-clean {
          font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
        }

        .clip-hero-diagonal {
          clip-path: polygon(18% 0, 100% 0, 100% 100%, 0% 100%);
        }

        @media (max-width: 1024px) {
          .clip-hero-diagonal {
            clip-path: none;
          }
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
              className="text-[#0D1612] py-1 border-b border-[#1C2826]"
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
            <a
              href="#philosophy"
              className="hover:text-[#0D1612] transition-colors py-1 border-b border-transparent hover:border-[#1C2826]"
            >
              About
            </a>
            <Link
              href="/location"
              className="hover:text-[#0D1612] transition-colors py-1 border-b border-transparent hover:border-[#1C2826]"
            >
              Location
            </Link>
          </nav>

          <div>
            <Link
              href="/book-demo"
              className="inline-block px-6 py-2.5 text-xs font-sans-clean tracking-[0.15em] uppercase text-[#F7F5F0] bg-[#1C2826] hover:bg-[#2C3E3A] border border-[#1C2826] rounded-sm transition-all duration-300 shadow-sm"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen pt-20 flex items-center overflow-hidden bg-[#F2EDE4]"
      >
        <div className="w-full min-h-[calc(100vh-80px)] flex flex-col lg:flex-row relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full lg:w-[48%] px-8 sm:px-12 lg:px-20 py-16 flex flex-col justify-between z-10"
          >
            <div className="pt-8">
              <motion.span
                variants={fadeInUp}
                className="text-[11px] font-sans-clean tracking-[0.3em] uppercase text-[#6B756E] font-medium block mb-4"
              >
                Luxury Spa & Wellness
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className="font-serif-luxury text-5xl sm:text-6xl xl:text-7xl font-normal leading-[1.08] text-[#141C1A] mb-6"
              >
                The Art <br />
                <span className="italic font-light">of</span> Unwinding.
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-sm sm:text-base font-sans-clean font-light text-[#4A5550] max-w-md leading-relaxed mb-10"
              >
                A curated wellness experience designed to restore your mind,
                body and natural glow.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-6"
              >
                <Link
                  href="/book-demo"
                  className="px-7 py-3.5 bg-[#1C2826] hover:bg-[#2D3F3C] text-[#F7F5F0] text-xs font-sans-clean tracking-[0.2em] uppercase flex items-center gap-3 transition-all duration-300 group shadow-md"
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href="#philosophy"
                  className="text-xs font-sans-clean tracking-[0.15em] uppercase text-[#1C2826] hover:text-[#4A5D57] transition-colors py-2 border-b border-transparent hover:border-[#1C2826]"
                >
                  Explore Our Philosophy
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="w-full lg:w-[58%] lg:absolute lg:right-0 lg:top-0 lg:bottom-0 h-125 lg:h-full clip-hero-diagonal overflow-hidden bg-[#121B19]"
          >
            <motion.img
              initial={{ scale: 1.15 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1800"
              alt="Luxury Spa Serenity Sanctuary"
              className="w-full h-full object-cover object-center opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101816]/70 via-transparent to-black/20"></div>

            <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col items-center gap-6 text-white/80 z-20">
              <span className="text-[10px] font-sans-clean tracking-[0.35em] uppercase [writing-mode:vertical-lr] rotate-180 font-light text-[#E0D8C8]">
                Wellness is a form of self respect
              </span>
              <div className="w-px h-12 bg-[#E0D8C8]/40"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section
        id="treatments"
        className="py-24 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-[11px] font-sans-clean tracking-[0.3em] uppercase text-[#737E77] font-medium block mb-3">
              Featured Services
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl font-normal text-[#1A2320]">
              Signature Services
            </h2>
          </div>
          <div className="max-w-md flex flex-col items-start md:items-end">
            <p className="text-xs sm:text-sm font-sans-clean text-[#5A6660] leading-relaxed md:text-right mb-4">
              Thoughtfully crafted rituals that blend ancient wisdom with modern
              techniques for deep, lasting renewal.
            </p>
            <Link
              href="/services"
              className="text-xs font-sans-clean tracking-[0.18em] uppercase text-[#1C2826] hover:text-[#4B5E57] flex items-center gap-2 group transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {treatments.map((treatment, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Link
                href="/services"
                className="group bg-[#EFECE6] border border-[#E0DBCF] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between h-full block"
              >
                <div>
                  <div className="h-60 overflow-hidden relative">
                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif-luxury text-2xl font-normal text-[#1C2826] mb-2 group-hover:text-[#2A403A] transition-colors">
                      {treatment.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-sans-clean text-[#6B7770] tracking-wider uppercase mb-3">
                      <span>{treatment.duration}</span>
                      <span>•</span>
                      <span className="font-semibold text-[#1C2826]">
                        {treatment.price}
                      </span>
                    </div>
                    <p className="text-xs font-sans-clean text-[#5B6660] font-light leading-relaxed">
                      {treatment.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex justify-end">
                  <span className="w-8 h-8 rounded-full border border-[#C2BAB0] group-hover:border-[#1C2826] group-hover:bg-[#1C2826] group-hover:text-white text-[#1C2826] flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Our Philosophy */}
      <section
        id="philosophy"
        className="bg-[#121A18] text-[#F7F5F0] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full lg:w-1/2 min-h-[450px] lg:min-h-[620px] relative overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1200"
              alt="Outdoor Sanctuary Bath"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-[#121A18]/80 lg:to-[#121A18]"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="w-full lg:w-1/2 p-10 sm:p-16 lg:p-20 flex flex-col justify-center"
          >
            <motion.span
              variants={fadeInUp}
              className="text-[11px] font-sans-clean tracking-[0.3em] uppercase text-[#A0B0A8] block mb-4"
            >
              Our Philosophy
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#FAF8F5] mb-6"
            >
              More Than a Spa. <br />
              <span className="italic font-light">A Way of Life.</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-sm font-sans-clean font-light text-[#BCC8C2] leading-relaxed mb-10 max-w-lg"
            >
              At Botanica, we believe true wellness goes beyond the treatment
              room. It's a journey of balance, mindfulness and self-care — woven
              into every moment of your day.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#2A3834] mb-10"
            >
              <div>
                <span className="text-xs font-serif-luxury text-[#C7B288] block mb-1">
                  01
                </span>
                <span className="text-[11px] font-sans-clean tracking-[0.15em] uppercase text-[#E0E8E4] font-medium block">
                  Natural Ingredients
                </span>
              </div>
              <div>
                <span className="text-xs font-serif-luxury text-[#C7B288] block mb-1">
                  02
                </span>
                <span className="text-[11px] font-sans-clean tracking-[0.15em] uppercase text-[#E0E8E4] font-medium block">
                  Holistic Approach
                </span>
              </div>
              <div>
                <span className="text-xs font-serif-luxury text-[#C7B288] block mb-1">
                  03
                </span>
                <span className="text-[11px] font-sans-clean tracking-[0.15em] uppercase text-[#E0E8E4] font-medium block">
                  Expert Therapists
                </span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 px-7 py-3 border border-[#3E524C] hover:border-[#C7B288] text-xs font-sans-clean tracking-[0.2em] uppercase text-[#E0E8E4] hover:text-[#C7B288] transition-all duration-300"
              >
                <span>View Our Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Gallery */}
      <section
        id="experience"
        className="py-24 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="w-full lg:w-1/3 pt-4"
          >
            <span className="text-[11px] font-sans-clean tracking-[0.3em] uppercase text-[#717E77] block mb-3">
              The Experience
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl font-normal text-[#1A2320] mb-6 leading-tight">
              Step Into Serenity
            </h2>
            <p className="text-sm font-sans-clean text-[#56635C] font-light leading-relaxed mb-8">
              From tranquil spaces to soothing rituals, every detail is designed
              to help you slow down and feel renewed.
            </p>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-xs font-sans-clean tracking-[0.18em] uppercase text-[#1C2826] hover:text-[#485E56] transition-colors py-1 border-b border-[#1C2826]"
            >
              <span>Explore Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {galleryImages.map((img, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <Link
                  href="/gallery"
                  className="h-64 sm:h-80 overflow-hidden group relative bg-[#E2DDCF] block"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-[10px] font-sans-clean tracking-widest text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase">
                    {img.alt}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#121A18] text-[#F7F5F0] py-20 px-6 sm:px-12 lg:px-20 border-t border-[#23312E]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex items-end justify-between mb-16"
          >
            <div>
              <span className="text-[11px] font-sans-clean tracking-[0.3em] uppercase text-[#A0B0A8] block mb-3">
                Kind Words
              </span>
              <h2 className="font-serif-luxury text-4xl sm:text-5xl font-normal text-[#FAF8F5]">
                What Our Guests Say
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  setActiveTestimonial((prev) =>
                    prev === 0 ? testimonials.length - 1 : prev - 1
                  )
                }
                className="w-10 h-10 rounded-full border border-[#374943] hover:border-[#C7B288] text-[#E0E8E4] flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() =>
                  setActiveTestimonial((prev) =>
                    prev === testimonials.length - 1 ? 0 : prev + 1
                  )
                }
                className="w-10 h-10 rounded-full border border-[#374943] hover:border-[#C7B288] text-[#E0E8E4] flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {testimonials.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={`p-8 bg-[#18221F] border border-[#273833] rounded-sm flex flex-col justify-between transition-all duration-300 ${
                    idx === activeTestimonial
                      ? "border-[#C7B288] shadow-lg scale-102"
                      : "opacity-85 hover:opacity-100"
                  }`}
                >
                  <p className="font-serif-luxury text-lg italic text-[#E2EAE5] leading-relaxed mb-8">
                    "{item.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-11 h-11 rounded-full object-cover border border-[#3C5049]"
                    />
                    <div>
                      <span className="text-xs font-sans-clean font-medium text-[#FAF8F5] block">
                        {item.name}
                      </span>
                      <span className="text-[10px] font-sans-clean text-[#8C9C94] uppercase tracking-wider">
                        Verified Client
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B100F] text-[#D8E0DC] pt-20 pb-12 border-t border-[#1C2724]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <Link href="/" className="flex flex-col mb-4">
                <span className="font-serif-luxury text-2xl tracking-[0.25em] text-[#FAF8F5] uppercase">
                  Botanica
                </span>
                <span className="text-[9px] font-sans-clean tracking-[0.3em] uppercase text-[#889890] -mt-1">
                  Wellness
                </span>
              </Link>
              <p className="text-xs font-sans-clean text-[#83928B] leading-relaxed mb-6 font-light">
                Restore • Rebalance • Rejuvenate
              </p>
            </div>

            <div>
              <h4 className="text-xs font-sans-clean tracking-[0.2em] uppercase text-[#C7B288] mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3 text-xs font-sans-clean text-[#99A8A0]">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="hover:text-white transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <a
                    href="#philosophy"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <Link
                    href="/location"
                    className="hover:text-white transition-colors"
                  >
                    Location
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-sans-clean tracking-[0.2em] uppercase text-[#C7B288] mb-6">
                Location & Details
              </h4>
              <ul className="space-y-3 text-xs font-sans-clean text-[#99A8A0]">
                <li className="flex items-center gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C7B288]" />
                  <span>Green Park, New Delhi</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-[#C7B288]" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#C7B288]" />
                  <span>hello@botanica.com</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="w-3.5 h-3.5 text-[#C7B288]" />
                  <span>Mon – Sun: 9AM – 9PM</span>
                </li>
              </ul>
            </div>

            <div className="relative">
              <h4 className="text-xs font-sans-clean tracking-[0.2em] uppercase text-[#C7B288] mb-6">
                Stay Connected
              </h4>
              <p className="text-xs font-sans-clean text-[#99A8A0] mb-4">
                Follow us for daily wellness inspiration and seasonal rituals.
              </p>

              <svg
                className="absolute right-0 bottom-0 w-32 h-32 opacity-15 pointer-events-none text-[#C7B288]"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M50 90 Q30 60 50 10 Q70 60 50 90 Z" />
                <path d="M50 90 Q20 50 10 30 Q40 40 50 90 Z" />
                <path d="M50 90 Q80 50 90 30 Q60 40 50 90 Z" />
              </svg>
            </div>
          </div>

          <div className="pt-8 border-t border-[#182421] flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans-clean text-[#62736B] gap-4">
            <p>© 2026 Botanica Wellness. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#A0B0A8] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#A0B0A8] transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}