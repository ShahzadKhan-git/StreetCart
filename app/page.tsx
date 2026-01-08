import Link from "next/link";
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
    </div>
  );
}
