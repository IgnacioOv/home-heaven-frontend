import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions/cartActions';
import './ProductPage.css';
import CategoriesBar from '../CategoriesBar/CategoriesBar';
//import { CartContext } from '../../context/CartProvider';

const ProductPage = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  //const { addToCart } = useContext(CartContext);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        setSelectedProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleAddToCart = () => {
    if (selectedProduct) {
      dispatch(addToCart(selectedProduct));
      //addToCart(selectedProduct);
      console.log("Added to cart:", selectedProduct.id);
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);  // Hide the notification after 5 seconds
    }
  };

  return (
    <div className="product-page">
      <CategoriesBar />
      {showNotification && (
        <div className="notification">
          Producto agregado al carrito ✅
        </div>
      )}
      {isLoading ? (
        <p>Loading product...</p>
      ) : error ? (
        <p>Error fetching product: {error}</p>
      ) : selectedProduct ? (
        <div className="product-content">
          <img
            className="product-image"
            src={selectedProduct.image}
            alt={selectedProduct.name}
          />
          <div>
            <h2 className="product-name">{selectedProduct.product}</h2>
            <p className="product-description">{selectedProduct.description}</p>
            <p className="product-price">${selectedProduct.price}</p>
            <button className="add-to-cart-button" onClick={handleAddToCart}>Añadir al carrito</button>
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}

export default ProductPage;
