import './Navbar.css';
import logoImage from '../../images/homeHLogo.png';
import searchLogo from '../../images/searchLogo.png';
import filterLogo from '../../images/filter.png';
import profileLogo from '../../images/profile.png';
import cartLogo from '../../images/cart.png';
import filterPhone from '../../images/VectorfilterPhone2.png';
import cartPhone from '../../images/VectorcarritoPhone.png';
const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="navbar-desktop">
            <div className="logo">
                <img src={logoImage} alt="Logo" className='logoHeaven' />
            </div>
            <div className="searchbar">
                <input type="text" placeholder="Qué estás buscando?" className='searchInput'/>
                <img src={searchLogo} alt="Search" className='searchLogo' />
            </div>
            <div className="logos">
                <img src={filterLogo} alt="Filter" className='filterLogo' />
                <img src={profileLogo} alt="Profile" className='profileLogo' />
                <img src={cartLogo} alt="Cart" className='cartLogo' />
            </div>
        </div>
        <div className="navbar-mobile">
            <img src={filterPhone} alt="Filter" className='filterPhone' />
            <div className="logo">
                <img src={logoImage} alt="Logo" className='logoHeaven' />
            </div>
            <img src={cartPhone} alt="Carrito" className='carritoPhone' />
        </div>
        </nav>
    );
};

export default Navbar;