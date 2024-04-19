import React from 'react';
import Footer from './Footer';
import CategoriesBar from './CategoriesBar';
import '../App.css';

const Home = () => {
    return (
        <>
        
                <CategoriesBar />
                <div className='home-container'>
                <div class="image-container">
                <img src="https://www.gardenandhome.co.za/wp-content/uploads/2023/02/alexandra-gorn-JIUjvqe2ZHg-unsplash.jpg"></img>
                <h1>Viví la experiencia de disfrutar un hogar hecho especialmente para vos</h1>
                </div>
                </div>
        </>
    );
};

export default Home;