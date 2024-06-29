//Para usar redux, en lugar de context, necesitamos importar el hooks: useDispach
//y despachar acciones a nuestro store de Redux.
// 1. Importamos el hook useDipach para despachar acciones
// 2. Despachar la accion addToCart, en lugar de usar addToCart del contexto, usamos la accion de redux

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions/cartActions';
//import React, { useState, useContext } from 'react';
//import { CartContext } from '../../context/CartProvider';


export const Card = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const { addToCart } = useContext(CartContext);
  const [showNotification, setShowNotification] = useState(false);

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    dispatch(addToCart(product));
    //addToCart(product);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000); 
    console.log("Added to cart:", product.id);
  };

  return (
    <>
    <div className="card-container" onClick={handleNavigate}>
      {showNotification }
      <img src={product.image} alt={product.description} className="card-img" />
      <p className="card-title">{product.product}</p>
      <p className="card-price">{"$" + product.price}</p>
      <button className="card-button" onClick={handleAddToCart}>Agregar</button>
    </div>
    {showNotification && (
      <div className="notificacion">
        Producto agregado al carrito ✅
      </div>
    )}
    </>
  );
};
  
export default Card;
