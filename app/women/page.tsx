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
    }
];

export default function WomenPage() {
    return (
        <div className="min-h-screen bg-white pt-20"> {/* pt-20 to account for fixed navbar */}
            <div className="max-w-[1440px] mx-auto px-6 py-10">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Women's Collection</h1>
                    <p className="text-gray-600 max-w-2xl">
                        Discover the latest trends in women's fashion. Designed for elegance, comfort, and confidence for every occasion.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {WOMEN_CLOTHING.map((item) => (
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
