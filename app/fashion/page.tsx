import Link from "next/link";
import HeroSlider from "@/components/home/HeroSlider";
import HomeCategoryGrid from "@/components/home/HomeCategoryGrid";
import ClothingCard from "@/components/ClothingCard";

// Mock data for Latest Arrivals (Reusing generic clothing card for now to fill space at bottom)
const LATEST_ARRIVALS = [
    {
        id: 7,
        title: "Tactical Cargo Pants",
        price: "₹1,799",
        store: "Urban Tech",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 11,
        title: "Velvet Party Top",
        price: "₹1,399",
        store: "Night Out",
        image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 8,
        title: "Linen Summer Shirt",
        price: "₹1,599",
        store: "Coastal Breeze",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 10,
        title: "Linen Wide-Leg Trousers",
        price: "₹1,899",
        store: "Minimalist",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&auto=format&fit=crop&q=60"
    }
];

export default function FashionPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* 1. Hero Slider */}
            <HeroSlider />

            {/* 2. Popular Categories */}
            <HomeCategoryGrid />

            {/* 3. Latest Arrivals (Bonus Section to match reference vibe) */}
            <section className="py-24 px-6 max-w-[1440px] mx-auto animate-fade-in-up">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <span className="text-[10px] font-black text-green-600 uppercase tracking-[0.3em] mb-4 block">Selected for you</span>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-950 tracking-tighter leading-none mb-4 italic">Latest Shop Arrivals</h2>
                        <p className="text-gray-500 font-medium">Curated from the best local boutiques in your neighborhood.</p>
                    </div>
                    <Link href="/clothing" className="text-xs font-black uppercase tracking-widest text-gray-900 border-b-2 border-green-500 pb-1 hover:text-green-600 transition-colors">
                        View All Collection
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                    {LATEST_ARRIVALS.map((item, idx) => (
                        <div key={item.id} className={`animation-delay-${(idx + 1) * 200}`}>
                            <ClothingCard
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                store={item.store}
                                image={item.image}
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Men's Collection Preview */}
            <section className="py-24 px-6 max-w-[1440px] mx-auto border-t border-gray-100">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <span className="text-[10px] font-black text-green-600 uppercase tracking-[0.3em] mb-4 block">For Him</span>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-950 tracking-tighter leading-none mb-4 italic">Men's Wardrobe</h2>
                        <p className="text-gray-500 font-medium">Experimental streetwear and minimalist essentials for the modern man.</p>
                    </div>
                    <Link href="/men" className="text-xs font-black uppercase tracking-widest text-gray-900 border-b-2 border-green-500 pb-1 hover:text-green-600 transition-colors">
                        Explore Men's
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                    {/* Reusing some mock products for preview */}
                    {[
                        { id: 10, title: "Wool Blend Overcoat", price: "₹5,499", store: "Heritage Tailors", image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&auto=format&fit=crop&q=60" },
                        { id: 11, title: "Graphic Skate Hoodie", price: "₹2,199", store: "Street Style", image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&auto=format&fit=crop&q=60" },
                        { id: 12, title: "Tailored Navy Blazer", price: "₹3,299", store: "Formal Finishes", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=60" },
                        { id: 9, title: "Heavyweight Boxy Tee", price: "₹799", store: "Essentials", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&auto=format&fit=crop&q=60" }
                    ].map((item, idx) => (
                        <div key={item.id} className={`animation-delay-${(idx + 1) * 200}`}>
                            <ClothingCard {...item} />
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Women's Collection Preview */}
            <section className="py-24 px-6 max-w-[1440px] mx-auto border-t border-gray-100 bg-gray-50/30">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <span className="text-[10px] font-black text-green-600 uppercase tracking-[0.3em] mb-4 block">For Her</span>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-950 tracking-tighter leading-none mb-4 italic">Women's Edit</h2>
                        <p className="text-gray-500 font-medium">Trending styles and elegant silhouettes curated for every occasion.</p>
                    </div>
                    <Link href="/women" className="text-xs font-black uppercase tracking-widest text-gray-900 border-b-2 border-green-500 pb-1 hover:text-green-600 transition-colors">
                        Explore Women's
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                    {[
                        { id: 7, title: "Silk Slip Dress", price: "₹3,499", store: "Evening Luxe", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=60" },
                        { id: 8, title: "Bohemian Jumpsuit", price: "₹2,199", store: "Free Spirit", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&auto=format&fit=crop&q=60" },
                        { id: 9, title: "Leather Biker Jacket", price: "₹4,899", store: "Edge Fashion", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=60" },
                        { id: 12, title: "Oversized Cashmere Cardigan", price: "₹2,799", store: "Soft Touch", image: "https://images.unsplash.com/photo-1583846714867-52c374934a25?w=600&auto=format&fit=crop&q=60" }
                    ].map((item, idx) => (
                        <div key={item.id} className={`animation-delay-${(idx + 1) * 200}`}>
                            <ClothingCard {...item} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
