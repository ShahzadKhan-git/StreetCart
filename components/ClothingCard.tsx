import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";

interface ClothingCardProps {
    image: string;
    title: string;
    price: string;
    store: string;
}

export default function ClothingCard({ image, title, price, store }: ClothingCardProps) {
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

                {/* Overlay Buttons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-green-50 text-gray-700 hover:text-green-600 transition-colors">
                        <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-green-50 text-gray-700 hover:text-green-600 transition-colors">
                        <ShoppingCart className="w-5 h-5" />
                    </button>
                </div>

                {/* Quick Add Overlay (Mobile/Desktop distinct behavior could go here, keeping it simple for now) */}
            </div>

            {/* Content */}
            <div className="p-4">
                <div className="text-xs font-medium text-green-600 mb-1 uppercase tracking-wider">{store}</div>
                <h3 className="text-base font-semibold text-gray-900 mb-1 line-clamp-1 group-hover:text-green-700 transition-colors">{title}</h3>
                <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">{price}</span>
                    <span className="text-xs text-gray-500 line-through">₹{parseInt(price.replace('₹', '').replace(',', '')) * 1.5}</span>
                </div>
            </div>
        </div>
    );
}
