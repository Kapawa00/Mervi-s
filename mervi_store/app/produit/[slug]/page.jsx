"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { products } from "@/app/data/products";
import Image from "next/image";
import Header from "../../components/Header";
import ProductGallery from "../../components/ProductGallery";
import Sidebar from "../../components/Sidebar";
import { useCart } from "../../context/CartContext";

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) {
    return <div className="p-20">Produit introuvable</div>;
  }

  return (
    <>
      <Header />

      {/* SECTION PRODUIT */}
      <div className="bg-[#f3f3f3] py-10">
        <div className="max-w-[1200px] mx-auto px-4">

          {/* ✅ Responsive Grid */}
          <div className="grid gap-8 
                          grid-cols-1 
                          md:grid-cols-2 
                          lg:grid-cols-[520px_1fr_280px]">

            {/* IMAGE */}
            <div className="w-full">
              <ProductGallery images={product.image} />
            </div>

            {/* INFOS */}
            <div className="bg-white border border-[#dcdcdc] p-6">
              <h2 className="text-[18px] font-semibold mb-4">
                {product.title}
              </h2>

              <p className="text-[16px] mb-4">
                XAF{product.price}.00
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="text-sm">Qty:</span>
                <input
                  type="number"
                  min="1"
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                  className="w-14 h-8 border border-[#dcdcdc] text-center"
                />
                <button
                  onClick={() => addToCart(product, qty)}
                  className="bg-[#7A8B7A] text-white px-6 h-8 text-sm w-full sm:w-auto"
                >
                  Add to cart
                </button>
              </div>

              <div className="border-t pt-4 text-sm text-gray-600">
                <p>Type: {product.type}</p>
                <p>Vendor: Furniture Store</p>
              </div>

              <div className="border-t mt-6 pt-6">
                <h3 className="font-semibold mb-2">
                  Description:
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="md:col-span-2 lg:col-span-1">
              <Sidebar products={products} />
            </div>

          </div>
        </div>
      </div>

      {/* ✅ RELATED PRODUCTS SECTION */}
      <div className="bg-[#f3f3f3] py-12">
        <div className="max-w-[1200px] mx-auto px-4">

          <div className="grid gap-8
                          grid-cols-1
                          sm:grid-cols-2
                          lg:grid-cols-4">

            {products.slice(0, 4).map((item) => (
              <Link
                key={item.slug}
                href={`/produit/${item.slug}`}
                className="group"
              >

                {/* Image */}
                <div className="relative w-full h-[260px] bg-white border border-[#dcdcdc] overflow-hidden">
                  <Image
                    src={item.image?.[0] || "/images/fallback.jpg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Info */}
                <p className="text-[13px] text-gray-800 mt-3 truncate">
                  {item.title}
                </p>

                <p className="text-[14px] text-gray-600 mt-1">
                  XAF{item.price}.00
                </p>

              </Link>
            ))}

          </div>
        </div>
      </div>
    </>
  );
}