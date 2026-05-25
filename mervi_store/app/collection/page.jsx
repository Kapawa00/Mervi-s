"use client";

import Link from "next/link";
import Image from "next/image";

const collections = [
  {
    title: "Panneaux Publicitaires",
    image: "/images/pexels-matreding-7108769.jpg",
  },
  {
    title: "Alucobonds",
    image: "/images/img2.png",
  },
  {
    title: "Décoration intérieure",
    image: "/images/WhatsApp Image 2026-05-21 at 9.30.43 AM (2).jpeg",
  },
  {
    title: "Plaques publicitaires",
    image: "/images/WhatsApp Image 2026-05-21 at 9.30.55 AM (5).jpeg",
  },
];

export default function CollectionPage() {
  return (
    <section id="next-section" className="py-20" style={{ backgroundColor: "#F8F6F2" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre section */}
        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl font-light tracking-tight"
            style={{ color: "#2B2B2B" }}
          >
            Nos Collections
          </h2>
          <div
            className="w-20 h-[2px] mx-auto mt-4"
            style={{ backgroundColor: "#7A8B7A" }}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {collections.map((item) => {
            const slug = item.title
              .toLowerCase()
              .replace(/\s+/g, "-")
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "");

            return (
              <Link
                key={item.title}
                href={`/categorie?tab=${slug}`}
                className="relative group overflow-hidden cursor-pointer block"
              >
                {/* Image */}
                <Image
                  width={1200}
                  height={420}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[220px] sm:h-[280px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(43,43,43,0.4), rgba(43,43,43,0.1))",
                  }}
                />

                {/* Label */}
                <div className="absolute inset-0 flex items-center justify-center p-2">
                  <span
                    className="px-4 py-2 md:px-8 md:py-3 text-xs md:text-base tracking-wide md:tracking-widest uppercase font-medium backdrop-blur-sm transition-all duration-300 group-hover:scale-105 text-center"
                    style={{
                      backgroundColor: "rgba(248,246,242,0.85)",
                      color: "#2B2B2B",
                      border: "1px solid #D8D3CC",
                    }}
                  >
                    {item.title}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}