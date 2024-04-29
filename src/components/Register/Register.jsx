import React, { useState } from 'react';
import { Link, redirect } from 'react-router-dom'; // Importa Link desde react-router-dom
import '../Login/Login.css';
import logoImage from '../../images/homeHLogo.png';

const Register = () => {
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        if (!username || !email || !password) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        
        alert('Enviado. Gracias por formar parte de Home Deco!');
    };



    return (
        <> 
            
            <div className='login-container'>
                <div className='login-card'>
                <Link to="/" className="goBack" style={{color:'rgb(117,127,126,1)'}} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" className="icon-submenu" fill="currentColor" >
                        <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                    </svg>
                    Inicio
                </Link>
                <div className="logo">
                <img src={logoImage} alt="Logo" className='logoH' />
                    <h3>Registrate acá</h3>
                </div>                          


                    
                <form class="formulario" onSubmit={handleSubmit}>
                    <div class= "wrap-input">
                        <span class="form-text">USUARIO</span>
                        <input type="text" placeholder='Ingrese su usuario' value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>

                    <div class= "wrap-input">
                        <span class="form-text" id="email">EMAIL</span>
                        <input type="email" placeholder='example@example.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div class= "wrap-input">
                        <span class="form-text">CONTRASEÑA</span>
                        <input type="password" placeholder='**********' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit">Ir</button>
                </form>


                    
                    <p>¿Ya sos miembro? <Link to="/login"style={{color:'rgb(117,127,126,1)'}}><b>INICIA SESION</b></Link></p>

            </div>
                
            <div className='login-image' >
                <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagen Login" className="imagen"/>
            </div>
                
            </div>
        </>
    );
};

export default Register;