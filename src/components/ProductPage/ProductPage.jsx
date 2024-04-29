import React, { useState, useEffect } from 'react';
import './ProductPage.css';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

  return (
    <div className="product-page">
      {isLoading ? (
        <p>Loading product...</p>
      ) : error ? (
        <p>Error fetching product: {error}</p>
      ) : selectedProduct ? (
        <div className='product-info'>
          <img className="product-image" src={selectedProduct.image} alt={selectedProduct.name}/>
          <h2 className="product-name">{selectedProduct.product}</h2>
          <p className="product-price">${selectedProduct.price}</p>
          <button className="add-to-cart-button">Añadir al carrito</button>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
                <div className="description-container">
            <p className="product-description">{selectedProduct.description}</p>
          </div>
    </div>
  );
};

export default ProductPage;
