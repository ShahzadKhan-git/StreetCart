"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectPage() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/");
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="animate-pulse flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-500 font-medium">Redirecting...</p>
            </div>
        </div>
    );
}
