import { useState, useEffect } from 'react';
import './ProductPage.css';
import { useParams } from 'react-router-dom';
import CategoriesBar from '../CategoriesBar/CategoriesBar';

const ProductPage = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        setSelectedProduct(data); // Update selected product state
      } catch (error) {
        setError(error.message); // Set error state
      } finally {
        setIsLoading(false); // Set loading state to false regardless of success or error
      }
    };

    fetchData(); // Fetch data on component mount
  }, [id]); // Dependency array: refetch if id changes

  return (
    <div className="product-page">
      <CategoriesBar/>
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
            <button className="add-to-cart-button">Añadir al carrito</button>
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}
export default ProductPage;
