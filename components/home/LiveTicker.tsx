"use client";

import { Zap, TrendingUp, ShoppingBag } from 'lucide-react';

const UPDATES = [
    { id: 1, text: "Fresh sourdough just arrived at Gupta Kirana Store", icon: <Zap className="w-3 h-3 text-green-500" /> },
    { id: 2, text: "Trending: Winter oversized hoodies at Denim Hub", icon: <TrendingUp className="w-3 h-3 text-blue-500" /> },
    { id: 3, text: "Flash Sale: 20% off on organic vegetables at Fresh Mart", icon: <ShoppingBag className="w-3 h-3 text-orange-500" /> },
    { id: 4, text: "New Arrival: Minimalist accessories at Vogue Local", icon: <Zap className="w-3 h-3 text-purple-500" /> },
];

export default function LiveTicker() {
    return (
        <div className="w-full bg-gray-950 py-3 overflow-hidden border-b border-white/5 relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-950 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-950 to-transparent z-10" />

            <div className="flex animate-marquee whitespace-nowrap">
                {[...UPDATES, ...UPDATES].map((update, idx) => (
                    <div key={`${update.id}-${idx}`} className="flex items-center gap-4 px-8 border-r border-white/10 group">
                        <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                            {update.icon}
                        </div>
                        <span className="text-[11px] md:text-xs font-bold text-white tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                            {update.text}
                        </span>
                    </div>
                ))}
            </div>

            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </div>
    );
}
