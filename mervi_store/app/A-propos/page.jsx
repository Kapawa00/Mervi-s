"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function Counter({ value }) {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(value.replace(/\D/g, ""));
      const duration = 2000;
      const incrementTime = 20;
      const step = end / (duration / incrementTime);

      const counter = setInterval(() => {
        start += step;
        if (start >= end) {
          clearInterval(counter);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, incrementTime);
    }
  }, [inView, value]);

  return (
    <motion.span ref={ref}>
      {count.toLocaleString()}
      {value.includes("+") && "+"}
      {value.includes("K") && "K"}
    </motion.span>
  );
}

export default function AboutPage() {
  return (
    <section style={{ backgroundColor: "#F8F6F2" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span
              className="text-xs tracking-[0.3em] uppercase font-semibold"
              style={{ color: "#7A8B7A" }}
            >
              \ À propos \
            </span>

            <h1
              className="mt-6 text-4xl md:text-6xl leading-tight font-light"
              style={{ color: "#2B2B2B" }}
            >
              Sublimer Votre Image, <br />
              Sublimer Votre Espace <br />
              Avec Élégance
            </h1>

            <p
              className="mt-6 text-lg"
              style={{ color: "#6B6B6B" }}
            >
              Nous créons des solutions visuelles qui reflètent
              votre identité et valorisent votre présence.
            </p>
          </div>

          <div>
            <h3
              className="text-2xl md:text-3xl font-medium"
              style={{ color: "#2B2B2B" }}
            >
              L’esthétique au service de votre marque
            </h3>

            <p className="mt-6 leading-relaxed" style={{ color: "#6B6B6B" }}>
              Nous travaillons en étroite collaboration avec nos clients
              afin de comprendre pleinement leurs besoins.
            </p>

            <p className="mt-6 leading-relaxed" style={{ color: "#6B6B6B" }}>
              Notre passion est de transformer les espaces grâce à des
              solutions modernes et élégantes.
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

          {[
            { number: "5197K", label: "D'abonnés" },
            { number: "298", label: "Clients satisfaits" },
            { number: "2000+", label: "Installations complétées" },
            { number: "599", label: "Collaborations professionnelles" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-8 transition-all duration-300"
              style={{
                border: "1px solid #D8D3CC",
                backgroundColor: "#FFFFFF",
              }}
            >
              <h2
                className="text-4xl md:text-5xl font-light"
                style={{ color: "#7A8B7A" }}
              >
                <Counter value={item.number} />
              </h2>

              <p
                className="mt-3 text-sm uppercase tracking-widest"
                style={{ color: "#6B6B6B" }}
              >
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}