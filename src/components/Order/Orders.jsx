import { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import Navbar from '../Navbar/Navbar';  
import Footer from '../Footer/Footer';  
import HeaderOrders from './HeaderOrders';
import { Link } from 'react-router-dom';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                try {
                    const decodedToken = jwtDecode(token);
                    const response = await fetch(`http://localhost:8080/orders/${decodedToken.userId}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    console.log(response)
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    const ordersData = await response.json();
                    setOrders(ordersData);
                } catch (error) {
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            } else {
                setError('No token found');
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <Navbar />
            <HeaderOrders />
            <div className='containerorder'>
                <h2>Orders</h2>
                {orders.length === 0 ? (
                    <p>No orders found.</p>
                ) : (
                    orders.map(order => (
                        <div key={order.orderId} className="order-card">
                            <h3>Order ID: {order.orderId}</h3>
                            <p>Buyer ID: {order.buyerId}</p>
                            <p>Total: ${order.total.toFixed(2)}</p>
                            <h4>Products:</h4>
                            <ul>
                                {order.productOrders.map(productOrder => (
                                    <li key={productOrder.productOrderId}>
                                        <p>Product ID: {productOrder.productId}</p>
                                        <p>Quantity: {productOrder.quantity}</p>
                                        <p>Price: ${productOrder.price.toFixed(2)}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                )}
                <Link to="/userpage">
                    <button className="volverbutton">
                        Volver
                    </button>
                </Link>
            </div>
            <Footer />  
        </>
    );
}

export default Orders;
