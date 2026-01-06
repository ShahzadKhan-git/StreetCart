import HeroSlider from "@/components/home/HeroSlider";
import HomeCategoryGrid from "@/components/home/HomeCategoryGrid";
import ClothingCard from "@/components/ClothingCard";

// Mock data for Latest Arrivals (Reusing generic clothing card for now to fill space at bottom)
const LATEST_ARRIVALS = [
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
    title: "Summer floral Dress",
    price: "₹2,499",
    store: "Vogue",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    title: "Urban Hoodie",
    price: "₹1,899",
    store: "Street Style",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&auto=format&fit=crop&q=60"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* 2. Popular Categories */}
      <HomeCategoryGrid />

      {/* 3. Latest Arrivals (Bonus Section to match reference vibe) */}
      <section className="py-20 px-6 max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-2">Latest Arrivals</h2>
          <div className="w-24 h-1 bg-gray-200 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {LATEST_ARRIVALS.map((item) => (
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
      </section>
    </div>
  );
}
