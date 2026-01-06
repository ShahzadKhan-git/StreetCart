import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles, Zap } from "lucide-react";
import ClothingCard from "@/components/ClothingCard";
import FilterBar from "@/components/FilterBar";

// Mock Data for Kirana Products
const PRODUCTS = [
    {
        id: 1,
        title: "Premium Basmati Rice",
        price: "₹299",
        store: "Grocery Hub",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
        category: "Grains"
    },
    {
        id: 2,
        title: "Organic Turmeric Powder",
        price: "₹89",
        store: "Spice Corner",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
        category: "Spices"
    },
    {
        id: 3,
        title: "Fresh Cow Milk",
        price: "₹65",
        store: "Dairy Fresh",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80",
        category: "Dairy"
    },
    {
        id: 4,
        title: "Whole Wheat Flour",
        price: "₹149",
        store: "Grain Market",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
        category: "Flour"
    },
    {
        id: 5,
        title: "Sunflower Cooking Oil",
        price: "₹199",
        store: "Oil Depot",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
        category: "Oils"
    },
    {
        id: 6,
        title: "Red Chilli Powder",
        price: "₹79",
        store: "Spice Bazaar",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
        category: "Spices"
    },
    {
        id: 7,
        title: "Sugar Cane Jaggery",
        price: "₹129",
        store: "Sweet Store",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80",
        category: "Sweeteners"
    },
    {
        id: 8,
        title: "Green Tea Leaves",
        price: "₹159",
        store: "Tea House",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80",
        category: "Beverages"
    }
];

export default function KiranaPage() {
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
                                Fresh & Local
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
                                Kirana Essentials, <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                                    Delivered Daily.
                                </span>
                            </h1>
                            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                                Get fresh groceries and daily essentials from trusted local kirana stores.
                                Quality products from your neighborhood, delivered to your doorstep.
                            </p>
                        </div>

                        {/* AI Generator Teaser */}
                        <div className="hidden md:flex flex-col items-end text-right">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-200 mb-4 animate-bounce-slow">
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                            <span className="text-sm font-semibold text-gray-900">Smart Shopping</span>
                            <span className="text-xs text-gray-500">Curated for you</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Filter Bar */}
            <FilterBar />

            {/* 3. Product Grid */}
            <main className="max-w-7xl mx-auto px-6 pb-24">
                <h2 className="sr-only">Kirana Products</h2>

                {/* Grid Layout: 2 cols mobile, 3 tablet, 4 desktop */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                    {PRODUCTS.map((product) => (
                        <ClothingCard
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            store={product.store}
                        />
                    ))}
                </div>

                {/* Load More Trigger */}
                <div className="mt-20 flex justify-center">
                    <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:-translate-y-1/2 transition-all duration-300">
                        Load More Items
                    </button>
                </div>
            </main>
        </div>
    );
}