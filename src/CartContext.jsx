import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

// Hook for child components to get the cart object
// and re-render when it changes.
export const useCart = () => useContext(CartContext);

// Provider component that wraps your app and makes cart object
// available to any child component that calls useCart().
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            // Check if the product already exists
            const existingProduct = prevItems.find(item => item.id === product.id);
            if (existingProduct) {
                // Increase quantity if the product exists
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            // Add new product if it doesn't exist
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const value = { cartItems, addToCart };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
