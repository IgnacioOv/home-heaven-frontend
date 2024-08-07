import { Link } from 'react-router-dom';
import './HeaderCategory.css'; 
import image from '../../images/rectangle.png';
const HeaderCategory = ({ categoryName }) => {
  return (
    <div className="header-category">
      <div className="image-container">
        <img src={image} className="header-image"/>
        <div className="header-category-content">
            <div className="main-title">Descubrí más</div>
            <div className="category-navigation">
            <Link to="/" className="link-class">Home</Link> &gt; Todos los productos &gt; {categoryName}
            </div>
        </div>
    </div>
    </div>
  );
}

export default HeaderCategory;