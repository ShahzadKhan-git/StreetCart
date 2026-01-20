"use client";

import { useState } from "react";
import Link from "next/link";
import HeroSlider from "@/components/home/HeroSlider";
import HomeCategoryGrid from "@/components/home/HomeCategoryGrid";
import ClothingCard from "@/components/ClothingCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Consolidated Mock Data with Categories
const FASHION_PRODUCTS = [
    // Men's
    { id: 101, category: 'men', title: "Casual Denim Shirt", price: "₹1,299", store: "Denim Hub", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=60" },
    { id: 102, category: 'men', title: "Basic White Tee", price: "₹499", store: "Essentials", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=60" },
    { id: 103, category: 'men', title: "Urban Hoodie", price: "₹1,899", store: "Street Style", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&auto=format&fit=crop&q=60" },
    { id: 104, category: 'men', title: "Wool Blend Overcoat", price: "₹5,499", store: "Heritage Tailors", image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&auto=format&fit=crop&q=60" },
    { id: 105, category: 'men', title: "Graphic Skate Hoodie", price: "₹2,199", store: "Street Style", image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&auto=format&fit=crop&q=60" },
    { id: 106, category: 'men', title: "Tailored Navy Blazer", price: "₹3,299", store: "Formal Finishes", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=60" },

    // Women's
    { id: 201, category: 'women', title: "Summer Floral Dress", price: "₹2,499", store: "Vogue", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=60" },
    { id: 202, category: 'women', title: "Cropped Denim Jacket", price: "₹1,999", store: "Denim & Co", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=60" },
    { id: 203, category: 'women', title: "Elegant Blouse", price: "₹1,299", store: "Chic Styles", image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&auto=format&fit=crop&q=60" },
    { id: 204, category: 'women', title: "Silk Slip Dress", price: "₹3,499", store: "Evening Luxe", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=60" },
    { id: 205, category: 'women', title: "Bohemian Jumpsuit", price: "₹2,199", store: "Free Spirit", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&auto=format&fit=crop&q=60" },
    { id: 206, category: 'women', title: "Leather Biker Jacket", price: "₹4,899", store: "Edge Fashion", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=60" }
];

export default function FashionPage() {
    const [selectedCategory, setSelectedCategory] = useState<'all' | 'men' | 'women'>('all');
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleCategoryChange = (cat: 'all' | 'men' | 'women') => {
        if (cat === selectedCategory) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setSelectedCategory(cat);
            setIsTransitioning(false);
        }, 300);
    };

    const filteredProducts = selectedCategory === 'all'
        ? FASHION_PRODUCTS
        : FASHION_PRODUCTS.filter(p => p.category === selectedCategory);

    return (
        <div className="min-h-screen bg-white mesh-gradient-dynamic">
            <Navbar />

            {/* 1. Hero Slider - Enhanced with Floating Content */}
            <div className="relative group">
                <HeroSlider />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none text-center hidden md:block">
                    <div className="animate-float">
                        <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.5em] mb-4 block drop-shadow-2xl">Season 2026</span>
                        <h1 className="text-8xl font-black text-white tracking-[1vw] uppercase opacity-20 group-hover:opacity-40 transition-opacity duration-1000">STREETCART</h1>
                    </div>
                </div>
            </div>

            {/* 2. Popular Categories - Subtle Fade In */}
            <div className="animate-fade-in-up animation-delay-300">
                <HomeCategoryGrid />
            </div>

            {/* 3. Consolidated Collection with Dynamic Selector */}
            <section className="py-32 px-6 max-w-[1440px] mx-auto">
                <div className="flex flex-col items-center text-center mb-24 gap-10">
                    <div className="max-w-3xl animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 rounded-full mb-6 ring-1 ring-green-100">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[9px] font-black text-green-700 uppercase tracking-widest">Live Collection</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black text-gray-950 tracking-[-0.04em] leading-[0.9] mb-8 italic uppercase">
                            The <br className="md:hidden" /> Manifesto
                        </h2>
                        <p className="text-gray-400 font-medium leading-relaxed max-w-xl mx-auto text-lg">
                            We bridge the gap between street culture and luxury aesthetics. Filtering the noise to bring you the signal.
                        </p>
                    </div>

                    {/* Enhanced Category Selector - Magnetic Feel */}
                    <div className="relative flex items-center p-2 bg-gray-50 rounded-[40px] shadow-2xl shadow-gray-200/50 ring-1 ring-gray-100 animate-fade-in-up animation-delay-200">
                        {['all', 'men', 'women'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat as any)}
                                className={`relative z-10 px-12 py-4 rounded-[32px] text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-500 btn-magnetic ${selectedCategory === cat
                                    ? "text-black"
                                    : "text-gray-400 hover:text-gray-600"
                                    }`}
                            >
                                {cat}
                                {selectedCategory === cat && (
                                    <div className="absolute inset-0 bg-white rounded-[32px] shadow-xl shadow-gray-200/80 -z-10 animate-scale-in" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid with Smooth Transition */}
                <div
                    className={`grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20 transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4 scale-95 blur-sm' : 'opacity-100 translate-y-0 scale-100 blur-0'
                        }`}
                >
                    {filteredProducts.map((item, idx) => (
                        <div
                            key={item.id}
                            className="animate-fade-in-up"
                            style={{ animationDelay: `${idx * 150}ms` }}
                        >
                            <ClothingCard
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                store={item.store}
                                image={item.image}
                            />
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && !isTransitioning && (
                    <div className="py-32 text-center animate-fade-in-up">
                        <div className="text-6xl mb-6 opacity-20">∅</div>
                        <p className="text-gray-400 font-medium uppercase tracking-widest text-xs">Nothing to show for this filter</p>
                    </div>
                )}
            </section>

            <Footer />
        </div>
    );
}
