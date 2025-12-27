import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles, Zap } from "lucide-react";
import ClothingCard from "@/components/ClothingCard";
import FilterBar from "@/components/FilterBar";

// Mock Data for "AI Generated" Products
const PRODUCTS = [
    {
        id: 1,
        title: "Urban Oversized Tee",
        price: "₹899",
        store: "TrendSetterz",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
        category: "Men"
    },
    {
        id: 2,
        title: "Floral Summer Breeze Dress",
        price: "₹1,499",
        store: "Vogue Local",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80", // Better dress image 
        category: "Women"
    },
    {
        id: 3,
        title: "Classic Denim Jacket",
        price: "₹2,299",
        store: "Denim Hub",
        image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=600&q=80",
        category: "Unisex"
    },
    {
        id: 4,
        title: "Slim Fit Cotton Chinos",
        price: "₹1,199",
        store: "Khaki King",
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=600&q=80",
        category: "Men"
    },
    {
        id: 5,
        title: "Boho Chic Maxi Skirt",
        price: "₹1,299",
        store: "Indie Weave",
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=600&q=80",
        category: "Women"
    },
    {
        id: 6,
        title: "Streetwear Hoodie",
        price: "₹1,899",
        store: "Hype Beast",
        image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=600&q=80",
        category: "Unisex"
    },
    {
        id: 7,
        title: "Formal Oxford Shirt",
        price: "₹1,599",
        store: "Gentleman's Club",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
        category: "Men"
    },
    {
        id: 8,
        title: "Athleisure Crop Top",
        price: "₹799",
        store: "FitLife",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
        category: "Women"
    }
];

export default function ClothingPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* 1. Hero Section */}
            <div className="relative w-full bg-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-green-600 mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>

                    <div className="flex flex-col md:flex-row items-end justify-between gap-8">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold tracking-wide mb-6 uppercase">
                                <Zap className="w-3 h-3 fill-current" />
                                New Arrivals
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
                                Local Fashion, <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                                    Delivered Fast.
                                </span>
                            </h1>
                            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                                Discover trending clothing from trusted local stores near you.
                                Experience the perfect blend of neighborhood charm and modern style.
                            </p>
                        </div>

                        {/* AI Generator Teaser */}
                        <div className="hidden md:flex flex-col items-end text-right">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-200 mb-4 animate-bounce-slow">
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                            <span className="text-sm font-semibold text-gray-900">AI-Curated Styles</span>
                            <span className="text-xs text-gray-500">Personalized for you</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Filter Bar */}
            <FilterBar />

            {/* 3. Product Grid */}
            <main className="max-w-7xl mx-auto px-6 pb-24">
                <h2 className="sr-only">Clothing Products</h2>

                {/* Grid Layout: 2 cols mobile, 3 tablet, 4 desktop */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                    {PRODUCTS.map((product) => (
                        <ClothingCard
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            store={product.store}
                        />
                    ))}
                </div>

                {/* Load More Trigger */}
                <div className="mt-20 flex justify-center">
                    <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        Load More Styles
                    </button>
                </div>
            </main>
        </div>
    );
}
