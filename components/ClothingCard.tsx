"use client";

import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface ClothingCardProps {
    id: number | string;
    image: string;
    title: string;
    price: string;
    store: string;
}

export default function ClothingCard({ id, image, title, price, store }: ClothingCardProps) {
    const { addToCart, toggleWishlist, isInWishlist } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const isFavorited = isInWishlist(id);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent navigation if the card is a link
        addToCart({ id, image, title, price, store });
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    const handleToggleWishlist = (e: React.MouseEvent) => {
        e.stopPropagation();
        toggleWishlist({ id, image, title, price, store });
    };

    return (
        <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden cursor-pointer hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />

                {/* Wishlist Button (Top Right) - More refined glass */}
                <button
                    className={`absolute top-3 right-3 p-2 rounded-full shadow-lg transition-all duration-400 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 ${isFavorited ? 'bg-white text-red-500' : 'bg-white/40 backdrop-blur-md text-gray-800 hover:text-red-500 hover:bg-white'
                        }`}
                    onClick={handleToggleWishlist}
                >
                    <Heart className={`w-4.5 h-4.5 ${isFavorited ? 'fill-current' : ''}`} />
                </button>

                {/* Modern Bottom Overlay - Glassmorphism */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-black/10 backdrop-blur-md border-t border-white/20 flex gap-2">
                    {/* Wishlist Button */}
                    <button
                        onClick={handleToggleWishlist}
                        className={`flex-1 py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-[10px] uppercase tracking-tighter transition-all duration-300 ${isFavorited ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-900 hover:bg-white'
                            }`}
                    >
                        <Heart className={`w-3.5 h-3.5 ${isFavorited ? 'fill-current' : ''}`} />
                        {isFavorited ? 'SAVED' : 'WISH'}
                    </button>

                    {/* Add to Cart Button */}
                    <button
                        onClick={handleAddToCart}
                        className={`flex-[2.5] py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-[10px] uppercase tracking-tighter transition-all duration-300 ${isAdded ? 'bg-green-500 text-white' : 'bg-gray-900 text-white hover:bg-black'
                            }`}
                    >
                        {isAdded ? (
                            <>✓ ADDED</>
                        ) : (
                            <>
                                <ShoppingCart className="w-3.5 h-3.5" />
                                ADD TO CART
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Content - Modern Typography */}
            <div className="p-5">
                <div className="text-[10px] font-black text-green-600 mb-1.5 uppercase tracking-[0.2em]">{store}</div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-1 group-hover:text-green-700 transition-colors">{title}</h3>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <span className="text-base font-black text-gray-950">{price}</span>
                        <span className="text-xs text-gray-400 font-medium line-through">₹{parseInt(price.replace('₹', '').replace(',', '')) * 1.5}</span>
                    </div>
                    <div className="px-2 py-0.5 bg-orange-50 rounded text-[9px] font-black text-orange-600 uppercase tracking-wider">50% OFF</div>
                </div>
            </div>
        </div>
    );
}
