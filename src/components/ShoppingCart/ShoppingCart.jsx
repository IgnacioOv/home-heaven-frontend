import React from 'react';
import './ShoppingCart.css'; // Ensure you import the CSS
import { useContext } from 'react';
import { CartContext } from '../../context/CartProvider';

const ShoppingCart = ({ closeCart }) => {
    const { cartItems } = useContext(CartContext)
    return (
        <div className="shopping-cart">
            <div className="cart-header">
                <h1 className='cartTitle'>Mi Compra</h1>
                <button onClick={closeCart}>×</button>
            </div>
            <div className="cart-body">
                <p>Your cart items here.</p>
                {
                    cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.description} />
                            <div>
                                <p>{item.product}</p>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    )) /*ADD TOAST FOR WHEN ITS ADDED, SI YA ESTA AGREGADO UN PRODUCTO, INCREMENTAR*/
                }
                {/* Populate with dynamic cart items if needed */}
            </div>
        </div>
    );
};

export default ShoppingCart;