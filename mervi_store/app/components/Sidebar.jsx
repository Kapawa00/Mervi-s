"use client";

import Image from "next/image";
import Link from "next/link";

export default function Sidebar({ products }) {

  const types = [...new Set(products.map(p => p.type))];

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
      <div className="bg-white border border-gray-300 p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Collections
        </h3>
        <ul className="space-y-2 text-sm text-gray-600">
          {collections.map((col) => (
            <li key={col} className="hover:underline cursor-pointer">
              {col}
            </li>
          ))}
        </ul>
      </div>

      {/* Dynamic Types */}
      <div className="bg-white border border-gray-300 p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Product Types
        </h3>
        <ul className="space-y-2 text-sm text-gray-600">
          {types.map((type) => (
            <li key={type}>
              <Link
                href={`/catalog?type=${type}`}
                className="hover:underline"
              >
                {type}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    {/* Best Sellers */}
<div className="bg-white border border-[#dcdcdc] p-6">
  <h3 className="text-[20px] font-semibold mb-6 text-gray-800">
    Best Sellers
  </h3>

  <div className="space-y-6">

    {products.slice(0, 3).map((item) => (
      <div key={item.slug} className="flex gap-4">

        {/* ✅ Mini image carrée exacte */}
        <div className="relative w-[90px] h-[90px] bg-white border border-[#dcdcdc] overflow-hidden">
          {item.image?.[0] && (
            <Image
              src={item.image[0]}
              alt={item.title}
              fill
              className="object-cover"
            />
          )}
        </div>

        {/* ✅ Infos */}
        <div>
          <p className="text-[13px] text-gray-800 leading-tight">
            {item.title}
          </p>

          <p className="text-[14px] text-gray-600 mt-2">
            ${item.price}.00
          </p>
        </div>

      </div>
    ))}

  </div>
</div>
    </div>
  );
}