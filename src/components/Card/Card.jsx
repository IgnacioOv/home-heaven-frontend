import './Card.css';
import { Link } from 'react-router-dom'


export const Card = ({product}) => {

  
    return (
      <div className="card-container">
        <img src={product.image} alt={product.description} className="card-img" />
        <p className="card-title">{product.product}</p>
        <p className="card-price">{"$" + product.price}</p>
        <button className="card-button">Agregar</button>
      </div>
    );
  };

export default Card;