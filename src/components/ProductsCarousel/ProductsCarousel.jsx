import { useEffect, useState } from 'react';
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
        const response = await fetch("http://localhost:8080/productOrder/recommended");
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

  // Limitando a un máximo de 3 productos
  const limitedProducts = products.slice(0, 3);

  return (
    <div className="carousel">
      {isLoading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p>Error fetching products: {error}</p>
      ) : limitedProducts.length === 0 ? (
        <p>No recommended products available</p>
      ) : (
        limitedProducts.map((product, index) => (
          <Card key={index} product={product} />
        ))
      )}
    </div>
  );
};  
  
export default ProductsCarousel;
