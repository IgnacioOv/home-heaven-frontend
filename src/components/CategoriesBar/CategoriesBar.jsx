import '../../App.css';
import './CategoriesBar.css';

const CategoriesBar = () => {
    return (
        <>
        <ul className='categories-bar'>
            <li className='category'>TODOS</li>
            <li className='category'>BAÑO</li>
            <li className='category'>COCINA</li>
            <li className='category'>DECORACIÓN</li>
            <li className='category'>DORMITORIO</li>
            <li className='category'>LIVING</li>
        </ul> 
        </>
    );
};

export default CategoriesBar;