import React from 'react';
import './Checkout.css';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import { useContext } from 'react';
import { CartContext } from '../../context/CartProvider';

const Checkout = () => {
    const { cartItems } = useContext(CartContext);
    const handleCompra = ()=> {
        alert("¡Gracias por tu compra!");
    };

    return (
        <div>

            <div className="header-category">
                <div className="image-container">

                    <div className="header-category-content">
                        <div className="main-title">Check out</div>
                    </div>

                    <img
                        src="https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nTb0LvExQ2zTogghYDbTLwS0T3YvoV7KJgYYKAAlcn64vx1lJyu9KVLnFlBlkxArZ6h~wqkdYACccDQqFetqDGQucJuV0iIBanOobFyRb0Ct3acAXI80srQkdKw3i7zcq2cl83Uz~UCUSnp2wvIjKucvvafY7IsnN6xC~e1Y-opuFgWWIo~N5XoKos9EcbqORCsaM4givcYednJbdAahPFnfac4O0p7hHZMQ6U8fxlBWRGiGPvvrwebJyUVYx7fjqECWGR4m7-3KB5yT6miGgLCAJCdxHUNKZbWIwFkNvammznR8VBXn2Rms6dpwwjhvYsnKimXypjfqMUrsq9uNUA__"
                        alt="Header Background"
                        className="header-image"
                    />

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

                <div className="checkout-items">
                    {cartItems.map((item) => (
                    <div key={item.id} className="checkout-item">
                        <img src={item.image} alt={item.description} className='smallimage'/>
                        <p className='itemtitle'>{item.product}</p>
                        <p className='itemprice'>$ {item.price}</p>
                        <p className='itemquantity'>Quantity: {item.quantity}</p>
                    </div> 
                        ))}
                </div>

            </div>

           <div className="DctoBox">
            <p>Resumen de compra</p>
               <p>Subtotal</p>
               <p>Descuentos</p>
               <p>Total</p>
               <form className="formulario-chk">
                <button onClick={handleCompra}>Realizar compra</button>
               </form>
               <Link to="/" className="goBack" style={{color:'rgb(117,127,126,1)'}} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" className="icon-submenu" fill="currentColor" >
                        <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                    </svg>
                    Seguir comprando
                </Link>
               
           </div>

           

       </div>






           
        </div>
    );
}


export default Checkout;


