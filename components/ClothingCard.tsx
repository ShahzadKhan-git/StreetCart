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
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent navigation if the card is a link
        addToCart({ id, image, title, price, store });
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer">
            {/* Image Container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />

                {/* Wishlist Button (Always visible on hover) */}
                <button
                    className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white text-gray-700 hover:text-red-500 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0"
                    onClick={(e) => { e.stopPropagation(); /* Wishlist logic here */ }}
                >
                    <Heart className="w-5 h-5" />
                </button>

                {/* Myntra Style Add to Cart Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/60 to-transparent">
                    <button
                        onClick={handleAddToCart}
                        className={`w-full py-2.5 rounded-lg flex items-center justify-center gap-2 font-bold text-sm transition-all duration-300 ${isAdded ? 'bg-green-500 text-white' : 'bg-white text-gray-900 hover:bg-green-600 hover:text-white'
                            }`}
                    >
                        {isAdded ? (
                            <>✓ ADDED</>
                        ) : (
                            <>
                                <ShoppingCart className="w-4 h-4" />
                                ADD TO CART
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                <div className="text-xs font-medium text-green-600 mb-1 uppercase tracking-wider">{store}</div>
                <h3 className="text-base font-semibold text-gray-900 mb-1 line-clamp-1 group-hover:text-green-700 transition-colors">{title}</h3>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">{price}</span>
                        <span className="text-xs text-gray-500 line-through">₹{parseInt(price.replace('₹', '').replace(',', '')) * 1.5}</span>
                    </div>
                    <span className="text-[10px] font-bold text-orange-500">(50% OFF)</span>
                </div>
            </div>
        </div>
    );
}
