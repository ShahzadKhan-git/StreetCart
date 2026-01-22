"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface HeroSlide {
    id: number | string;
    image: string;
    title: string;
    subtitle: string;
    cta: string;
    link: string;
}

const DEFAULT_SLIDES: HeroSlide[] = [
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

interface HeroSliderProps {
    slides?: HeroSlide[];
}

export default function HeroSlider({ slides = DEFAULT_SLIDES }: HeroSliderProps) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="relative w-full h-[600px] md:h-[800px] overflow-hidden bg-gray-900 mt-20">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
                        }`}
                >
                    {/* Background Image with Zoom Effect */}
                    <div
                        className={`absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ${index === current ? 'scale-110' : 'scale-100'}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent md:from-black/70" />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex items-center">
                        <div className="max-w-[1440px] mx-auto px-6 w-full">
                            <div className={`max-w-2xl text-white transition-all duration-1000 delay-300 ${index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-black tracking-[0.3em] mb-6 uppercase text-gray-100">
                                    <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                                    Exclusive Arrivals
                                </span>
                                <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] drop-shadow-2xl">
                                    {slide.title}
                                </h2>
                                <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-lg font-medium tracking-tight leading-relaxed opacity-90">
                                    {slide.subtitle}
                                </p>
                                <div className="flex items-center gap-6">
                                    <Link
                                        href={slide.link}
                                        className="group relative overflow-hidden bg-white text-gray-950 px-12 py-5 font-black text-xs uppercase tracking-[0.2em] transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] rounded-full"
                                    >
                                        <span className="relative z-10">{slide.cta}</span>
                                        <div className="absolute inset-0 bg-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    </Link>
                                    <button className="hidden md:flex items-center gap-3 text-white text-xs font-black uppercase tracking-widest hover:text-green-400 transition-colors">
                                        Watch Film
                                        <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group hover:border-green-400">
                                            <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-current border-b-[5px] border-b-transparent ml-1" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows - Minimalist Glass */}
            <div className="absolute bottom-12 right-12 z-20 flex gap-4">
                <button
                    onClick={prevSlide}
                    className="p-4 rounded-full bg-white/10 hover:bg-white text-white hover:text-black backdrop-blur-md border border-white/10 transition-all duration-300"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="p-4 rounded-full bg-white text-black hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Pagination Dots - Modern Linear */}
            <div className="absolute bottom-12 left-6 z-20 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-1.5 transition-all duration-500 rounded-full ${index === current ? "w-12 bg-white" : "w-4 bg-white/30 hover:bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
