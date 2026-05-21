"use client";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import StatusModal from "../components/StatusModal";
import { useState } from "react";

// Données fictives pour correspondre aux montants du screenshot


export default function CheckoutPage() {
  const { cart, totalItems, totalPrice } = useCart();
  const [successOpen, setSucessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const shipping = 20.00;
  const total = totalPrice + shipping;

  const handleSuccess = () => {
    setSucessOpen(true);
    setErrorOpen(false);
  }

  const handleError = () => {
    setErrorOpen(true);
    setSucessOpen(false);
  }

  const handleModalClose = () => {
    setSucessOpen(false);
    setErrorOpen(false);
  }

  const handleCheckout = () => {
    if (totalItems > 0) {
      handleSuccess();
    } else {
      handleError();
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row font-sans text-gray-900">

      {/* SECTION GAUCHE - FORMULAIRE */}
      <div className="w-full lg:w-[55%] xl:w-[58%] p-6 md:p-12 lg:p-16 overflow-y-auto">
        <div className="max-w-xl mx-auto">
          {/* Logo / Breadcrumb */}
          <Link href="/">
            <div className="mb-10">
              <span className="text-2xl font-semibold tracking-tight">Mervi <span style={{ color: "#7A8B7A" }}>'</span>s</span>
            </div>
          </Link>

          {/* Contact */}
          <section className="mb-10">
            <div className="flex justify-between items-baseline mb-4">
              <h2 className="text-xl font-semibold">Contact</h2>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 underline">Log in</a>
            </div>
            <input
              type="email"
              placeholder="Email or mobile phone number"
              className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 mb-3"
            />
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
              Email me with news and offers
            </label>
          </section>

          {/* Delivery */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Delivery</h2>
            <div className="space-y-3">
              <select className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 bg-white">
                <option>United States</option>
              </select>
              <div className="grid grid-cols-2 gap-3">
                <input placeholder="First name" className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900" />
                <input placeholder="Last name" className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900" />
              </div>
              <input placeholder="Address" className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900" />
              <input placeholder="Apartment, suite, etc. (optional)" className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900" />
              <div className="grid grid-cols-[2fr_1fr] gap-3">
                <input placeholder="City" className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900" />
                <input placeholder="Postal code" className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900" />
              </div>
              <input placeholder="Phone" className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900" />
            </div>
          </section>

          {/* Shipping Method */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Shipping method</h2>
            <div className="border border-gray-900 rounded p-4 flex justify-between items-center bg-gray-50">
              <div className="flex items-center gap-3">
                <input type="radio" name="shipping" checked readOnly className="h-4 w-4 text-gray-900 focus:ring-gray-900" />
                <span className="text-sm font-medium">International</span>
              </div>
              <span className="text-sm font-semibold">XAF20.00</span>
            </div>
          </section>

          {/* Payment */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2">Payment</h2>
            <p className="text-sm text-gray-500 mb-4">All transactions are secure and encrypted.</p>
            <div className="border border-gray-300 rounded p-4">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
                <input type="radio" name="payment" checked readOnly className="h-4 w-4 text-gray-900 focus:ring-gray-900" />
                <span className="text-sm font-semibold">Credit card</span>
              </div>
              <div className="space-y-3">
                <input placeholder="Card number" className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900" />
                <input placeholder="Cardholder name" className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900" />
                <div className="grid grid-cols-2 gap-3">
                  <input placeholder="Expiration date (MM / YY)" className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900" />
                  <input placeholder="Security code" className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900" />
                </div>
              </div>
            </div>
          </section>

          {/* Bouton Pay now mobile (caché sur desktop) */}
          <div className="lg:hidden mt-8">
            <button className="w-full bg-[#7A8B7A] text-white font-medium py-4 rounded text-sm hover:bg-[#6a7b6a] transition tracking-wide">
              Pay now
            </button>
          </div>
        </div>
      </div>

      {/* SECTION DROITE - RÉCAPITULATIF */}
      <div className="w-full lg:w-[45%] xl:w-[42%] bg-[#f6f6f7] p-6 md:p-12 lg:p-16 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between">

        <div>

          <h2 className="text-xl font-semibold mb-6">
            Order summary
          </h2>

          {/* ✅ PRODUITS DU PANIER */}
          <div className="space-y-4 mb-6">

            {cart.map((item) => (
              <div key={item.slug} className="flex gap-4">

                <div className="relative w-[64px] h-[64px] bg-gray-200 rounded border border-gray-300 flex-shrink-0 overflow-hidden">

                  <Image
                    src={item.image?.[0] || "/images/fallback.jpg"}
                    alt={item.title}
                    fill
                    className="object-cover rounded"
                  />

                  <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full">
                    {item.qty}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm font-medium text-gray-900 whitespace-nowrap">
                  XAF{(item.price * item.qty).toFixed(2)}
                </p>

              </div>
            ))}

          </div>

          {/* ✅ TOTALS */}
          <div className="space-y-3 text-sm">

            <div className="flex justify-between text-gray-700">
              <span>Subtotal · {totalItems} items</span>
              <span>XAF{totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-gray-700">
              <span>Shipping</span>
              <span>XAF{shipping.toFixed(2)}</span>
            </div>

            <div className="border-t border-gray-300 pt-3 flex justify-between font-semibold text-base text-gray-900">
              <span>Total</span>
              <span>
                XAF{total.toFixed(2)}
              </span>
            </div>

          </div>

        </div>

        {/* ✅ PAY BUTTON */}
        <div className="mt-8">
          <button className="w-full bg-[#7A8B7A] text-white font-medium py-4 rounded text-sm hover:bg-[#6a7b6a] transition tracking-wide"
            onClick={handleCheckout}
            >
            Pay now
          </button>
        </div>

        <StatusModal
          type="success"
          title="Paiement réussi"
          message="Votre paiement a été effectué avec succès."
          isOpen={successOpen}
          onClose={handleModalClose}
        />

        <StatusModal
          type="error"
          title="Erreur"
          message="Une erreur est survenue."
          isOpen={errorOpen}
          onClose={handleModalClose}
        />

      </div>

    </div>
  );
}