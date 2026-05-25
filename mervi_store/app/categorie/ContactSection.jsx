"use client";

import { useState } from "react";
import { products } from "@/app/data/products";
import StatusModal from "../components/StatusModal"; // adjust path if needed

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    message: "",
  });

  const [modal, setModal] = useState({
    isOpen: false,
    type: "success",
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setModal({
        isOpen: true,
        type: "error",
        title: "Erreur",
        message: "Veuillez remplir tous les champs obligatoires.",
      });
      return;
    }

    // Success
    setModal({
      isOpen: true,
      type: "success",
      title: "Message envoyé !",
      message: `Merci ${formData.name}, nous vous répondrons dans les plus brefs délais.`,
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      product: "",
      message: "",
    });
  };

  return (
    <>
      <section className="py-20 mt-24" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-6 lg:flex gap-16">
          {/* Left side */}
          <div className="lg:w-1/2 space-y-6">
            <h3
              className="uppercase tracking-widest text-sm"
              style={{ color: "#7A8B7A" }}
            >
              Contact
            </h3>

            <h2
              className="text-3xl font-semibold"
              style={{ color: "#2B2B2B" }}
            >
              Parlons de votre projet
            </h2>

            <p style={{ color: "#6B6B6B" }}>
              Nous sommes à votre écoute pour répondre à toutes vos
              questions.
            </p>
          </div>

          {/* Right side - Form */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nom complet"
                className="w-full px-4 py-3 border rounded-md outline-none focus:ring-1"
                style={{ borderColor: "#D8D3CC" }}
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 border rounded-md outline-none focus:ring-1"
                style={{ borderColor: "#D8D3CC" }}
              />

              {/* Product Select */}
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md outline-none focus:ring-1 bg-white"
                style={{
                  borderColor: "#D8D3CC",
                  color: formData.product ? "#2B2B2B" : "#9CA3AF",
                }}
              >
                <option value="" disabled>
                  Sélectionnez un produit (optionnel)
                </option>
                {products.map((product) => (
                  <option
                    key={product.slug}
                    value={product.title}
                    style={{ color: "#2B2B2B" }}
                  >
                    {product.title} — XAF{product.price}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full px-4 py-3 h-32 border rounded-md outline-none focus:ring-1"
                style={{ borderColor: "#D8D3CC" }}
              />

              <button
                type="submit"
                className="w-full py-3 text-white font-medium transition duration-300 rounded-md"
                style={{ backgroundColor: "#7A8B7A" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#5F6E5F")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#7A8B7A")
                }
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Status Modal */}
      <StatusModal
        type={modal.type}
        title={modal.title}
        message={modal.message}
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
      />
    </>
  );
}