"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
    id: number | string;
    title: string;
    price: string;
    image: string;
    store: string;
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    cartCount: number;
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
    removeFromCart: (id: number | string) => void;
    updateQuantity: (id: number | string, change: number) => void;
    clearCart: () => void;
    isCartOpen: boolean;
    setIsCartOpen: (isOpen: boolean) => void;
    // Wishlist
    wishlistItems: Omit<CartItem, 'quantity'>[];
    wishlistCount: number;
    toggleWishlist: (item: Omit<CartItem, 'quantity'>) => void;
    isInWishlist: (id: number | string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [wishlistItems, setWishlistItems] = useState<Omit<CartItem, 'quantity'>[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);

    // Persistence: Load from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('streetcart-cart');
        const savedWishlist = localStorage.getItem('streetcart-wishlist');

        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart from localStorage", e);
            }
        }

        if (savedWishlist) {
            try {
                setWishlistItems(JSON.parse(savedWishlist));
            } catch (e) {
                console.error("Failed to parse wishlist from localStorage", e);
            }
        }
        setIsInitialized(true);
    }, []);

    // Persistence: Save to localStorage when items change
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('streetcart-cart', JSON.stringify(cartItems));
        }
    }, [cartItems, isInitialized]);

    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('streetcart-wishlist', JSON.stringify(wishlistItems));
        }
    }, [wishlistItems, isInitialized]);

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const wishlistCount = wishlistItems.length;

    const addToCart = (item: Omit<CartItem, 'quantity'>) => {
        setCartItems(prev => {
            const existingItem = prev.find(i => i.id === item.id);
            if (existingItem) {
                return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
            }
            return [...prev, { ...item, quantity: 1 }];
        });
        setIsCartOpen(true); // Open cart when item is added
    };

    const removeFromCart = (id: number | string) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id: number | string, change: number) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === id) {
                const newQuantity = Math.max(0, item.quantity + change);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }).filter(item => item.quantity > 0));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const toggleWishlist = (item: Omit<CartItem, 'quantity'>) => {
        setWishlistItems(prev => {
            const exists = prev.find(i => i.id === item.id);
            if (exists) {
                return prev.filter(i => i.id !== item.id);
            }
            return [...prev, item];
        });
    };

    const isInWishlist = (id: number | string) => {
        return wishlistItems.some(item => item.id === id);
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            cartCount,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            isCartOpen,
            setIsCartOpen,
            wishlistItems,
            wishlistCount,
            toggleWishlist,
            isInWishlist
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
