"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductGallery({ images }) {

  const validImages = useMemo(() => {
    if (!Array.isArray(images)) return [];
    return images.filter(
      (img) => typeof img === "string" && img.trim() !== ""
    );
  }, [images]);

  const [index, setIndex] = useState(0);

  if (validImages.length === 0) {
    return null;
  }

  const prev = () =>
    setIndex((i) =>
      i === 0 ? validImages.length - 1 : i - 1
    );

  const next = () =>
    setIndex((i) =>
      i === validImages.length - 1 ? 0 : i + 1
    );

  return (
    <div className="w-full">

      {/* ✅ Responsive Main Image */}
      <div className="relative 
                      w-full 
                      aspect-square 
                      max-w-[500px] 
                      bg-white 
                      border 
                      border-[#dcdcdc] 
                      overflow-hidden">

        {/* Slider */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {validImages.map((img, i) => (
            <div key={i} className="min-w-full h-full relative">
              <Image
                src={img}
                alt=""
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {validImages.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 border border-gray-300 p-2 rounded-full"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={next}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 border border-gray-300 p-2 rounded-full"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {/* ✅ Responsive Thumbnails */}
      {validImages.length > 1 && (
        <div className="flex gap-3 md:gap-5 mt-4 md:mt-5 flex-wrap">

          {validImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`relative 
                          w-[70px] h-[70px] 
                          sm:w-[90px] sm:h-[90px]
                          md:w-[110px] md:h-[110px]
                          border cursor-pointer overflow-hidden
                          ${index === i
                            ? "border-black"
                            : "border-[#dcdcdc]"
                          }`}
            >
              <Image
                src={img}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          ))}

        </div>
      )}

    </div>
  );
}