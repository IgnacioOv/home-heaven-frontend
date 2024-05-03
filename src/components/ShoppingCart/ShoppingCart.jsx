import React, { useState, useContext } from 'react';
import './ShoppingCart.css';
import { CartContext } from '../../context/CartProvider';
import Counter from '../Counter/Counter';
import trashIcon from '../../images/trash.png';

const ShoppingCart = ({ closeCart }) => {
    const { cartItems, incrementQuantity, decrementQuantity, removeItem } = useContext(CartContext);
    const [coupon, setCoupon] = useState('');
    const [discount, setDiscount] = useState(0);

    const handleCouponChange = (e) => {
        setCoupon(e.target.value);
    };

    const applyCoupon = () => {
        if (coupon.toLowerCase() === "descuento50%") {
            setDiscount(0.5); // Apply a 50% discount
        } else {
            setDiscount(0); // No discount
        }
    };

    const handleRemoveItem = (id) => {
        console.log("Removing item", id); // Check if this function is called
        removeItem(id);
    };
    
    const finalizePurchase = () => {
        console.log("Finalizing purchase");
    };

    const subtotal = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    const discountAmount = subtotal * discount;
    const total = subtotal - discountAmount;

    if (cartItems.length === 0) {
        return (
            <div className="shopping-cart">
                <div className="cart-header">
                    <h1 className='cartTitle'>Mi Compra</h1>
                    <button onClick={closeCart} className="close-button">×</button>
                </div>
                <div className="cart-body">
                    <p>No hay elementos en tu carrito.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="shopping-cart">
            <div className="cart-header">
                <h1 className='cartTitle'>Mi Compra</h1>
                <button onClick={closeCart} className="close-button">×</button>
            </div>
            <div className="cart-body">
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.description} className='itemimage'/>
                            <div className="item-details">
                                <p className='itemtitle'>{item.product}</p>
                                <div className="counter-and-price">
                                    <p className='itemprice'>$ {item.price * item.quantity}</p>
                                    <Counter 
                                        quantity={item.quantity}
                                        increment={() => incrementQuantity(item.id)}
                                        decrement={() => decrementQuantity(item.id)}
                                    />
                                </div>
                            </div>
                            <button onClick={() => handleRemoveItem(item.id)} className="delete-button">
                                <img src={trashIcon} alt="Delete" />
                            </button>
                        </div>
                    ))}
                </div>
                <div className="cart-footer">
                    <div className="subtotal-display">
                        Subtotal: ${subtotal.toFixed(2)}
                    </div>
                    {discount > 0 && (
                        <div className="discount-display">
                            Descuento: -${discountAmount.toFixed(2)}
                        </div>
                    )}
                    <div className="total-display">
                        Total: ${total.toFixed(2)}
                    </div>
                    <div className="coupon-section">
                        <input
                            type="text"
                            value={coupon}
                            onChange={handleCouponChange}
                            placeholder="Aplicar cupón"
                            className="coupon-input"
                        />
                        <button onClick={applyCoupon} className="apply-coupon-button">Aplicar</button>
                    </div>
                    <button onClick={finalizePurchase} className="finalize-purchase-button">Finalizar Compra</button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
