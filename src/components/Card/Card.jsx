import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

export const Card = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    console.log("Agregar to cart:", product.id);
  };

  return (
    <div className="card-container" onClick={handleNavigate}>
      <img src={product.image} alt={product.description} className="card-img" />
      <p className="card-title">{product.product}</p>
      <p className="card-price">{"$" + product.price}</p>
      <button className="card-button" onClick={handleAddToCart}>Agregar</button>
    </div>
  );
};
  
export default Card;