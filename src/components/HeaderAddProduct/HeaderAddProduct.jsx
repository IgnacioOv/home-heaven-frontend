import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderAddProduct.css'; 

const HeaderAddProduct = () => {
  return (
    <div className="header-category">
      <div className="image-container">
        <img src="https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nTb0LvExQ2zTogghYDbTLwS0T3YvoV7KJgYYKAAlcn64vx1lJyu9KVLnFlBlkxArZ6h~wqkdYACccDQqFetqDGQucJuV0iIBanOobFyRb0Ct3acAXI80srQkdKw3i7zcq2cl83Uz~UCUSnp2wvIjKucvvafY7IsnN6xC~e1Y-opuFgWWIo~N5XoKos9EcbqORCsaM4givcYednJbdAahPFnfac4O0p7hHZMQ6U8fxlBWRGiGPvvrwebJyUVYx7fjqECWGR4m7-3KB5yT6miGgLCAJCdxHUNKZbWIwFkNvammznR8VBXn2Rms6dpwwjhvYsnKimXypjfqMUrsq9uNUA__" alt="Header Background" className="header-image"/>
        <div className="header-category-content">
            <div className="main-title">Añade tus productos para vender</div>
            <div className="category-navigation">
            <Link to="/" className="link-class">Home</Link> &gt; Añadir Producto &gt; 
            </div>
        </div>
    </div>
    </div>
  );
}

export default HeaderAddProduct;