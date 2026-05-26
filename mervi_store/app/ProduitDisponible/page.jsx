"use client";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data/products";


export default function FeaturedProducts() {
    return (
        <section
            className="py-20"
            style={{ backgroundColor: "#F8F6F2" }}
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Title */}
                <h2
                    className="text-3xl font-semibold mb-12"
                    style={{ color: "#2B2B2B" }}
                >
                    Produits en Vedette
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">

                    {products.map((product, index) => (
                        <Link
                            key={index}
                            href={`/produit/${product.slug}`}
                            className="group block"
                        >

                            {/* ✅ Image Card exacte */}
                            <div className="relative w-full h-[240px] bg-white border border-[#dcdcdc] overflow-hidden">

                                {product.vendu && (
                                    <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white bg-[#7A8B7A] z-10">
                                        Vendu
                                    </span>
                                )}

                                <Image
                                    src={product.image?.[0] || "/images/fallback.jpg"}
                                    alt={product.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* ✅ Infos produit */}
                            <div className="mt-4">
                                <h3 className="text-[13px] font-medium text-gray-800 line-clamp-2">
                                    {product.title}
                                </h3>

                                {/* <div className="mt-2 flex items-center gap-2">
                                    <span
                                        className={`font-semibold text-[14px] ${product.oldPrice ? "text-[#7A8B7A]" : "text-gray-800"
                                            }`}
                                    >
                                        XAF{product.price}.00
                                    </span>

                                    {product.oldPrice && (
                                        <span className="line-through text-sm text-gray-400">
                                            XAF{product.oldPrice}.00
                                        </span>
                                    )}
                                </div> */}
                            </div>

                        </Link>
                    ))}

                </div>
            </div>
        </section>
    );
}