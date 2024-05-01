import './Checkout.css';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import FooterCategory from '../FooterCategory/FooterCategory';
import '../CategoryPage/CategoryPage.css';



function Checkout() {
    const { categoryName } = useParams();
    
    return (
    <div>
        <Navbar />
        <div className="header-category">
        <div className="image-container">
        <img src="https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nTb0LvExQ2zTogghYDbTLwS0T3YvoV7KJgYYKAAlcn64vx1lJyu9KVLnFlBlkxArZ6h~wqkdYACccDQqFetqDGQucJuV0iIBanOobFyRb0Ct3acAXI80srQkdKw3i7zcq2cl83Uz~UCUSnp2wvIjKucvvafY7IsnN6xC~e1Y-opuFgWWIo~N5XoKos9EcbqORCsaM4givcYednJbdAahPFnfac4O0p7hHZMQ6U8fxlBWRGiGPvvrwebJyUVYx7fjqECWGR4m7-3KB5yT6miGgLCAJCdxHUNKZbWIwFkNvammznR8VBXn2Rms6dpwwjhvYsnKimXypjfqMUrsq9uNUA__" alt="Header Background" className="header-image"/>
        <div className="header-category-content">
            <div className="main-title">Checkout</div>
            <div className="category-navigation">
            Carrito &gt; Checkout &gt; {categoryName}</div>
            </div>
            </div>
            </div>

        <div className ="chk-wrapper">
            
            <div className="tabla">
                <div className="columnas">
                    <div className="word">Product</div>
                    <div className="word">Price</div>
                    <div className="word">Quantity</div>
                    <div className="word">Subtotal</div>
                </div>

                <p>Product1</p>
                <p>Product2</p>
                <p>Product2</p>            
            </div>

            <div className="DctoBox">
                <p>CUPON DE DESCUENTO</p>
            </div>
        </div>

        <FooterCategory />
    </div>
    );
}


export default Checkout;
