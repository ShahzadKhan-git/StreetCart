"use client";

import Link from "next/link";
import { ArrowLeft, Heart, ShoppingBag } from "lucide-react";
import ClothingCard from "@/components/ClothingCard";
import { useCart } from "@/context/CartContext";

export default function FavoritesPage() {
    const { wishlistItems, wishlistCount } = useCart();

    return (
        <div className="min-h-screen bg-white pt-24 pb-20 animate-fade-in-up">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-green-600 mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>

                    <div className="flex items-center gap-4 mb-4">
                        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">My Favorites</h1>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-semibold rounded-full mt-1">
                            {wishlistCount} {wishlistCount === 1 ? 'item' : 'items'}
                        </span>
                    </div>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        Keep track of the styles you love. Add them to your cart when you're ready to make them yours.
                    </p>
                </div>

                {/* Content */}
                {wishlistCount > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {wishlistItems.map((item) => (
                            <ClothingCard
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                store={item.store}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                            <Heart className="w-10 h-10 text-gray-300" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your wishlist is empty</h2>
                        <p className="text-gray-500 mb-8 max-w-xs text-center">
                            Save items that you like in your wishlist, and they will show up here.
                        </p>
                        <Link
                            href="/clothing"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-full font-bold hover:bg-black transition-all"
                        >
                            <ShoppingBag className="w-5 h-5" />
                            Start Shopping
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
