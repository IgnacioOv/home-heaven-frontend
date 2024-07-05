import './HeaderOrders.css'; 
import image from '../../images/rectangle.png';
const HeaderOrders = () => {
return (
    <>
    <div className="header-category">
    <div className="image-container">
        <img src={image} className="header-image"/>
        <div className="header-category-content">
            <div className="main-title">Mis Ordenes</div>
            </div>
        </div>
    </div>
    </>
);
}

export default HeaderOrders;