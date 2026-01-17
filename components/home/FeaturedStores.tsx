"use client";

import { MapPin, Star } from 'lucide-react';
import Image from 'next/image';

const STORES = [
    {
        id: 1,
        name: "Gupta Kirana Store",
        category: "Groceries",
        rating: 4.8,
        distance: "0.2 km",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
        isOpen: true
    },
    {
        id: 2,
        name: "Denim Hub",
        category: "Fashion",
        rating: 4.5,
        distance: "0.5 km",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
        isOpen: true
    },
    {
        id: 3,
        name: "Vogue Local",
        category: "Boutique",
        rating: 4.9,
        distance: "0.8 km",
        image: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=600&q=80",
        isOpen: true
    },
    {
        id: 4,
        name: "Fresh Fruits & Veg",
        category: "Produce",
        rating: 4.7,
        distance: "0.3 km",
        image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=600&q=80",
        isOpen: false
    }
];

export default function FeaturedStores() {
    return (
        <section className="w-full py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-10">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green-600 mb-2 block">Trusted Partners</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-950 tracking-tight italic">Featured Stores Near You</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {STORES.map((store) => (
                        <div key={store.id} className="group cursor-pointer">
                            <div className="relative h-48 rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition-all duration-300">
                                <Image
                                    src={store.image}
                                    alt={store.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                    <span className="text-xs font-bold">{store.rating}</span>
                                </div>
                                {!store.isOpen && (
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]">
                                        <span className="bg-white/90 text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Currently Closed</span>
                                    </div>
                                )}
                            </div>
                            <div>
                                <div className="flex items-start justify-between mb-1">
                                    <h3 className="font-bold text-gray-950 group-hover:text-green-600 transition-colors truncate pr-2">
                                        {store.name}
                                    </h3>
                                    <span className="text-[10px] font-bold text-gray-400 whitespace-nowrap pt-1 uppercase tracking-widest">{store.distance}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-500 font-medium">{store.category}</span>
                                    <div className="w-1 h-1 rounded-full bg-gray-300" />
                                    <div className="flex items-center gap-1 text-[10px] text-gray-500 font-bold uppercase">
                                        <MapPin className="w-2.5 h-2.5" />
                                        <span>Local Vendor</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
