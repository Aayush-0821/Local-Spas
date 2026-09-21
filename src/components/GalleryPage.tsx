"use client";

import React, { useState } from 'react';
import Link from 'next/link';
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

  return (
    <div className="min-h-screen w-full bg-[#F7F5F0] text-[#1A221E] font-sans antialiased selection:bg-[#1C2826] selection:text-[#E2D8C3]">
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
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#F7F5F0]/90 backdrop-blur-md border-b border-[#E3DEC3]/40">
        <div className="w-full px-6 sm:px-12 lg:px-16 h-20 flex items-center justify-between">
          <Link href="/" className="group flex flex-col">
            <span className="font-serif-luxury text-2xl font-normal tracking-[0.25em] text-[#1C2826] uppercase group-hover:text-[#3B4E47] transition-colors">
              Botanica
            </span>
            <span className="text-[9px] font-sans-clean tracking-[0.3em] uppercase text-[#6E7B74] -mt-1">
              Wellness
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-10 text-xs font-sans-clean tracking-[0.18em] uppercase text-[#3D4842]">
            <Link href="/" className="hover:text-[#0D1612] transition-colors py-1 border-b border-transparent hover:border-[#1C2826]">Home</Link>
            <Link href="/services" className="hover:text-[#0D1612] transition-colors py-1 border-b border-transparent hover:border-[#1C2826]">Services</Link>
            <Link href="/gallery" className="text-[#0D1612] py-1 border-b border-[#1C2826]">Gallery</Link>
            <Link href="/#philosophy" className="hover:text-[#0D1612] transition-colors py-1 border-b border-transparent hover:border-[#1C2826]">About</Link>
            <a href="#contact" className="hover:text-[#0D1612] transition-colors py-1 border-b border-transparent hover:border-[#1C2826]">Contact</a>
          </nav>

          <div>
            <Link
              href="/services"
              className="inline-block px-6 py-2.5 text-xs font-sans-clean tracking-[0.15em] uppercase text-[#F7F5F0] bg-[#1C2826] hover:bg-[#2C3E3A] border border-[#1C2826] rounded-sm transition-all duration-300 shadow-sm"
            >
              Book a Treatment
            </Link>
          </div>
        </div>
      </header>

      {/* Main Gallery Container */}
      <main className="pt-28 pb-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 text-xs font-sans-clean tracking-[0.12em] transition-all duration-300 rounded-full ${
                activeCategory === cat.id
                  ? 'bg-[#1C2826] text-[#F7F5F0] shadow-sm font-medium'
                  : 'bg-transparent text-[#5B6660] hover:text-[#1C2826]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 6-Grid Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {filteredItems.map((item) => (
            <div
              key={item.id}
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
                  <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                    <Maximize2 className="w-4 h-4" />
                  </span>
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
            </div>
          ))}
        </div>

        {/* Editorial Quote Section */}
        <div className="text-center py-12 border-t border-[#E0DBCF]/80">
          <blockquote className="font-serif-luxury text-3xl sm:text-4xl text-[#1C2826] font-normal leading-relaxed max-w-2xl mx-auto italic mb-4">
            "A place where time slows down and wellness takes over."
          </blockquote>
          <div className="w-8 h-px bg-[#8A9690] mx-auto"></div>
        </div>

      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm p-6 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="max-w-4xl w-full max-h-[85vh] overflow-hidden relative rounded-sm"
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
          </div>
        </div>
      )}

      {/* Footer */}
      <footer id="contact" className="w-full bg-[#0B100F] text-[#D8E0DC] pt-20 pb-12 border-t border-[#1C2724]">
        <div className="w-full px-6 sm:px-12 lg:px-20">
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
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-sans-clean tracking-[0.2em] uppercase text-[#C7B288] mb-6">
                Contact
              </h4>
              <ul className="space-y-3 text-xs font-sans-clean text-[#99A8A0]">
                <li className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-[#C7B288]" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#C7B288]" />
                  <span>hello@botanica.com</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C7B288]" />
                  <span>Green Park, New Delhi</span>
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