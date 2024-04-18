import React from 'react';
import '../App.css';
import '../components/Card.css';


export const Card = ({
    imgSrc,
    imgAlt,
    title,
    description,
    price,

  }) => {
    return (
      <div className="card-container">
        {imgSrc && imgAlt && (
          <img src={imgSrc} alt={imgAlt} className="card-img" />
        )}
        {title && <h1 className="card-title">{title}</h1>}
        {description && <p className="card-description">{description}</p>}
        {price && <p className="card-price">{price}</p>}
        
      </div>
    );
  };

export default Card;