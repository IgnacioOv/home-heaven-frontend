import { useState } from 'react';
import './Navbar.css';
import logoImage from '../../images/homeHLogo.png';
import searchLogo from '../../images/searchLogo.png';
import profileLogo from '../../images/profile.png';
import cartLogo from '../../images/cart.png';
import filterPhone from '../../images/VectorfilterPhone2.png';
import cartPhone from '../../images/VectorcarritoPhone.png';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCart from '../ShoppingCart/ShoppingCart';  
import { useSelector } from 'react-redux'; 

const Navbar = () => {
    const [input, setinput] = useState("");
    const navigate = useNavigate();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    
    

    const handleChange = (value) => {
        setinput(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const encodedQuery = encodeURIComponent(input);
        navigate(`/search?query=${encodedQuery}`);
    };  

    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    return (
        <nav className="navbar">
            <div className="navbar-desktop">
                <Link to="/">
                <div className="logo">
                    <img src={logoImage} alt="Logo" className='logoHeaven' />
                </div>
                </Link>
                <form onSubmit={handleSubmit} className="searchbar">
                    <input type="text" placeholder="Qué estás buscando?" className='searchInput' value={input} onChange={(e) => handleChange(e.target.value)}/>
                    <input type="image" src={searchLogo} alt="Submit" className='searchLogo' />    
                </form>
                <div className="logos">
                    <Link to={isAuthenticated ? "/userpage" : "/login"}>
                        <img src={profileLogo} alt="Profile" className='profileLogo' />
                    </Link>
                    <img src={cartLogo} alt="Cart" className='cartLogo' onClick={toggleCart} />
                </div>
            </div>
            <div className="navbar-mobile">
                <img src={filterPhone} alt="Filter" className='filterPhone' />
                <img src={searchLogo} alt="Search" className='searchPhone' />
                <div className="logo">
                    <img src={logoImage} alt="Logo" className='logoHeaven' />
                </div>
                <img src={cartPhone} alt="Carrito" className='carritoPhone' onClick={toggleCart} />
            </div>
            {isCartOpen && (
                <>
                    <div className="overlay" onClick={() => setIsCartOpen(false)}></div>
                    <ShoppingCart closeCart={() => setIsCartOpen(false)} />
                </>
            )}
        </nav>
    );
};

export default Navbar;