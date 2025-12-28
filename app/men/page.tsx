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
        <div className="min-h-screen bg-white pt-20"> {/* pt-20 to account for fixed navbar */}
            <div className="max-w-[1440px] mx-auto px-6 py-10">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Men's Collection</h1>
                    <p className="text-gray-600 max-w-2xl">
                        Explore our latest collection of men's fashion. From casual wear to formal attire, find everything you need to elevate your style.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {MEN_CLOTHING.map((item) => (
                        <ClothingCard
                            key={item.id}
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
