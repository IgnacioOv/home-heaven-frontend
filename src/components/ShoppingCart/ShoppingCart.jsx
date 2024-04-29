import React from 'react';
import './ShoppingCart.css'; // Ensure you import the CSS

const ShoppingCart = ({ closeCart }) => {
    return (
        <div className="shopping-cart">
            <div className="cart-header">
                <h1 className='cartTitle'>Mi Compra</h1>
                <button onClick={closeCart}>×</button>
            </div>
            <div className="cart-body">
                <p>Your cart items here.</p>
                {/* Populate with dynamic cart items if needed */}
            </div>
        </div>
    );
};

export default ShoppingCart;
