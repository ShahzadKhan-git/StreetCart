"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Zap } from "lucide-react";
import ClothingCard from "@/components/ClothingCard";
import Navbar from "@/components/Navbar";
import HeroSlider, { HeroSlide } from "@/components/home/HeroSlider";
import HomeCategoryGrid, { CategoryItem } from "@/components/home/HomeCategoryGrid";

// Grocery-specific Hero Slides
const KIRANA_SLIDES: HeroSlide[] = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop",
        title: "FRESH HARVEST",
        subtitle: "ORGANIC PRODUCE FROM LOCAL FARMS. DELIVERED TO YOUR DOORSTEP.",
        cta: "Shop Fresh",
        link: "/kirana"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=2070&auto=format&fit=crop",
        title: "DAILY ESSENTIALS",
        subtitle: "EVERYTHING YOU NEED FOR YOUR KITCHEN. TRUSTED QUALITY.",
        cta: "View Essentials",
        link: "/kirana"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2070&auto=format&fit=crop",
        title: "SPICES & FLAVORS",
        subtitle: "AUTHENTIC SPICES TO ELEVATE YOUR COOKING.",
        cta: "Shop Spices",
        link: "/kirana"
    }
];

// Grocery-specific Categories
const KIRANA_CATEGORIES: CategoryItem[] = [
    {
        id: 1,
        title: "GRAINS & PULSES",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop",
        link: "/kirana"
    },
    {
        id: 2,
        title: "SPICES & MASALA",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop",
        link: "/kirana"
    },
    {
        id: 3,
        title: "DAIRY & FRESH",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=800&auto=format&fit=crop",
        link: "/kirana"
    },
    {
        id: 4,
        title: "OILS & GHEE",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop",
        link: "/kirana"
    }
];

// Mock Data for Kirana Products with Categories
const PRODUCTS = [
    { id: 1, category: 'grains', title: "Premium Basmati Rice", price: "₹299", store: "Grocery Hub", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80" },
    { id: 2, category: 'spices', title: "Organic Turmeric Powder", price: "₹89", store: "Spice Corner", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80" },
    { id: 3, category: 'dairy', title: "Fresh Cow Milk", price: "₹65", store: "Dairy Fresh", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80" },
    { id: 4, category: 'grains', title: "Whole Wheat Flour", price: "₹149", store: "Grain Market", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80" },
    { id: 5, category: 'oils', title: "Sunflower Cooking Oil", price: "₹199", store: "Oil Depot", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80" },
    { id: 6, category: 'spices', title: "Red Chilli Powder", price: "₹79", store: "Spice Bazaar", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80" },
    { id: 7, category: 'spices', title: "Sugar Cane Jaggery", price: "₹129", store: "Sweet Store", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80" },
    { id: 8, category: 'dairy', title: "Green Tea Leaves", price: "₹159", store: "Tea House", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80" }
];

export default function KiranaPage() {
    const [selectedCategory, setSelectedCategory] = useState<'all' | 'grains' | 'spices' | 'dairy' | 'oils'>('all');
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleCategoryChange = (cat: any) => {
        if (cat === selectedCategory) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setSelectedCategory(cat);
            setIsTransitioning(false);
        }, 300);
    };

    const filteredProducts = selectedCategory === 'all'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === selectedCategory);

    return (
        <div className="min-h-screen bg-white mesh-gradient-dynamic">
            <Navbar />

            {/* 1. Hero Slider */}
            <div className="relative group">
                <HeroSlider slides={KIRANA_SLIDES} />
            </div>

            {/* 2. Popular Categories - Grocery Specific */}
            <div className="animate-fade-in-up animation-delay-300">
                <HomeCategoryGrid categories={KIRANA_CATEGORIES} title="Daily Essentials" />
            </div>

            {/* 3. Products with Dynamic Selector */}
            <section className="py-32 px-6 max-w-[1440px] mx-auto">
                <div className="flex flex-col items-center text-center mb-24 gap-10">
                    <div className="max-w-3xl animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 rounded-full mb-6 ring-1 ring-green-100">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[9px] font-black text-green-700 uppercase tracking-widest">In Stock Now</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black text-gray-950 tracking-[-0.04em] leading-[0.9] mb-8 italic uppercase">
                            The <br className="md:hidden" /> Pantry
                        </h2>
                        <p className="text-gray-400 font-medium leading-relaxed max-w-xl mx-auto text-lg">
                            Curated essentials from your neighborhood's most trusted vendors. Quality you can taste, delivered with care.
                        </p>
                    </div>

                    {/* Category Selector */}
                    <div className="relative flex flex-wrap justify-center items-center p-2 bg-gray-50 rounded-[40px] shadow-2xl shadow-gray-200/50 ring-1 ring-gray-100 animate-fade-in-up animation-delay-200">
                        {['all', 'grains', 'spices', 'dairy', 'oils'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                className={`relative z-10 px-8 py-4 rounded-[32px] text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-500 btn-magnetic ${selectedCategory === cat
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

                {/* Product Grid */}
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
                        <p className="text-gray-400 font-medium uppercase tracking-widest text-xs">No items found in this category</p>
                    </div>
                )}
            </section>
        </div>
    );
}