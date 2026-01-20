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
        <div className="group relative bg-white rounded-[28px] shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-700 border border-gray-100 overflow-hidden cursor-pointer hover:-translate-y-2">
            {/* Image Container */}
            <div className="relative aspect-[3/4.2] w-full overflow-hidden bg-gray-50">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-1000 ease-out p-1 rounded-[32px]"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />

                {/* Glass Badge (Top Left) */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/80 backdrop-blur-md rounded-full border border-white/40 shadow-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="text-[8px] font-black text-gray-900 tracking-widest uppercase">New In</span>
                </div>

                {/* Wishlist Button (Top Right) - Floating Feel */}
                <button
                    className={`absolute top-4 right-4 p-2.5 rounded-full shadow-xl transition-all duration-500 z-10 ${isFavorited ? 'bg-red-500 text-white translate-y-0 scale-100' : 'bg-white/90 text-gray-800 hover:text-red-500 hover:bg-white translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 scale-90 group-hover:scale-100'
                        }`}
                    onClick={handleToggleWishlist}
                >
                    <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
                </button>

                {/* Interactive Bottom Actions - Slide & Blur */}
                <div className="absolute inset-x-0 bottom-4 px-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20">
                    <div className="bg-white/80 backdrop-blur-xl border border-white/20 p-2 rounded-2xl shadow-2xl flex gap-2">
                        {/* Add to Cart Button */}
                        <button
                            onClick={handleAddToCart}
                            className={`flex-1 py-3.5 rounded-xl flex items-center justify-center gap-2 font-black text-[9px] uppercase tracking-[0.15em] transition-all duration-300 btn-magnetic ${isAdded ? 'bg-green-600 text-white' : 'bg-gray-950 text-white hover:bg-black'
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

                {/* Subtle Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>

            {/* Content - Refined Visual Hierarchy */}
            <div className="p-6 transition-colors duration-500">
                <div className="flex justify-between items-start mb-2">
                    <div className="text-[10px] font-black text-green-600 uppercase tracking-[0.2em]">{store}</div>
                    <div className="px-2 py-0.5 bg-green-50 rounded text-[8px] font-black text-green-600 uppercase tracking-wider">Fast Ship</div>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-3 line-clamp-1 group-hover:text-green-700 transition-colors duration-300 leading-snug">{title}</h3>
                <div className="flex items-end justify-between">
                    <div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Price</div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-lg font-black text-gray-950 tracking-tight">{price}</span>
                            <span className="text-xs text-gray-300 font-black line-through">₹{parseInt(price.replace('₹', '').replace(',', '')) * 1.5}</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-[9px] font-black text-orange-600 uppercase tracking-widest">Limited Offer</span>
                        <span className="text-[11px] font-black text-gray-900 italic">-50% OFF</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
