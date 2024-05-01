import { createContext, useContext, useState } from 'react';

// Create the context
export const CartContext = createContext();


// Provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (item) => { /*Logica para si ya está ese id de producto, agregar la cantidad, si es remove sacar de cart. Si es - saca de a 1, LOCAL STORAGE PARA CUANDO REFRESCAMOS SIGA EL CARRITO*/
        setCartItems([...cartItems, item]);
    };


    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
