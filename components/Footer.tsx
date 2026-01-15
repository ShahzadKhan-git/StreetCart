import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <span className="text-2xl font-black tracking-tighter text-gray-900 group-hover:scale-105 transition-transform">
                                STREET<span className="text-green-600">CART</span>
                            </span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            Your hyperlocal marketplace connecting you to the best local vendors for fashion, groceries, and daily essentials.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-6">Marketplace</h4>
                        <div className="flex flex-col gap-4 text-sm text-gray-500 font-medium">
                            <Link href="/fashion" className="hover:text-green-600 transition-colors">Fashion Hub</Link>
                            <Link href="/kirana" className="hover:text-green-600 transition-colors">Kirana Stores</Link>
                            <Link href="/clothing" className="hover:text-green-600 transition-colors">Clothing Stores</Link>
                        </div>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-6">Support</h4>
                        <div className="flex flex-col gap-4 text-sm text-gray-500 font-medium">
                            <Link href="/about" className="hover:text-green-600 transition-colors">About Us</Link>
                            <Link href="/contact" className="hover:text-green-600 transition-colors">Contact Support</Link>
                            <Link href="/faq" className="hover:text-green-600 transition-colors">FAQs</Link>
                        </div>
                    </div>

                    {/* Newsletter/Info */}
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-6">Stay Connected</h4>
                        <p className="text-gray-500 text-sm mb-4">Follow us for updates on local deals and new store openings.</p>
                        <div className="flex gap-4">
                            {/* Social Icons would go here */}
                            <span className="text-[10px] font-black uppercase text-green-600 cursor-pointer hover:underline tracking-widest">Instagram</span>
                            <span className="text-[10px] font-black uppercase text-green-600 cursor-pointer hover:underline tracking-widest">Twitter</span>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                        © 2026 StreetCart | Fast Local Delivery
                    </p>
                    <div className="flex gap-8 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                        <Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-gray-900 transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
