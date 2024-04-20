import React from 'react';
import Card from '../Card/Card';
import products from '../../assets/productos.json';
import './ProductsCarousel.css';

const ProductsCarousel = () => {
    return (
        <div className="carousel">
            {products.map((product) => (
                    <Card
                    imgSrc={product.image}
                    title={product.producto} 
                    price={product.precio}
                  />  
            ))}
        </div>
    );
};

export default ProductsCarousel;