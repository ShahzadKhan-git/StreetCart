"use client";

import { Store, Shirt, MapPin, Check, Loader2, Navigation, Zap, ShieldCheck, Truck, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DynamicCategoryCard from "@/components/DynamicCategoryCard";
import FeaturedStores from "@/components/home/FeaturedStores";
import LiveTicker from "@/components/home/LiveTicker";

export default function Home() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [locationName, setLocationName] = useState("");

  const handleEnableLocation = () => {
    if (!navigator.geolocation) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setTimeout(() => {
          setStatus("success");
          setLocationName("Hauz Khas, New Delhi");
        }, 1500);
      },
      (error) => {
        console.error("Location error:", error);
        setStatus("error");
      },
      { enableHighAccuracy: true }
    );
  };

  return (
    <div className="flex flex-col items-center w-full bg-white min-h-screen">
      {/* 1. Live Activity Ticker */}
      <LiveTicker />

      {/* 2. Hero Section with Mesh Gradient */}
      <section className="w-full relative mesh-gradient pt-24 pb-20 md:pt-32 md:pb-32 px-6 overflow-hidden">
        {/* Floating Decorative Elements */}
        <div className="absolute top-1/4 -left-12 w-48 h-48 bg-green-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-green-300/10 rounded-full blur-3xl animate-pulse delay-700" />

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          {/* Centered Logo */}
          <div className="mb-10 relative w-[360px] h-[120px] md:w-[600px] md:h-[200px] transition-all duration-700 hover:scale-105">
            <Image
              src="/logo.png"
              alt="StreetCart"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-gray-950 mb-8 tracking-tighter leading-[0.9] italic">
              LOCAL STORES <br />
              <span className="text-green-600 not-italic">NOW ONLINE.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-12 leading-relaxed font-medium mx-auto">
              Your neighborhood's favorites, delivered to your doorstep. Support local businesses with the convenience of modern e-commerce.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleEnableLocation}
                disabled={status === "loading" || status === "success"}
                className={`flex items-center gap-3 border font-black py-4 px-10 rounded-full shadow-lg transition-all duration-300 group min-w-[280px] justify-center
                ${status === "success"
                    ? "bg-green-50 border-green-200 text-green-700"
                    : "bg-gray-950 border-gray-800 text-white h-16 hover:bg-black hover:shadow-2xl hover:-translate-y-1"
                  }
              `}
              >
                {status === "idle" && (
                  <>
                    <MapPin className="w-5 h-5 text-green-500 fill-green-500 group-hover:scale-110 transition-transform" />
                    <span className="text-base uppercase tracking-widest">Detect My Location</span>
                  </>
                )}

                {status === "loading" && (
                  <>
                    <Loader2 className="w-5 h-5 text-green-500 animate-spin" />
                    <span className="text-base uppercase tracking-widest">Locating...</span>
                  </>
                )}

                {status === "success" && (
                  <>
                    <Navigation className="w-5 h-5 text-green-600 fill-green-600" />
                    <div className="flex flex-col items-start text-left">
                      <span className="text-[9px] font-black uppercase tracking-widest leading-none text-green-600 mb-1">Serving</span>
                      <span className="text-sm font-bold">{locationName}</span>
                    </div>
                    <div className="ml-2 bg-green-500 rounded-full p-1">
                      <Check className="w-2.5 h-2.5 text-white" strokeWidth={4} />
                    </div>
                  </>
                )}
              </button>

              <Link href="/auth" className="h-16 flex items-center justify-center px-10 border-2 border-gray-200 rounded-full font-black uppercase tracking-widest text-sm text-gray-950 hover:bg-gray-50 transition-colors bg-white/50 backdrop-blur-sm">
                Join Us
              </Link>
            </div>

            {status === "error" && (
              <p className="mt-6 text-sm text-red-500 font-bold uppercase tracking-widest">Enable location permissions in settings</p>
            )}
          </div>
        </div>
      </section>

      {/* 3. Category Grid */}
      <section className="w-full max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DynamicCategoryCard
            title="Kirana & Groceries"
            subtitle="Daily essentials and fresh produce from local vendors"
            image="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"
            href="/kirana"
            className="animate-fade-in-up"
          />
          <DynamicCategoryCard
            title="Fashion & Clothing"
            subtitle="Trending streetwear and essentials from local boutiques"
            image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
            href="/fashion"
            className="animate-fade-in-up animation-delay-200"
          />
        </div>
      </section>

      {/* 4. Featured Stores Section */}
      <div className="w-full bg-gray-50/50 border-y border-gray-100">
        <FeaturedStores />
      </div>

      {/* 5. Premium Benefits Card */}
      <section className="w-full max-w-7xl px-6 py-24">
        <div className="bg-gray-950 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden group">
          {/* Decorative Gradient */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-500/10 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-green-500 mb-4 block">The StreetCart Edge</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight italic">
                WHY SHOP <br />
                <span className="text-green-500 not-italic">WITH US?</span>
              </h2>
              <p className="text-gray-400 text-lg font-medium max-w-md mb-10 leading-relaxed">
                We bridge the gap between your favorite local shops and the digital convenience of online ordering.
              </p>
              <Link href="/auth" className="inline-flex items-center gap-3 bg-white text-black font-black uppercase tracking-widest text-xs py-5 px-10 rounded-full hover:bg-green-500 hover:text-white transition-all duration-500">
                Get Started Now <Zap className="w-4 h-4 fill-current" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {[
                { icon: <Store className="w-6 h-6" />, title: "Local Vendors", desc: "Sourced directlyจาก neighborhood stores" },
                { icon: <ShieldCheck className="w-6 h-6" />, title: "Best Pricing", desc: "Direct vendor prices with no hidden markups" },
                { icon: <Truck className="w-6 h-6" />, title: "Hyper-Local", desc: "Delivery within minutes, not days" },
                { icon: <Sparkles className="w-6 h-6" />, title: "Premium Quality", desc: "Handpicked partners for the best experience" }
              ].map((benefit, i) => (
                <div key={i} className="flex flex-col gap-4 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-green-500 group-hover/item:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
