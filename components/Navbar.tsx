"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart, User, Menu, Heart, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isFashionPage = pathname === '/fashion' || pathname === '/clothing' || pathname === '/men' || pathname === '/women';
    const { cartCount, wishlistCount, setIsCartOpen } = useCart();

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass h-20 transition-all duration-300">
            <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between gap-8">

                {/* 1. Logo (Left) */}
                <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
                    <span className="text-2xl font-black tracking-tighter text-gray-900 group-hover:scale-105 transition-transform">
                        STREET<span className="text-green-600">CART</span>
                    </span>
                </Link>

                {/* 2. Navigation Links (Center-Left) - Hidden on Mobile */}
                <div className="hidden lg:flex items-center gap-6 text-[11px] xl:text-[13px] font-bold uppercase tracking-widest text-gray-500">
                    <Link href="/" className={`hover:text-black transition-colors ${pathname === '/' ? 'text-green-700' : ''}`}>Main</Link>
                    <Link href="/kirana" className={`hover:text-black transition-colors ${pathname === '/kirana' ? 'text-green-700' : ''}`}>Kirana</Link>
                    <Link href="/clothing" className={`hover:text-black transition-colors ${pathname === '/clothing' ? 'text-green-700' : ''}`}>Clothing</Link>
                    <Link href="/fashion" className={`hover:text-black transition-colors ${pathname === '/fashion' ? 'text-green-700' : ''}`}>Fashion</Link>
                    {isFashionPage && (
                        <>
                            <Link href="/men" className={`hover:text-black transition-colors ${pathname === '/men' ? 'text-green-700' : ''}`}>Men</Link>
                            <Link href="/women" className={`hover:text-black transition-colors ${pathname === '/women' ? 'text-green-700' : ''}`}>Women</Link>
                        </>
                    )}
                </div>

                {/* 3. Search Bar (Center) - Hidden on very small screens, visible on md+ */}
                <div className="hidden md:flex flex-1 max-w-[200px] lg:max-w-sm relative group">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full h-10 pl-10 pr-4 bg-gray-100/80 rounded-full text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:bg-white transition-all ring-1 ring-gray-200"
                    />
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                </div>

                {/* 4. Right Actions */}
                <div className="flex items-center gap-6 flex-shrink-0">
                    <div className="hidden sm:flex items-center gap-4">
                        <Link href="/auth" className="text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-green-600 transition-colors">
                            Login
                        </Link>
                        <Link href="/auth" className="px-6 py-2.5 bg-gray-900 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-black transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                            Register
                        </Link>
                    </div>

                    <div className="flex items-center gap-3 md:gap-5 md:border-l md:border-gray-200 md:pl-6">
                        <Link href="/favorites" className="relative group p-1">
                            <Heart className="w-5 h-5 text-gray-700 group-hover:text-red-500 transition-all group-hover:scale-110" />
                            {wishlistCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white transition-all scale-100 group-hover:scale-110">
                                    {wishlistCount}
                                </span>
                            )}
                        </Link>

                        <button
                            className="relative group p-1"
                            onClick={() => setIsCartOpen(true)}
                        >
                            <ShoppingCart className="w-5 h-5 text-gray-700 group-hover:text-black transition-all group-hover:scale-110" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-[10px] font-bold text-white transition-all scale-100 group-hover:scale-110">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu className="w-6 h-6 text-gray-700" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Menu Content */}
                <div className={`absolute top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between p-6 border-b">
                            <span className="text-xl font-black tracking-tighter text-gray-900">
                                STREET<span className="text-green-600">CART</span>
                            </span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-500" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto py-8 px-6">
                            <div className="flex flex-col gap-6">
                                <Link href="/" className="text-lg font-bold text-gray-900 flex items-center justify-between">
                                    Main Page
                                    <span className={`w-2 h-2 rounded-full bg-green-600 ${pathname === '/' ? 'opacity-100' : 'opacity-0'}`} />
                                </Link>
                                <Link href="/kirana" className="text-lg font-bold text-gray-900 flex items-center justify-between">
                                    Kirana Stores
                                    <span className={`w-2 h-2 rounded-full bg-green-600 ${pathname === '/kirana' ? 'opacity-100' : 'opacity-0'}`} />
                                </Link>
                                <Link href="/clothing" className="text-lg font-bold text-gray-900 flex items-center justify-between">
                                    Clothing Stores
                                    <span className={`w-2 h-2 rounded-full bg-green-600 ${pathname === '/clothing' ? 'opacity-100' : 'opacity-0'}`} />
                                </Link>
                                <Link href="/fashion" className="text-lg font-bold text-gray-900 flex items-center justify-between">
                                    Fashion Hub
                                    <span className={`w-2 h-2 rounded-full bg-green-600 ${pathname === '/fashion' ? 'opacity-100' : 'opacity-0'}`} />
                                </Link>

                                {isFashionPage && (
                                    <div className="pt-6 border-t flex flex-col gap-6">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Shop by Category</p>
                                        <Link href="/men" className="text-lg font-bold text-gray-900">Men</Link>
                                        <Link href="/women" className="text-lg font-bold text-gray-900">Women</Link>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="p-6 border-t bg-gray-50">
                            <Link
                                href="/auth"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2"
                            >
                                <User className="w-4 h-4" />
                                My Account
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
