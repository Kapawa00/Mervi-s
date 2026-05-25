"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CategorieHero() {
  const router = useRouter();

  return (
    <div
      className="pt-24"
      style={{ backgroundColor: "#F8F6F2" }}
    >
      {/* Back button at top-left of page */}
      <div className="mx-auto max-w-screen-xl px-6 sm:px-10">
        <Link href="/">
          <button
            className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
            type="button"
          >
            <div
              className="bg-[#7A8B7A] rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                height="25px"
                width="25px"
              >
                <path
                  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                  fill="#000000"
                ></path>
                <path
                  d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                  fill="#000000"
                ></path>
              </svg>
            </div>
            <p className="translate-x-2">Go Back</p>
          </button>
        </Link>

      </div>

      <section className="relative mx-auto max-w-screen-xl px-6 sm:px-10 py-20 overflow-hidden">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          />
        </div>
      </section>
    </div>
  );
}