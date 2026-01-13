import ClothingCard from "@/components/ClothingCard";

const WOMEN_CLOTHING = [
    {
        id: 1,
        title: "Summer Floral Dress",
        price: "₹2,499",
        store: "Vogue",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 2,
        title: "Cropped Denim Jacket",
        price: "₹1,999",
        store: "Denim & Co",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 3,
        title: "Elegant Blouse",
        price: "₹1,299",
        store: "Chic Styles",
        image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 4,
        title: "High-Waist Jeans",
        price: "₹1,799",
        store: "Everyday Wear",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 5,
        title: "Maxi Skirt",
        price: "₹1,599",
        store: "Boho Vibes",
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 6,
        title: "Knitted Sweater",
        price: "₹1,499",
        store: "Winter Warmth",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 7,
        title: "Silk Slip Dress",
        price: "₹3,499",
        store: "Evening Luxe",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 8,
        title: "Bohemian Jumpsuit",
        price: "₹2,199",
        store: "Free Spirit",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 9,
        title: "Leather Biker Jacket",
        price: "₹4,899",
        store: "Edge Fashion",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 10,
        title: "Linen Wide-Leg Trousers",
        price: "₹1,899",
        store: "Minimalist",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 11,
        title: "Velvet Party Top",
        price: "₹1,399",
        store: "Night Out",
        image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 12,
        title: "Oversized Cashmere Cardigan",
        price: "₹2,799",
        store: "Soft Touch",
        image: "https://images.unsplash.com/photo-1583846714867-52c374934a25?w=600&auto=format&fit=crop&q=60"
    }
];

export default function WomenPage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-20 animate-fade-in-up"> {/* pt-24 for glass navbar */}
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="mb-16">
                    <span className="text-[10px] font-black text-green-600 uppercase tracking-[0.3em] mb-4 block">Trending Now</span>
                    <h1 className="text-5xl md:text-7xl font-black text-gray-950 tracking-tighter italic mb-6">Women's Collection</h1>
                    <p className="text-gray-500 font-medium max-w-2xl leading-relaxed">
                        Discover the latest trends in women's fashion. Designed for statement elegance, uncompromising comfort, and effortless confidence for every unique occasion.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {WOMEN_CLOTHING.map((item) => (
                        <ClothingCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            store={item.store}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
