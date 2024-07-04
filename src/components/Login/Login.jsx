import { Link } from 'react-router-dom'; 
import { useState } from 'react';
import './Login.css';
import logoImage from '../../images/homeHLogo.png';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!username || !password) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        
        alert('Enviado. Gracias por formar parte de Home Deco!');
    };

    return (
        <> 
            
            <div className='login-container'>
                
                <div className='login-card_'>
                <Link to="/" className="goBack" style={{color:'rgb(117,127,126,1)'}} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" className="icon-submenu" fill="currentColor" >
                        <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                    </svg>
                    Inicio
                </Link>
                <div className="logo">
                <img src={logoImage} alt="Logo" className='logoH' />
                <h3>Inicia sesión</h3>
            </div>                    


                    
            <form className="formulario" onSubmit={handleSubmit}>
                <div className= "wrap-input">
                    <span className="form-text">USUARIO</span>
                    <input type="text" placeholder='Ingrese su usuario' value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>

    
                <div className= "wrap-input">
                    <span className="form-text">CONTRASEÑA</span>
                    <input type="password" placeholder='Ingrese su contraseña' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit">Ir</button>
            </form>


                    
                <p>¿Recién nos conoces? <Link to="/register"style={{color:'rgb(117,127,126,1)'}}><b>REGISTRATE</b></Link></p>

                </div>
                
                <div className='login-image_' >
                    <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagen Login" className="imagen_"/>
                </div>
                
            </div>
        </>
    );
};

export default Login;