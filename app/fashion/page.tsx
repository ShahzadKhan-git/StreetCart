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

    const filteredProducts = selectedCategory === 'all'
        ? FASHION_PRODUCTS
        : FASHION_PRODUCTS.filter(p => p.category === selectedCategory);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* 1. Hero Slider */}
            <HeroSlider />

            {/* 2. Popular Categories */}
            <HomeCategoryGrid />

            {/* 3. Consolidated Collection with Category Selection */}
            <section className="py-24 px-6 max-w-[1440px] mx-auto animate-fade-in-up">
                <div className="flex flex-col items-center text-center mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-black text-green-600 uppercase tracking-[0.3em] mb-4 block">Fashion Hub</span>
                        <h2 className="text-4xl md:text-7xl font-black text-gray-950 tracking-tighter leading-none mb-6 italic">The Collection</h2>
                        <p className="text-gray-500 font-medium leading-relaxed">
                            Curated from the best local boutiques. Use the filter below to explore men's streetwear or women's trending styles.
                        </p>
                    </div>

                    {/* Category Selector */}
                    <div className="flex items-center gap-2 p-1.5 bg-gray-100 rounded-[24px] mt-4 shadow-inner ring-1 ring-gray-200/50">
                        {['all', 'men', 'women'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat as any)}
                                className={`px-10 py-3 rounded-[18px] text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${selectedCategory === cat
                                        ? "bg-white text-black shadow-lg shadow-gray-200/50 ring-1 ring-gray-100"
                                        : "text-gray-400 hover:text-gray-900"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 transition-all duration-500">
                    {filteredProducts.map((item, idx) => (
                        <div key={item.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
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

                {filteredProducts.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-gray-400 font-medium">No products found in this category.</p>
                    </div>
                )}
            </section>

            <Footer />
        </div>
    );
}
