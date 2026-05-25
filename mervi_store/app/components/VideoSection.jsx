"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

export default function VideoSection() {
  const scrollRef = useRef(null);
  const modalVideoRef = useRef(null);

  const [activeVideoIndex, setActiveVideoIndex] = useState(null);

  const videos = [
    { id: 1, src: "/videos/video1.mp4" },
    { id: 2, src: "/videos/video2.mp4" },
    { id: 3, src: "/videos/video3.mp4" },
    { id: 4, src: "/videos/video4.mp4" },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  const openModalAt = (index) => {
    setActiveVideoIndex(index);
  };

  const closeModal = () => {
    // Stop playback when closing
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
    setActiveVideoIndex(null);
  };

  const goPrev = () => {
    if (activeVideoIndex === null) return;

    const nextIndex =
      (activeVideoIndex - 1 + videos.length) % videos.length;

    // Pause current before switching
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }

    setActiveVideoIndex(nextIndex);
  };

  const goNext = () => {
    if (activeVideoIndex === null) return;

    const nextIndex = (activeVideoIndex + 1) % videos.length;

    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }

    setActiveVideoIndex(nextIndex);
  };

  // Auto-play the modal video whenever the index changes
  useEffect(() => {
    if (!modalVideoRef.current) return;

    // Attempt autoplay after source change
    const v = modalVideoRef.current;

    const playAfterLoad = () => {
      v.play().catch(() => {
        // If autoplay fails (e.g., browser policy), keep controls visible
      });
    };

    v.addEventListener("loadeddata", playAfterLoad, { once: true });

    return () => {
      v.removeEventListener("loadeddata", playAfterLoad);
    };
  }, [activeVideoIndex]);

  // Keyboard navigation inside modal
  useEffect(() => {
    if (activeVideoIndex === null) return;

    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [activeVideoIndex]);

  return (
    <section
      className="py-24 relative"
      style={{ backgroundColor: "#F8F6F2" }}
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        <h2
          className="text-3xl font-light mb-12"
          style={{ color: "#2B2B2B" }}
        >
          Nos Réalisations
        </h2>

{/* LEFT ARROW */}
<button
  onClick={() => scroll("left")}
  aria-label="Scroll left"
  className="
    absolute 
    left-2 md:left-0 
    top-1/2 
    -translate-y-1/2 
    z-20 
    bg-white 
    shadow-md 
    w-10 h-10 md:w-12 md:h-12 
    rounded-full 
    flex items-center justify-center
  "
  style={{ border: "1px solid #ECE7E0" }}
>
  <ChevronLeft size={22} color="#2B2B2B" />
</button>

{/* RIGHT ARROW */}
<button
  onClick={() => scroll('right')}
  aria-label='Scroll right'
  className="
    absolute 
    right-2 md:right-0 
    top-1/2 
    -translate-y-1/2 
    z-20 
    bg-white 
    shadow-md 
    w-10 h-10 md:w-12 md:h-12 
    rounded-full 
    flex items-center justify-center
  "
  style={{ border: '1px solid #ECE7E0' }}
>
  <ChevronRight size={22} color='#2B2B2B' />
</button>

        {/* VIDEO CARDS */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-12"
        >
          {videos.map((video, idx) => (
            <div
              key={video.id}
              className="relative min-w-[300px] h-[220px] bg-black rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => openModalAt(idx)}
            >
              {/* Auto-playing muted previews */}
              <video
                src={video.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md"
                  style={{ backgroundColor: "rgba(248,246,242,0.85)" }}
                >
                  <Play size={22} color="#2B2B2B" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL WITH NAV */}
      <AnimatePresence>
        {activeVideoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-[95%] max-w-6xl"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                aria-label="Close"
                className="absolute -top-12 right-0 text-white"
              >
                <X size={28} />
              </button>

              {/* Left nav in modal */}
              <button
                onClick={goPrev}
                aria-label="Previous video"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center"
              >
                <ChevronLeft size={22} color="#2B2B2B" />
              </button>

              {/* Right nav in modal */}
              <button
                onClick={goNext}
                aria-label="Next video"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center"
              >
                <ChevronRight size={22} color="#2B2B2B" />
              </button>

              {/* Video */}
              <video
                key={videos[activeVideoIndex].src} // force reload on index change
                ref={modalVideoRef}
                src={videos[activeVideoIndex].src}
                controls
                autoPlay
                className="w-full h-[80vh] object-contain rounded-xl bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}