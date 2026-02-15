import { getInstagramImageUrl } from "@/utils/instagram";
import { optimizeHeroImage, optimizeProductImage } from "@/utils/cloudinary";
import { UMKMConfig } from "@/types/config";
import React from "react";
import {
  MapPin,
  Phone,
  Instagram,
  Search,
  ShoppingBag,
  Star,
  ChefHat,
} from "lucide-react";

export default function Template1({ config }: { config: UMKMConfig }) {
  // Safe default colors to prevent hydration errors if config is missing
  const primaryColor = config.theme.primaryColor || "#e11d48";

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-50">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${optimizeHeroImage(config.heroImage)})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
        </div>

        {/* Content using Glassmorphism */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl animate-fade-in-up">
            <div className="flex justify-center mb-4 text-white/90">
              <ChefHat size={48} strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
              {config.businessName}
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light mb-8 italic">
              &quot;{config.tagline}&quot;
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="#menu"
                style={{ backgroundColor: primaryColor }}
                className="inline-flex items-center justify-center gap-2 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:brightness-110 transition-all transform hover:-translate-y-1"
              >
                <ShoppingBag size={20} />
                Lihat Menu
              </a>
              <a
                href={
                  config.cta?.link || `https://wa.me/${config.contact.whatsapp}`
                }
                className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white border border-white/50 backdrop-blur-sm font-bold py-3 px-8 rounded-full transition-all"
              >
                <Phone size={20} />
                {config.cta?.text || "Hubungi Kami"}
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
          <span className="text-sm">Scroll down</span>
        </div>
      </section>

      {/* --- MENU SECTION --- */}
      <section id="menu" className="py-20 px-4 container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Menu Spesial
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{ backgroundColor: primaryColor }}
          />
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            {config.description}
          </p>
        </div>

        {/* Search Disabled as per standardization request */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.products.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full"
            >
              <div className="h-56 overflow-hidden relative bg-gray-100">
                {product.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={optimizeProductImage(product.image)}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">
                    <ShoppingBag size={48} opacity={0.2} />
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider text-gray-800">
                  {product.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl text-gray-800 line-clamp-1">
                    {product.name}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-1">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span
                    style={{ color: primaryColor }}
                    className="font-bold text-lg"
                  >
                    Rp {product.price.toLocaleString("id-ID")}
                  </span>
                  {product.link ? (
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ backgroundColor: primaryColor }}
                      className="text-white p-2 rounded-full hover:brightness-110 transition-all shadow-md active:scale-95 flex items-center justify-center"
                    >
                      <ShoppingBag size={20} />
                    </a>
                  ) : (
                    <button
                      style={{ backgroundColor: primaryColor }}
                      className="text-white p-2 rounded-full hover:brightness-110 transition-all shadow-md active:scale-95"
                    >
                      <ShoppingBag size={20} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {config.products.length > 3 && (
          <div className="text-center mt-12">
            <a
              href={`https://wa.me/${config.contact.whatsapp}?text=Halo, saya ingin melihat menu lengkapnya.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-md border-2"
              style={{ borderColor: primaryColor, color: primaryColor }}
            >
              Lihat Menu Lainnya
            </a>
          </div>
        )}
      </section>

      {/* --- TESTIMONIALS --- */}
      {config.testimonials.length > 0 && (
        <section className="bg-white py-20 border-t border-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-center text-2xl font-bold mb-12">
              Apa Kata Mereka?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {config.testimonials.map((t) => (
                <div key={t.id} className="bg-gray-50 p-6 rounded-xl relative">
                  <div className="flex gap-1 text-yellow-400 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    &quot;{t.comment}&quot;
                  </p>
                  <p className="font-bold text-sm text-gray-900">
                    - {t.customerName}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- INSTAGRAM GALLERY (CURATED) --- */}
      {config.instagramImages && config.instagramImages.length > 0 && (
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 text-center mb-10">
            <div className="flex items-center justify-center gap-2 text-gray-400 mb-2">
              <Instagram size={20} />
              <span className="uppercase tracking-widest text-sm font-semibold">
                @warungbusiti_official
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Galeri Kami</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-b border-white">
            {config.instagramImages.map((img, idx) => (
              <a
                href={img} // Link to the actual post/image
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                className="group relative aspect-square overflow-hidden block"
              >
                {/* Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getInstagramImageUrl(img)}
                  alt={`Gallery ${idx}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="text-white" size={32} />
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={
                config.contact.instagram
                  ? `https://instagram.com/${config.contact.instagram}`
                  : "#"
              }
              className="inline-block border-2 border-gray-900 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-gray-900 hover:text-white transition-all"
            >
              Follow Instagram Kami
            </a>
          </div>
        </section>
      )}

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-8">
            {config.contact.instagram && (
              <a
                href={`https://instagram.com/${config.contact.instagram}`}
                className="hover:text-pink-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
            )}
            <a
              href={`https://maps.google.com/?q=${config.contact.address}`}
              className="hover:text-blue-400 transition-colors"
            >
              <MapPin size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm mb-2">{config.contact.address}</p>
          <p className="text-gray-500 text-xs mt-8">
            &copy; {new Date().getFullYear()} {config.businessName}. Powered by
            UMKM Factory.
          </p>
        </div>
      </footer>

      {/* --- STICKY CTA --- */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow">
        <a
          href={config.cta?.link || `https://wa.me/${config.contact.whatsapp}`}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-2xl font-bold transition-all transform hover:scale-105"
        >
          <Phone size={20} fill="currentColor" />
          <span className="hidden md:inline">Pesan Sekarang</span>
        </a>
      </div>
    </div>
  );
}
