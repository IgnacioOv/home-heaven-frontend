import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom'


export const Card = ({product}) => {

  
    return (
      <div className="card-container">
        <img src={product.image} alt={product.description} className="card-img" />
        <p className="card-title">{product.product}</p>
        <Link to={`/product/${product.id}`} className="ver-mas">Ver mas</Link>
        <p className="card-price">{"$" + product.price}</p>
      </div>
    );
  };

export default Card;