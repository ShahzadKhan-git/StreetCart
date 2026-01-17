"use client";

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface DynamicCategoryCardProps {
    title: string;
    subtitle: string;
    image: string;
    href: string;
    className?: string;
}

export default function DynamicCategoryCard({ title, subtitle, image, href, className = "" }: DynamicCategoryCardProps) {
    return (
        <Link href={href} className={`group relative block h-[300px] md:h-[400px] overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${className}`}>
            {/* Background Image */}
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                {/* Glass Card for text */}
                <div className="glass p-5 md:p-6 rounded-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 border border-white/20">
                    <div className="flex justify-between items-end">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-400 mb-1 block">Explore Category</span>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                {title}
                            </h3>
                            <p className="text-white/70 text-sm font-medium line-clamp-1">
                                {subtitle}
                            </p>
                        </div>
                        <div className="bg-white text-black p-2 rounded-full transform rotate-45 group-hover:rotate-0 transition-transform duration-500">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
