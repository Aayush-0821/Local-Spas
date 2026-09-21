"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  category: 'massages' | 'facials' | 'body' | 'packages';
  description: string;
  duration: string;
  price: string;
  image: string;
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const services: ServiceItem[] = [
    {
      id: '1',
      title: 'Swedish Massage',
      category: 'massages',
      description: 'Gentle, flowing strokes to relax your muscles and improve circulation.',
      duration: '60 mins',
      price: '₹3,000',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: '2',
      title: 'Deep Tissue Massage',
      category: 'massages',
      description: 'Targeted pressure for muscle tension and chronic pain relief.',
      duration: '75 mins',
      price: '₹4,200',
      image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: '3',
      title: 'Signature Facial',
      category: 'facials',
      description: 'Rejuvenate your skin with natural, organic products tailored to your tone.',
      duration: '60 mins',
      price: '₹3,800',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: '4',
      title: 'Body Scrub & Wrap',
      category: 'body',
      description: 'Exfoliate, detoxify and nourish your skin for a natural radiant glow.',
      duration: '60 mins',
      price: '₹3,500',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: '5',
      title: 'Aromatherapy Massage',
      category: 'massages',
      description: 'Essential oils paired with healing touch for complete mental relaxation.',
      duration: '60 mins',
      price: '₹3,200',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: '6',
      title: 'Holistic Head & Scalp Therapy',
      category: 'massages',
      description: 'Warm herb-infused botanical oils to release cranial pressure and tension.',
      duration: '45 mins',
      price: '₹2,500',
      image: 'https://images.unsplash.com/photo-1512290900673-0498703e2e81?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: '7',
      title: 'Full Day Rejuvenation Package',
      category: 'packages',
      description: 'Includes Body Scrub, Deep Tissue Massage, Signature Facial and Tea Ritual.',
      duration: '210 mins',
      price: '₹9,800',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'massages', label: 'Massages' },
    { id: 'facials', label: 'Facials' },
    { id: 'body', label: 'Body Treatments' },
    { id: 'packages', label: 'Wellness Packages' }
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  // Motion Variants strictly typed with the Variants interface
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] } 
    }
  };

  const heroStagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const listContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const listItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.98, 
      transition: { duration: 0.2, ease: "easeIn" } 
    }
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
            <Link href="/" className="hover:text-[#0D1612] transition-colors py-1 border-b border-transparent hover:border-[#1C2826]">Home</Link>
            <Link href="/services" className="text-[#0D1612] py-1 border-b border-[#1C2826]">Services</Link>
            <Link href="/gallery" className="hover:text-[#0D1612] transition-colors py-1 border-b border-transparent hover:border-[#1C2826]">Gallery</Link>
            <Link href="/#philosophy" className="hover:text-[#0D1612] transition-colors py-1 border-b border-transparent hover:border-[#1C2826]">About</Link>
            <Link href="/location" className="hover:text-[#0D1612] transition-colors py-1 border-b border-transparent hover:border-[#1C2826]">Location</Link>
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

      {/* Services Hero Section */}
      <section className="pt-32 pb-16 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={heroStagger}
            className="max-w-2xl"
          >
            <motion.span variants={fadeInUp} className="text-[11px] font-sans-clean tracking-[0.3em] uppercase text-[#6B756E] font-medium block mb-3">
              Pricing
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-serif-luxury text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] text-[#141C1A] mb-6">
              Transparent Pricing. <br />
              Exceptional Experiences.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-sm sm:text-base font-sans-clean font-light text-[#4A5550] max-w-lg leading-relaxed">
              Invest in your well-being with our thoughtfully curated packages and treatments. Choose from single sessions or holistic wellness journeys designed for lasting results.
            </motion.p>
          </motion.div>

          {/* Botanical Leaf Art Element with Breathing Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="hidden md:flex flex-col items-end pt-2 relative"
          >
            <div className="relative w-48 h-64 flex items-center justify-center">
              <motion.svg 
                animate={{ rotate: [0, 1.5, -1.5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full drop-shadow-md origin-bottom" 
                viewBox="0 0 200 280" 
                fill="none"
              >
                <defs>
                  <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3E5448" />
                    <stop offset="100%" stopColor="#1E2B25" />
                  </linearGradient>
                  <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#556E60" />
                    <stop offset="100%" stopColor="#2A3830" />
                  </linearGradient>
                </defs>

                {/* Main Stem */}
                <path d="M100 260 C 110 180, 125 100, 150 20" stroke="#2D3E35" strokeWidth="3" strokeLinecap="round" />

                {/* Left Leaf */}
                <path d="M112 180 C 50 160, 20 110, 30 70 C 70 65, 110 110, 118 165 Z" fill="url(#leafGrad1)" />
                <path d="M112 180 C 80 140, 50 100, 30 70" stroke="#789382" strokeWidth="1" opacity="0.6" />

                {/* Right Top Leaf */}
                <path d="M135 110 C 185 85, 195 40, 175 15 C 135 25, 120 65, 130 105 Z" fill="url(#leafGrad2)" />
                <path d="M135 110 C 155 75, 170 45, 175 15" stroke="#789382" strokeWidth="1" opacity="0.6" />
              </motion.svg>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-right mt-2"
            >
              <span className="text-[10px] font-sans-clean tracking-[0.25em] uppercase text-[#526058] max-w-40 block font-medium leading-relaxed">
                Wellness is a journey <br /> not a destination
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter Tabs with Layout Animations */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-3 sm:gap-4 border-b border-[#E0DBCF] pb-6"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2 text-xs font-sans-clean tracking-[0.15em] uppercase transition-colors duration-300 rounded-full ${
                  isActive ? 'text-[#F7F5F0]' : 'bg-[#EFECE6] text-[#4D5A54] hover:bg-[#E3DEC3]/60 hover:text-[#1C2826]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryIndicator"
                    className="absolute inset-0 bg-[#1C2826] rounded-full shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </motion.div>
      </section>

      {/* Services List Section with AnimatePresence Stagger */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto pb-28">
        <motion.div 
          layout
          variants={listContainer}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                variants={listItem}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="group bg-[#EFECE6]/80 hover:bg-[#EFECE6] border border-[#E0DBCF] hover:border-[#C2BAB0] p-4 sm:p-6 rounded-sm transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:shadow-md"
              >
                <div className="flex items-start sm:items-center gap-5 sm:gap-8">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-sm overflow-hidden shrink-0 relative bg-[#DCD7CB]">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <h3 className="font-serif-luxury text-2xl font-normal text-[#1C2826] mb-1 group-hover:text-[#2C3E3A] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-sans-clean text-[#5B6660] font-light max-w-xl leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-3 text-[11px] font-sans-clean uppercase tracking-wider text-[#6B7770]">
                      <span>{service.duration}</span>
                      <span>•</span>
                      <span className="font-semibold text-[#1C2826]">{service.price}</span>
                    </div>
                  </div>
                </div>

                <div className="w-full sm:w-auto flex justify-end shrink-0 pt-2 sm:pt-0">
                  <motion.div 
                    whileHover={{ scale: 1.03 }} 
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto"
                  >
                    <Link
                      href="/book-demo"
                      className="block w-full sm:w-auto px-7 py-3 text-center text-xs font-sans-clean tracking-[0.18em] uppercase text-[#F7F5F0] bg-[#1C2826] hover:bg-[#2C3E3A] rounded-full transition-all duration-300 shadow-sm"
                    >
                      Book Now
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
                <li><Link href="/#philosophy" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/location" className="hover:text-white transition-colors">Location</Link></li>
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
              <a href="#" className="hover:text-[#A0B0A8] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#A0B0A8] transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}