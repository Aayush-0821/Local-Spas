"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, X, Maximize2 } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'interiors' | 'treatments' | 'facilities' | 'ambience';
  image: string;
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Candlelit Massage Suite',
      category: 'interiors',
      image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: '2',
      title: 'Courtyard Serenity Pool',
      category: 'facilities',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: '3',
      title: 'Botanical Water Lily Basin',
      category: 'ambience',
      image: 'https://images.unsplash.com/photo-1512290900673-0498703e2e81?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: '4',
      title: 'Lounge & Botanical Sanctuary',
      category: 'interiors',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: '5',
      title: 'Organic Facial Ritual',
      category: 'treatments',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: '6',
      title: 'Zen Archway Corridor',
      category: 'interiors',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'interiors', label: 'Interiors' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'ambience', label: 'Ambience' }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  // Motion Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] } 
    }
  };

  const gridContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
    },
    exit: { 
      opacity: 0, 
      scale: 0.92, 
      transition: { duration: 0.2, ease: "easeIn" } 
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 300 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: 10,
      transition: { duration: 0.2 }
    }
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
            <Link href="/" className="hover:text-[#0D1612] transition-colors py-1 border-b border-transparent hover:border-[#1C2826]">Home</Link>
            <Link href="/services" className="hover:text-[#0D1612] transition-colors py-1 border-b border-transparent hover:border-[#1C2826]">Services</Link>
            <Link href="/gallery" className="text-[#0D1612] py-1 border-b border-[#1C2826]">Gallery</Link>
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

      {/* Main Gallery Container */}
      <main className="pt-28 pb-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        
        {/* Category Filter Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-3 mb-10"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2 text-xs font-sans-clean tracking-[0.12em] transition-colors duration-300 rounded-full ${
                  isActive ? 'text-[#F7F5F0] font-medium' : 'bg-transparent text-[#5B6660] hover:text-[#1C2826]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeGalleryCategory"
                    className="absolute inset-0 bg-[#1C2826] rounded-full shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* 6-Grid Gallery Layout */}
        <motion.div 
          layout
          variants={gridContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                onClick={() => setSelectedImage(item)}
                className="group relative h-80 sm:h-96 rounded-sm overflow-hidden bg-[#E2DDCF] cursor-pointer border border-[#E0DBCF] shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-end">
                    <motion.span 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-sm"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </motion.span>
                  </div>
                  <div>
                    <span className="text-[10px] font-sans-clean tracking-[0.2em] uppercase text-white/80 block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif-luxury text-2xl text-white font-normal">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Editorial Quote Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="text-center py-12 border-t border-[#E0DBCF]/80"
        >
          <blockquote className="font-serif-luxury text-3xl sm:text-4xl text-[#1C2826] font-normal leading-relaxed max-w-2xl mx-auto italic mb-4">
            "A place where time slows down and wellness takes over."
          </blockquote>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-8 h-px bg-[#8A9690] mx-auto origin-center"
          ></motion.div>
        </motion.div>

      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm p-6 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white p-2 transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-4xl w-full max-h-[85vh] overflow-hidden relative rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain mx-auto"
              />
              <div className="bg-[#121A18] p-4 text-center">
                <p className="font-serif-luxury text-xl text-[#FAF8F5]">
                  {selectedImage.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="w-full bg-[#0B100F] text-[#D8E0DC] pt-20 pb-12 border-t border-[#1C2724]">
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