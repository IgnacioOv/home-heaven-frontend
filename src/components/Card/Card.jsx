import React from 'react';
import './Card.css';


export const Card = ({
    imgSrc,
    imgAlt,
    title,
    description,
    price,

  }) => {
    return (
      <div className="card-container">
        <img src={imgSrc} alt={imgAlt} className="card-img" />
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <p className="card-price">{"$" + price}</p>
      </div>
    );
  };

export default Card;