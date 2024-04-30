import { useRef } from 'react';
import CategoriesBar from '../CategoriesBar/CategoriesBar';
import './Home.css';
import ProductsCarousel from '../ProductsCarousel/ProductsCarousel';
import VerMasHome from '../VerMasHome/VerMasHome';

const Home = () => {
    const descubriRef = useRef(null); // Create a ref for the target h1 element

    const scrollToDescubri = () => {
        if (descubriRef.current) {
            const topPos = descubriRef.current.offsetTop - 130; // Subtract 50px to scroll a bit above the element
            window.scrollTo({ top: topPos, behavior: 'smooth' });
        }
    };
    
    return (
        <>
            <div className='home-container'>
                <CategoriesBar />
                <div className='image-container'>
                    <img src="https://i.blogs.es/552422/casa-ordenada/1366_521.jpeg" alt="Decorative image"></img>
                    <h1>Viví la experiencia de disfrutar un hogar hecho especialmente para vos</h1>
                    <p onClick={scrollToDescubri} style={{cursor: 'pointer'}}>RECOMENDADOS</p>  {/* Added onClick handler */}
                </div>
                <h1 ref={descubriRef} className='descubri'>Descubrí nuestros productos destacados</h1> {/* Set the ref here */}
            </div>
            <ProductsCarousel />
            <VerMasHome className="ver-mas-home"/>
        </>
    );
};

export default Home;
