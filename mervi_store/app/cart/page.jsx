"use client";

import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import { X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CartPage() {

  const { cart, updateCart, removeFromCart } = useCart();
  const [localCart, setLocalCart] = useState(cart);
  const router = useRouter();

  const handleQtyChange = (slug, qty) => {
    if (qty < 1) return;
    setLocalCart((prev) =>
      prev.map((item) =>
        item.slug === slug ? { ...item, qty } : item
      )
    );
  };

  const handleUpdate = () => {
    updateCart(localCart);
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <>
      <Header />

      <div className="bg-[#f3f3f3] py-10">
        <div className="max-w-[1200px] mx-auto px-4">

          {/* ✅ Responsive Grid */}
          <div className="grid gap-8 
                          grid-cols-1 
                          lg:grid-cols-[1fr_280px]">

            {/* CART CONTENT */}
            <div className="bg-white border border-[#dcdcdc] p-4 sm:p-6">

              <h2 className="text-xl sm:text-2xl mb-8">
                Shopping Cart
              </h2>

              {localCart.length === 0 && (
                <p>Your cart is empty.</p>
              )}

              {localCart.map((item) => (
                <div
                  key={item.slug}
                  className="border-b pb-8 mb-8 
                             flex flex-col sm:flex-row gap-6"
                >

                  {/* ✅ Image Responsive */}
                  <div className="relative 
                                  w-full 
                                  sm:w-[150px] 
                                  aspect-square 
                                  sm:h-[150px] 
                                  border overflow-hidden">
                    <Image
                      src={item.image?.[0] || "/images/fallback.jpg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">

                    <div className="flex justify-between items-start">
                      <h3 className="text-base sm:text-lg font-semibold">
                        {item.title}
                      </h3>

                      <button
                        onClick={() => removeFromCart(item.slug)}
                        className="text-red-500"
                      >
                        <X size={18} />
                      </button>
                    </div>

                    <p className="mt-4">XAF{item.price}.00</p>

                    <div className="mt-4 flex items-center gap-3">
                      <span>Qty:</span>
                      <input
                        type="number"
                        min="1"
                        value={item.qty}
                        onChange={(e) =>
                          handleQtyChange(
                            item.slug,
                            Number(e.target.value)
                          )
                        }
                        className="w-16 border text-center"
                      />
                    </div>

                    <div className="text-left sm:text-right mt-4 font-semibold">
                      Total: XAF{(item.price * item.qty).toFixed(2)}
                    </div>

                  </div>

                </div>
              ))}

              {localCart.length > 0 && (
                <>
                  {/* ✅ Subtotal */}
                  <div className="flex justify-between text-lg font-semibold mt-8">
                    <span>Subtotal</span>
                    <span>
                      XAF
                      {localCart
                        .reduce(
                          (sum, item) =>
                            sum + item.qty * item.price,
                          0
                        )
                        .toFixed(2)}
                    </span>
                  </div>

                  {/* ✅ Buttons Responsive */}
                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={handleUpdate}
                      className="bg-[#7A8B7A] text-white px-6 py-2 w-full sm:w-auto"
                    >
                      Update cart
                    </button>

                    <button
                      onClick={handleCheckout}
                      className="bg-[#7A8B7A] text-white px-6 py-2 w-full sm:w-auto"
                    >
                      Check out
                    </button>
                  </div>
                </>
              )}

            </div>

            {/* ✅ Sidebar */}
            <div className="lg:block">
              <Sidebar products={cart} />
            </div>

          </div>

        </div>
      </div>
    </>
  );
}