"use client";
import { getInstagramImageUrl } from "@/utils/instagram";
import { optimizeHeroImage, optimizeProductImage } from "@/utils/cloudinary";
import { UMKMConfig } from "@/types/config";
import React, { useState } from "react";
import {
  ShoppingBag,
  Menu,
  X,
  Instagram,
  ArrowRight,
  Minus,
} from "lucide-react";

export default function Template3({ config }: { config: UMKMConfig }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-black selection:text-white">
      {/* --- SIDEBAR / HEADER NAVIGATION --- */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100 md:border-b-0 md:border-r md:w-20 md:h-screen md:flex md:flex-col md:items-center md:py-8 lg:w-64 lg:items-start lg:px-12 transition-all duration-300">
        <div className="flex items-center justify-between px-6 py-4 w-full md:block md:w-auto md:p-0">
          <div className="text-2xl font-serif font-bold tracking-tighter">
            {config.businessName.toUpperCase()}
            <span className="text-zinc-400">.</span>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-col gap-8 mt-16 w-full text-sm uppercase tracking-widest font-medium text-zinc-500">
          <a href="#hero" className="hover:text-black transition-colors">
            Home
          </a>
          <a href="#collection" className="hover:text-black transition-colors">
            Collection
          </a>
          <a href="#about" className="hover:text-black transition-colors">
            About
          </a>
          <a href="#journal" className="hover:text-black transition-colors">
            Journal
          </a>
        </nav>

        <div className="hidden md:block mt-auto text-zinc-400">
          <div className="flex flex-col gap-4">
            {config.contact.instagram && (
              <a
                href={`https://instagram.com/${config.contact.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-black transition-colors"
              >
                <Instagram size={20} />
              </a>
            )}
          </div>
        </div>
      </header>

      {/* --- MOBILE NAVIGATION OVERLAY --- */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <a
          href="#hero"
          className="text-3xl font-serif hover:text-zinc-500"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#collection"
          className="text-3xl font-serif hover:text-zinc-500"
          onClick={() => setIsMenuOpen(false)}
        >
          Collection
        </a>
        <a
          href="#about"
          className="text-3xl font-serif hover:text-zinc-500"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </a>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="md:pl-20 lg:pl-64 transition-all duration-300">
        {/* HERO SECTION */}
        <section
          id="hero"
          className="relative h-screen flex flex-col md:flex-row"
        >
          <div className="h-[60%] md:h-full w-full md:w-1/2 relative bg-zinc-100 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={optimizeHeroImage(config.heroImage)}
              alt="Hero"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 hover:scale-100"
            />
          </div>
          <div className="h-[40%] md:h-full w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 bg-white">
            <span className="text-xs font-bold tracking-[0.3em] text-zinc-400 mb-6 uppercase">
              Est. 2024
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-[1.1]">
              {config.tagline}
            </h1>
            <p className="text-zinc-500 mb-10 max-w-sm leading-relaxed">
              {config.description}
            </p>
            <a
              href="#collection"
              className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-zinc-500 transition-colors"
            >
              Explore Collection{" "}
              <span className="w-8 h-[1px] bg-black group-hover:w-12 transition-all duration-300"></span>
            </a>
          </div>
        </section>

        {/* COLLECTION GRID */}
        <section id="collection" className="py-24 px-6 md:px-12">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-3xl font-serif">Selected Pieces</h2>
            <div className="hidden md:block text-xs tracking-widest text-zinc-400">
              01 / 03
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {config.products.slice(0, 3).map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-zinc-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={optimizeProductImage(product.image)}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {product.link ? (
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute bottom-0 left-0 w-full bg-black text-white py-4 text-center text-xs uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300 font-medium"
                    >
                      Shop Now
                    </a>
                  ) : (
                    <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur text-black py-4 text-center text-xs uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300 font-medium">
                      Available Instore
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-lg font-serif mb-1 group-hover:text-zinc-500 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-zinc-400 uppercase tracking-wider">
                      {product.category}
                    </p>
                  </div>
                  <span className="text-sm font-medium">
                    Rp {product.price.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {config.products.length > 3 && (
            <div className="text-center mt-16">
              <a
                href={`https://wa.me/${config.contact.whatsapp}?text=Halo, saya ingin melihat koleksi lengkap.`}
                target="_blank"
                rel="noreferrer"
                className="inline-block border-b border-black pb-1 text-sm font-bold uppercase tracking-widest hover:text-zinc-500 transition-colors"
              >
                View All Collection
              </a>
            </div>
          )}
        </section>

        {/* TESTIMONIAL SLIDER (Now Grid) */}
        {config.testimonials.length > 0 && (
          <section
            id="about"
            className="py-24 bg-zinc-50 px-6 md:px-20 text-center"
          >
            <Minus className="mx-auto mb-8 text-zinc-300" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {config.testimonials.map((t) => (
                <div key={t.id} className="flex flex-col items-center">
                  <blockquote className="text-xl md:text-2xl font-serif text-zinc-800 leading-snug mb-6">
                    &quot;{t.comment}&quot;
                  </blockquote>
                  <cite className="text-xs font-bold uppercase tracking-widest not-italic">
                    — {t.customerName}
                  </cite>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* INSTAGRAM (Clean Grid) */}
        {config.instagramImages && (
          <section
            id="journal"
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
          >
            {config.instagramImages.map((img, i) => (
              <a
                key={i}
                href={img}
                target="_blank"
                rel="noreferrer"
                className="aspect-square relative group overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getInstagramImageUrl(img)}
                  alt="IG"
                  className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram className="text-white" />
                </div>
              </a>
            ))}
            <div className="aspect-square bg-black text-white flex flex-col items-center justify-center text-center p-6">
              <h3 className="font-serif text-2xl mb-2">Follow Us</h3>
              <p className="text-xs text-zinc-500 uppercase tracking-widest mb-4">
                @{config.contact.instagram}
              </p>
              <ArrowRight size={20} />
            </div>
          </section>
        )}

        {/* FOOTER */}
        <footer className="bg-white py-16 px-6 md:px-12 border-t border-zinc-100">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-xs">
              <h4 className="text-xl font-serif font-bold mb-6">
                {config.businessName}
              </h4>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {config.contact.address}
              </p>
            </div>
            <div className="text-right">
              <a
                href={`https://wa.me/${config.contact.whatsapp}`}
                className="text-lg font-medium hover:text-zinc-500 transition-colors block mb-2"
              >
                + {config.contact.whatsapp}
              </a>
              <p className="text-sm text-zinc-400">
                {config.footer?.copyrightText ||
                  `© ${new Date().getFullYear()}. All Rights Reserved.`}
              </p>
            </div>
          </div>
        </footer>
      </main>

      {/* --- FLOATING CTA --- */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href={config.cta?.link || `https://wa.me/${config.contact.whatsapp}`}
          className="flex items-center justify-center w-16 h-16 bg-black text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
        >
          <ShoppingBag size={24} />
        </a>
      </div>
    </div>
  );
}
