import React from 'react';
import './Counter.css'; // Ensure the path to the CSS file is correct

const Counter = ({ quantity, increment, decrement }) => {
    return (
        <div className="counter-container">
            <button onClick={decrement} className="counter-button">-</button>
            <span className="counter-quantity">{quantity}</span>
            <button onClick={increment} className="counter-button">+</button>
        </div>
    );
};

export default Counter;
