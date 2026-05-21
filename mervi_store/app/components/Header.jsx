"use client";
import Link from "next/link";
import { Check, ShoppingCart } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function Header() {
  const { totalItems, totalPrice, showPopup } = useCart();

  return (
    <header className="bg-[#efefef] border-b border-[#dcdcdc]">
      
      {/* Top bar */}
      <div className="max-w-[1200px] mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">

        {/* Logo */}
        <Link href="/" className="text-center md:text-left">
          <div>
            <h1 className="text-2xl md:text-3xl font-light text-gray-800">
              <span className="font-semibold">
                Mervi <span style={{ color: "#7A8B7A" }}>'</span>s
              </span>
            </h1>
            <p className="text-xs text-gray-500">
              The biggest choice on the web
            </p>
          </div>
        </Link>

        {/* Right section */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 w-full md:w-auto">

          {/* Search */}
          <div className="relative w-full sm:w-[250px]">
            <input
              type="text"
              placeholder="Search store..."
              className="border border-gray-300 bg-white px-4 py-2 text-sm w-full"
            />
          </div>

          {/* Cart */}
          <div className="relative bg-[#7A8B7A] text-white px-4 py-2 text-sm flex items-center justify-center gap-2 rounded w-full sm:w-auto">

            <ShoppingCart size={16} />

            <Link href="/cart" className="hover:underline text-center">
              <span className="hidden sm:inline">
                My cart: {totalItems} item(s) – XAF{totalPrice.toFixed(2)}
              </span>
              <span className="sm:hidden">
                {totalItems} – XAF{totalPrice.toFixed(2)}
              </span>
            </Link>

            {showPopup && (
              <div className="absolute top-full right-0 mt-3 bg-green-600 text-white text-xs px-4 py-2 rounded shadow-lg animate-fadeIn flex items-center gap-1 whitespace-nowrap">
                <Check size={14} /> Product added
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#f7f7f7] border-t border-[#dcdcdc] border-b border-[#dcdcdc]">
        <div className="max-w-[1200px] mx-auto px-4">
          <ul className="flex overflow-x-auto text-sm text-gray-700 whitespace-nowrap">
            {["Home", "Catalog", "Blog", "About Us", "Contact us"].map((item) => (
              <li
                key={item}
                className="px-6 py-3 border-r border-[#dcdcdc] hover:bg-white cursor-pointer flex-shrink-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>

    </header>
  );
}