import logoImage from '../../images/homeHLogo.png';
import gitFooter from '../../images/gf.png';
import homeFooter from '../../images/hf.png';

const Footer = () => {
return (
<footer className="footer">
    <div className="footer-line"></div>
    <div className="footer-content">
    <div className="footer-column">
        {/* Logo de la empresa */}
        <img src={logoImage} alt="Logo" style={{ width: '35%', height: '35%' }} />
    </div>
    <div className="footer-column footer-middle">
        <h3 style={{ fontSize:'1em' }} >Calidad.Experiencia.Excelencia.</h3>
        <p  style={{ fontSize:'0.5em'}}> Son nuestro sello distintivo. Déjanos transformar tu casa en un espacio único y acogedor.</p>
    </div>
    <div className="footer-column">
        {/* Logos pequeños */}
        <img src={homeFooter} alt="Profile" style={{ width: '12%', height: '12%', cursor:'pointer'}} />
        <img src={gitFooter} alt="Cart" style={{ width: '12%', height: '12%', marginLeft:'5%', cursor:'pointer'}} />
    </div>
    </div>
    <div className="footer-line"></div>
    <div className="footer-bottom">
    {/* Texto de derechos de autor y logo */}
    <p  style={{ fontSize:'0.7em'}}> © All rights reserved</p>
    </div>
</footer>
);
}

export default Footer;
