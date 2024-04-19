import CategoriesBar from '../CategoriesBar/CategoriesBar';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className='home-container'>
                <CategoriesBar />
                <div className='image-container'>
                <img src="https://i.blogs.es/552422/casa-ordenada/1366_521.jpeg"></img>
                <h1>Viví la experiencia de disfrutar un hogar hecho especialmente para vos</h1>
                <p>RECOMENDADOS</p>
                </div>
                <h1>Descubrí nuestros productos destacados</h1>
                </div>
        </>
    );
};

export default Home;