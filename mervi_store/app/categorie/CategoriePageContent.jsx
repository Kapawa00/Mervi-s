"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import CategorieHero from "../components/CategoriePage";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/app/data/products";

export default function CategoriePageContent() {
    const tabItems = [
        "plaque publicitaire",
        "panneaux publicitaire",
        "alucobonds",
        "decoration interieure",
    ];

    const searchParams = useSearchParams();
    const tabFromUrl = searchParams.get("tab");

    const [activeTab, setActiveTab] = useState(tabItems[0]);
    const [sort, setSort] = useState("A-Z");

    useEffect(() => {
        if (tabFromUrl && tabItems.includes(tabFromUrl)) {
            setActiveTab(tabFromUrl);
        }
    }, [tabFromUrl]);

    const filteredProducts = products
        .filter((p) => p.category === activeTab)
        .sort((a, b) =>
            sort === "A-Z"
                ? a.title.localeCompare(b.title)
                : b.title.localeCompare(a.title)
        );

    return (
        <>
            {/* HERO */}
            <CategorieHero />

            {/* INTRO */}
            <section className="max-w-5xl mx-auto px-6 text-center mb-16">
                <p style={{ color: "#6B6B6B" }}>
                    Sélectionnez une catégorie pour explorer nos produits et filtrer
                    selon vos préférences.
                </p>
            </section>

            <div className="max-w-7xl mx-auto px-6">
                {/* TABS */}
                <div
                    className="flex flex-wrap justify-center gap-4 border-b pb-6"
                    style={{ borderColor: "#D8D3CC" }}
                >
                    {tabItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => setActiveTab(item)}
                            className="px-5 py-2 text-sm uppercase tracking-widest border transition duration-300"
                            style={{
                                borderColor: "#D8D3CC",
                                backgroundColor: activeTab === item ? "#7A8B7A" : "transparent",
                                color: activeTab === item ? "#FFFFFF" : "#2B2B2B",
                            }}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* FILTRE */}
                <div className="flex justify-between items-center mt-10 flex-wrap gap-4">
                    <p style={{ color: "#6B6B6B" }}>
                        {filteredProducts.length} produits trouvés
                    </p>

                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="px-4 py-2 border rounded-md bg-white"
                        style={{
                            borderColor: "#D8D3CC",
                            color: "#2B2B2B",
                        }}
                    >
                        <option value="A-Z">Nom A‑Z</option>
                        <option value="Z-A">Nom Z‑A</option>
                    </select>
                </div>

                {/* PRODUITS */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
                    {filteredProducts.map((product) => (
                        <Link
                            key={product.slug}
                            href={`/produit/${product.slug}`}
                            className="group block"
                        >
                            <div className="relative w-full h-[240px] bg-white border border-[#ECE7E0] overflow-hidden">
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

                            <div className="mt-4">
                                <h3
                                    className="text-[13px] font-medium line-clamp-2"
                                    style={{ color: "#2B2B2B" }}
                                >
                                    {product.title}
                                </h3>

                                <div className="mt-2 flex items-center gap-2">
                                    <span
                                        className={`font-semibold text-[14px] ${product.oldPrice ? "text-[#7A8B7A]" : "text-[#2B2B2B]"
                                            }`}
                                    >
                                        {product.price}XAF
                                    </span>

                                    {product.oldPrice && (
                                        <span className="line-through text-sm text-[#6B6B6B]">
                                            {product.oldPrice}XAF
                                        </span>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* FEATURED PRODUCTS — placed AFTER products presentation */}
            <section className="py-20" style={{ backgroundColor: "#F8F6F2" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <h2
                        className="text-3xl font-semibold mb-12"
                        style={{ color: "#2B2B2B" }}
                    >
                        Produits en Vedette
                    </h2>

                    {/* 👇 Added .slice(0, 6) to limit to 6 items */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                        {products.slice(0, 6).map((product) => (
                            <Link
                                key={product.slug}
                                href={`/produit/${product.slug}`}
                                className="group block"
                            >
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

                                <div className="mt-4">
                                    <h3 className="text-[13px] font-medium text-gray-800 line-clamp-2">
                                        {product.title}
                                    </h3>

                                    <div className="mt-2 flex items-center gap-2">
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
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}