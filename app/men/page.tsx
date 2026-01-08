import ClothingCard from "@/components/ClothingCard";

const MEN_CLOTHING = [
    {
        id: 1,
        title: "Casual Denim Shirt",
        price: "₹1,299",
        store: "Denim Hub",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 2,
        title: "Basic White Tee",
        price: "₹499",
        store: "Essentials",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 3,
        title: "Urban Hoodie",
        price: "₹1,899",
        store: "Street Style",
        image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 4,
        title: "Slim Fit Chinos",
        price: "₹1,499",
        store: "Men's Wear",
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 5,
        title: "Leather Jacket",
        price: "₹3,999",
        store: "Leather Co.",
        image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 6,
        title: "Striped Polo",
        price: "₹899",
        store: "Classic Fits",
        image: "https://images.unsplash.com/photo-1626557981101-aae6f84aa6ff?w=600&auto=format&fit=crop&q=60"
    }
];

export default function MenPage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-20 animate-fade-in-up"> {/* pt-24 for glass navbar */}
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="mb-16">
                    <span className="text-[10px] font-black text-green-600 uppercase tracking-[0.3em] mb-4 block">New Season</span>
                    <h1 className="text-5xl md:text-7xl font-black text-gray-950 tracking-tighter italic mb-6">Men's Collection</h1>
                    <p className="text-gray-500 font-medium max-w-2xl leading-relaxed">
                        Explore our latest collection of men's fashion. From experimental streetwear to minimalist essentials, find everything you need to define your signature look.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {MEN_CLOTHING.map((item) => (
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
