import '../../App.css';
import './CategoriesBar.css';
import { Link } from 'react-router-dom';

const CategoriesBar = () => {
    return (
        <>
        <ul className='categories-bar'>
            <li className='category'><Link to="/category/all" className="category-css">TODOS</Link></li>
            <li className='category'><Link to="/category/bathroom" className="category-css">BAÑO</Link></li>
            <li className='category'><Link to="/category/kitchen" className="category-css">COCINA</Link></li>
            <li className='category'><Link to="/category/decoration" className="category-css">DECORACIÓN</Link></li>
            <li className='category'><Link to="/category/bedroom" className="category-css">DORMITORIO</Link></li>
            <li className='category'><Link to="/category/living" className="category-css">LIVING</Link></li>
        </ul>
        </>
    );
};

export default CategoriesBar;
