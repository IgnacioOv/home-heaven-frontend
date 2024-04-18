// In Item.jsx
import React from 'react';
import './Item.css';


import './Item.css';

function Item({ name, price, description, originalPrice,imageUrl }) {
    return (
        <div className="item-container" role="button" tabIndex="0" onClick={() => alert('Item clicked!')}>
            <img src={imageUrl} alt={name} className="item-image" />
            <div className="item-details">
                <h3 className="item-name">{name}</h3>
                <div className="item-price">
                    <span className="discount-price">Precio: ${price}</span>
                    <span className="original-price">${originalPrice}</span>
                </div>
                <p className="item-description">{description}</p>
            </div>
            <div className="item-buttons">
                <button className="add-to-cart-btn">Add to Cart</button>
                <button className="like-btn">❤ Like</button>
            </div>
        </div>
    );
}  
export default Item;