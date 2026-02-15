"use client";
import React, { useEffect, useState } from "react";
import {
  Coffee,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Star,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { UMKMConfig } from "@/types/config";
import { optimizeHeroImage, optimizeProductImage } from "@/utils/cloudinary";
import { getInstagramImageUrl } from "@/utils/instagram";

export default function Template10({ config }: { config: UMKMConfig }) {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Warm, Coffee-inspired defaults
  const primary = config.theme?.primaryColor || "#78350f"; // Amber-900
  const secondary = config.theme?.secondaryColor || "#fffbeb"; // Amber-50

  return (
    <div
      className="min-h-screen font-serif text-[#433422] bg-[#fdfbf7]"
      style={
        {
          "--primary": primary,
          "--secondary": secondary,
        } as React.CSSProperties
      }
    >
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap");

        .font-serif {
          font-family: "Playfair Display", serif;
        }
        .font-sans {
          font-family: "Lato", sans-serif;
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 top-4 px-4">
        <div className="container max-w-5xl mx-auto bg-white/90 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.05)] px-8 py-3 flex justify-between items-center border border-[#eaddcf]">
          <div className="text-xl font-bold flex items-center gap-2 text-[color:var(--primary)]">
            <Coffee size={24} /> {config.businessName}
          </div>

          <div className="hidden md:flex gap-8 font-sans text-sm font-bold tracking-wide text-[#8c7a6b]">
            <a
              href="#home"
              className="hover:text-[color:var(--primary)] transition-colors"
            >
              Home
            </a>
            <a
              href="#menu"
              className="hover:text-[color:var(--primary)] transition-colors"
            >
              Menu
            </a>
            <a
              href="#about"
              className="hover:text-[color:var(--primary)] transition-colors"
            >
              Story
            </a>
          </div>

          <div className="hidden md:block">
            <a
              href={
                config.cta?.link || `https://wa.me/${config.contact.whatsapp}`
              }
              className="px-6 py-2 bg-[color:var(--primary)] text-[#fffbeb] rounded-full font-sans text-xs font-bold uppercase tracking-widest hover:bg-[#5a270b] transition-colors"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[color:var(--primary)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-x-4 top-24 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 z-40 transition-all duration-300 md:hidden flex flex-col gap-4 text-center border border-[#eaddcf] ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10 pointer-events-none"
          }`}
        >
          <a
            href="#home"
            onClick={() => setIsMenuOpen(false)}
            className="text-xl font-bold text-[#8c7a6b] hover:text-[color:var(--primary)]"
          >
            Home
          </a>
          <a
            href="#menu"
            onClick={() => setIsMenuOpen(false)}
            className="text-xl font-bold text-[#8c7a6b] hover:text-[color:var(--primary)]"
          >
            Menu
          </a>
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="text-xl font-bold text-[#8c7a6b] hover:text-[color:var(--primary)]"
          >
            Story
          </a>
          <hr className="border-[#eaddcf]" />
          <a
            href={
              config.cta?.link || `https://wa.me/${config.contact.whatsapp}`
            }
            onClick={() => setIsMenuOpen(false)}
            className="px-6 py-3 bg-[color:var(--primary)] text-[#fffbeb] rounded-full font-sans text-sm font-bold uppercase tracking-widest"
          >
            Order Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[85vh] md:min-h-screen overflow-hidden flex items-center justify-center pb-40 md:pb-64 pt-32"
      >
        <div
          className="absolute inset-0 z-0 opacity-90"
          style={{
            backgroundImage: `url(${optimizeHeroImage(config.heroImage)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.4}px) scale(1.1)`,
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="relative z-20 text-center text-[#fffbeb] max-w-2xl px-6">
          <div className="mb-4 inline-block border-y border-[#fffbeb]/50 py-1 font-sans text-xs uppercase tracking-[0.3em] font-light animate-fade-in">
            Est. 2024
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic mb-6 leading-tight drop-shadow-lg">
            {config.tagline}
          </h1>
          <p className="text-lg md:text-xl font-sans font-light mb-10 text-[#eaddcf]">
            {config.description}
          </p>
          <a
            href="#menu"
            className="inline-block px-10 py-4 bg-[#fffbeb] text-[color:var(--primary)] rounded-full font-sans font-bold uppercase tracking-widest hover:bg-white transition-colors"
          >
            View Menu
          </a>
        </div>

        {/* Decorative Wave Bottom */}
        <div className="absolute bottom-0 w-full z-20">
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#fdfbf7"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section id="menu" className="py-20 relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <UtensilsCrossed
              className="mx-auto mb-4 text-[#d4c5b5]"
              size={32}
            />
            <h2 className="text-4xl md:text-5xl font-bold text-[color:var(--primary)] mb-4">
              Our Daily Brews
            </h2>
            <p className="font-sans text-[#8c7a6b]">
              Handcrafted with love and passion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {(config.products || []).slice(0, 3).map((product, idx) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-t-[10rem] rounded-b-3xl overflow-hidden mb-6 relative shadow-xl">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={optimizeProductImage(product.image)}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="text-center">
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#9ca3af] mb-1 block">
                    {product.category}
                  </span>
                  <h3 className="text-2xl font-bold text-[color:var(--primary)] mb-2 group-hover:italic transition-all">
                    {product.name}
                  </h3>
                  <div className="w-12 h-[1px] bg-[#d4c5b5] mx-auto mb-3" />
                  <p className="font-sans text-sm text-[#6b7280] mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <span className="text-xl font-bold text-[color:var(--primary)]">
                    Rp {product.price.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {config.products.length > 3 && (
            <div className="text-center mt-16">
              <a
                href={config.cta?.link}
                className="inline-block border-b border-[color:var(--primary)] pb-1 font-sans text-sm font-bold uppercase tracking-widest text-[color:var(--primary)] hover:opacity-70 transition-opacity"
              >
                See Full Menu
              </a>
            </div>
          )}
        </div>
      </section>

      {/* AMBIANCE PARALLAX */}
      <section
        id="about"
        className="py-32 relative flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1442512595331-e89e7385a861?auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[#433422]/60 mix-blend-multiply" />
        <div className="relative z-10 container mx-auto px-6 text-center text-[#fffbeb]">
          <Star
            className="mx-auto mb-6 text-[#fbbf24] fill-[#fbbf24]"
            size={32}
          />
          <p className="text-2xl md:text-3xl italic font-light leading-relaxed max-w-3xl mx-auto">
            "
            {(config.testimonials || [])[0]?.comment ||
              "The best coffee in town, served with a smile."}
            "
          </p>
          <div className="mt-8 font-sans font-bold uppercase tracking-widest text-sm">
            — {(config.testimonials || [])[0]?.customerName || "Happy Customer"}
          </div>
        </div>
      </section>

      {/* INSTAGRAM / GALLERY */}
      {(config.instagramImages || []).length > 0 && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-3xl font-bold text-[color:var(--primary)]">
                @FollowUs
              </h2>
              <a
                href={`https://instagram.com/${config.contact.instagram}`}
                className="font-sans text-sm font-bold uppercase tracking-widest hover:underline"
              >
                View Gallery
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {(config.instagramImages || []).slice(0, 4).map((img, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-2xl overflow-hidden ${
                    i % 2 === 0 ? "mt-0" : "mt-8"
                  }`}
                >
                  <img
                    src={getInstagramImageUrl(img)}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    alt="Moment"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="bg-[#2a221a] text-[#a5917d] py-16 border-t border-[#3d3228]">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <Coffee size={40} className="mx-auto text-[#fffbeb] mb-4" />
            <h3 className="text-2xl font-bold text-[#fffbeb]">
              {config.businessName}
            </h3>
          </div>

          <div className="flex justify-center gap-8 mb-12 font-sans text-sm uppercase tracking-wider font-bold">
            <a href="#home" className="hover:text-[#fffbeb]">
              Home
            </a>
            <a href="#menu" className="hover:text-[#fffbeb]">
              Menu
            </a>
            <a href="#about" className="hover:text-[#fffbeb]">
              About
            </a>
          </div>

          <div className="max-w-md mx-auto space-y-2 mb-12 font-sans text-sm">
            <p>{config.contact.address}</p>
            <p>{config.contact.whatsapp}</p>
          </div>

          <p className="font-sans text-xs uppercase tracking-widest opacity-50">
            {config.footer?.copyrightText}
          </p>
        </div>
      </footer>

      {/* FLOATING CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={config.cta?.link || `https://wa.me/${config.contact.whatsapp}`}
          className="flex items-center justify-center w-14 h-14 bg-[#fffbeb] text-[color:var(--primary)] rounded-full shadow-2xl hover:scale-110 transition-transform"
        >
          <Phone size={24} fill="currentColor" />
        </a>
      </div>
    </div>
  );
}
