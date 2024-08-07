import { useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import ProductsCarousel from '../ProductsCarousel/ProductsCarousel';
import VerMasHome from '../VerMasHome/VerMasHome';

const Home = () => {
    const descubriRef = useRef(null);
    const navigate = useNavigate();  

    const scrollToDescubri = () => {
        if (descubriRef.current) {
            const topPos = descubriRef.current.offsetTop - 130;
            window.scrollTo({ top: topPos, behavior: 'smooth' });
        }
    };


    const goToTodosAndTop = useCallback(() => {
        navigate('/category/all');
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }, [navigate]);

    return (
        <>
            <div className='home-container'>
                <div className='image-container'>
                    <img src="https://i.blogs.es/552422/casa-ordenada/1366_521.jpeg" alt="Decorative image"></img>
                    <h1>Viví la experiencia de disfrutar un hogar hecho especialmente para vos</h1>
                    <p onClick={scrollToDescubri} style={{cursor: 'pointer'}}>RECOMENDADOS</p>
                </div>
                <h1 ref={descubriRef} className='descubri'>Descubrí nuestros productos destacados</h1>
            </div>
            <ProductsCarousel />
            <div onClick={goToTodosAndTop} style={{ cursor: 'pointer' }}>
                <VerMasHome className="ver-mas-home" />
            </div>
        </>
    );
};

export default Home;
