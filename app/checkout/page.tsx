"use client";

import { useCart } from "@/context/CartContext";
import { ChevronLeft, CreditCard, Truck, ShieldCheck, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function CheckoutPage() {
    const { cartItems, clearCart } = useCart();
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    const subtotal = cartItems.reduce(
        (acc, item) => acc + parseInt(item.price.replace('₹', '').replace(',', '')) * item.quantity,
        0
    );

    const handlePlaceOrder = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        clearCart();
        alert("Order placed successfully!");
        router.push("/");
    };

    if (cartItems.length === 0 && !isProcessing) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                    <Truck className="w-10 h-10 text-gray-200" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h1>
                <p className="text-gray-500 mb-8">You haven't added anything to checkout yet.</p>
                <Link
                    href="/"
                    className="px-8 py-3 bg-gray-900 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-black transition-all"
                >
                    Back to Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 pt-32 pb-20">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors group"
                >
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Shopping
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Checkout Form */}
                    <div className="lg:col-span-7 space-y-12">
                        <section>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-black text-gray-900">Shipping Details</h2>
                            </div>

                            <form id="checkout-form" onSubmit={handlePlaceOrder} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">First Name</label>
                                    <input required type="text" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-black outline-none transition-all font-medium" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Last Name</label>
                                    <input required type="text" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-black outline-none transition-all font-medium" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Address</label>
                                    <input required type="text" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-black outline-none transition-all font-medium" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">City</label>
                                    <input required type="text" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-black outline-none transition-all font-medium" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Postal Code</label>
                                    <input required type="text" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-black outline-none transition-all font-medium" />
                                </div>
                            </form>
                        </section>

                        <section>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center">
                                    <CreditCard className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-black text-gray-900">Payment Method</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-6 border-2 border-black rounded-3xl cursor-pointer bg-white flex items-center gap-4 transition-all">
                                    <div className="w-4 h-4 border-4 border-black rounded-full" />
                                    <span className="font-bold text-gray-900">Cash on Delivery</span>
                                </div>
                                <div className="p-6 border-2 border-gray-100 rounded-3xl cursor-pointer bg-gray-50 flex items-center gap-4 hover:border-black transition-all group opacity-50">
                                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full group-hover:border-black" />
                                    <span className="font-bold text-gray-400 group-hover:text-gray-900">Online Payment</span>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-5">
                        <div className="bg-gray-50 rounded-[40px] p-8 lg:p-12 sticky top-32">
                            <h2 className="text-2xl font-black text-gray-900 mb-8">Order Summary</h2>

                            <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-white border border-gray-100 flex-shrink-0">
                                            <Image src={item.image} alt={item.title} fill className="object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0 py-1">
                                            <h3 className="text-sm font-bold text-gray-900 truncate mb-1">{item.title}</h3>
                                            <p className="text-xs text-gray-500 mb-2">Qty: {item.quantity}</p>
                                            <p className="font-black text-gray-900">{item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4 pt-8 border-t border-gray-200">
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Subtotal</span>
                                    <span className="font-bold text-gray-900">₹{subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Shipping</span>
                                    <span className="text-green-600 font-black italic">FREE</span>
                                </div>
                                <div className="flex justify-between text-2xl font-black text-gray-900 pt-4">
                                    <span>Total</span>
                                    <span>₹{subtotal.toLocaleString()}</span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                form="checkout-form"
                                disabled={isProcessing}
                                className={`w-full mt-10 py-6 bg-black text-white rounded-[24px] font-black text-sm uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 ${isProcessing ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-gray-200'}`}
                            >
                                {isProcessing ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        Complete Purchase
                                        <Truck className="w-4 h-4" />
                                    </>
                                )}
                            </button>

                            <div className="mt-8 flex items-center justify-center gap-3 py-4 bg-white/50 rounded-2xl">
                                <ShieldCheck className="w-4 h-4 text-green-600" />
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Secure Checkout Guaranteed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #e5e7eb;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #d1d5db;
                }
            `}</style>
        </div>
    );
}
