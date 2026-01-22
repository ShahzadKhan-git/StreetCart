import Link from "next/link";
import Image from "next/image";

export interface CategoryItem {
    id: number | string;
    title: string;
    image: string;
    link: string;
}

const DEFAULT_CATEGORIES: CategoryItem[] = [
    {
        id: 1,
        title: "SHIRT STYLE",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop",
        link: "/clothing"
    },
    {
        id: 2,
        title: "DENIMS",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
        link: "/clothing"
    },
    {
        id: 3,
        title: "LEATHER JACKETS",
        image: "https://images.unsplash.com/photo-1551028919-ac66e6a39451?q=80&w=800&auto=format&fit=crop",
        link: "/clothing"
    },
    {
        id: 4,
        title: "HOODIES",
        image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=800&auto=format&fit=crop",
        link: "/clothing"
    }
];

interface HomeCategoryGridProps {
    categories?: CategoryItem[];
    title?: string;
}

export default function HomeCategoryGrid({
    categories = DEFAULT_CATEGORIES,
    title = "Popular Categories"
}: HomeCategoryGridProps) {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-2">{title}</h2>
                    <div className="w-24 h-1 bg-gray-200 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            href={cat.link}
                            className="group relative h-[420px] overflow-hidden cursor-pointer"
                        >
                            <Image
                                src={cat.image}
                                alt={cat.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                            {/* Content */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-2xl font-bold text-white tracking-widest uppercase mb-4 opacity-90">
                                        {cat.title}
                                    </h3>
                                    <span className="inline-block px-6 py-2 border border-white text-white text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-white hover:text-black">
                                        Shop Now
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
