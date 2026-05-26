"use client";

import Image from "next/image";
import Link from "next/link";

export default function Sidebar({ products }) {

  // ✅ Remplacement type → category
  const categories = [...new Set(products.map(p => p.category))];

  const collections = [
    "Armoire",
    "Bookcases",
    "Closet Storage",
    "Coffee Tables",
    "Computer Desks",
    "Home Furniture"
  ];

  return (
    <div className="space-y-8">

      {/* Collections */}
      <div className="bg-white border border-[#ECE7E0] p-6">
        <h3 className="text-lg font-semibold mb-4" style={{ color: "#2B2B2B" }}>
          Collections
        </h3>
        <ul className="space-y-2 text-sm" style={{ color: "#6B6B6B" }}>
          {collections.map((col) => (
            <li
              key={col}
              className="cursor-pointer transition hover:underline"
              style={{ color: "#6B6B6B" }}
            >
              {col}
            </li>
          ))}
        </ul>
      </div>

      {/* ✅ Dynamic Categories */}
      <div className="bg-white border border-[#ECE7E0] p-6">
        <h3 className="text-lg font-semibold mb-4" style={{ color: "#2B2B2B" }}>
          Catégories
        </h3>
        <ul className="space-y-2 text-sm">
          {categories.map((category, idx) => (
            <li key={`${category}-${idx}`}>
              <Link
                href={`/categorie?tab=${category}`}
                className="transition hover:underline"
                style={{ color: "#6B6B6B" }}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ✅ Best Sellers */}
      <div className="bg-white border border-[#ECE7E0] p-6">
        <h3 className="text-[20px] font-semibold mb-6" style={{ color: "#2B2B2B" }}>
          Best Sellers
        </h3>

        <div className="space-y-6">

          {products.slice(0, 3).map((item) => (
            <Link
              key={item.slug}
              href={`/produit/${item.slug}`}
              className="flex gap-4 group"
            >

              {/* Image */}
              <div className="relative w-[90px] h-[90px] bg-white border border-[#ECE7E0] overflow-hidden">
                {item.image?.[0] && (
                  <Image
                    src={item.image[0]}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                )}
              </div>

              {/* Infos */}
              <div>
                <p
                  className="text-[13px] leading-tight"
                  style={{ color: "#2B2B2B" }}
                >
                  {item.title}
                </p>

                {/* <p
                  className="text-[14px] mt-2"
                  style={{ color: "#7A8B7A" }}
                >
                  {item.price}XAF
                </p> */}
              </div>

            </Link>
          ))}

        </div>
      </div>

    </div>
  );
}