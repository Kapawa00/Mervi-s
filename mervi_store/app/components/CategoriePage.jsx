"use client";

import { motion } from "framer-motion";

export default function CategorieHero() {
  return (
    <section
      className="relative mt-24 mx-auto max-w-screen-xl px-6 sm:px-10 py-20 overflow-hidden"
      style={{ backgroundColor: "#F8F6F2" }}
    >
      {/* Background décoratif subtil */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "#7A8B7A" }}
      />

      <div className="relative text-center space-y-6">

        {/* Title Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-light text-4xl md:text-6xl leading-tight"
          style={{ color: "#2B2B2B" }}
        >
          Sublimez votre visibilité avec <br />
          <span style={{ color: "#7A8B7A" }}>
            des solutions professionnelles
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg"
          style={{ color: "#6B6B6B" }}
        >
          Découvrez nos plaques publicitaires, alucobonds et décorations
          intérieures conçus pour valoriser votre image et renforcer
          votre présence.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
        </motion.div>
      </div>
    </section>
  );
}