"use client";

import CategoryCard from "@/components/CategoryCard";
import { Store, Shirt, MapPin, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MainPage() {
    return (
        <div className="flex flex-col items-center w-full bg-gradient-to-b from-gray-50 to-white min-h-screen pt-20">
            {/* 2. Hero Section */}
            <section className="w-full py-20 px-6 flex flex-col items-center text-center max-w-7xl mx-auto">
                {/* Centered Logo */}
                <div className="mb-8 relative w-[280px] h-[100px] md:w-[320px] md:h-[120px] transition-all duration-500 hover:scale-105">
                    <Image
                        src="/logo.png"
                        alt="StreetCart"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                    Your Nearby Stores, <span className="text-green-600">Online</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed font-medium">
                    Shop groceries and clothing from trusted local vendors around you with fast delivery and better pricing.
                </p>

                <button className="flex items-center gap-3 bg-white border border-gray-200 text-gray-900 font-semibold py-4 px-10 rounded-full shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    <MapPin className="w-6 h-6 text-green-600 fill-green-600 group-hover:scale-110 transition-transform" />
                    <span className="text-lg">Enable Location</span>
                </button>
            </section>

            {/* 3. Category Section */}
            <section className="w-full max-w-5xl px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <CategoryCard
                        icon={<Store className="w-10 h-10" />}
                        title="Kirana & Groceries"
                        subtitle="Daily essentials near you"
                    />
                    <Link href="/" className="block">
                        <CategoryCard
                            icon={<Shirt className="w-10 h-10" />}
                            title="Clothing Stores"
                            subtitle="Fashion from local shops"
                        />
                    </Link>
                </div>
            </section>

            {/* 4. Why Choose Us Section */}
            <section className="w-full max-w-5xl px-6 py-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Why Choose Us?
                </h2>
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    {/* Left: Checkmarks */}
                    <div className="flex flex-col gap-4">
                        {[
                            "Local vendors",
                            "Better pricing",
                            "Faster delivery",
                            "Support local businesses"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="text-green-600">
                                    <Check className="w-5 h-5" />
                                </div>
                                <span className="text-lg text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Right: CTA Button */}
                    <div className="w-full md:w-auto mt-4 md:mt-0">
                        <Link href="/auth" className="inline-block w-full md:w-auto bg-gradient-to-r from-[#508D69] to-[#2E5E4E] hover:opacity-90 text-white font-medium py-3 px-12 rounded shadow transition-all text-lg text-center">
                            Login / Register
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
