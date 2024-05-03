import logoImage from '../../images/homeHLogo.png';
import gitFooter from '../../images/gf.png';
import homeFooter from '../../images/hf.png';
import './Footer.css';

const Footer = () => {
return (
<footer className="footer">
    <div className="footer-line"></div>
    <div className="footer-top">
    <div className="footer-column">
        <img src={logoImage} alt="Logo" className="footer-logo" />
    </div>
    <div className="footer-column footer-middle">
        <h3>Calidad.Experiencia.Excelencia.</h3>
        <p>Son nuestro sello distintivo. Déjanos transformar tu casa en un espacio único y acogedor.</p>
    </div>
    <div className="footer-column">
        <img src={homeFooter} alt="Profile" className="footer-small-logo" />
        <img src={gitFooter} alt="Cart" className="footer-small-logo" />
    </div>
    </div>
    <div className="footer-line"></div>
    <div className="footer-bottom">
    <p>© All rights reserved</p>
    </div>
</footer>
);
}

export default Footer;
