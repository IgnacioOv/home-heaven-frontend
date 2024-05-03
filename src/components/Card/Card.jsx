import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';
import { CartContext } from '../../context/CartProvider';

export const Card = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [showNotification, setShowNotification] = useState(false);

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Stop event propagation
    addToCart(product);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 1000); // Hide the notification after 5 seconds
    console.log("Added to cart:", product.id);
  };

  return (
    <div className="card-container" onClick={handleNavigate}>
      {showNotification && (
        <div className="notification">
          Producto agregado al carrito ✔️
        </div>
      )}
      <img src={product.image} alt={product.description} className="card-img" />
      <p className="card-title">{product.product}</p>
      <p className="card-price">{"$" + product.price}</p>
      <button className="card-button" onClick={handleAddToCart}>Agregar</button>
    </div>
  );
};
  
export default Card;
