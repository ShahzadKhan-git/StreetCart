import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-gray-900/95 backdrop-blur-sm text-white shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4">
                {/* Logo Image */}
                <div className="relative h-9 w-9">
                    <Image
                        src="/logo.png"
                        alt="StreetCart Logo"
                        fill
                        className="object-contain"
                    />
                </div>
                <Link href="/" className="text-2xl font-bold tracking-tight text-white hover:text-green-400 transition-colors">
                    StreetCart
                </Link>
            </div>

            <div className="flex items-center gap-8">
                <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
                    <Link href="#" className="hover:text-white hover:underline underline-offset-4 transition-all">Features</Link>
                    <Link href="#" className="hover:text-white hover:underline underline-offset-4 transition-all">Service</Link>
                </div>
                <button className="px-6 py-2.5 text-sm font-semibold text-white bg-green-600 rounded-lg hover:bg-green-500 shadow-md hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-0.5">
                    Login / Register
                </button>
            </div>
        </nav>
    );
}
