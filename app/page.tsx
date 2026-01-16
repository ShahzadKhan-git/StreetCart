"use client";

import CategoryCard from "@/components/CategoryCard";
import { Store, Shirt, MapPin, Check, Loader2, Navigation } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [locationName, setLocationName] = useState("");

  const handleEnableLocation = () => {
    if (!navigator.geolocation) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    // Simulate reverse geocoding for a better UX
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // In a real app, you'd call a reverse geocoding API here
        // We'll simulate finding a "Local Market" based on coords
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
    <div className="flex flex-col items-center w-full bg-gradient-to-b from-gray-50 to-white min-h-screen pt-20">
      {/* 2. Hero Section */}
      <section className="w-full py-20 px-6 flex flex-col items-center text-center max-w-7xl mx-auto">
        {/* Centered Logo */}
        <div className="mb-8 relative w-[280px] h-[100px] md:w-[320px] md:h-[120px] transition-all duration-500 hover:scale-105">
          <Image
            src="/logo.png"
            alt="StreetCart"
            fill
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
          Your Nearby Stores, <br className="sm:hidden" /> <span className="text-green-600">Online</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed font-medium">
          Shop groceries and clothing from trusted local vendors around you with fast delivery and better pricing.
        </p>

        <button
          onClick={handleEnableLocation}
          disabled={status === "loading" || status === "success"}
          className={`flex items-center gap-3 border font-semibold py-3 px-8 md:py-4 md:px-10 rounded-full shadow-sm transition-all duration-300 group
            ${status === "success"
              ? "bg-green-50 border-green-200 text-green-700"
              : "bg-white border-gray-200 text-gray-900 h-14 md:h-16 hover:shadow-xl hover:-translate-y-1"
            }
          `}
        >
          {status === "idle" && (
            <>
              <MapPin className="w-5 h-5 md:w-6 md:h-6 text-green-600 fill-green-600 group-hover:scale-110 transition-transform" />
              <span className="text-base md:text-lg">Enable Location</span>
            </>
          )}

          {status === "loading" && (
            <>
              <Loader2 className="w-5 h-5 md:w-6 md:h-6 text-green-600 animate-spin" />
              <span className="text-base md:text-lg">Detecting...</span>
            </>
          )}

          {status === "success" && (
            <>
              <div className="flex items-center gap-2">
                <Navigation className="w-5 h-5 md:w-6 md:h-6 text-green-600 fill-green-600" />
                <div className="flex flex-col items-start text-left">
                  <span className="text-[10px] font-black uppercase tracking-widest leading-none text-green-600 mb-1">Serving Area</span>
                  <span className="text-sm md:text-base font-bold">{locationName}</span>
                </div>
                <div className="ml-2 bg-green-500 rounded-full p-1">
                  <Check className="w-3 h-3 text-white" strokeWidth={4} />
                </div>
              </div>
            </>
          )}

          {status === "error" && (
            <>
              <MapPin className="w-5 h-5 md:w-6 md:h-6 text-red-500 fill-red-100" />
              <span className="text-base md:text-lg text-red-600">Location Denied</span>
            </>
          )}
        </button>

        {status === "error" && (
          <p className="mt-4 text-xs text-red-400 font-medium">Please enable location permissions in your browser settings to find stores near you.</p>
        )}
      </section>

      {/* 3. Category Section */}
      <section className="w-full max-w-5xl px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <CategoryCard
            icon={<Store className="w-8 h-8 md:w-10 md:h-10" />}
            title="Kirana & Groceries"
            subtitle="Daily essentials near you"
          />
          <Link href="/fashion" className="block">
            <CategoryCard
              icon={<Shirt className="w-8 h-8 md:w-10 md:h-10" />}
              title="Clothing Stores"
              subtitle="Fashion from local shops"
            />
          </Link>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="w-full max-w-5xl px-6 py-12 md:py-16">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 md:mb-6">
          Why Choose Us?
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
          {/* Left: Checkmarks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-col gap-4 w-full">
            {[
              "Local vendors",
              "Better pricing",
              "Faster delivery",
              "Support local businesses"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="text-green-600 flex-shrink-0">
                  <Check className="w-5 h-5" />
                </div>
                <span className="text-base md:text-lg text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          {/* Right: CTA Button */}
          <div className="w-full md:w-auto mt-4 md:mt-0">
            <Link href="/auth" className="inline-block w-full md:w-auto bg-gradient-to-r from-[#508D69] to-[#2E5E4E] hover:opacity-90 text-white font-medium py-3 px-12 rounded shadow transition-all text-lg text-center">
              Login / Register
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
