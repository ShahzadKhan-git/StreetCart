import { ChevronDown, SlidersHorizontal } from "lucide-react";

export default function FilterBar() {
    return (
        <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 mb-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">

                {/* Left: Filter Toggle & Count */}
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium transition-colors">
                        <SlidersHorizontal className="w-4 h-4" />
                        Filters
                    </button>
                    <span className="text-gray-500 text-sm hidden sm:inline-block">1,240 results</span>
                </div>

                {/* Right: Quick Sort/Category Pills */}
                <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
                    {["All", "Men", "Women", "Kids", "Sale"].map((cat, i) => (
                        <button
                            key={cat}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${i === 0
                                    ? "bg-black text-white shadow-md"
                                    : "bg-white border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}

                    <div className="w-px h-6 bg-gray-200 mx-2 hidden sm:block"></div>

                    <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black">
                        Sort by <ChevronDown className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
