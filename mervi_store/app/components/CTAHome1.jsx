"use client";

import React from "react";

export default function CTAHome1() {
  return (
    <section
      className="py-14"
      style={{ backgroundColor: "#F8F6F2" }}
    >
      <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">

        <div className="max-w-xl md:mx-auto">
          <h1
            className="text-6xl sm:text-7xl md:text-8xl tracking-tight leading-none"
            style={{
              color: "#2B2B2B",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontWeight: 400,
            }}
          >
            Mervi
            <span style={{ color: "#7A8B7A" }}>'</span>
            s store
          </h1>

          <p
            className="mt-4 text-xs sm:text-sm tracking-[0.3em] uppercase"
            style={{ color: "#7A8B7A" }}
          >
            — L&apos;esthétique au service de votre image —
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6">
          {[
            "Plaques Publicitaires",
            "Les Alucobonds",
            "Décoration Interieurs",
          ].map((item, index, arr) => (
            <React.Fragment key={item}>
              <span
                className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase cursor-pointer transition-colors duration-200"
                style={{ color: "#6B6B6B" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#7A8B7A")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#6B6B6B")
                }
              >
                {item}
              </span>

              {index < arr.length - 1 && (
                <span
                  className="text-xs"
                  style={{ color: "#D8D3CC" }}
                >
                  |
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}