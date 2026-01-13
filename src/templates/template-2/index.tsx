"use client";
import { getInstagramImageUrl } from "@/utils/instagram";
import { optimizeHeroImage, optimizeProductImage } from "@/utils/cloudinary";
import { UMKMConfig } from "@/types/config";
import React from "react";
import {
  ArrowRight,
  ShoppingCart,
  Star,
  Instagram,
  Menu,
  X,
  Zap,
} from "lucide-react";

export default function Template2({ config }: { config: UMKMConfig }) {
  const primaryColor = config.theme.primaryColor || "#DC2626";
  const secondaryColor = config.theme.secondaryColor || "#000000";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div
      className="min-h-screen bg-black text-white font-sans overflow-x-hidden"
      style={
        {
          "--primary": primaryColor,
          "--secondary": secondaryColor,
          selectionBackgroundColor: primaryColor,
        } as React.CSSProperties
      }
    >
      <style jsx>{`
        ::selection {
          background-color: var(--primary);
          color: white;
        }
      `}</style>
      {/* --- MARQUEE BAR --- */}
      <div
        style={{ backgroundColor: "var(--primary)" }}
        className="text-black font-bold text-xs md:text-sm py-2 overflow-hidden whitespace-nowrap"
      >
        <div className="inline-flex animate-marquee">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="mx-4 uppercase tracking-widest flex items-center gap-2"
            >
              <Zap size={14} fill="black" /> 100% ORIGINAL GUARANTEED{" "}
              <Zap size={14} fill="black" /> FAST SHIPPING
            </span>
          ))}
        </div>
      </div>

      {/* --- HEADER --- */}
      <header className="border-b border-white/10 sticky top-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div style={{ backgroundColor: "var(--primary)" }} className="p-1">
              <Zap size={24} fill="white" className="text-white" />
            </div>
            <h1 className="text-2xl font-black tracking-tighter uppercase italic">
              {config.businessName}
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-wider">
            <a
              href="#new"
              className="hover:text-[var(--primary)] transition-colors"
            >
              New Arrival
            </a>
            <a
              href="#catalog"
              className="hover:text-[var(--primary)] transition-colors"
            >
              Catalog
            </a>
            <a
              href="#testi"
              className="hover:text-[var(--primary)] transition-colors"
            >
              Testimonials
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={
                config.cta?.link || `https://wa.me/${config.contact.whatsapp}`
              }
              className="hidden md:flex items-center gap-2 bg-white text-black px-6 py-2 font-bold uppercase hover:bg-[var(--primary)] hover:text-white transition-colors"
            >
              {config.cta?.text || "Order Now"}
            </a>
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE MENU OVERLAY --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 md:hidden animate-fade-in-up">
          <a
            href="#new"
            className="text-2xl font-black uppercase tracking-widest hover:text-[var(--primary)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            New Arrival
          </a>
          <a
            href="#catalog"
            className="text-2xl font-black uppercase tracking-widest hover:text-[var(--primary)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Catalog
          </a>
          <a
            href="#testi"
            className="text-2xl font-black uppercase tracking-widest hover:text-[var(--primary)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href={`https://wa.me/${config.contact.whatsapp}`}
            style={{ backgroundColor: "var(--primary)" }}
            className="text-black px-8 py-4 font-bold uppercase tracking-widest"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Order Now
          </a>
        </div>
      )}

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] md:h-[80vh] flex flex-col md:flex-row border-b border-white/10">
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 relative overflow-hidden group order-2 md:order-1 bg-black z-10">
          <div
            style={{ borderColor: "var(--primary)" }}
            className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 opacity-50"
          />

          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6 relative z-10">
            {config.tagline.split(" ").map((word, i) => (
              <span key={i} className="block">
                {word}
              </span>
            ))}
          </h2>
          <p
            style={{ borderColor: "var(--primary)" }}
            className="text-gray-400 text-lg mb-8 max-w-md border-l-2 pl-4"
          >
            {config.description}
          </p>
          <div>
            <a
              href="#catalog"
              style={{ backgroundColor: "var(--primary)" }}
              className="inline-flex items-center gap-2 text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Shop Collection <ArrowRight size={20} />
            </a>
          </div>
        </div>
        <div className="w-full h-[50vh] md:w-1/2 md:h-full relative order-1 md:order-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={optimizeHeroImage(config.heroImage)}
            alt="Hero"
            className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden" />
        </div>
      </section>

      {/* --- CATALOG --- */}
      <section id="catalog" className="py-20 container mx-auto px-4">
        <div className="flex justify-between items-end mb-12 border-b-2 border-white/20 pb-4">
          <h3 className="text-4xl md:text-5xl font-black uppercase">
            Latest Drop
          </h3>
          <span
            style={{ color: "var(--primary)" }}
            className="font-mono hidden md:inline-block"
          >
            /// {new Date().getFullYear()} COLLECTION
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.products.length > 0 ? (
            config.products.slice(0, 3).map((product) => (
              <div
                key={product.id}
                className="group border border-white/10 bg-zinc-900/50 hover:border-[var(--primary)] transition-colors duration-300"
              >
                <div className="h-96 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={optimizeProductImage(product.image)}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-2 py-1 uppercase">
                    {product.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold uppercase tracking-wider">
                      {product.name}
                    </h4>
                    <p
                      style={{ color: "var(--primary)" }}
                      className="font-mono font-bold"
                    >
                      Rp {product.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                    {product.description}
                  </p>
                  {product.link ? (
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white text-black py-3 font-bold uppercase hover:bg-[var(--primary)] hover:text-white transition-colors flex justify-center items-center gap-2"
                    >
                      <ShoppingCart size={18} /> Buy Now
                    </a>
                  ) : (
                    <a
                      href={`https://wa.me/${config.contact.whatsapp}?text=Halo, saya ingin memesan ${product.name}`}
                      className="w-full bg-white text-black py-3 font-bold uppercase hover:bg-[var(--primary)] hover:text-white transition-colors flex justify-center items-center gap-2"
                    >
                      <ShoppingCart size={18} /> Order via WA
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-500 uppercase tracking-widest font-bold border-2 border-dashed border-white/10">
              Collection Coming Soon
            </div>
          )}
        </div>

        {config.products.length > 3 && (
          <div className="text-center mt-12">
            <a
              href={`https://wa.me/${config.contact.whatsapp}?text=Halo, saya ingin melihat koleksi lengkapnya.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "var(--primary)" }}
              className="inline-block text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
              View Full Collection
            </a>
          </div>
        )}
      </section>

      {/* --- TESTIMONIALS --- */}
      {config.testimonials.length > 0 && (
        <section id="testi" className="py-20 bg-white text-black">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-12">
              <div
                style={{ backgroundColor: "var(--primary)" }}
                className="h-4 w-4"
              />
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                Word On The Street
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {config.testimonials.map((t) => (
                <div
                  key={t.id}
                  style={{ boxShadow: `8px 8px 0px 0px ${primaryColor}` }}
                  className="border-4 border-black p-8 relative hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all"
                >
                  <div className="absolute -top-6 -left-2 bg-black text-white px-4 py-1 font-bold transform -rotate-2">
                    VERIFIED BUYER
                  </div>
                  <div
                    style={{ color: "var(--primary)" }}
                    className="flex gap-1 mb-6"
                  >
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={24} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-2xl font-black uppercase italic mb-6 leading-tight">
                    &quot;{t.comment}&quot;
                  </p>
                  <div className="flex items-center justify-between border-t-2 border-black pt-4">
                    <p className="font-bold tracking-widest">
                      {t.customerName}
                    </p>
                    <span
                      style={{ backgroundColor: "var(--primary)" }}
                      className="text-xs text-white px-2 py-1"
                    >
                      {t.rating}/5 STARS
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- INSTAGRAM GRID --- */}
      {config.instagramImages && config.instagramImages.length > 0 && (
        <section className="py-20 border-t border-white/10">
          <div className="container mx-auto px-4 mb-8 text-center md:text-left">
            <h3 className="text-2xl font-black uppercase flex items-center gap-2 justify-center md:justify-start">
              <Instagram /> Follow{" "}
              <span style={{ color: "var(--primary)" }}>
                @{config.contact.instagram}
              </span>
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {config.instagramImages.map((img, i) => (
              <a
                href={img}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                className="aspect-square relative group overflow-hidden border border-white/5 block"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getInstagramImageUrl(img)}
                  alt="IG"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div
                  style={{ backgroundColor: `${primaryColor}33` }}
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>
        </section>
      )}

      {/* --- FOOTER --- */}
      <footer
        style={{ borderTopColor: "var(--primary)" }}
        className="bg-black border-t-4 pt-16 pb-8"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-9xl font-black text-zinc-900 select-none pointer-events-none mb-[-4rem] overflow-hidden">
            {config.businessName.toUpperCase()}
          </h2>
          <div className="relative z-10 grid md:grid-cols-3 gap-8 text-sm uppercase tracking-widest text-gray-500">
            <div>
              <p className="text-white font-bold mb-4">Location</p>
              <p>{config.contact.address}</p>
            </div>
            <div>
              <p className="text-white font-bold mb-4">Contact</p>
              <p>WA: {config.contact.whatsapp}</p>
              {config.contact.instagram && (
                <p>IG: @{config.contact.instagram}</p>
              )}
            </div>
            <div>
              <p className="text-white font-bold mb-4">Store Hours</p>
              {config.contact.openHours?.includes(",") ? (
                config.contact.openHours
                  .split(",")
                  .map((line, i) => <p key={i}>{line.trim()}</p>)
              ) : (
                <p>{config.contact.openHours || "Mon - Sun, 9am - 10pm"}</p>
              )}
            </div>
          </div>
          <p className="mt-16 text-center text-xs text-zinc-700">
            {config.footer?.copyrightText ||
              `© ${new Date().getFullYear()} ${
                config.businessName
              }. All Rights Reserved.`}
          </p>
        </div>
      </footer>

      {/* --- FLOATING CTA --- */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={config.cta?.link || `https://wa.me/${config.contact.whatsapp}`}
          style={{ backgroundColor: "var(--primary)" }}
          className="flex items-center gap-2 text-black px-6 py-4 rounded-full shadow-2xl font-bold uppercase tracking-widest hover:scale-105 transition-transform"
        >
          <Zap size={20} fill="black" />
          <span className="hidden md:inline">
            {config.cta?.text || "Order Now"}
          </span>
        </a>
      </div>
    </div>
  );
}
