import React, { useState, useEffect } from 'react';
import Card from '../Card/Card'; 
import './ProductsCarousel.css';

const ProductsCarousel = () => {
  const [products, setProducts] = useState([]); 
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); 
      try {
        const response = await fetch("http://localhost:3000/products");
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        setProducts(data); 
      } catch (error) {
        setError(error.message); 
      } finally {
        setIsLoading(false); 
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="carousel">
      {isLoading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p>Error fetching products: {error}</p>
      ) : (
        products
          .filter((product) => product.recommended == true)
          .map((product) => <Card product={product} />)
      )}
    </div>
  );
};

export default ProductsCarousel;