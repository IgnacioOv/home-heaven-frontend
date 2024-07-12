import { Link } from 'react-router-dom';
import image from '../../images/rectangle.png';
const HeaderAddProduct = () => {
  return (
    <div className="header-category">
      <div className="image-container">
        <img src={image} alt="Header Background" className="header-image"/>
        <div className="header-category-content">
            <div className="main-title">Añade tus productos para vender</div>
            <div className="category-navigation">
            <Link to="/" className="link-class">Home</Link> &gt; Añadir Producto &gt; 
            </div>
        </div>
    </div>
    </div>
  );
}

export default HeaderAddProduct;