import { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import HeaderOrders from './HeaderOrders';
import { Link } from 'react-router-dom';

const Ventas = () => {
    const [productOrders, setProductOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductOrders = async () => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                try {
                    const decodedToken = jwtDecode(token);
                    const response = await fetch(`http://localhost:8080/productOrder/${decodedToken.userId}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    const productOrdersData = await response.json();
                    console.log(productOrdersData);
                    setProductOrders(productOrdersData);
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

        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8080/products/all', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const productsData = await response.json();
                setProducts(productsData);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchProductOrders();
        fetchProducts();
    }, []);

    const getProductById = (id) => {
        const product = products.find(product => product.productId === id);
        return product ? product.productName : 'Unknown Product';
    };

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
                <h2>Ventas</h2>
                {productOrders.length === 0 ? (
                    <p>No product orders found.</p>
                ) : (
                    <div className="orders-grid">
                        {productOrders.map((productOrder, index) => (
                            
                            <div key={productOrder.productOrderId} className="order-card">
                                <h3>Venta #: {index+1}</h3>
                                <p>Producto: {getProductById(productOrder.productId)}</p>
                                <p>Cantidad: {productOrder.quantity}</p>
                                <p>Precio: ${productOrder.price.toFixed(2)}</p>
                            </div>
                        ))
                        }
                    </div>
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

export default Ventas;