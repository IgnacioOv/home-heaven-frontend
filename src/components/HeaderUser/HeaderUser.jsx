import './HeaderUser.css'; 
import image from '../../images/rectangle.png';
const HeaderUser = ({name}) => {
  return (
    <>
    <div className="header-category">
      <div className="image-container">
        <img src={image} className="header-image"/>
        <div className="header-category-content">
            <div className="main-title">Hola {name}!</div>
            <div className="main-mail">Mira y edita tus datos</div>
            <div className="category-navigation">
            </div>
        </div>
    </div>
    </div>
    </>
  );
}

export default HeaderUser;