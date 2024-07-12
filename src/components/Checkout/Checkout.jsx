import './Checkout.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import {clearCart} from '../../actions/cartActions';
import image from '../../images/rectangle.png';

const Checkout = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [buyerId, setBuyerId] = useState(null);

    const subtotal = location.state?.subtotal || 0;
    const discountAmount = location.state?.discountAmount || 0;
    const total = location.state?.total || 0;

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                setBuyerId(decodedToken.userId);
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        }
    }, []);

    const handleCompra = async (e) => {
        e.preventDefault();

        try {
            if (!buyerId) {
                console.error('No se pudo obtener el buyerId');
                return;
            }
            const response = await fetch('http://localhost:8080/orders/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    buyerId: buyerId,
                    productOrders: cartItems.map(item => ({
                        product: {
                            productId: item.productId
                        },
                        quantity: item.quantity,
                    })),
                })
            });

            if (!response.ok) {
                throw new Error(`Error al procesar la orden: ${response.statusText}`);
            }
            alert('¡Gracias por tu compra!');
            dispatch(clearCart());
            navigate('/');

        } catch (error) {
            console.error('Error al procesar la orden:', error.message);
            alert('Hubo un error al procesar tu orden. Por favor, inténtalo nuevamente.');
        }
    };

    return (
        <div>
            <div className="header-category">
                <div className="image-container">
                    <div className="header-category-content">
                        <div className="main-title">Check out</div>
                    </div>
                    <img
                        src={image}
                        alt="Header Background"
                        className="header-image"
                    />
                </div>
            </div>

            <div className="chk-wrapper">
                <div className="tabla">
                    <div className="columnas">
                        <div className="word"></div>
                        <div className="word">Producto</div>
                        <div className="word">Cantidad</div>
                        <div className="word">Precio</div>
                    </div>
                    <div className="checkout-items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="checkout-item">
                                <img src={item.imageUrl} alt={item.productDescription} className="smallimage" />
                                <p className="itemtitle">{item.productName}</p>
                                <p className="itemquantity">{item.quantity}</p>
                                <p className="itemprice">$ {item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="DctoBox">
                    <p className="texto-Resumen">Resumen de compra</p>
                    <div className="summary-container">
                        <hr />
                        <div className="summary-item">
                            <span className="inside-resumen">Subtotal:</span>
                            <span className="summary-value">{subtotal}</span>
                        </div>
                        <div className="summary-item">
                            <span className="inside-resumen">Descuentos:</span>
                            <span className="summary-value">{discountAmount}</span>
                        </div>
                        <div className="summary-item">
                            <span className="inside-resumen">Total:</span>
                            <span className="summary-value">{total}</span>
                        </div>
                    </div>

                    <button onClick={handleCompra} className="realizar-compra">Realizar compra</button>
                    <Link to="/" className="goBack" style={{ color: 'rgb(117,127,126,1)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" className="icon-submenu" fill="currentColor">
                            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                        </svg>
                        Seguir comprando
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
