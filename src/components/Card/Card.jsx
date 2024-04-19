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
        {imgSrc && imgAlt && (
          <img src={imgSrc} alt={imgAlt} className="card-img" />
        )}
        {title && <h2 className="card-title">{title}</h2>}
        {description && <p className="card-description">{description}</p>}
        {price && <p className="card-price">{"$" + price}</p>}
        
      </div>
    );
  };

export default Card;