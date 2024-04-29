import React, { useState, useEffect } from 'react';
import Card from '../Card/Card'; // Assuming Card component handles product display
import './ProductsCarousel.css';

const ProductsCarousel = () => {
  const [products, setProducts] = useState([]); // State to store fetched products
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(null); // State to store API errors

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      try {
        const response = await fetch("http://localhost:3000/products");
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        setProducts(data); // Update products state with fetched data
      } catch (error) {
        setError(error.message); // Set error state
      } finally {
        setIsLoading(false); // Set loading state to false regardless of success or error
      }
    };

    fetchData(); // Fetch data on component mount
  }, []); // Empty dependency array: fetch data only once

  return (
    <div className="carousel">
      {isLoading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p>Error fetching products: {error}</p>
      ) : (
        products.map((product) => (
          <Card product={product} /> // Assuming Card handles product data
        ))
      )}
    </div>
  );
};

export default ProductsCarousel;