import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
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

    useEffect(() => {
        const fetchProductDetails = async () => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                try {
                    const productIds = orders.flatMap(order => 
                        order.productOrders.map(productOrder => productOrder.productId)
                    );

                    const uniqueProductIds = [...new Set(productIds)]; // Get unique product IDs

                    const productDetailsPromises = uniqueProductIds.map(productId => 
                        fetch(`http://localhost:8080/products/${productId}`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: `Bearer ${token}`,
                            },
                        }).then(response => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.json();
                        })
                    );

                    const productDetailsResponses = await Promise.all(productDetailsPromises);
                    const productDetailsMap = productDetailsResponses.reduce((acc, product) => {
                        acc[product.productId] = product;
                        return acc;
                    }, {});

                    // Update orders with product details
                    const updatedOrders = orders.map(order => ({
                        ...order,
                        productOrders: order.productOrders.map(productOrder => ({
                            ...productOrder,
                            productName: productDetailsMap[productOrder.productId].productName,
                            price: productDetailsMap[productOrder.productId].price,
                        })),
                    }));

                    setOrders(updatedOrders);
                } catch (error) {
                    console.error('Error fetching product details', error);
                }
            }
        };

        if (orders.length > 0) {
            fetchProductDetails();
        }
    }, [orders]);

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
                <div className="orders-grid">
                    {orders.length === 0 ? (
                        <p>No orders found.</p>
                    ) : (
                        orders.map(order => (
                            <div key={order.orderId} className="order-card">
                                <h3>Order #: {order.orderId}</h3>
                                <p>Total: ${order.total.toFixed(2)}</p>
                                <h4>Products:</h4>
                                <ul>
                                    {order.productOrders.map(productOrder => (
                                        <li key={productOrder.productOrderId}>
                                            <p>Producto: {productOrder.productName}</p>
                                            <p>Cantidad: {productOrder.quantity}</p>
                                            <p>Precio: ${productOrder.price.toFixed(2)}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    )}
                </div>
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