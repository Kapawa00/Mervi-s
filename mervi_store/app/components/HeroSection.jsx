"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    image:
      "/images/hero4.jpeg",
    title1: "Plaques",
    title2: "Publicitaires",
    description: "Des solutions visuelles modernes et impactantes.",
  },
  {
    image:
      "/images/hero2.jpeg",
    title1: "Alucobond",
    title2: "Premium",
    description: "Un rendu haut de gamme pour votre façade.",
  },
  {
    image:
      "/images/hero1.png",
    title1: "Décoration",
    title2: "Intérieure",
    description: "Une esthétique élégante et professionnelle.",
  },
];

export default function HeroBanner() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">

      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            width={1920}
            height={1080}
            src={slides[index].image}
            alt=""
            className="object-fit w-full h-full"
          />

          {/* Overlay dark charcoal */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(43,43,43,0.55) 0%, rgba(43,43,43,0.85) 100%)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Text Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: "#E4ECE4", color: "#5F6E5F" }}
            >
              Toutes Collections
            </span>

            {/* Title */}
            <h1 className="tracking-tight">
              <span
                className="block text-5xl md:text-6xl font-light"
                style={{ color: "#F8F6F2" }}
              >
                {slides[index].title1}
              </span>
              <span
                className="block text-6xl md:text-7xl italic"
                style={{ color: "#7A8B7A" }}
              >
                {slides[index].title2}
              </span>
            </h1>

            {/* Description */}
            <p
              className="mt-6 text-base md:text-lg"
              style={{ color: "#D8D3CC" }}
            >
              {slides[index].description}
            </p>

            {/* Button */}
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300"
                style={{
                  backgroundColor: "#7A8B7A",
                  color: "#F8F6F2",
                }}
              >
                Découvrir
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
               {/* ── Scroll down ── */}
        <div className="absolute hidden transform -translate-x-1/2 lg:bottom-8 xl:bottom-12 left-1/2 lg:block">
            <a
                href="#"
                role="button"
                className="inline-flex items-center justify-center w-12 h-12 transition-all duration-200 rounded-full focus:outline-none"
                style={{
                    backgroundColor: "rgba(122,139,122,0.2)",
                    border: "1px solid #7A8B7A",
                    color: "#F8F6F2",
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = "#7A8B7A";
                    e.currentTarget.style.color = "#F8F6F2";
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = "rgba(122,139,122,0.2)";
                    e.currentTarget.style.color = "#F8F6F2";
                }}
            >
                <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </a>
        </div>
      </div>
    </div>
  );
}