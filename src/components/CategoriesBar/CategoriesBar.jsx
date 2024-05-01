import '../../App.css';
import './CategoriesBar.css';
import { Link } from 'react-router-dom';

const CategoriesBar = () => {
    return (
        <>
        <ul className='categories-bar'>
        <li className='category'><Link to="/category/TODOS">TODOS</Link></li>
            <li className='category'><Link to="/category/BAÑO">BAÑO</Link></li>
            <li className='category'><Link to="/category/COCINA">COCINA</Link></li>
            <li className='category'><Link to="/category/DECORACIÓN">DECORACIÓN</Link></li>
            <li className='category'><Link to="/category/DORMITORIO">DORMITORIO</Link></li>
            <li className='category'><Link to="/category/LIVING">LIVING</Link></li>
        </ul> 
        </>
    );
};

export default CategoriesBar;