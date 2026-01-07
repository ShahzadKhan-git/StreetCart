"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart, User, Menu, Heart } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
    const pathname = usePathname();
    const isMainPage = pathname === '/main';
    const { cartCount, wishlistCount } = useCart();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F3F4F6] border-b border-gray-200">
            <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between gap-8">

                {/* 1. Logo (Left) */}
                <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-2xl font-bold tracking-tight text-gray-900">
                        STREET<span className="text-green-600">CART</span>
                    </span>
                </Link>

                {/* 2. Navigation Links (Center-Left) - Hidden on Mobile */}
                <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
                    <Link href="/main" className="hover:text-black transition-colors font-bold text-green-700">Main Page</Link>
                    <Link href="/kirana" className="hover:text-black transition-colors">Kirana Store</Link>
                    <Link href="/" className="hover:text-black transition-colors">Clothing Store</Link>
                    {!isMainPage && (
                        <>
                            <Link href="/men" className="hover:text-black transition-colors">Men</Link>
                            <Link href="/women" className="hover:text-black transition-colors">Women</Link>
                            <Link href="#" className="hover:text-black transition-colors">All Products</Link>
                        </>
                    )}
                </div>

                {/* 3. Search Bar (Center) - Hidden on Mobile */}
                <div className="hidden md:flex flex-1 max-w-md relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full h-11 pl-12 pr-4 bg-gray-200/50 rounded-lg text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>

                {/* 4. Right Actions */}
                <div className="flex items-center gap-6 flex-shrink-0">
                    <Link href="/auth" className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors">
                        <User className="w-5 h-5" />
                        <span>Login</span>
                    </Link>

                    <Link href="/auth" className="hidden sm:flex px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded hover:bg-black transition-colors">
                        Register
                    </Link>

                    <Link href="/favorites" className="relative group">
                        <Heart className="w-6 h-6 text-gray-700 group-hover:text-red-500 transition-colors" />
                        {wishlistCount > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white transition-all">
                                {wishlistCount}
                            </span>
                        )}
                    </Link>

                    <button className="relative group">
                        <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-black transition-colors" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white transition-all">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    {/* Mobile Menu Button */}
                    <button className="lg:hidden p-1">
                        <Menu className="w-6 h-6 text-gray-700" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
