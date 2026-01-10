"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart, User, Menu, Heart } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
    const pathname = usePathname();
    const isMainPage = pathname === '/' || pathname === '/main';
    const isFashionPage = pathname === '/fashion' || pathname === '/clothing' || pathname === '/men' || pathname === '/women';
    const { cartCount, wishlistCount, setIsCartOpen } = useCart();

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
                <div className="hidden lg:flex items-center gap-8 text-[13px] font-bold uppercase tracking-widest text-gray-500">
                    <Link href="/" className={`hover:text-black transition-colors ${pathname === '/' ? 'text-green-700' : ''}`}>Main Page</Link>
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

                {/* 3. Search Bar (Center) - Hidden on Mobile */}
                <div className="hidden md:flex flex-1 max-w-sm relative group">
                    <input
                        type="text"
                        placeholder="Search for local brands..."
                        className="w-full h-11 pl-12 pr-4 bg-gray-100/80 rounded-full text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:bg-white transition-all ring-1 ring-gray-200"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-green-600 transition-colors" />
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

                    <div className="flex items-center gap-5 border-l border-gray-200 pl-6">
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
                        <button className="lg:hidden p-1 hover:bg-gray-100 rounded-lg transition-colors">
                            <Menu className="w-6 h-6 text-gray-700" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
