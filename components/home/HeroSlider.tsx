"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
        title: "WINTER COLLECTION",
        subtitle: "STAY WARM IN STYLE. UP TO 40% OFF ON JACKETS & COATS.",
        cta: "Shop Winter",
        link: "/clothing"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
        title: "TRENDING FASHION",
        subtitle: "DISCOVER THE LATEST STREETWEAR TRENDS.",
        cta: "View Trends",
        link: "/clothing"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070&auto=format&fit=crop",
        title: "SUMMER VIBES",
        subtitle: "LIGHT AND BREEZY OUTFITS FOR THE SEASON.",
        cta: "Shop Summer",
        link: "/clothing"
    }
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % SLIDES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

    return (
        <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-gray-100 mt-20">
            {SLIDES.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="absolute inset-0 bg-black/30 md:bg-black/20" /> {/* Overlay */}
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex items-center">
                        <div className="max-w-[1440px] mx-auto px-6 w-full">
                            <div className="max-w-2xl text-white">
                                <span className="inline-block text-sm md:text-base font-medium tracking-[0.2em] mb-4 uppercase text-gray-200">
                                    New Collection
                                </span>
                                <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-none">
                                    {slide.title}
                                </h2>
                                <p className="text-base md:text-lg text-gray-100 mb-10 max-w-lg font-light tracking-wide leading-relaxed">
                                    {slide.subtitle}
                                </p>
                                <Link
                                    href={slide.link}
                                    className="inline-block bg-white text-gray-900 border border-white hover:bg-transparent hover:text-white px-10 py-4 font-semibold text-sm uppercase tracking-widest transition-all duration-300"
                                >
                                    {slide.cta}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all"
            >
                <ChevronRight className="w-8 h-8" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === current ? "bg-white scale-110" : "bg-white/50 hover:bg-white/80"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
