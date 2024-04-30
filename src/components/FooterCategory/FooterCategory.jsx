import React from 'react';
import './FooterCategory.css';  
import trofeo from '../../images/trophy.png';  
import guarantee from '../../images/guarantee.png'; 
import customer from '../../images/customer-support.png';  
import shipping from '../../images/shipping.png';  

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-item">
        <img src={trofeo} alt="High Quality" />
        <div>
          <strong>Alta calidad</strong>
          <p>creado con los mejores materiales nacionales</p>
        </div>
      </div>
      <div className="footer-item">
        <img src={guarantee} alt="Warranty" />
        <div>
          <strong>Garantía</strong>
          <p>Por más de dos años</p>
        </div>
      </div>
      <div className="footer-item">
        <img src={shipping} alt="Free Shipping" />
        <div>
          <strong>Envío gratis</strong>
          <p>Con compra superior a $80.000</p>
        </div>
      </div>
      <div className="footer-item">
        <img src={customer} alt="Customer Support" />
        <div>
          <strong>24 / 7 Atención al cliente</strong>
        </div>
      </div>
    </div>
  );
}

export default Footer;
