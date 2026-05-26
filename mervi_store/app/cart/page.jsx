"use client";

import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import { X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import StatusModal from "@/app/components/StatusModal"; // adjust path if needed


export default function CartPage() {

  const { cart, updateCart, removeFromCart } = useCart();
  const [localCart, setLocalCart] = useState(cart);
  const router = useRouter();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);

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

  // const handleCheckout = () => {
  //   router.push("/checkout");
  // };

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

                    {/* <p className="mt-4">XAF{item.price}.00</p> */}

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

                    {/* <div className="text-left sm:text-right mt-4 font-semibold">
                      Total: XAF{(item.price * item.qty).toFixed(2)}
                    </div> */}

                  </div>

                </div>
              ))}

              {localCart.length > 0 && (
                <>
                  {/* ✅ Subtotal */}
                  {/* <div className="flex justify-between text-lg font-semibold mt-8">
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
                  </div> */}

                  {/* ✅ Buttons Responsive */}
                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={handleUpdate}
                      className="bg-[#7A8B7A] text-white px-6 py-2 w-full sm:w-auto"
                    >
                      Update cart
                    </button>

                    <button
                      onClick={() => setIsContactOpen(true)}
                      className="bg-[#7A8B7A] text-white px-6 py-2 w-full sm:w-auto"
                    >
                      Passer la commande
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
      {/* ✅ CONTACT MODAL */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-[95%] sm:w-[500px] rounded-2xl p-6 relative animate-zoomIn">

            {/* Close Button */}
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-4 right-4 text-gray-500"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-semibold mb-6">
              Contactez-nous
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsContactOpen(false);
                setIsStatusOpen(true);
              }}
              className="space-y-4"
            >
              {/* Nom */}
              <input
                type="text"
                required
                placeholder="Nom complet"
                className="w-full border p-3 rounded-lg"
              />

              {/* Email */}
              <input
                type="email"
                required
                placeholder="Email"
                className="w-full border p-3 rounded-lg"
              />

              {/* Produit Optionnel */}
              <select className="w-full border p-3 rounded-lg">
                <option value="">Sélectionnez un produit (optionnel)</option>
                {cart.map((item) => (
                  <option key={item.slug} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>

              {/* Message */}
              <textarea
                rows="4"
                required
                placeholder="Votre message"
                className="w-full border p-3 rounded-lg"
              />

              {/* ✅ WhatsApp + Submit */}
              <div className="flex items-center justify-between mt-4">

                {/* WhatsApp */}
                <a
                  href="https://wa.me/237697025090"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width={46}
                    height={46}
                    fill="#18ec09"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.44 4.552A10.413 10.413 0 0 0 12.044 1.5C6.281 1.5 1.59 6.168 1.588 11.906a10.341 10.341 0 0 0 1.396 5.203L1.5 22.5l5.543-1.447a10.483 10.483 0 0 0 4.997 1.266h.004c5.762 0 10.453-4.669 10.456-10.407a10.32 10.32 0 0 0-3.06-7.36Zm-7.396 16.01h-.004a8.706 8.706 0 0 1-4.423-1.205l-.317-.188-3.29.859.879-3.192-.207-.328a8.6 8.6 0 0 1-1.329-4.602c0-4.768 3.9-8.648 8.694-8.648a8.672 8.672 0 0 1 8.688 8.655c-.002 4.769-3.9 8.65-8.69 8.65Zm4.767-6.477c-.261-.13-1.547-.76-1.785-.847-.238-.086-.414-.13-.588.13-.174.261-.675.845-.827 1.02-.153.176-.305.195-.566.065-.261-.13-1.104-.404-2.102-1.29-.776-.69-1.3-1.541-1.453-1.801-.152-.26-.016-.402.115-.531.117-.117.26-.304.392-.456.13-.152.174-.26.26-.434.087-.173.044-.325-.02-.455-.066-.13-.589-1.41-.806-1.93-.213-.508-.428-.439-.588-.447-.152-.007-.328-.01-.501-.01a.962.962 0 0 0-.697.326c-.24.26-.914.89-.914 2.17 0 1.278.937 2.516 1.067 2.69.129.173 1.842 2.799 4.463 3.925.486.209.984.392 1.49.548.625.198 1.195.17 1.645.103.502-.075 1.546-.63 1.764-1.237.217-.607.217-1.127.152-1.236-.065-.108-.24-.174-.501-.303Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                {/* Submit */}
                <button
                  type="submit"
                  className="bg-[#7A8B7A] text-white px-6 py-2 rounded-lg"
                >
                  Envoyer
                </button>

              </div>
            </form>
          </div>
        </div>
      )}
      <StatusModal
        type="success"
        title="Message envoyé !"
        message="Votre demande a été envoyée avec succès. Nous vous contacterons bientôt."
        isOpen={isStatusOpen}
        onClose={() => setIsStatusOpen(false)}
      />
    </>
  );
}