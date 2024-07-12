import React, { useState, useEffect } from 'react';
import './ShoppingCart.css';
import { CartContext } from '../../context/CartProvider';
import Counter from '../Counter/Counter';
import trashIcon from '../../images/trash.png';

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../../actions/cartActions';


const ShoppingCart = ({ closeCart }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

   // const { cartItems, incrementQuantity, decrementQuantity, removeItem } = useContext(CartContext);
    const [coupon, setCoupon] = useState(localStorage.getItem('coupon') || '');
    const [discount, setDiscount] = useState(parseFloat(localStorage.getItem('discount') || 0));
    const [showPopUp, setShowPopUp] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('coupon', coupon);
        localStorage.setItem('discount', discount.toString());
    }, [coupon, discount]);

    const handleCouponChange = (e) => {
        setCoupon(e.target.value);
    };

    const applyCoupon = () => {
        if (coupon.toLowerCase() === "descuento50%") {
            setDiscount(0.5);
        } else {
            setDiscount(0);
        }
    };

    const handleRemoveItem = (id) => {
        console.log("Removing item", id);
        dispatch(removeItem(id));
        setShowPopUp(true);
        setTimeout(() => { setShowPopUp(false); }, 2000);
    };


    const subtotal = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    const discountAmount = subtotal * discount;
    const total = subtotal - discountAmount;

    if (cartItems.length === 0 && !showPopUp) {
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

    const handleFinalizePurchase = () => {
        if (!isAuthenticated) {
            navigate("/login");
            alert("Debe iniciar sesion para finalizar la compra");
        } else {
            // Si está autenticado, navega a la página de checkout
            navigate("/checkout", {
                state: {
                    subtotal,
                    discountAmount,
                    total,
                }
            });
            window.scrollTo(0, 0);  // Scroll to the top of the page
        }
    };

    
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
                            <img src={item.imageUrl} alt={item.description} className='itemimage'/>
                            <div className="item-details">
                                <p className='itemtitle'>{item.productName}</p>
                                <div className="counter-and-price">
                                    <p className='itemprice'>$ {item.price * item.quantity}</p>
                                    <Counter 
                                        quantity={item.quantity}
                                        increment={() => dispatch(incrementQuantity(item.productId))}
                                        decrement={() => dispatch(decrementQuantity(item.productId))}
                                    />
                                </div>
                            </div>
                            <button onClick={() => handleRemoveItem(item.productId)} className="delete-button">
                                <img src={trashIcon} alt="Delete" />
                                {showPopUp}
                            </button>
                        </div>
                    ))}
                </div>
                {showPopUp && (
                    <div className="popupeliminado">
                        Producto eliminado del carrito ❌
                    </div>
                )}
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
                    <button onClick={handleFinalizePurchase} className="finalize-purchase-button">Finalizar Compra</button>
                </div>
            </div>
        </div>
    );
};


export default ShoppingCart;
