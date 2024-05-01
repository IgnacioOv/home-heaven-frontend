import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);

    const addToCart = (product) => {
        setCartItems(prevItems => [...prevItems, product]);
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isCartVisible, toggleCartVisibility }}>
            {children}
        </CartContext.Provider>
    );
};