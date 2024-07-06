import '../../App.css';
import './CategoriesBar.css';
import { Link } from 'react-router-dom';

const CategoriesBar = () => {
    return (
        <>
        <ul className='categories-bar'>
            <li className='category'><Link to="/category/ALL" className="category-css">TODOS</Link></li>
            <li className='category'><Link to="/category/BAÑO" className="category-css">BAÑO</Link></li>
            <li className='category'><Link to="/category/COCINA" className="category-css">COCINA</Link></li>
            <li className='category'><Link to="/category/DECORACIÓN" className="category-css">DECORACIÓN</Link></li>
            <li className='category'><Link to="/category/DORMITORIO" className="category-css">DORMITORIO</Link></li>
            <li className='category'><Link to="/category/LIVING" className="category-css">LIVING</Link></li>
        </ul>
        </>
    );
};

export default CategoriesBar;
